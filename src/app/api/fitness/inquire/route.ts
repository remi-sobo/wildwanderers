import { insertInquiry, ipFrom, rateLimited } from "@/lib/inquiries";

// The free consult inquiry. The public form on /free-session posts here; this
// handler is where the rate limit and the honeypot live, then it writes one
// row through the shared lead_inquiries insert path (src/lib/inquiries.ts):
// the anon insert-only policy, the org resolved server-side, nothing read back.
//
// Privacy: an inquiry can carry health context a visitor volunteers. Nothing
// from the payload is ever logged or echoed back, only generic outcomes.

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INTERESTS = ["one_on_one", "small_group", "wellness"] as const;
const TIMES = ["weekday mornings", "weekday afternoons", "weekends"] as const;

// Bounds match the check constraints on lead_inquiries.
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_MESSAGE = 1000;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  preferredTimes?: unknown;
  company?: unknown;
};

type Field = "name" | "contact" | "email" | "phone" | "message";

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object") {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  // Honeypot: real people leave this empty. Accept silently so a bot learns
  // nothing from the response.
  if (str(payload.company)) {
    return Response.json({ ok: true });
  }

  const name = str(payload.name);
  const email = str(payload.email);
  const phone = str(payload.phone);
  const message = str(payload.message);
  const interestRaw = str(payload.interest);
  const interest = (INTERESTS as readonly string[]).includes(interestRaw) ? interestRaw : "one_on_one";
  const preferredTimes = Array.isArray(payload.preferredTimes)
    ? TIMES.filter((t) => (payload.preferredTimes as unknown[]).includes(t))
    : [];

  const errors: Partial<Record<Field, string>> = {};
  if (!name) errors.name = "Please tell me your name.";
  else if (name.length > MAX_NAME) errors.name = "That name is a little long, mind shortening it?";
  if (!email && !phone) errors.contact = "An email or a phone number, so I can write back.";
  if (email && (email.length > MAX_EMAIL || !EMAIL_RE.test(email))) {
    errors.email = "That email looks off, mind checking it?";
  }
  const digits = phone.replace(/\D/g, "");
  if (phone && (phone.length > MAX_PHONE || digits.length < 7 || digits.length > 15)) {
    errors.phone = "That number looks off, mind checking it?";
  }
  if (message.length > MAX_MESSAGE) errors.message = "That is a lot. Mind trimming it a little?";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  if (rateLimited(ipFrom(request.headers))) {
    return Response.json(
      { ok: false, error: "One moment, that is a few too many tries. Try again shortly." },
      { status: 429 },
    );
  }

  const result = await insertInquiry(
    {
      name,
      email: email || null,
      phone: phone || null,
      interest: interest as "one_on_one" | "small_group" | "wellness",
      message: message || null,
      preferred_times: preferredTimes.length ? preferredTimes : null,
    },
    "fitness/inquire",
  );

  if (result === "error") {
    return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
  }
  return Response.json({ ok: true });
}
