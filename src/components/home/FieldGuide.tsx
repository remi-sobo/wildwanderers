"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animals } from "@/content/animals";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The field guide. Four specimen cards, one per totem: entry number and power
 * badge up top, the line art as the plate, the animal's lesson as the field
 * note. Everything is visible at rest; a field guide hides nothing.
 *
 * Motion: as the grid enters, each icon draws itself in, in card order, and a
 * hovered or focused totem breathes (the .totem-breathe keyframe). Reduced
 * motion: icons render fully formed, nothing pulses.
 */
export default function FieldGuide() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = root.current;
      if (!el) return;

      const cards = gsap.utils.toArray<HTMLElement>(".fg-card");
      const iconPaths = gsap.utils.toArray<SVGPathElement>(".totem-stroke");
      iconPaths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
      tl.from(cards, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      });
      tl.to(
        iconPaths,
        { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut", stagger: 0.06 },
        0.35,
      );
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="mt-[clamp(40px,6vw,64px)] grid grid-cols-1 gap-[clamp(16px,1.8vw,24px)] sm:grid-cols-2 lg:grid-cols-4"
    >
      {animals.map((animal, i) => (
        <article
          key={animal.name}
          tabIndex={0}
          className="fg-card group flex flex-col rounded-[18px] border border-bark/15 bg-bone p-[clamp(22px,2.2vw,30px)] shadow-[0_2px_18px_rgba(74,58,38,0.06)] outline-none transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-amber"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-display text-[15px] italic text-bark/80">
              No. {String(i + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-amber-deep/40 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
              {animal.power}
            </span>
          </div>

          <div className="my-7 flex justify-center border-y border-bark/10 py-7">
            <svg
              viewBox="0 0 48 54"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="totem-breathe h-[64px] text-forest"
              aria-hidden="true"
            >
              {animal.icon.map((d, j) => (
                <path key={j} className="totem-stroke" d={d} />
              ))}
            </svg>
          </div>

          <h3 className="font-display text-[clamp(1.4rem,1.9vw,25px)] font-semibold text-ink">
            {animal.name}
          </h3>
          <p className="mt-2.5 font-sans text-[13.5px] leading-[1.6] text-[#5A5142]">
            {animal.line}
          </p>
        </article>
      ))}
    </div>
  );
}
