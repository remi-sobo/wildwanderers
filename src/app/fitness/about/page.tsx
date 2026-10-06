import type { Metadata } from "next";
import Image from "next/image";
import { fitnessAboutCopy as A } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessTabs from "@/components/fitness/FitnessTabs";

export const metadata: Metadata = {
  title: "About Gabe · Wild Wanderers Fitness",
  description:
    "Gabe Brewer, certified fitness trainer and coach on the Peninsula: what he coaches, how he works, and the six-month wellness coaching process.",
};

/**
 * Fitness About Gabe: his qualifications, what he
 * coaches, how he works, the scope note, and the six-month process. No
 * testimonials: placeholder social proof never ships.
 */
export default function FitnessAboutPage() {
  return (
    <>
      <PageHero eyebrow={A.hero.eyebrow} headline={A.hero.headline} sub={A.hero.sub} />
      <FitnessTabs />

      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,64px)] md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-forest">
                <Image
                  src={A.photo}
                  alt={A.photoAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal stagger className="grid gap-8">
              {A.blocks.map((b) => (
                <div key={b.title}>
                  <h2 className="font-display text-[clamp(24px,2.6vw,30px)] font-medium text-forest-deep">{b.title}</h2>
                  <p className="mt-2.5 max-w-[540px] font-sans text-[16px] leading-[1.65] text-[#4A4234]">{b.body}</p>
                </div>
              ))}
              <div className="border-t border-bark/20 pt-5">
                <h2 className="font-display text-[20px] font-medium text-forest-deep">{A.scope.title}</h2>
                <p className="mt-2 max-w-[540px] font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{A.scope.body}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The six-month process */}
      <Section tone="forest">
        <Contours color="#F2C879" opacity={0.08} className="pointer-events-none absolute -right-[10%] top-0 z-0 h-full w-[55%]" />
        <Container className="relative z-[2]">
          <div className="grid items-start gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-cream">
                {A.process.eyebrow}
              </Eyebrow>
              <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-bone [&_em]:text-cream">
                <RichText lines={A.process.headline} />
              </h2>
            </Reveal>
            <Reveal stagger className="grid gap-10 border-l border-cream/25 pl-9">
              {A.process.steps.map((s) => (
                <div key={s.title} className="relative">
                  <span className="absolute -left-[42px] top-[5px] h-[11px] w-[11px] rounded-full bg-amber shadow-[0_0_0_5px_var(--color-forest-deep)]" />
                  <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/80">{s.time}</div>
                  <h3 className="mt-2 font-display text-[clamp(22px,2.2vw,26px)] font-semibold text-bone">{s.title}</h3>
                  <p className="mt-2 max-w-[480px] font-sans text-[15px] leading-[1.6] text-bone/80">{s.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCta headline={A.cta.headline} body={A.cta.body} cta={A.cta.primary} />
    </>
  );
}
