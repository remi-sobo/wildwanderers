import { createServerClient } from "@supabase/ssr";

// The marketing site's one and only Supabase client: read-only, anonymous.
//
// It holds ONLY the public anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY) and the
// project URL. It never holds the service role key. A public marketing site must
// never carry a key that bypasses row-level security, so RLS is the whole
// boundary: this client can read exactly what the anon policies allow, published
// public posts, and nothing else. Drafts and member-only posts are invisible to
// it at the database, not just hidden in the UI.
//
// No cookies are read or written (the site has no auth), so pages that use this
// client stay statically cacheable and can revalidate on a timer (ISR).

// Public fallbacks for the Supabase URL and anon key. These are NOT secrets:
// the anon key is public by design (it ships in the browser bundle either way),
// and RLS is the only boundary that matters, so exposing it changes nothing an
// attacker could not already read off any deployed page. The env vars still win
// when set, so setting them in Vercel later overrides these with no code change.
// They live here so the public library renders even if the marketing project's
// env vars are missing or scoped wrong. Never put the service role key here.
const FALLBACK_URL = "https://aekvkkgxicddwazhjvpr.supabase.co";
const FALLBACK_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFla3Zra2d4aWNkZHdhemhqdnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwOTg3MzQsImV4cCI6MjA5ODY3NDczNH0.L_yrxZdLQ9EUDlnAT_4CTjutnDHSnkaFq1-aAHrSisM";

function resolvedUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
}
function resolvedAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_ANON_KEY;
}

export function supabaseConfigured(): boolean {
  return Boolean(resolvedUrl() && resolvedAnonKey());
}

export function createReadOnlyClient() {
  const url = resolvedUrl();
  const anonKey = resolvedAnonKey();
  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase URL or anon key. The marketing site needs both to read the Trailhead Library.",
    );
  }

  // Stub cookie handlers: this client is stateless and anonymous. Returning an
  // empty cookie list (and ignoring writes) keeps it from touching the request,
  // so it does not opt a page into dynamic rendering.
  return createServerClient(url, anonKey, {
    cookies: {
      getAll: () => [],
      setAll: () => {},
    },
  });
}
