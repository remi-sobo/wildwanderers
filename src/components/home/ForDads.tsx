import { forDads } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";

/**
 * For Dads. The walk-beside ethos. GATED on whether the fellowship is live, so
 * this is framed as forming, with a low-commitment way in, not a claim that it
 * is running. Dark section to carry the "the men" theme. Built in-system.
 */
export default function ForDads() {
  return (
    <section className="bg-forest-deep py-[clamp(72px,12vw,130px)] text-bone">
      <Container>
        <Reveal stagger className="max-w-[680px]">
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <Eyebrow rule className="text-cream">
              {forDads.eyebrow}
            </Eyebrow>
            <span className="rounded-full border border-cream/35 px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.2em] text-cream/90">
              {forDads.flag}
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.02em] text-bone [&_em]:text-cream">
            <RichText lines={forDads.headline} />
          </h2>
          <p className="mb-9 mt-7 font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-bone/85">
            {forDads.body}
          </p>
          <Button variant="ghost" href={forDads.cta.href} className="text-bone">
            {forDads.cta.label} &rarr;
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
