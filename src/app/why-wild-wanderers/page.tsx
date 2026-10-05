import type { Metadata } from "next";
import { whyCopy as W } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Why Wild Wanderers",
  description:
    "Why Wild Wanderers gives boys regular time each week to move, get outside, and build relationships, what happens when the weather changes, and why the Baylands.",
};

const h2 = "font-display text-[clamp(30px,4vw,46px)] font-[350] leading-[1.06] tracking-[-0.018em] text-forest-deep [&_em]:text-bark";
const body = "mt-6 max-w-[620px] text-pretty font-sans text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[#4A4234]";

/** Why Wild Wanderers. Replaces The Movement (which now 301s here). */
export default function WhyWildWanderersPage() {
  return (
    <>
      <PageHero eyebrow={W.hero.eyebrow} headline={W.hero.headline} sub={W.hero.sub} />

      {/* Movement, Nature, Connection */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="grid gap-6 md:grid-cols-3">
            {W.pillars.map((p) => (
              <div key={p.name} className="rounded-[18px] border border-bark/[.14] bg-[#FDFBF5] px-7 py-[30px]">
                <h2 className="font-display text-[26px] font-semibold text-forest-deep">{p.name}</h2>
                <p className="mt-3 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Weather: the real cancellation criteria and the noon call. */}
      <Section tone="sand">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {W.weather.eyebrow}
            </Eyebrow>
            <h2 className={h2}>
              <RichText lines={W.weather.headline} />
            </h2>
            <p className={body}>{W.weather.body}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Why the Baylands */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {W.location.eyebrow}
            </Eyebrow>
            <h2 className={h2}>
              <RichText lines={W.location.headline} />
            </h2>
            <p className={body}>{W.location.body}</p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={W.cta.headline} body={W.cta.body} cta={W.cta.primary} />
    </>
  );
}
