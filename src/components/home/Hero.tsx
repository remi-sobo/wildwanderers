"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { hero } from "@/content/home";
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

/**
 * Hero. Full-bleed photo with the headline over open space on the left, exactly
 * as the mock frames it, sized up and pushed nearer the edge. The global Nav
 * sits over this section transparently.
 *
 * Motion (Phase 2): a slow ambient ken-burns on the photo (~1.0 to 1.06 over
 * 20s, time-based, breathing), the photo drifting slower than the text on
 * scroll, the headline revealing line by line with the Fraunces weight settling
 * on load, and the scroll cue fading as the hero leaves. Phase 3 will hang the
 * horizon and sun off this same scene. All gated behind reduced motion.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const photoDrift = useRef<HTMLDivElement>(null);
  const kenBurns = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLDivElement>(null);

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

      // Scroll cue fades out over the first stretch of the scroll.
      gsap.to(cue.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "30% top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative flex h-[100svh] min-h-[620px] w-full flex-col justify-center overflow-hidden"
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
            "linear-gradient(90deg,rgba(16,24,17,.66) 0%,rgba(16,24,17,.30) 32%,rgba(16,24,17,0) 58%)",
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

      {/* Copy. Larger and bolder than the mock, sitting nearer the edge. */}
      <div className="relative z-10 max-w-[880px] px-6 sm:px-10 lg:px-[60px]">
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
            <Button variant="ghost" href={hero.secondary.href} arrow className="text-bone">
              {hero.secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue, fading as the hero leaves. */}
      <div
        ref={cue}
        className="absolute bottom-10 left-6 z-10 flex items-center gap-3 sm:left-10 lg:left-[60px]"
      >
        <span className="h-px w-[46px] bg-gradient-to-r from-bone/75 to-transparent" />
        <span className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/75">
          {hero.scrollCue}
        </span>
      </div>
    </section>
  );
}
