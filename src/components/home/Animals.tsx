import { animalsSection } from "@/content/home";
import { animals } from "@/content/animals";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";

/**
 * The Baylands animals. A teaser row of totems, each with its power. Cards
 * stagger up on enter and lift a touch on hover. Background is sand, the warm
 * alternate section. This is the signature no other program has, so it gets
 * real space.
 */
export default function Animals() {
  return (
    <section className="bg-sand py-[clamp(72px,12vw,130px)]">
      <Container>
        <div className="mb-[clamp(40px,6vw,64px)] flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow rule className="mb-7">
              {animalsSection.eyebrow}
            </Eyebrow>
            <h2 className="max-w-[560px] font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-amber-deep">
              <RichText lines={animalsSection.headline} />
            </h2>
          </div>
          <a
            href={animalsSection.allLink.href}
            className="shrink-0 self-start whitespace-nowrap border-b-[1.5px] border-forest-deep pb-[3px] font-sans text-[15px] font-semibold text-forest-deep transition-opacity hover:opacity-70 sm:self-auto"
          >
            {animalsSection.allLink.label} &rarr;
          </a>
        </div>

        <Reveal
          stagger
          className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {animals.map((animal) => (
            <article
              key={animal.name}
              className="rounded-[18px] border border-bark/15 bg-bone p-[30px] pt-[34px] transition-transform duration-300 hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 48 54"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-[26px] h-[54px] text-forest"
                aria-hidden="true"
              >
                {animal.icon.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </svg>
              <h3 className="mb-1.5 font-display text-[24px] font-semibold text-ink">
                {animal.name}
              </h3>
              <div className="mb-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                {animal.power}
              </div>
              <p className="font-sans text-[13.5px] leading-[1.55] text-[#5A5142]">
                {animal.line}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
