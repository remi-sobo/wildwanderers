import { animalsSection } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import AnimalTrail from "@/components/home/AnimalTrail";

/**
 * The Baylands animals. The signature no other program has, so it gets real
 * space and real craft: the four totems sit along a continuous ridgeline (the
 * AnimalTrail island) rather than in flat cards. Background is sand, the warm
 * alternate section.
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
          </div>
          <a
            href={animalsSection.allLink.href}
            className="shrink-0 self-start whitespace-nowrap border-b-[1.5px] border-forest-deep pb-[3px] font-sans text-[15px] font-semibold text-forest-deep transition-opacity hover:opacity-70 sm:self-auto"
          >
            {animalsSection.allLink.label} &rarr;
          </a>
        </div>

        <AnimalTrail />
      </Container>
    </section>
  );
}
