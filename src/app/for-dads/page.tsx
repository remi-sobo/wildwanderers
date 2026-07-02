import type { Metadata } from "next";
import { dadsPage as D } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "For Dads · Wild Wanderers",
  description:
    "The fellowship: a few good men walking the same trail as their sons. Beside, not above. Now gathering the first circle.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default function ForDadsPage() {
  return (
    <>
      <PageHero eyebrow={D.hero.eyebrow} headline={D.hero.headline} sub={D.hero.sub} />

      {/* Ethos */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {D.ethos.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={D.ethos.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {D.ethos.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* What dads do */}
      <Section tone="forest">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-cream">
              {D.does.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} max-w-[720px] text-bone [&_em]:text-cream`}>
              <RichText lines={D.does.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,60px)] grid grid-cols-1 gap-x-[26px] gap-y-10 sm:grid-cols-3">
            {D.does.items.map((it) => (
              <div key={it.title} className="border-t border-cream/25 pt-7">
                <h3 className="font-display text-[22px] font-semibold text-bone">{it.title}</h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-bone/80">{it.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* How we choose mentors — the bar a father sees before he applies. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[820px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {D.mentors.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={D.mentors.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
              {D.mentors.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The fellowship invite (now gathering) */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[720px]">
            <div className="mb-7 flex flex-wrap items-center gap-4">
              <Eyebrow rule>{D.invite.eyebrow}</Eyebrow>
              <span className="rounded-full border border-bark/30 px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-bark">
                {D.invite.flag}
              </span>
            </div>
            <h2 className={`${h2} text-forest-deep [&_em]:text-amber-deep`}>
              <RichText lines={D.invite.headline} />
            </h2>
            <p className="mt-7 font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
              {D.invite.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta
        headline={[[{ text: "Walk it " }, { text: "with him.", em: true }]]}
        body="The first circle is gathering now. Reach out and we will start the conversation."
        cta={D.invite.cta}
      />
    </>
  );
}
