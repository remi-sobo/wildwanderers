import { createReadOnlyClient, supabaseConfigured } from "@/lib/supabase/read-only";

// The Saturday pop-up list signup (/fitness/saturday, and the flyer QR). It
// mirrors /api/trailhead/subscribe: the rate limit and the honeypot live
// here, then it writes one row through the anon insert-only policy on
// library_subscribers, tagged source 'saturday'. One list, two doors. The
// anon key can never read the list back, and nothing is selected here.
// The org is resolved server-side from a published public post, so the
// client never names an org.
//
// Idempotent: the unique (org, lower(email)) index turns a repeat signup into
// 23505, which is a success to the visitor. An email already on the list from
// the Trailhead door keeps its original source (anon cannot update rows).
//
// Name and phone are validated but not stored: library_subscribers holds
// email and source only (WW Saturday Page Spec). The name personalizes the
// success line client-side.

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;

// Best-effort in-memory IP limiter, the same speed bump as the subscribe
// route. It does not span serverless instances; the unique index and the
// honeypot do the rest.
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

type Field = "name" | "email" | "phone";

export async function POST(request: Request) {
  let payload: { name?: unknown; email?: unknown; phone?: unknown; company?: unknown };
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

  const errors: Partial<Record<Field, string>> = {};
  if (!name || name.length > MAX_NAME) errors.name = "Please add your name.";
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) errors.email = "Please check your email address.";
  const digits = phone.replace(/\D/g, "");
  if (phone && (phone.length > MAX_PHONE || digits.length < 7 || digits.length > 15)) {
    errors.phone = "Please check your phone number.";
  }
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
    // Before the env vars land, accept so the form is whole. No payload in
    // the log line.
    console.info("[fitness/saturday-signup] Supabase not configured, signup not stored");
    return Response.json({ ok: true });
  }

  try {
    const supabase = createReadOnlyClient();

    const { data: post } = await supabase
      .from("posts")
      .select("org_id")
      .eq("status", "published")
      .eq("audience", "public")
      .limit(1)
      .maybeSingle();

    const orgId = (post as { org_id: string } | null)?.org_id;
    if (!orgId) {
      console.error("[fitness/saturday-signup] no org resolved, signup not stored");
      return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
    }

    // Insert only; no .select(), so nothing is read back.
    const { error } = await supabase
      .from("library_subscribers")
      .insert({ org_id: orgId, email, source: "saturday" });

    if (error && error.code !== "23505") {
      console.error("[fitness/saturday-signup] insert failed:", error.code);
      return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[fitness/saturday-signup] threw:", e instanceof Error ? e.name : "unknown");
    return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
  }
}
