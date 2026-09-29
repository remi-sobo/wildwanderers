import { createReadOnlyClient, supabaseConfigured } from "@/lib/supabase/read-only";

// The free consult inquiry. The public form on /free-session posts here; this
// handler is where the rate limit and the honeypot live, then it writes one
// row through the anon insert-only policy on lead_inquiries. That is the
// single write the anon key is allowed, and it can never read the row back.
// The org is resolved server-side from a published public post (a read the
// anon policy allows, the same as the subscribe route), so the client never
// names an org.
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

// Best-effort in-memory IP limiter, the same speed bump as the subscribe
// route. It does not span serverless instances; the dedupe trigger on
// lead_inquiries makes a repeat submit idempotent and the honeypot catches
// the obvious bots.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

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

  if (rateLimited(clientIp(request))) {
    return Response.json(
      { ok: false, error: "One moment, that is a few too many tries. Try again shortly." },
      { status: 429 },
    );
  }

  if (!supabaseConfigured()) {
    // Before the env vars land, accept so the form is whole. No payload in the
    // log line, ever.
    console.info("[fitness/inquire] Supabase not configured, inquiry not stored");
    return Response.json({ ok: true });
  }

  try {
    const supabase = createReadOnlyClient();

    // Resolve the org from a published public post, the same read the
    // subscribe route uses and the same check the insert policy enforces.
    const { data: post } = await supabase
      .from("posts")
      .select("org_id")
      .eq("status", "published")
      .eq("audience", "public")
      .limit(1)
      .maybeSingle();

    const orgId = (post as { org_id: string } | null)?.org_id;
    if (!orgId) {
      console.error("[fitness/inquire] no org resolved, inquiry not stored");
      return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
    }

    // Insert only; no .select(), so nothing is read back.
    const { error } = await supabase.from("lead_inquiries").insert({
      org_id: orgId,
      name,
      email: email || null,
      phone: phone || null,
      interest,
      message: message || null,
      preferred_times: preferredTimes.length ? preferredTimes : null,
    });

    // A resubmit of the same contact within the dedupe window (23505) is the
    // same inquiry: a success to the visitor, not an error.
    if (error && error.code !== "23505") {
      console.error("[fitness/inquire] insert failed:", error.code);
      return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[fitness/inquire] threw:", e instanceof Error ? e.name : "unknown");
    return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
  }
}
