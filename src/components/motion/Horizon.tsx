"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Two stacked sun glows. Travel is transform (the wrapper); the dawn-to-dusk
// recolor is an opacity cross-fade between these two, so the whole thing stays
// transform-and-opacity only.
const DAWN =
  "radial-gradient(circle at center, rgba(242,200,121,0.20), rgba(242,200,121,0) 60%)";
const DUSK =
  "radial-gradient(circle at center, rgba(217,138,58,0.26), rgba(191,111,28,0) 62%)";

const LINE =
  "linear-gradient(90deg, transparent, rgba(246,241,231,0.15) 22%, rgba(246,241,231,0.15) 78%, transparent)";
const HAZE =
  "linear-gradient(90deg, transparent, rgba(242,200,121,0.10) 30%, rgba(242,200,121,0.10) 70%, transparent)";

/**
 * The day-on-the-trail signature (Phase 3). A thin horizon line carried fixed
 * across every section, parallaxing subtly, and a soft sun that travels across
 * and down the page tied to scroll progress, dawn at the hero to dusk at the
 * CTA. Quiet and behind the message: low opacity, large and diffuse, never a
 * disc you notice before the words. Lives inside the Atmosphere layer.
 *
 * Reduced motion: no travel, no parallax. The sun rests at its dawn position
 * and the horizon holds still, fully static.
 */
export default function Horizon() {
  const root = useRef<HTMLDivElement>(null);
  const sun = useRef<HTMLDivElement>(null);
  const dusk = useRef<HTMLDivElement>(null);
  const dawn = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Sun travels across and down across the whole page transit.
      tl.fromTo(
        sun.current,
        { x: 0, y: 0 },
        {
          x: () => -0.34 * window.innerWidth,
          y: () => 0.52 * window.innerHeight,
          ease: "none",
        },
        0,
      );
      // Dawn fades to dusk as it descends.
      tl.to(dawn.current, { opacity: 0, ease: "none" }, 0);
      tl.fromTo(dusk.current, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);
      // Horizon parallaxes subtly against the scroll.
      tl.fromTo(line.current, { y: -28 }, { y: 28, ease: "none" }, 0);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="pointer-events-none fixed inset-0 z-30" aria-hidden="true">
      {/* Soft travelling sun. Centered on its (top,left) anchor via margins so
          GSAP owns the transform cleanly. */}
      <div
        ref={sun}
        className="absolute h-[46vw] w-[46vw] will-change-transform"
        style={{ top: "18vh", left: "60vw", marginTop: "-23vw", marginLeft: "-23vw" }}
      >
        <div ref={dawn} className="absolute inset-0" style={{ background: DAWN }} />
        <div ref={dusk} className="absolute inset-0 opacity-0" style={{ background: DUSK }} />
      </div>

      {/* Persistent horizon: a thin line over a faint haze band. Sits near the
          hero's photographic horizon at the top, clear of the copy. */}
      <div ref={line} className="absolute inset-x-0 top-[66vh] will-change-transform">
        <div className="absolute inset-x-0 -top-5 h-10 blur-md" style={{ background: HAZE }} />
        <div className="h-px w-full" style={{ background: LINE }} />
      </div>
    </div>
  );
}
