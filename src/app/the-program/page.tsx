import type { Metadata } from "next";
import { programCopy as P } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import ProgramHero from "@/components/program/ProgramHero";

export const metadata: Metadata = {
  title: "The Boys Program · Wild Wanderers",
  description:
    "An after-school outdoor program for boys ages 5 to 13 on the Baylands trail, with screened adult leaders and no more than six boys per adult.",
};

const h2 = "font-display text-[clamp(32px,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";
const h2sm = "font-display text-[clamp(32px,4.4vw,48px)] font-[350] leading-[1.04] tracking-[-0.018em]";
const lead = "font-sans text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[#4A4234]";

export default function TheProgramPage() {
  return (
    <>
      <ProgramHero />

      {/* At a glance */}
      <section className="bg-bone pt-[clamp(48px,6vw,72px)]">
        <Container>
          <Reveal stagger className="grid gap-x-[26px] gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {P.facts.map((f) => (
              <div key={f.label} className="border-t border-bark/[.22] pt-5">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-deep">
                  {f.label}
                </div>
                <div className="mt-2.5 font-display text-[20px] leading-[1.35] text-forest-deep">{f.value}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* A session: the after-school blocks as a vertical timeline. */}
      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {P.session.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
                <RichText lines={P.session.headline} />
              </h2>
              <p className={`mt-7 max-w-[460px] text-pretty ${lead}`}>{P.session.intro}</p>
            </Reveal>
            <Reveal stagger className="grid gap-[30px] border-l border-bark/25 pl-9">
              {P.session.day.map((d) => (
                <div key={d.time} className="relative">
                  <span className="absolute -left-[42px] top-[5px] h-[11px] w-[11px] rounded-full bg-amber shadow-[0_0_0_5px_var(--color-bone)]" />
                  <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-bark">{d.time}</div>
                  <h3 className="mt-1.5 font-display text-[clamp(21px,2vw,24px)] font-semibold text-forest-deep">{d.title}</h3>
                  <p className="mt-1.5 max-w-[460px] font-sans text-[15px] leading-[1.6] text-[#5A5142]">{d.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* How the program changes by age */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.ages.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.ages.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,56px)] grid gap-x-[26px] gap-y-10 md:grid-cols-3">
            {P.ages.stages.map((s) => (
              <div key={s.name} className="border-t border-bark/20 pt-6">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">{s.label}</div>
                <h3 className="mt-2.5 font-display text-[clamp(26px,2.4vw,30px)] font-medium text-forest-deep">{s.name}</h3>
                <p className="mt-2.5 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* How we're starting, and pricing. No season named. */}
      <Section tone="forest">
        <Contours color="#F2C879" opacity={0.08} className="pointer-events-none absolute -right-[10%] top-0 z-0 h-full w-[55%]" />
        <Container className="relative z-[2]">
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-cream">
              {P.launch.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-bone [&_em]:text-cream`}>
              <RichText lines={P.launch.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,60px)] grid gap-x-[26px] gap-y-8 md:grid-cols-3">
            {P.launch.items.map((y) => (
              <div key={y.title} className="border-t border-cream/25 pt-[22px]">
                <h3 className="font-display text-[clamp(24px,2.4vw,28px)] font-medium text-bone">{y.title}</h3>
                <p className="mt-2.5 font-sans text-[15px] leading-[1.6] text-bone/80">{y.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-[clamp(44px,6vw,60px)] max-w-[680px] border-t border-cream/25 pt-[clamp(24px,3vw,32px)]">
            <h3 className="font-display text-[clamp(22px,2.2vw,26px)] font-medium text-bone">{P.launch.pricing.title}</h3>
            <p className="mt-2.5 font-sans text-[15px] leading-[1.62] text-bone/80">{P.launch.pricing.body}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Safety */}
      <Section tone="bone">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.safety.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.safety.headline} />
            </h2>
            <p className="mt-7 max-w-[720px] border-l-[3px] border-amber pl-5 font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-forest-deep">
              {P.safety.quote}
            </p>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,56px)] grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {P.safety.items.map((s) => (
              <div key={s.title} className="border-t border-bark/20 pt-5">
                <h3 className="font-display text-[clamp(20px,1.8vw,22px)] font-semibold text-forest-deep">{s.title}</h3>
                <p className="mt-2 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Parent communication */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[720px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.parents.eyebrow}
            </Eyebrow>
            <h2 className={`${h2sm} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.parents.headline} />
            </h2>
            <p className={`mt-6 text-pretty ${lead}`}>{P.parents.body}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Why boys: Gabe's experience, never an admissions policy. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {P.whyBoys.eyebrow}
            </Eyebrow>
            <h2 className={`${h2sm} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={P.whyBoys.headline} />
            </h2>
            {P.whyBoys.paragraphs.map((para, i) => (
              <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} text-pretty font-sans text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-[#4A4234]`}>
                {para}
              </p>
            ))}
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={P.cta.headline} body={P.cta.body} cta={P.cta.primary} />
    </>
  );
}
