import { animalsSection } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import FieldGuide from "@/components/home/FieldGuide";

/**
 * The Baylands animals. The signature no other program has, presented as a
 * field guide: four specimen cards (the FieldGuide island) with the
 * memory-anchor line naming what the system is for. Sand, the warm alternate
 * section.
 */
export default function Animals() {
  return (
    <section className="bg-sand py-[clamp(72px,12vw,130px)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow rule className="mb-7">
              {animalsSection.eyebrow}
            </Eyebrow>
            <h2 className="max-w-[560px] font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-amber-deep">
              <RichText lines={animalsSection.headline} />
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,18px)] leading-[1.6] text-[#4A4234]">
              {animalsSection.note}
            </p>
          </div>
          <a
            href={animalsSection.allLink.href}
            className="group/btn link-underline shrink-0 self-start whitespace-nowrap font-sans text-[15px] font-semibold text-forest-deep sm:self-auto"
          >
            {animalsSection.allLink.label}{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>

        <FieldGuide />
      </Container>
    </section>
  );
}
