import Image from "next/image";
import { homeCopy as H } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ClosingCta from "@/components/site/ClosingCta";
import Reveal from "@/components/motion/Reveal";
import HomeHero from "@/components/home/HomeHero";

const h2 = "font-display text-[clamp(32px,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";
const body = "font-sans text-[clamp(16px,1.35vw,19px)] leading-[1.62] text-[#4A4234]";

/**
 * The homepage represents the whole brand: the photo hero, the two programs
 * (boys and adult fitness) side by side, then the boys program in brief: why
 * it exists, what a session looks like, who is with your son, and Gabe.
 */
export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Two programs, equal columns. Each card lifts a little on hover. */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="grid gap-[clamp(24px,3vw,40px)] md:grid-cols-2">
            {H.programs.map((p) => (
              <div
                key={p.photo}
                className="group flex flex-col gap-[18px] transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-forest transition-shadow duration-300 group-hover:shadow-[0_1px_2px_rgba(42,33,24,.05),0_14px_34px_rgba(42,33,24,.14)]">
                  <Image
                    src={p.photo}
                    alt={p.photoAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: p.objectPosition }}
                  />
                </div>
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-deep">
                  {p.eyebrow}
                </div>
                <h2 className="font-display text-[clamp(30px,3.4vw,42px)] font-normal leading-[1.05] text-forest-deep [&_em]:text-bark">
                  <RichText lines={p.headline} />
                </h2>
                <p className="max-w-[520px] font-sans text-[16px] leading-[1.62] text-[#4A4234]">{p.body}</p>
                <div>
                  <Button variant="ghost" href={p.cta.href} arrow className="text-forest-deep">
                    {p.cta.label}
                  </Button>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Why it exists */}
      <Section tone="bone">
        <Container>
          <Reveal stagger className="max-w-[760px]">
            <Eyebrow rule className="mb-7 text-amber-deep">
              {H.whyExists.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={H.whyExists.headline} />
            </h2>
            <p className={`mt-7 max-w-[620px] text-pretty ${body}`}>{H.whyExists.body}</p>
            <div className="mt-7">
              <Button variant="ghost" href={H.whyExists.cta.href} arrow className="text-forest-deep">
                {H.whyExists.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* A session: a four-step horizontal timeline, then the Field Guide. */}
      <Section tone="sand">
        <Container>
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {H.session.eyebrow}
            </Eyebrow>
            <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
              <RichText lines={H.session.headline} />
            </h2>
          </Reveal>
          <Reveal
            stagger
            className="relative mt-[clamp(44px,6vw,64px)] grid gap-y-11 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* The dashed bark trail behind the dots (out of flow, so it takes
                no grid cell). Only drawn when the four steps sit in one row. */}
            <div
              aria-hidden="true"
              className="absolute left-[3%] right-[3%] top-1.5 hidden h-[1.5px] lg:block"
              style={{
                background: "repeating-linear-gradient(90deg,rgba(107,74,46,.5) 0 8px,transparent 8px 16px)",
              }}
            />
            {H.session.steps.map((s) => (
              <div key={s.title} className="relative pr-[30px]">
                <div className="relative mb-7 h-[13px] w-[13px] rounded-full bg-amber shadow-[0_0_0_6px_var(--color-sand)]" />
                <h3 className="mb-2.5 font-display text-[26px] font-semibold tracking-[-0.01em] text-forest-deep">
                  {s.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{s.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-[clamp(48px,7vw,72px)] flex flex-wrap items-end justify-between gap-6 border-t border-bark/20 pt-7">
            <div className="max-w-[620px]">
              <h3 className="font-display text-[22px] font-semibold text-forest-deep">{H.session.fieldGuide.title}</h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-[#5A5142]">{H.session.fieldGuide.body}</p>
            </div>
            <Button variant="ghost" href={H.session.fieldGuide.cta.href} arrow className="text-forest-deep">
              {H.session.fieldGuide.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Supervision, and the door for dads. */}
      <Section tone="forest">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-cream">
                {H.supervision.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-bone [&_em]:text-cream`}>
                <RichText lines={H.supervision.headline} />
              </h2>
              <p className="mt-7 max-w-[520px] text-pretty font-sans text-[clamp(16px,1.35vw,19px)] leading-[1.6] text-bone/85">
                {H.supervision.body}
              </p>
            </Reveal>
            <Reveal stagger delay={0.1}>
              <h3 className="font-display text-[clamp(24px,2.4vw,30px)] font-medium text-bone">
                {H.supervision.dads.title}
              </h3>
              <p className="mb-8 mt-3.5 max-w-[480px] font-sans text-[16px] leading-[1.62] text-bone/80">
                {H.supervision.dads.body}
              </p>
              <div>
                <Button variant="ghost" href={H.supervision.dads.cta.href} arrow className="text-bone">
                  {H.supervision.dads.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Meet Gabe */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,64px)] md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-forest-deep">
                <Image
                  src={H.meetGabe.photo}
                  alt={H.meetGabe.photoAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[50%_45%]"
                />
              </div>
            </Reveal>
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {H.meetGabe.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
                <RichText lines={H.meetGabe.headline} />
              </h2>
              <p className={`mt-7 max-w-[540px] text-pretty ${body}`}>{H.meetGabe.body}</p>
              <div className="mt-8">
                <Button variant="ghost" href={H.meetGabe.cta.href} arrow className="text-forest-deep">
                  {H.meetGabe.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCta headline={H.cta.headline} body={H.cta.body} cta={H.cta.primary} />
    </>
  );
}
