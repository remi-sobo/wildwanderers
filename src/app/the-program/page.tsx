import type { Metadata } from "next";
import { programPage as P } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "The Program · Wild Wanderers",
  description:
    "Our flagship boys' program out on the Baylands: how a day moves, ages and stages, safe ground, and the way in.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default function TheProgramPage() {
  return (
    <>
      <PageHero eyebrow={P.hero.eyebrow} headline={P.hero.headline} sub={P.hero.sub} />

      {/* The way in */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.wayIn.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[840px] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.wayIn.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {P.wayIn.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* A day on the trail — vertical timeline, dark for cinematic variety */}
      <Section tone="forest">
        <Contours color="#F2C879" opacity={0.08} className="pointer-events-none absolute -right-[10%] top-0 z-0 h-full w-[55%]" />
        <Container className="relative z-[1]">
          <Reveal>
            <Eyebrow rule className="mb-7 text-cream">
              {P.day.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} mb-[clamp(40px,6vw,64px)] text-bone [&_em]:text-cream`}>
              <RichText lines={P.day.headline} />
            </h2>
          </Reveal>

          <Reveal stagger className="relative max-w-[760px] border-l border-cream/25 pl-9">
            {P.day.items.map((item) => (
              <div key={item.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[42px] top-1.5 h-[11px] w-[11px] rounded-full bg-amber shadow-[0_0_0_5px_var(--color-forest-deep)]" />
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/80">
                  {item.time}
                </div>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,2.6vw,30px)] font-semibold text-bone">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[560px] font-sans text-[15px] leading-[1.6] text-bone/80">
                  {item.body}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* What the adventures include — emergent curriculum lead, then buckets */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.adventures.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.adventures.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {P.curriculum}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(48px,7vw,72px)] grid grid-cols-1 gap-x-[26px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {P.adventures.items.map((b) => (
              <div key={b.name} className="border-t border-bark/25 pt-6">
                <h3 className="font-display text-[clamp(1.375rem,2.2vw,26px)] font-medium text-forest-deep">
                  {b.name}
                </h3>
                <p className="mt-2.5 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{b.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* The shape of the year — three sessions at a glance */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7">
              {P.year.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={P.year.headline} />
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {P.year.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(48px,7vw,72px)] grid grid-cols-1 gap-x-[26px] gap-y-12 sm:grid-cols-3">
            {P.year.items.map((s) => (
              <div key={s.season} className="border-t border-bark/25 pt-7">
                <h3 className="font-display text-[clamp(1.75rem,2.6vw,32px)] font-medium text-forest-deep">
                  {s.season}
                </h3>
                <div className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  {s.span}
                </div>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{s.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-[clamp(40px,6vw,56px)] border-t border-bark/20 pt-6">
            <p className="max-w-[560px] font-sans text-[15px] leading-[1.6] text-[#4A4234]">
              {P.year.close}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Why boys — Gabe's calling, first person. Framed as lived experience,
          never as an admissions policy (CLAUDE.md guardrails). */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.whyBoys.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.whyBoys.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {P.whyBoys.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Ages and stages */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7">
              {P.stages.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[840px] text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={P.stages.headline} />
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {P.stages.lead}
            </p>
          </Reveal>

          <Reveal stagger className="mt-[clamp(48px,7vw,72px)] grid grid-cols-1 gap-x-[26px] gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {P.stages.items.map((s) => (
              <div key={s.name} className="border-t border-bark/25 pt-7">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  {s.label}
                </div>
                <h3 className="mt-3 font-display text-[clamp(1.75rem,2.6vw,32px)] font-medium text-forest-deep">
                  {s.name}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{s.body}</p>
              </div>
            ))}
          </Reveal>

          {/* Trail log — a quiet teaser for the named future ring. */}
          <Reveal className="mt-[clamp(40px,6vw,56px)] border-t border-bark/20 pt-6">
            <p className="font-sans text-[13.5px] italic leading-[1.6] text-[#5A5142]">
              {P.trailLog}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Safe ground */}
      <Section tone="bone">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.safety.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[720px] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.safety.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,60px)] grid grid-cols-1 gap-x-[26px] gap-y-10 sm:grid-cols-3">
            {P.safety.points.map((pt) => (
              <div key={pt.title}>
                <h3 className="font-display text-[22px] font-semibold text-forest-deep">{pt.title}</h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{pt.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Cost (gated) */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[680px]">
            <Eyebrow rule className="mb-7">
              {P.cost.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={P.cost.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
              {P.cost.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={P.cta.headline} body={P.cta.body} cta={P.cta.primary} />
    </>
  );
}
