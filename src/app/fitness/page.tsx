import type { Metadata } from "next";
import Image from "next/image";
import { fitnessCopy as F, popupDates } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessHero from "@/components/fitness/FitnessHero";
import FitnessTabs from "@/components/fitness/FitnessTabs";
import InMotionReel from "@/components/fitness/InMotionReel";
import GabeFlag from "@/components/fitness/GabeFlag";

export const metadata: Metadata = {
  title: "Fitness · Wild Wanderers",
  description:
    "Personal training and wellness coaching for busy adults on the Peninsula: one-on-one, small-group, and six-month coaching with Gabe. Start with a free consult.",
};

const h2 = "font-display font-[350] leading-[1.04] tracking-[-0.018em]";

/**
 * Fitness Overview: the hero, In Motion, the three ways to train (no prices),
 * who it's for, the Saturday popups, and Gabe in brief.
 */
export default function FitnessPage() {
  return (
    <>
      <FitnessHero />
      <FitnessTabs />
      <InMotionReel />

      {/* Training options, names and one line each. Pricing comes later. */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {F.options.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-[clamp(32px,4.4vw,52px)] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={F.options.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(36px,5vw,52px)] grid gap-6 md:grid-cols-3">
            {F.options.items.map((o) => (
              <div key={o.name} className="flex flex-col rounded-[20px] border border-bark/20 bg-bone/60 p-7">
                <h3 className="font-display text-[24px] font-medium text-forest-deep">{o.name}</h3>
                <p className="mb-6 mt-2.5 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{o.line}</p>
                <div className="mt-auto font-sans text-[13.5px] leading-[1.5] text-[#7A7264]">{F.options.note}</div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-8">
            <Button variant="ghost" href={F.options.link.href} arrow className="text-forest-deep">
              {F.options.link.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {F.whoFor.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-[clamp(30px,4vw,48px)] leading-[1.06] text-forest-deep [&_em]:text-bark`}>
                <RichText lines={F.whoFor.headline} />
              </h2>
              <p className="mt-6 max-w-[540px] text-pretty font-sans text-[clamp(16px,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
                {F.whoFor.body}
              </p>
            </Reveal>
            <Reveal className="w-full max-w-[460px] justify-self-end">
              <div className="relative aspect-[965/1148] max-h-[540px] w-full overflow-hidden rounded-[20px] bg-forest">
                <Image
                  src={F.whoFor.photo}
                  alt={F.whoFor.photoAlt}
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Saturday popups */}
      <section className="bg-forest-deep py-[clamp(64px,9vw,110px)] text-bone">
        <Container>
          <div className="grid items-end gap-[clamp(32px,5vw,64px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-6 text-cream">
                {F.saturday.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-[clamp(32px,4.4vw,52px)] text-bone [&_em]:text-cream`}>
                <RichText lines={F.saturday.headline} />
              </h2>
              <p className="mt-5 max-w-[480px] font-sans text-[16px] leading-[1.6] text-bone/85">{F.saturday.body}</p>
            </Reveal>
            <Reveal stagger delay={0.1}>
              <div className="grid grid-cols-4 border-y border-cream/25">
                {popupDates.map((d) => (
                  <div key={d.month + d.day} className="py-4">
                    <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/85">
                      {d.month}
                    </div>
                    <div className="font-display text-[clamp(36px,4vw,48px)] leading-none text-bone">{d.day}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="primary" href={F.saturday.cta.href} arrow>
                  {F.saturday.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Your coach, in brief */}
      <Section tone="bone">
        <Container>
          <Reveal className="grid max-w-[900px] grid-cols-[minmax(0,140px)_minmax(0,1fr)] items-center gap-[clamp(24px,4vw,48px)] sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-forest">
              <Image
                src={F.gabe.photo}
                alt={F.gabe.photoAlt}
                fill
                sizes="220px"
                className="object-cover object-[62%_60%]"
              />
            </div>
            <div>
              <Eyebrow rule className="mb-5 text-amber-deep">
                {F.gabe.eyebrow}
              </Eyebrow>
              <h2 className="font-display text-[clamp(26px,3vw,36px)] font-medium text-forest-deep">{F.gabe.name}</h2>
              <p className="mt-3 max-w-[520px] font-sans text-[16px] leading-[1.62] text-[#4A4234]">{F.gabe.body}</p>
              <GabeFlag className="mt-2.5">{F.gabe.flag}</GabeFlag>
              <div className="mt-5">
                <Button variant="ghost" href={F.gabe.link.href} arrow className="text-forest-deep">
                  {F.gabe.link.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={F.cta.headline} body={F.cta.body} cta={F.cta.primary} />
    </>
  );
}
