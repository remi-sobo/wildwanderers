import type { Metadata } from "next";
import Image from "next/image";
import { dadsCopy as D } from "@/content/pages";
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
    "Dads who want to get involved can apply to serve as volunteer mentors. How screening and training work for every adult on the trail.",
};

const h2 = "font-display font-[350] leading-[1.04] tracking-[-0.018em]";

/**
 * For Dads. Dads can apply to be screened volunteer mentors. Never say or
 * imply that dads attend every session; that is still Gabe's open question.
 */
export default function ForDadsPage() {
  return (
    <>
      <PageHero eyebrow={D.hero.eyebrow} headline={D.hero.headline} sub={D.hero.sub} />

      {/* Getting involved */}
      <Section tone="bone">
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-forest">
                <Image
                  src={D.involved.photo}
                  alt={D.involved.photoAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[50%_55%]"
                />
              </div>
            </Reveal>
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {D.involved.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-[clamp(32px,4.4vw,52px)] text-forest-deep [&_em]:text-bark`}>
                <RichText lines={D.involved.headline} />
              </h2>
              <div className="mt-8">
                {D.involved.items.map((d) => (
                  <div key={d.title} className="border-t border-bark/20 py-5">
                    <h3 className="font-display text-[21px] font-semibold text-forest-deep">{d.title}</h3>
                    <p className="mt-1.5 max-w-[480px] font-sans text-[15px] leading-[1.6] text-[#5A5142]">{d.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Screening and training */}
      <Section tone="sand">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {D.screening.eyebrow}
              </Eyebrow>
              <h2 className={`${h2} text-[clamp(32px,4.4vw,48px)] text-forest-deep [&_em]:text-bark`}>
                <RichText lines={D.screening.headline} />
              </h2>
              <p className="mt-6 max-w-[480px] font-sans text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-[#4A4234]">
                {D.screening.intro}
              </p>
            </Reveal>
            <Reveal stagger className="grid gap-7">
              {D.screening.items.map((it) => (
                <div key={it.title}>
                  <h3 className="font-display text-[21px] font-semibold text-forest-deep">{it.title}</h3>
                  <p className="mt-2 font-sans text-[15px] leading-[1.62] text-[#4A4234]">{it.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCta headline={D.cta.headline} body={D.cta.body} cta={D.cta.primary} />
    </>
  );
}
