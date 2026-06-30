import type { Metadata } from "next";
import { movementPage as M } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Contours from "@/components/ui/Contours";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import AnimalTrail from "@/components/home/AnimalTrail";

export const metadata: Metadata = {
  title: "The Movement — Wild Wanderers",
  description:
    "The why behind Wild Wanderers: room to roam, the four-step approach, the three pillars, and the Baylands animals.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default function TheMovementPage() {
  return (
    <>
      <PageHero eyebrow={M.hero.eyebrow} headline={M.hero.headline} sub={M.hero.sub} />

      {/* Thesis */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[860px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {M.thesis.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={M.thesis.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {M.thesis.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The four steps — big numbered editorial grid, dark */}
      <Section tone="forest">
        <Contours color="#F2C879" opacity={0.07} className="pointer-events-none absolute -left-[10%] top-[6%] z-0 h-[90%] w-[50%]" />
        <Container className="relative z-[1]">
          <Reveal>
            <Eyebrow rule className="mb-7 text-cream">
              {M.steps.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-bone [&_em]:text-cream`}>
              <RichText lines={M.steps.headline} />
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-bone/80">
              {M.steps.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(48px,7vw,80px)] grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
            {M.steps.items.map((s) => (
              <div key={s.n} className="flex gap-6 border-t border-cream/20 pt-7">
                <div className="font-display text-[clamp(2.5rem,5vw,58px)] font-[400] italic leading-none text-cream/70">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.6rem,2.6vw,30px)] font-semibold text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[15px] leading-[1.6] text-bone/80">{s.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Pillars */}
      <Section tone="bone">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {M.pillars.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[720px] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={M.pillars.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,60px)] grid grid-cols-1 gap-x-[26px] gap-y-10 sm:grid-cols-3">
            {M.pillars.items.map((p) => (
              <div key={p.name} className="border-t border-bark/25 pt-7">
                <h3 className="font-display text-[clamp(1.75rem,2.6vw,30px)] font-medium text-forest-deep">
                  {p.name}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Animals — the signature, reusing the trail island */}
      <Section tone="sand">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[620px]">
              <Eyebrow rule className="mb-7">
                {M.animals.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
                <RichText lines={M.animals.headline} />
              </h2>
              <p className="mt-6 font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
                {M.animals.body}
              </p>
            </div>
          </div>
          <AnimalTrail />
          <Reveal className="mt-[clamp(48px,7vw,72px)]">
            <Button variant="primary" href={M.animals.cta.href} arrow>
              {M.animals.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
