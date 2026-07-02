import { forBoys } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";

/**
 * For boys. What a season gives him, as six plain outcomes in an editorial
 * two-column list: an amber waymark dot, the outcome, one line of how it
 * shows up. Restrained on purpose after the field-guide cards above.
 */
export default function ForBoys() {
  return (
    <section className="bg-bone py-[clamp(72px,12vw,130px)]">
      <Container>
        <div className="grid gap-[clamp(40px,6vw,72px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-amber-deep">
              {forBoys.eyebrow}
            </Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
              <RichText lines={forBoys.headline} />
            </h2>
            <p className="mt-6 max-w-[440px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-[#4A4234]">
              {forBoys.lead}
            </p>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 gap-x-[clamp(24px,3vw,44px)] gap-y-[clamp(28px,3.5vw,40px)] self-center sm:grid-cols-2"
          >
            {forBoys.outcomes.map((outcome) => (
              <div key={outcome.title} className="relative pl-7">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full bg-amber shadow-[0_0_0_4px_rgba(217,138,58,0.18)]"
                />
                <h3 className="font-display text-[clamp(1.2rem,1.7vw,22px)] font-semibold tracking-[-0.005em] text-forest-deep">
                  {outcome.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-[1.6] text-[#5A5142]">
                  {outcome.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
