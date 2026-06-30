"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DURATION, EASE, RISE, STAGGER, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: React.ReactNode;
  /** Render a different element than a div. */
  as?: React.ElementType;
  /** Stagger direct children instead of revealing the wrapper as one block. */
  stagger?: boolean;
  /** Delay before the reveal begins, in seconds. */
  delay?: number;
  className?: string;
};

/**
 * Enter reveal: fade + rise as the element scrolls into view. Transform and
 * opacity only. Reveals once, on enter (spec section 5).
 *
 * Reduced motion: renders the final state immediately, no animation, no
 * ScrollTrigger. The content is never hidden behind a disabled animation.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  stagger = false,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return; // leave content in its natural state

      const targets = stagger ? (Array.from(el.children) as HTMLElement[]) : [el];

      gsap.from(targets, {
        opacity: 0,
        y: RISE,
        duration: DURATION.reveal,
        ease: EASE,
        delay,
        stagger: stagger ? STAGGER : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
