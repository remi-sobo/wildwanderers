import type { Metadata } from "next";
import { fitnessPage as F, anchors } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessTabs from "@/components/fitness/FitnessTabs";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Offers · Wild Wanderers Fitness",
  description:
    "The three ways to train with Gabe: one-on-one, small group, and six-month wellness coaching. What each includes, what it costs, and a free consult to find the fit.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

/**
 * The Offers tab: the menu options. Each offer carries what it includes and
 * its price, value first and the number after. This is the only place on the
 * site a fitness price appears. Packages stay one line ("Packages available")
 * until Gabe confirms real ones, and the FAQ sits at the bottom as an
 * accordion, next to the purchase it answers for.
 */
export default function FitnessOffersPage() {
  return (
    <>
      <PageHero eyebrow={F.offers.eyebrow} headline={F.offers.headline} sub={F.offers.lead} />
      <FitnessTabs />

      {/* The three offers with price on the card, wellness coaching flagship */}
      <Section tone="sand" id={anchors.plans} className="scroll-mt-24">
        <Container>
          <Reveal stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {F.offers.items.map((o) => (
              <div
                key={o.name}
                className={clsx(
                  "flex flex-col rounded-[20px] p-8",
                  o.flagship
                    ? "bg-forest-deep text-bone ring-1 ring-amber/40"
                    : "border border-bark/20 bg-bone/60",
                )}
              >
                {o.flagship && o.flag && (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-amber px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink">
                    {o.flag}
                  </span>
                )}
                <h3
                  className={clsx(
                    "font-display text-[clamp(1.5rem,2.4vw,28px)] font-medium",
                    o.flagship ? "text-bone" : "text-forest-deep",
                  )}
                >
                  {o.name}
                </h3>
                <p
                  className={clsx(
                    "mt-3 font-sans text-[13px] font-semibold uppercase tracking-[0.12em]",
                    o.flagship ? "text-cream/85" : "text-amber-deep",
                  )}
                >
                  {o.forWho}
                </p>
                <p
                  className={clsx(
                    "mt-4 font-sans text-[14.5px] leading-[1.62]",
                    o.flagship ? "text-bone/85" : "text-[#5A5142]",
                  )}
                >
                  {o.body}
                </p>

                {/* Price, value first and the number after. */}
                <div
                  className={clsx(
                    "mt-auto border-t pt-5",
                    o.flagship ? "border-bone/20" : "border-bark/20",
                  )}
                >
                  <p
                    className={clsx(
                      "font-sans text-[13px] leading-[1.5]",
                      o.flagship ? "text-cream/85" : "text-[#5A5142]",
                    )}
                  >
                    {o.priceNote}
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span
                      className={clsx(
                        "font-display text-[clamp(1.75rem,3vw,36px)] font-medium",
                        o.flagship ? "text-cream" : "text-forest-deep",
                      )}
                    >
                      {o.price}
                    </span>
                    <span
                      className={clsx(
                        "font-sans text-[12px] font-medium uppercase tracking-[0.12em]",
                        o.flagship ? "text-bone/70" : "text-[#6B6152]",
                      )}
                    >
                      {o.priceUnit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Packages (one line, by the guardrail), promotions, the
              provisional-pricing note, and the consult button. */}
          <Reveal className="mt-[clamp(36px,5vw,52px)] flex flex-col gap-6 border-t border-bark/20 pt-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px]">
              <p className="font-display text-[clamp(1.125rem,1.8vw,21px)] font-medium text-forest-deep">
                {F.offers.packagesLine}
              </p>
              <p className="mt-2 font-sans text-[14px] leading-[1.6] text-[#5A5142]">
                {F.offers.promos}
              </p>
              <p className="mt-4 font-sans text-[12.5px] italic leading-[1.6] text-[#6B6152]">
                {F.offers.provisional}
              </p>
            </div>
            <Button variant="primary" href={F.offers.cta.href} arrow className="w-fit shrink-0">
              {F.offers.cta.label}
            </Button>
          </Reveal>

          {/* The platform, one quiet line. Introduce, do not sell. */}
          <Reveal className="mt-8">
            <p className="max-w-[640px] font-sans text-[13.5px] leading-[1.6] text-[#5A5142]">
              {F.platformLine}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ — condensed accordion, next to the purchase it answers for. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {F.faq.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={F.faq.headline} />
            </h2>
          </Reveal>

          <Reveal className="mt-[clamp(36px,5vw,48px)] max-w-[820px]">
            {F.faq.items.map((item) => (
              <details key={item.q} className="group border-t border-bark/20 first:border-t-0">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[clamp(1.125rem,1.8vw,21px)] font-medium text-forest-deep">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-sans text-[20px] font-light leading-none text-amber-deep transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[640px] pb-6 font-sans text-[15px] leading-[1.62] text-[#4A4234]">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* CTA band — "Book a free consult" front door (#consult). */}
      <div id={anchors.consult} className="scroll-mt-24">
        <ClosingCta headline={F.cta.headline} body={F.cta.body} cta={F.cta.primary} />
      </div>
    </>
  );
}
