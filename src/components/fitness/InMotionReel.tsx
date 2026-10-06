"use client";

import { useEffect, useRef, useState } from "react";
import { fitnessCopy } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import { prefersReducedMotion } from "@/lib/motion";

const M = fitnessCopy.inMotion;

/**
 * In Motion: a horizontal, snap-scrolling reel of four vertical clips.
 *
 * Clips are muted, looping, inline, and preload nothing until they play. An
 * IntersectionObserver (threshold .35) plays a clip while it is in view and
 * pauses it when it leaves. "Pause clips" stops everything and keeps the
 * observer from restarting them; "Play clips" resumes the clips in view.
 * With prefers-reduced-motion the reel starts paused on the posters.
 */
export default function InMotionReel() {
  const reel = useRef<HTMLDivElement>(null);
  const inView = useRef(new Set<HTMLVideoElement>());
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = reel.current;
    if (!el) return;
    const vids = Array.from(el.querySelectorAll("video"));
    // React does not reliably reflect `muted` to the DOM; set both as
    // properties so mobile browsers allow inline autoplay.
    vids.forEach((v) => {
      v.muted = true;
      v.playsInline = true;
    });

    if (prefersReducedMotion()) {
      pausedRef.current = true;
      setPaused(true); // eslint-disable-line react-hooks/set-state-in-effect -- one-time sync with a media query
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            inView.current.add(v);
            if (!pausedRef.current) v.play().catch(() => {});
          } else {
            inView.current.delete(v);
            v.pause();
          }
        }),
      { threshold: 0.35 },
    );
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  function toggle() {
    const next = !paused;
    pausedRef.current = next;
    setPaused(next);
    reel.current?.querySelectorAll("video").forEach((v) => {
      if (next) v.pause();
      else if (inView.current.has(v)) v.play().catch(() => {});
    });
  }

  return (
    <section id="in-motion" className="bg-bone py-[clamp(64px,9vw,110px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow rule className="mb-6 text-amber-deep">
              {M.eyebrow}
            </Eyebrow>
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
              <RichText lines={M.headline} />
            </h2>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={paused}
            className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-[18px] font-sans text-[13px] font-semibold text-ink transition-colors hover:border-ink/45"
          >
            {paused ? M.play : M.pause}
          </button>
        </div>

        <div
          ref={reel}
          data-lenis-prevent-horizontal
          className="mt-[clamp(32px,4vw,48px)] grid snap-x snap-mandatory auto-cols-[minmax(220px,1fr)] grid-flow-col gap-[clamp(14px,1.6vw,22px)] overflow-x-auto pb-2"
        >
          {M.clips.map((c) => (
            <figure key={c.src} className="flex snap-start flex-col gap-3">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] bg-[#14231A]">
                <video
                  src={c.src}
                  poster={c.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={c.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="font-sans text-[14px] font-semibold text-forest-deep">{c.title}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
