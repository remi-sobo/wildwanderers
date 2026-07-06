"use client";

import { useMemo, useState } from "react";
import { clsx } from "@/lib/clsx";
import { POST_CATEGORIES, categoryLabel } from "@/lib/library/categories";
import type { PublicPost } from "@/lib/data/trailhead";

// The library grid, reading like a field journal rather than a blog feed:
// hairline-topped entries, Fraunces titles, a quiet category filter above. Link
// posts open out; body posts read in place.
export default function LibraryGrid({ posts }: { posts: PublicPost[] }) {
  const [active, setActive] = useState("all");

  const present = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return POST_CATEGORIES.filter((c) => set.has(c.value));
  }, [posts]);

  const shown = useMemo(
    () => (active === "all" ? posts : posts.filter((p) => p.category === active)),
    [posts, active],
  );

  return (
    <div>
      {present.length > 1 && (
        <div className="mb-[clamp(32px,5vw,52px)] flex flex-wrap gap-2.5">
          <Tab label="All" value="all" active={active} onSelect={setActive} />
          {present.map((c) => (
            <Tab key={c.value} label={c.label} value={c.value} active={active} onSelect={setActive} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-[26px] gap-y-[clamp(36px,5vw,52px)] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <Entry key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function Tab({
  label,
  value,
  active,
  onSelect,
}: {
  label: string;
  value: string;
  active: string;
  onSelect: (v: string) => void;
}) {
  const on = active === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={on}
      className={clsx(
        "rounded-full px-4 py-2 font-sans text-[12.5px] font-semibold tracking-[0.01em] transition-colors",
        on
          ? "bg-forest-deep text-bone"
          : "border border-bark/25 text-ink/70 hover:border-bark/50 hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}

function Entry({ post }: { post: PublicPost }) {
  const isLink = Boolean(post.external_link);
  const inner = (
    <>
      {post.cover_image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover_image_url}
          alt=""
          loading="lazy"
          className="mb-5 aspect-[16/10] w-full rounded-[14px] object-cover"
        />
      )}
      <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
        {categoryLabel(post.category)}
      </div>
      <h3 className="mt-3 font-display text-[clamp(1.375rem,2.2vw,26px)] font-medium leading-[1.12] text-forest-deep">
        {post.title}
        {isLink && (
          <span
            aria-hidden="true"
            className="ml-1.5 inline-block text-amber-deep transition-transform duration-300 group-hover/entry:translate-x-0.5 group-hover/entry:-translate-y-0.5"
          >
            &#8599;
          </span>
        )}
      </h3>
      {post.body && (
        <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{post.body}</p>
      )}
    </>
  );

  const base = "group/entry block border-t border-bark/25 pt-6";
  return isLink ? (
    <a href={post.external_link!} target="_blank" rel="noopener noreferrer" className={base}>
      {inner}
    </a>
  ) : (
    <article className={base}>{inner}</article>
  );
}
