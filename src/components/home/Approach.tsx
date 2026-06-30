"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { approach } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The Approach. This is the one pinned moment on the whole page (spec section
 * 5). On desktop the section pins briefly while the trail line draws left to
 * right and the four steps reveal in sequence with the scroll.
 *
 * Pinning and the hidden initial states are scoped to a matchMedia query that
 * also requires no-preference for motion, so below the lg breakpoint and under
 * reduced motion the steps and trail render static and fully visible. No flash:
 * the hidden state is set in useGSAP's layout effect, before paint.
 */
export default function Approach() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(".ap-trail", { scaleX: 0, transformOrigin: "left center" });
          gsap.set(".ap-step", { opacity: 0, y: 24 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=130%",
              scrub: 0.5,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.to(".ap-trail", { scaleX: 1, ease: "none", duration: 0.6 }, 0);
          tl.to(
            ".ap-step",
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.18, ease: "power2.out" },
            0.1,
          );
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-bone py-[clamp(72px,12vw,130px)]">
      <Container>
        <Eyebrow rule className="mb-7 text-amber-deep">
          {approach.eyebrow}
        </Eyebrow>
        <h2 className="mb-[clamp(48px,8vw,78px)] max-w-[840px] font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
          <RichText lines={approach.headline} />
        </h2>

        <div className="relative grid grid-cols-1 gap-x-0 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Trail line, drawn left to right while pinned. Desktop only. */}
          <div
            className="ap-trail absolute left-[3%] right-[3%] top-[23px] hidden h-[1.5px] lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg,rgba(107,74,46,.5) 0 8px,transparent 8px 16px)",
            }}
            aria-hidden="true"
          />

          {approach.steps.map((step) => (
            <div key={step.n} className="ap-step relative z-[1] pr-0 lg:pr-[34px]">
              <div className="mb-[34px] h-[13px] w-[13px] rounded-full bg-amber shadow-[0_0_0_6px_var(--color-bone)]" />
              <div className="mb-2 font-display text-[19px] font-medium italic text-bark">
                {step.n}
              </div>
              <h3 className="mb-3 font-display text-[clamp(1.5rem,2.4vw,29px)] font-semibold tracking-[-0.01em] text-forest-deep">
                {step.title}
              </h3>
              <p className="font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
