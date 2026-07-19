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
 * The Offers tab: the menu options. The three offers, the price (this is the
 * only place on the site a fitness price appears), the platform line, and the
 * FAQ, since purchase questions belong next to the purchase.
 */
export default function FitnessOffersPage() {
  return (
    <>
      <PageHero eyebrow={F.offers.eyebrow} headline={F.offers.headline} sub={F.offers.lead} />
      <FitnessTabs />

      {/* The three offers — wellness coaching marked as the flagship */}
      <Section tone="sand">
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
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* The platform — introduce, do not sell. One short section. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[720px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {F.platform.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={F.platform.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {F.platform.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Investment — the only place price appears. Free consult front door. */}
      <Section tone="sand" id={anchors.plans} className="scroll-mt-24">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7">
              {F.investment.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={F.investment.headline} />
            </h2>
            <p className="mt-6 max-w-[600px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {F.investment.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(44px,6vw,64px)] grid grid-cols-1 gap-6 lg:grid-cols-3">
            {F.investment.tiers.map((t) => (
              <div
                key={t.name}
                className={clsx(
                  "flex flex-col rounded-[20px] p-8",
                  t.flagship
                    ? "bg-forest-deep text-bone ring-1 ring-amber/40"
                    : "border border-bark/20 bg-bone/60",
                )}
              >
                {t.flagship && t.flag && (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-amber px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink">
                    {t.flag}
                  </span>
                )}
                <h3
                  className={clsx(
                    "font-display text-[clamp(1.375rem,2.2vw,26px)] font-medium",
                    t.flagship ? "text-bone" : "text-forest-deep",
                  )}
                >
                  {t.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span
                    className={clsx(
                      "font-display text-[clamp(2rem,3.4vw,40px)] font-medium",
                      t.flagship ? "text-cream" : "text-forest-deep",
                    )}
                  >
                    {t.price}
                  </span>
                  <span
                    className={clsx(
                      "font-sans text-[12.5px] font-medium uppercase tracking-[0.12em]",
                      t.flagship ? "text-bone/70" : "text-[#6B6152]",
                    )}
                  >
                    {t.unit}
                  </span>
                </div>
                <p
                  className={clsx(
                    "mt-4 font-sans text-[14px] leading-[1.6]",
                    t.flagship ? "text-bone/85" : "text-[#5A5142]",
                  )}
                >
                  {t.note}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-[clamp(36px,5vw,52px)] flex flex-col gap-6 border-t border-bark/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[440px] font-sans text-[13.5px] italic leading-[1.6] text-[#5A5142]">
              {F.investment.provisional}
            </p>
            <Button variant="primary" href={F.investment.cta.href} arrow className="w-fit">
              {F.investment.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ — short, honest, next to the purchase. */}
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

          <Reveal stagger className="mt-[clamp(40px,6vw,56px)] max-w-[820px]">
            {F.faq.items.map((item) => (
              <div key={item.q} className="border-t border-bark/20 py-7 first:border-t-0 first:pt-0">
                <h3 className="font-display text-[clamp(1.25rem,2vw,24px)] font-medium text-forest-deep">
                  {item.q}
                </h3>
                <p className="mt-3 max-w-[640px] font-sans text-[15px] leading-[1.62] text-[#4A4234]">
                  {item.a}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* CTA band — "Book a consult" front door (#consult). */}
      <div id={anchors.consult} className="scroll-mt-24">
        <ClosingCta headline={F.cta.headline} body={F.cta.body} cta={F.cta.primary} />
      </div>
    </>
  );
}
