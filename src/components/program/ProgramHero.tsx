"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { programCopy } from "@/content/pages";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Fine film grain for the hero, higher-frequency than the page paper grain so
// it reads as cinematic emulsion over the photo. Static.
const FILM_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
  "<filter id='f'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/></filter>" +
  "<rect width='100' height='100' filter='url(#f)'/></svg>";
const FILM_URL = `url("data:image/svg+xml,${encodeURIComponent(FILM_SVG)}")`;

const hero = programCopy.hero;

/**
 * The boys program hero: the former homepage hero, moved here when the
 * homepage went light. Full-bleed photo with the headline over open space on
 * the left. The global Nav sits over this section transparently.
 *
 * Motion: a slow ambient ken-burns on the photo (~1.0 to 1.06 over 20s,
 * time-based, breathing), the photo drifting slower than the text on scroll,
 * and the headline revealing line by line with the Fraunces weight settling
 * on load. All gated behind reduced motion.
 */
export default function ProgramHero() {
  const root = useRef<HTMLElement>(null);
  const photoDrift = useRef<HTMLDivElement>(null);
  const kenBurns = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Ambient ken-burns: slow, perpetual, imperceptible. Time, not scroll.
      gsap.fromTo(
        kenBurns.current,
        { scale: 1.0 },
        { scale: 1.06, duration: 20, ease: "sine.inOut", repeat: -1, yoyo: true },
      );

      // Photo drifts down slightly as the hero scrolls out, so it lags behind
      // the text (parallax, slower than the copy). Stays within the overscan.
      gsap.to(photoDrift.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative flex min-h-[max(620px,92svh)] w-full flex-col justify-center overflow-hidden"
    >
      {/* Photo: overscan wrapper -> scroll drift -> ken-burns -> image, so the
          two transforms never fight and the drift never reveals an edge. */}
      <div ref={photoDrift} className="absolute -inset-[6%] will-change-transform">
        <div ref={kenBurns} className="absolute inset-0 will-change-transform">
          <Image
            src="/hero.png"
            alt={hero.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Fine film grain over the photo, under the scrims and the type. */}
      <div
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          backgroundImage: FILM_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px",
          mixBlendMode: "soft-light",
          opacity: 0.2,
        }}
      />

      {/* Scrims (verbatim from the mock) keep bone text readable on the photo. */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(180deg,rgba(18,28,20,.42) 0%,rgba(18,28,20,0) 16%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(90deg,rgba(16,24,17,.72) 0%,rgba(16,24,17,.36) 36%,rgba(16,24,17,0) 62%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(0deg,rgba(14,22,15,.50) 0%,rgba(14,22,15,0) 26%)",
        }}
      />
      {/* Mobile-only veil: the left-edge scrim is too narrow on small screens,
          so the copy sits on the photo's bright sky without it. */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[rgba(16,24,17,0.32)] sm:hidden" />

      {/* Copy, sitting nearer the edge. */}
      <div className="relative z-10 max-w-[880px] px-[clamp(24px,4vw,60px)] pb-[110px] pt-[140px]">
        <Eyebrow className="mb-6 block text-bone/90">{hero.eyebrow}</Eyebrow>
        <SplitReveal
          as="h1"
          weightFrom={330}
          className="font-display text-[clamp(3.25rem,10vw,132px)] font-[360] leading-[0.9] tracking-[-0.022em] text-bone [text-shadow:0_2px_40px_rgba(8,14,9,0.4)] [&_em]:text-cream"
        >
          <RichText lines={hero.headline} />
        </SplitReveal>

        <Reveal stagger delay={0.5}>
          <p className="mt-7 max-w-[540px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.5] text-bone/95">
            {hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button variant="primary" href={hero.primary.href} arrow>
              {hero.primary.label}
            </Button>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
