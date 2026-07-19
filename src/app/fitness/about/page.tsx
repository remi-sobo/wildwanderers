import type { Metadata } from "next";
import { fitnessPage as F } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import FitnessTabs from "@/components/fitness/FitnessTabs";
import PhotoSlot from "@/components/fitness/PhotoSlot";

export const metadata: Metadata = {
  title: "About Gabe · Wild Wanderers Fitness",
  description:
    "Gabe's story, how the coaching works, and the six-month arc. A certified fitness trainer who plays the long game.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

/**
 * The About Gabe tab: the deep founder story, the coaching approach and the
 * six-month arc, and the proof block (labeled placeholders until real client
 * words exist). No price anywhere on this page.
 */
export default function FitnessAboutPage() {
  return (
    <>
      <PageHero eyebrow={F.gabe.eyebrow} headline={F.gabe.headline} sub={F.gabe.sub} />
      <FitnessTabs />

      {/* Meet Gabe — the credibility anchor, with the scope note carried plain */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="order-1">
              <PhotoSlot label={F.gabe.photoLabel} className="aspect-[4/5] w-full" />
            </Reveal>

            <Reveal stagger className="order-2">
              <p className="max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
                {F.gabe.body}
              </p>
              <p className="mt-6 max-w-[560px] border-t border-bark/20 pt-5 font-sans text-[13px] leading-[1.6] text-[#5A5142]">
                {F.gabe.scopeNote}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* How coaching works — the six-month arc as a timeline, dark for variety */}
      <Section tone="forest">
        <Contours
          color="#F2C879"
          opacity={0.08}
          className="pointer-events-none absolute -right-[10%] top-0 z-0 h-full w-[55%]"
        />
        <Container className="relative z-[1]">
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-cream">
              {F.how.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-bone [&_em]:text-cream`}>
              <RichText lines={F.how.headline} />
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-bone/80">
              {F.how.lead}
            </p>
          </Reveal>

          <Reveal
            stagger
            className="relative mt-[clamp(44px,6vw,64px)] max-w-[760px] border-l border-cream/25 pl-9"
          >
            {F.how.steps.map((step) => (
              <div key={step.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[42px] top-1.5 h-[11px] w-[11px] rounded-full bg-amber shadow-[0_0_0_5px_var(--color-forest-deep)]" />
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/80">
                  {step.time}
                </div>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,2.6vw,30px)] font-semibold text-bone">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[560px] font-sans text-[15px] leading-[1.6] text-bone/80">
                  {step.body}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Proof — labeled placeholders only, never a fabricated testimonial */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {F.proof.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={F.proof.headline} />
            </h2>
            <p className="mt-6 max-w-[600px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {F.proof.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(44px,6vw,64px)] grid grid-cols-1 gap-6 sm:grid-cols-3">
            {F.proof.items.map((story) => (
              <div
                key={story.label}
                className="flex flex-col rounded-[18px] border border-dashed border-bark/35 bg-sand/40 p-7"
              >
                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  {story.label}
                </span>
                <p className="mt-4 font-display text-[clamp(1.125rem,1.7vw,20px)] italic leading-[1.4] text-forest-deep">
                  {story.quote}
                </p>
                <p className="mt-4 font-sans text-[13px] leading-[1.55] text-[#5A5142]">
                  {story.detail}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <p className="font-sans text-[12.5px] italic leading-[1.6] text-[#6B6152]">
              {F.proof.note}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
