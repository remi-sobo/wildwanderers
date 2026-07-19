import type { Metadata } from "next";
import { fitnessPage as F, anchors } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import FitnessHero from "@/components/fitness/FitnessHero";
import FitnessTabs from "@/components/fitness/FitnessTabs";

export const metadata: Metadata = {
  title: "Fitness · Wild Wanderers",
  description:
    "Wild Wanderers Fitness: Gabe coaching adults to move again, get strong, and build habits that last. One-on-one, small group, and six-month wellness coaching on the peninsula.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

/**
 * The Overview: the front page of the menu. Who Gabe is, why you are here,
 * one action. The offers, the price, and the deep story live one tab in
 * (/fitness/offers and /fitness/about). No price appears here.
 */
export default function FitnessPage() {
  return (
    <>
      <FitnessHero />
      <FitnessTabs />

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

      {/* CTA band — "Book a consult" front door (#consult). */}
      <div id={anchors.consult} className="scroll-mt-24">
        <ClosingCta headline={F.cta.headline} body={F.cta.body} cta={F.cta.primary} />
      </div>
    </>
  );
}
