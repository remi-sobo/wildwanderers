import { createReadOnlyClient, supabaseConfigured } from "@/lib/supabase/read-only";

// The public read of the Trailhead Library. Only published public posts come
// back, enforced by RLS at the database, so this cannot leak a draft or a
// member-only note even if the query were wrong. Degrades to an empty library
// (not an error) before the Supabase env vars land, so the page always renders.

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  external_link: string | null;
  body: string | null;
  cover_image_url: string | null;
  is_challenge: boolean;
  challenge_week: number | null;
  completion_count: number;
  published_at: string | null;
};

const COLUMNS =
  "id, title, slug, category, external_link, body, cover_image_url, is_challenge, challenge_week, completion_count, published_at";

export type PublicLibrary = {
  posts: PublicPost[];
  challenge: PublicPost | null;
  configured: boolean;
};

export async function getPublicLibrary(): Promise<PublicLibrary> {
  if (!supabaseConfigured()) {
    return { posts: [], challenge: null, configured: false };
  }

  try {
    const supabase = createReadOnlyClient();
    const { data, error } = await supabase
      .from("posts")
      .select(COLUMNS)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("[trailhead] read failed:", error.message);
      return { posts: [], challenge: null, configured: true };
    }

    const posts = (data as PublicPost[] | null) ?? [];
    const challenge = posts.find((p) => p.is_challenge) ?? null;
    return { posts, challenge, configured: true };
  } catch (e) {
    console.error("[trailhead] read threw:", e instanceof Error ? e.message : e);
    return { posts: [], challenge: null, configured: true };
  }
}
