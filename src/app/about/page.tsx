import type { Metadata } from "next";
import Image from "next/image";
import { aboutCopy as A } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Contours from "@/components/ui/Contours";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About · Wild Wanderers",
  description:
    "Why Gabe Brewer started Wild Wanderers on the Baylands, what the program believes, and what is being built before launch.",
};

const h2 = "font-display font-[350] leading-[1.04] tracking-[-0.018em]";
const body = "font-sans text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-[#4A4234]";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={A.hero.eyebrow} headline={A.hero.headline} sub={A.hero.sub} />

      {/* From Gabe, in his own words, beside the family photo. */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {A.story.eyebrow}
              </Eyebrow>
              {A.story.paragraphs.map((para, i) => (
                <p key={i} className={`${i > 0 ? "mt-[18px]" : ""} max-w-[540px] text-pretty ${body}`}>
                  {para}
                </p>
              ))}
            </Reveal>
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-forest">
                <Image
                  src={A.story.photo}
                  alt={A.story.photoAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[50%_60%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What we believe */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {A.beliefs.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-[clamp(32px,4.4vw,52px)] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={A.beliefs.headline} />
            </h2>
          </Reveal>
          <Reveal stagger className="mt-[clamp(40px,6vw,56px)] grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {A.beliefs.items.map((p) => (
              <div key={p.title} className="border-t border-bark/20 pb-[26px] pt-[22px]">
                <h3 className="font-display text-[20px] font-semibold text-forest-deep">{p.title}</h3>
                <p className="mt-1.5 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Kyezen */}
      <Section tone="forest">
        <Contours color="#F2C879" opacity={0.08} className="pointer-events-none absolute -right-[10%] top-0 z-0 h-full w-[55%]" />
        <Container className="relative z-[2]">
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-cream">
              {A.kyezen.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-[clamp(34px,4.6vw,56px)] tracking-[-0.02em] text-bone [&_em]:text-cream`}>
              <RichText lines={A.kyezen.headline} />
            </h2>
            <p className="mt-7 max-w-[600px] text-pretty font-sans text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-bone/85">
              {A.kyezen.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Before launch */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {A.beforeLaunch.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-[clamp(32px,4.4vw,48px)] text-forest-deep [&_em]:text-bark`}>
              <RichText lines={A.beforeLaunch.headline} />
            </h2>
            <p className="mt-6 max-w-[620px] text-pretty font-sans text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-[#4A4234]">
              {A.beforeLaunch.body}
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCta headline={A.cta.headline} body={A.cta.body} cta={A.cta.primary} />
    </>
  );
}
