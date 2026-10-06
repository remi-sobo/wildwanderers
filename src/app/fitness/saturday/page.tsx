import type { Metadata } from "next";
import { saturdayCopy as S, popupDates } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import FitnessTabs from "@/components/fitness/FitnessTabs";
import SaturdayForm from "@/components/fitness/SaturdayForm";
import { FormCard } from "@/components/forms/fields";

export const metadata: Metadata = {
  title: "Saturday Popups · Wild Wanderers Fitness",
  description:
    "Group workouts with Gabe on four Saturdays this fall. All levels welcome. $25 a session. Join the pop-up list and the spot comes by email before each Saturday.",
};

/**
 * Saturday Popups. One job: join the list. The dates show for display only,
 * the mechanic is said plainly, and the location never appears on the site;
 * it travels only in the email before each Saturday. /saturday 301s here.
 */
export default function SaturdayPage() {
  return (
    <>
      <PageHero eyebrow={S.hero.eyebrow} headline={S.hero.headline} sub={S.hero.sub} />
      <FitnessTabs />

      <Section tone="sand" id="saturday">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,80px)] lg:grid-cols-2">
            <Reveal stagger>
              <h2 className="font-display text-[clamp(26px,2.8vw,32px)] font-medium text-forest-deep">{S.datesTitle}</h2>
              <div className="mt-4 grid grid-cols-4 border-y border-bark/20">
                {popupDates.map((d) => (
                  <div key={d.month + d.day} className="pb-4 pt-[18px]">
                    <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7A7264]">{d.month}</div>
                    <div className="font-display text-[clamp(40px,4.4vw,56px)] font-normal leading-none tracking-[-0.02em] text-forest-deep">
                      {d.day}
                    </div>
                  </div>
                ))}
              </div>

              <dl className="mt-7">
                {S.details.map((x) => (
                  <div key={x.label} className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-bark/15 py-3.5">
                    <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">{x.label}</dt>
                    <dd className="font-sans text-[15px] leading-[1.55] text-[#4A4234]">
                      {x.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-10 font-display text-[clamp(26px,2.8vw,32px)] font-medium text-forest-deep">{S.howTitle}</h2>
              <ol className="mt-4 grid list-decimal gap-2.5 pl-5 font-sans text-[15px] leading-[1.6] text-[#4A4234]">
                {S.howSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 font-sans text-[14px] leading-[1.6] text-[#5A5142]">{S.locationNote}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <FormCard>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-[clamp(52px,5vw,68px)] font-normal leading-none tracking-[-0.02em] text-forest-deep">
                    {S.offer.price}
                  </span>
                  <span className="font-sans text-[15px] text-[#5A5142]">{S.offer.unit}</span>
                </div>
                <p className="mt-2.5 font-sans text-[16px] leading-[1.5] text-bark">{S.offer.line}</p>
                <div className="my-7 h-px bg-ink/[.12]" />
                <SaturdayForm />
              </FormCard>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
