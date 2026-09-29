import type { Metadata } from "next";
import { freeSessionPage as P } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import FreeSessionForm from "@/components/fitness/FreeSessionForm";

export const metadata: Metadata = {
  title: "Book a free consult · Wild Wanderers Fitness",
  description:
    "Start with a free consult. Tell Gabe a little about you and when you are free, and he will write back. No pressure, no pitch.",
};

/**
 * The fitness front door. Same layout as /join (why on the left, the form on
 * the right), for an adult asking about training rather than a family asking
 * about the boys program. No price here; price lives on the Offers tab only.
 */
export default function FreeSessionPage() {
  return (
    <>
      <PageHero eyebrow={P.hero.eyebrow} headline={P.hero.headline} sub={P.hero.sub} />

      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,72px)] lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {P.form.eyebrow}
              </Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,46px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
                <RichText lines={P.form.headline} />
              </h2>

              <ul className="mt-9 grid gap-7">
                {P.reasons.map((r) => (
                  <li key={r.title} className="border-t border-bark/20 pt-5">
                    <h3 className="font-display text-[20px] font-semibold text-forest-deep">{r.title}</h3>
                    <p className="mt-2 max-w-[420px] font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">
                      {r.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <FreeSessionForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
