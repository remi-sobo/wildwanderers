import { createReadOnlyClient, supabaseConfigured } from "@/lib/supabase/read-only";

// The one lead_inquiries insert path, shared by the free consult route
// (/api/fitness/inquire) and the boys program Join form. It writes a single
// row through the anon insert-only policy and never reads it back. The org is
// resolved server-side from a published public post (a read the anon policy
// allows, and the same check the insert policy enforces), so a client never
// names an org.
//
// Privacy: an inquiry can carry health or family context a visitor volunteers.
// Nothing from the row is ever logged, only generic outcomes and error codes.

export type LeadInterest = "one_on_one" | "small_group" | "wellness" | "boys_program";

export type InquiryRow = {
  name: string;
  email: string | null;
  phone: string | null;
  interest: LeadInterest;
  message: string | null;
  preferred_times: string[] | null;
};

/**
 * "stored": a fresh row landed (and the alert ping went out).
 * "duplicate": the dedupe trigger matched the same contact within its window;
 *   the same inquiry, so a success to the visitor.
 * "unconfigured": no Supabase env (local or preview); accepted, not stored.
 * "error": anything else; the visitor sees a generic retry message.
 */
export type InquiryResult = "stored" | "duplicate" | "unconfigured" | "error";

// Best-effort in-memory IP limiter. It does not span serverless instances; the
// dedupe trigger on lead_inquiries makes a repeat submit idempotent and the
// honeypot catches the obvious bots.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function rateLimited(ip: string): boolean {
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

export function ipFrom(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}

// Tell the app a new inquiry landed, so the owner's alert email goes out
// within a minute. The ping carries only the shared secret, never inquiry
// data; the app reads the row itself. Awaited with a short timeout so the
// serverless function is not frozen mid-request, and never fails the
// visitor's submit. Dormant until both env vars are set.
async function pingAlert(tag: string): Promise<void> {
  const url = process.env.INQUIRY_ALERT_URL;
  const secret = process.env.INQUIRY_ALERT_SECRET;
  if (!url || !secret) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "x-inquiry-alert-secret": secret },
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    console.warn(`[${tag}] alert ping failed`);
  }
}

export async function insertInquiry(row: InquiryRow, tag: string): Promise<InquiryResult> {
  if (!supabaseConfigured()) {
    console.info(`[${tag}] Supabase not configured, inquiry not stored`);
    return "unconfigured";
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
      console.error(`[${tag}] no org resolved, inquiry not stored`);
      return "error";
    }

    // Insert only; no .select(), so nothing is read back.
    const { error } = await supabase.from("lead_inquiries").insert({ org_id: orgId, ...row });

    if (error) {
      if (error.code === "23505") return "duplicate";
      console.error(`[${tag}] insert failed:`, error.code);
      return "error";
    }

    // A fresh insert (not a duplicate) rings Gabe's alarm.
    await pingAlert(tag);
    return "stored";
  } catch (e) {
    console.error(`[${tag}] threw:`, e instanceof Error ? e.name : "unknown");
    return "error";
  }
}
