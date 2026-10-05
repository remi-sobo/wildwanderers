import type { Metadata } from "next";
import { trainingOptionsCopy as T } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessTabs from "@/components/fitness/FitnessTabs";

export const metadata: Metadata = {
  title: "Training Options · Wild Wanderers Fitness",
  description:
    "Three ways to train with Gabe on the Peninsula: one-on-one, small-group, and six-month wellness coaching. Every option starts with a free consult.",
};

const label = "font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep";

/**
 * Training Options (replaces Offers, which 301s here). Three cards with the
 * same structure. No prices anywhere on the site (decided Oct 5): plans and
 * pricing come after the free first session.
 */
export default function TrainingOptionsPage() {
  return (
    <>
      <PageHero eyebrow={T.hero.eyebrow} headline={T.hero.headline} sub={T.hero.sub} />
      <FitnessTabs />

      <Section tone="sand">
        <Container>
          <Reveal stagger className="grid gap-6 lg:grid-cols-3">
            {T.items.map((o) => (
              <div key={o.name} className="flex flex-col rounded-[20px] border border-bark/20 bg-bone p-8">
                <h2 className="font-display text-[clamp(24px,2.4vw,28px)] font-medium text-forest-deep">{o.name}</h2>
                <div className={`mt-[22px] ${label}`}>{T.labels.bestFor}</div>
                <p className="mt-1.5 font-sans text-[15px] leading-[1.6] text-[#4A4234]">{o.bestFor}</p>
                <div className={`mt-5 ${label}`}>{T.labels.get}</div>
                <p className="mb-7 mt-1.5 font-sans text-[15px] leading-[1.6] text-[#4A4234]">{o.get}</p>
                <div className="mt-auto border-t border-bark/20 pt-[18px]">
                  <div className={label}>{T.labels.pricing}</div>
                  <p className="mt-1.5 font-sans text-[15px] leading-[1.55] text-[#4A4234]">{T.pricingLine}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-[clamp(36px,5vw,52px)] flex flex-wrap items-end justify-between gap-6 border-t border-bark/20 pt-7">
            <p className="max-w-[560px] font-sans text-[15px] leading-[1.6] text-[#4A4234]">{T.packagesLine}</p>
            <Button variant="primary" href={T.cta.href} arrow>
              {T.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Common questions */}
      <Section tone="bone">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {T.faq.eyebrow}
            </Eyebrow>
            <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
              <RichText lines={T.faq.headline} />
            </h2>
          </Reveal>

          <Reveal className="mt-[clamp(36px,5vw,48px)] max-w-[820px]">
            {T.faq.items.map((item) => (
              <details key={item.q} className="group border-t border-bark/20">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[clamp(18px,1.8vw,21px)] font-medium text-forest-deep">{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-sans text-[22px] font-light leading-none text-amber-deep transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[640px] pb-6 font-sans text-[15px] leading-[1.62] text-[#4A4234]">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={T.closing.headline} body={T.closing.body} cta={T.closing.primary} />
    </>
  );
}
