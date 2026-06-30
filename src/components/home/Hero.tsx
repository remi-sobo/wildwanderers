import Image from "next/image";
import { hero } from "@/content/home";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import Parallax from "@/components/motion/Parallax";

/**
 * Hero. Full-bleed photo with the headline over open space on the left, exactly
 * as the mock frames it. The global Nav sits over this section transparently.
 *
 * Motion: SplitReveal on the headline (fires on load, in view), a slow
 * ken-burns drift on the photo, the supporting copy fading up beneath. The
 * three scrims are ported verbatim from the mock to keep the type legible.
 */
export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[620px] w-full flex-col justify-center overflow-hidden">
      {/* Photo */}
      <Parallax zoom className="absolute inset-0">
        <Image
          src="/hero.png"
          alt={hero.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </Parallax>

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

      {/* Copy */}
      <div className="relative z-10 max-w-[760px] px-6 sm:px-10 lg:px-[60px]">
        <Eyebrow className="mb-6 block text-bone/90">{hero.eyebrow}</Eyebrow>
        <SplitReveal
          as="h1"
          className="font-display text-[clamp(3rem,9.2vw,118px)] font-[330] leading-[0.92] tracking-[-0.02em] text-bone [text-shadow:0_2px_40px_rgba(8,14,9,0.4)] [&_em]:text-cream"
        >
          <RichText lines={hero.headline} />
        </SplitReveal>

        <Reveal stagger delay={0.5}>
          <p className="mt-7 max-w-[540px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.5] text-bone/95">
            {hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button variant="primary" href={hero.primary.href}>
              {hero.primary.label}
            </Button>
            <Button variant="ghost" href={hero.secondary.href} className="text-bone">
              {hero.secondary.label} &rarr;
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-6 z-10 flex items-center gap-3 sm:left-10 lg:left-[60px]">
        <span className="h-px w-[46px] bg-gradient-to-r from-bone/75 to-transparent" />
        <span className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/75">
          {hero.scrollCue}
        </span>
      </div>
    </section>
  );
}
