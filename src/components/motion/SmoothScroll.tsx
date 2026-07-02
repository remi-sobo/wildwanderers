"use client";

import { useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "lenis/dist/lenis.css";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * One smooth-scroll loop for the whole site (CLAUDE.md, spec section 5).
 *
 * Lenis runs with autoRaf:false and GSAP's ticker drives its raf, so there is
 * a single requestAnimationFrame loop shared by smooth scroll and every
 * ScrollTrigger. Lenis scroll events update ScrollTrigger so scrubbed
 * animations stay in sync.
 *
 * Hard reduced-motion off-switch: when the user prefers reduced motion we
 * never initialize Lenis at all. The page falls back to native scrolling and
 * stays fully legible with zero smoothing.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    // `anchors` makes in-page CTA links (e.g. the hero's "See how it works")
    // glide instead of jump; the offset clears the fixed nav. Reduced motion
    // never reaches here, so those links fall back to a native jump, where the
    // target's scroll-mt handles the nav.
    const lenis = new Lenis({ autoRaf: false, anchors: { offset: -72 } });

    // Keep ScrollTrigger in step with Lenis' virtual scroll position.
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP's ticker is the single rAF loop. Lenis expects milliseconds.
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Returned function is registered as gsap.context cleanup by useGSAP.
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  });

  return <div ref={ref}>{children}</div>;
}
