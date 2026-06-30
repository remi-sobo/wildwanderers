"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { DURATION, EASE, STAGGER, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

type SplitRevealProps = {
  children: React.ReactNode;
  /** Heading level / element to render. Defaults to h2. */
  as?: React.ElementType;
  className?: string;
};

/**
 * Line-by-line headline reveal with an upward clip-mask (spec section 5,
 * Hero / Thesis). Uses GSAP SplitText, which masks each line so it rises out
 * from behind its own clip. Splits after fonts load so line breaks measure
 * correctly.
 *
 * Reduced motion: renders the heading as plain static text, never split.
 */
export default function SplitReveal({
  children,
  as: Tag = "h2",
  className,
}: SplitRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      let split: SplitText | undefined;

      const run = () => {
        if (!ref.current) return;
        split = new SplitText(el, { type: "lines", mask: "lines" });
        gsap.from(split.lines, {
          yPercent: 100,
          duration: DURATION.reveal,
          ease: EASE,
          stagger: STAGGER,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      };

      if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => split?.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
