"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { clsx } from "@/lib/clsx";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Total yPercent the element drifts across its scroll transit (parallax). */
  y?: number;
  /** Ken-burns zoom instead of drift. Edge-safe for full-bleed photos. */
  zoom?: boolean;
  /** Override the scroll trigger element (defaults to the parent). */
  triggerSelector?: string;
};

/**
 * Scroll-linked transform, scrubbed. Transform and opacity only (spec section
 * 5). Use `y` for ridge-layer parallax and `zoom` for a slow drift on the hero
 * scene. Reduced motion: renders static, no ScrollTrigger.
 */
export default function Parallax({
  children,
  className,
  y = -12,
  zoom = false,
  triggerSelector,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const trigger =
        (triggerSelector && el.closest(triggerSelector)) || el.parentElement || el;

      if (zoom) {
        gsap.fromTo(
          el,
          { scale: 1.06 },
          {
            scale: 1.16,
            ease: "none",
            scrollTrigger: { trigger, start: "top top", end: "bottom top", scrub: true },
          },
        );
        return;
      }

      gsap.to(el, {
        yPercent: y,
        ease: "none",
        scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: true },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={clsx("will-change-transform", className)}>
      {children}
    </div>
  );
}
