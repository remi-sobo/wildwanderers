import { createReadOnlyClient, supabaseConfigured } from "@/lib/supabase/read-only";

// The "get the weekly trail note" signup. The public form posts here; this
// handler is where the rate limit and the honeypot live, then it writes one
// row through the anon insert-only policy on library_subscribers. That is the
// single write the anon key is allowed, and it can never read the list back.
// The org is resolved server-side from a published public post (a read the
// anon policy allows), so the client sends only an email.

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort in-memory IP limiter. It does not span serverless instances, so
// it is a speed bump, not a wall; the unique (org, email) index makes repeat
// signups idempotent and the honeypot catches the obvious bots. Good enough for
// a public newsletter capture, and it adds no infrastructure.
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

export async function POST(request: Request) {
  let payload: { email?: string; company?: string };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  // Honeypot: real people leave this empty. Accept silently so a bot learns
  // nothing from the response.
  if (payload.company && payload.company.trim()) {
    return Response.json({ ok: true });
  }

  const email = (payload.email ?? "").trim();
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "That email looks off, mind checking it?" }, { status: 400 });
  }

  if (rateLimited(clientIp(request))) {
    return Response.json(
      { ok: false, error: "One moment, that is a few too many tries. Try again shortly." },
      { status: 429 },
    );
  }

  if (!supabaseConfigured()) {
    // Before the env vars land, accept so the form is whole, and log for follow
    // up rather than failing the visitor.
    console.info(`[trailhead/subscribe] ${email} (Supabase not configured, not stored)`);
    return Response.json({ ok: true });
  }

  try {
    const supabase = createReadOnlyClient();

    // Resolve the org from a published public post, the same read the page uses.
    const { data: post } = await supabase
      .from("posts")
      .select("org_id")
      .eq("status", "published")
      .eq("audience", "public")
      .limit(1)
      .maybeSingle();

    const orgId = (post as { org_id: string } | null)?.org_id;
    if (!orgId) {
      // No public library to attach to yet. Accept warmly; nothing to store.
      return Response.json({ ok: true });
    }

    const { error } = await supabase.from("library_subscribers").insert({ org_id: orgId, email });

    // Duplicate email (unique index) means already subscribed: a success to the
    // visitor, not an error.
    if (error && error.code !== "23505") {
      console.error("[trailhead/subscribe] insert failed:", error.message);
      return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[trailhead/subscribe] threw:", e instanceof Error ? e.message : e);
    return Response.json({ ok: false, error: "Something went wrong. Try again in a moment." }, { status: 500 });
  }
}
