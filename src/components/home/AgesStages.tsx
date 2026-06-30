import { agesStages } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";

/**
 * Who it's for. Three stages on one trail: Notice, Practice, Belong. Editorial
 * columns with a top hairline rather than card chrome, to stay restrained next
 * to the totem cards above. Not in the mock; built in-system. Exact ages are
 * gated on Gabe, so the labels are descriptive bands for now.
 */
export default function AgesStages() {
  return (
    <section className="bg-bone py-[clamp(72px,12vw,130px)]">
      <Container>
        <Reveal stagger>
          <Eyebrow rule className="mb-7">
            {agesStages.eyebrow}
          </Eyebrow>
          <h2 className="max-w-[840px] font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
            <RichText lines={agesStages.headline} />
          </h2>
          <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
            {agesStages.lead}
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-[clamp(48px,7vw,72px)] grid grid-cols-1 gap-x-[26px] gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {agesStages.stages.map((stage) => (
            <div key={stage.name} className="border-t border-bark/20 pt-7">
              <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                {stage.label}
              </div>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,2.6vw,32px)] font-medium text-forest-deep">
                {stage.name}
              </h3>
              <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">
                {stage.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
