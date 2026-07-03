import type { Metadata } from "next";
import { fitnessPage as F } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import Button from "@/components/ui/Button";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessHero from "@/components/fitness/FitnessHero";
import PhotoSlot from "@/components/fitness/PhotoSlot";
import { anchors } from "@/content/fitness";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Fitness · Wild Wanderers",
  description:
    "Wild Wanderers Fitness: Gabe coaching adults to move again, get strong, and build habits that last. One-on-one, small group, and six-month wellness coaching on the peninsula.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default function FitnessPage() {
  return (
    <>
      <FitnessHero />

      {/* Who this is for */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {F.whoFor.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={F.whoFor.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {F.whoFor.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The three offers — wellness coaching marked as the flagship */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7">
              {F.offers.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={F.offers.headline} />
            </h2>
            <p className="mt-6 max-w-[600px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {F.offers.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(48px,7vw,72px)] grid grid-cols-1 gap-6 lg:grid-cols-3">
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

      {/* Meet Gabe — the credibility anchor, with the scope note carried plain */}
      <Section tone="sand">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="order-1">
              <PhotoSlot label={F.gabe.photoLabel} className="aspect-[4/5] w-full" />
            </Reveal>

            <Reveal stagger className="order-2">
              <Eyebrow rule className="mb-7">
                {F.gabe.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
                <RichText lines={F.gabe.headline} />
              </h2>
              <p className="mt-7 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
                {F.gabe.body}
              </p>
              <p className="mt-6 max-w-[560px] border-t border-bark/20 pt-5 font-sans text-[13px] leading-[1.6] text-[#5A5142]">
                {F.gabe.scopeNote}
              </p>
            </Reveal>
          </div>
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

      {/* Investment — provisional tiers, premium framing, free consult front door */}
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

      {/* FAQ — short, honest, scope note carried in the eating-guidance answer */}
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

      {/* CTA band — "Book a consult" front door, target of the hero and investment
          CTAs (#consult). Reuses the shared closing-band pattern. */}
      <div id={anchors.consult} className="scroll-mt-24">
        <ClosingCta headline={F.cta.headline} body={F.cta.body} cta={F.cta.primary} />
      </div>
    </>
  );
}
