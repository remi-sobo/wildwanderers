import type { Metadata } from "next";
import { freeSessionCopy as P } from "@/content/fitness";
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
    "Tell Gabe what you're looking for. He'll follow up to talk through your goals and the best way to start. The consult is free.",
};

/**
 * The free consult. Form first (left on desktop, top on mobile), then what
 * happens next, where the single "No pressure" line lives.
 */
export default function FreeSessionPage() {
  return (
    <>
      <PageHero eyebrow={P.hero.eyebrow} headline={P.hero.headline} sub={P.hero.sub} />

      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
            <Reveal>
              <FreeSessionForm />
            </Reveal>

            <Reveal stagger delay={0.1}>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {P.next.eyebrow}
              </Eyebrow>
              <h2 className="font-display text-[clamp(32px,4vw,46px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
                <RichText lines={P.next.headline} />
              </h2>
              <div className="mt-9">
                {P.next.items.map((r) => (
                  <div key={r.title} className="border-t border-bark/20 py-5">
                    <h3 className="font-display text-[20px] font-semibold text-forest-deep">{r.title}</h3>
                    <p className="mt-1.5 max-w-[420px] font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{r.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
