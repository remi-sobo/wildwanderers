"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animals } from "@/content/animals";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// A continuous ridgeline with four crests, one under each column center
// (150 / 450 / 750 / 1050 on a 1200 viewBox). The animals perch on the crests.
const RIDGE =
  "M0,84 C75,84 75,42 150,42 C225,42 225,84 300,84 C375,84 375,42 450,42 " +
  "C525,42 525,84 600,84 C675,84 675,42 750,42 C825,42 825,84 900,84 " +
  "C975,84 975,42 1050,42 C1125,42 1125,84 1200,84";

/**
 * The animal trail (Phase 5). The four totems sit along one continuous
 * ridgeline. As the block enters, the ridge draws left to right and each
 * animal's line art draws itself in, in column order, like the trail reaching
 * each one. On hover (or focus) a totem breathes and reveals its lesson.
 *
 * Reduced motion: nothing draws or pulses. The ridge and every icon render
 * fully formed and the lessons reveal on hover without animation.
 */
export default function AnimalTrail() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = root.current;
      if (!el) return;

      // Prime every stroke for the draw-in (dash the full length, hidden).
      const ridge = el.querySelector<SVGPathElement>(".animal-ridge");
      const iconPaths = gsap.utils.toArray<SVGPathElement>(".totem-stroke");
      const prime = (p: SVGPathElement) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      };
      if (ridge) prime(ridge);
      iconPaths.forEach(prime);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
        defaults: { ease: "power1.inOut" },
      });
      if (ridge) tl.to(ridge, { strokeDashoffset: 0, duration: 1.4 }, 0);
      // Icons draw in column order, trailing the ridge as it reaches each crest.
      tl.to(iconPaths, { strokeDashoffset: 0, duration: 0.9, stagger: 0.06 }, 0.35);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative mt-[clamp(40px,6vw,64px)]">
      {/* The continuous ridgeline, sitting behind the totems. lg-only so the
          crests stay aligned under the four columns. */}
      <svg
        className="absolute inset-x-0 top-[18px] hidden h-[120px] w-full lg:block"
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="animal-ridge"
          d={RIDGE}
          stroke="#6B4A2E"
          strokeOpacity={0.3}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-[1] grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {animals.map((animal) => (
          <article
            key={animal.name}
            tabIndex={0}
            className="group flex flex-col items-center rounded-2xl px-3 pt-2 text-center outline-none transition-transform duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-amber"
          >
            <svg
              viewBox="0 0 48 54"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="totem-breathe mb-6 h-[60px] text-forest"
              aria-hidden="true"
            >
              {animal.icon.map((d, i) => (
                <path key={i} className="totem-stroke" d={d} />
              ))}
            </svg>
            <h3 className="font-display text-[24px] font-semibold text-ink">{animal.name}</h3>
            <div className="mt-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
              {animal.power}
            </div>
            {/* The lesson. Holds its space, fades and rises in on hover/focus so
                nothing reflows. */}
            <p className="mt-3.5 max-w-[230px] translate-y-1 font-sans text-[13.5px] leading-[1.55] text-[#5A5142] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {animal.line}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
