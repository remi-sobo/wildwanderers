import type { Metadata } from "next";
import { aboutPage as A } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Ridgeline from "@/components/ui/Ridgeline";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About · Wild Wanderers",
  description:
    "One father, his own boys, and a hunch that the way out was outside. The why behind Wild Wanderers, honestly.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={A.hero.eyebrow} headline={A.hero.headline} sub={A.hero.sub} />

      {/* Meet Gabe — portrait placeholder (ridgeline stand-in) + bio */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-gradient-to-b from-forest to-forest-deep">
                <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-cream/80" />
                <Ridgeline preset="flagship" className="absolute inset-x-0 bottom-0 h-[55%]" />
                <span className="absolute bottom-5 left-6 font-sans text-[11px] uppercase tracking-[0.18em] text-bone/70">
                  {A.story.caption}
                </span>
              </div>
            </Reveal>
            <Reveal stagger className="order-2">
              <Eyebrow rule className="mb-7">
                {A.story.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
                <RichText lines={A.story.headline} />
              </h2>
              <p className="mt-7 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
                {A.story.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The principles: the fellowship's creed, a calm numbered list.
          Fraunces numerals so it reads editorial, the close set apart. */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7">
              {A.principles.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={A.principles.headline} />
            </h2>
            <p className="mt-6 font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {A.principles.lead}
            </p>
          </Reveal>
          <Reveal stagger className="mt-[clamp(44px,6vw,64px)] grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {A.principles.items.map((it) => (
              <div key={it.n} className="flex gap-5 border-t border-bark/25 pt-6">
                <div className="font-display text-[clamp(1.9rem,3.4vw,40px)] font-[400] italic leading-none text-amber-deep/80">
                  {it.n}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.35rem,2vw,22px)] font-semibold text-forest-deep">
                    {it.title}
                  </h3>
                  <p className="mt-2 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{it.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-[clamp(44px,6vw,60px)] max-w-[760px] border-t border-bark/25 pt-8">
            <p className="font-display text-[clamp(1.25rem,2.4vw,26px)] font-[350] italic leading-[1.4] text-forest-deep">
              {A.principles.close}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Kyezen: the one-percent, long-haul idea. Quiet and personal. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {A.kyezen.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={A.kyezen.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {A.kyezen.body}
            </p>
            <p className="mt-6 font-sans text-[14.5px] italic leading-[1.6] text-[#5A5142]">
              {A.kyezen.note}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The why — honest about the research */}
      <Section tone="forest">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-cream">
              {A.why.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-bone [&_em]:text-cream`}>
              <RichText lines={A.why.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-bone/85">
              {A.why.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* How we build — the careful-builder block, first person. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {A.careful.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={A.careful.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {A.careful.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* What he coaches toward */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7">
              {A.coaches.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[680px] text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={A.coaches.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,60px)] grid grid-cols-1 gap-x-[26px] gap-y-10 sm:grid-cols-2">
            {A.coaches.items.map((it) => (
              <div key={it.name} className="border-t border-bark/25 pt-7">
                <h3 className="font-display text-[clamp(1.6rem,2.4vw,26px)] font-medium text-forest-deep">
                  {it.name}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{it.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={A.cta.headline} body={A.cta.body} cta={A.cta.primary} />
    </>
  );
}
