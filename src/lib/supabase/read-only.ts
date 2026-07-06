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

export function supabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function createReadOnlyClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. The marketing site needs both to read the Trailhead Library.",
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
