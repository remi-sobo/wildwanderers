import { movement } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Reveal from "@/components/motion/Reveal";

/**
 * Movement manifesto (the thesis). The world went still; we were built to move.
 * Reveals on enter, then the layered ridge band bridges down into the dark
 * flagship section. The band's deepest layer is forest-deep, so it meets the
 * flagship background as one continuous ridge.
 */
export default function Movement() {
  return (
    <section className="bg-bone pt-[clamp(72px,12vw,130px)]">
      <Container>
        <Reveal stagger>
          <Eyebrow rule className="mb-7 text-amber-deep">
            {movement.eyebrow}
          </Eyebrow>
          <h2 className="max-w-[1000px] font-display text-[clamp(2.25rem,5.4vw,66px)] font-[350] leading-[1.02] tracking-[-0.02em] text-forest-deep [&_em]:text-bark">
            <RichText lines={movement.headline} />
          </h2>
          <p className="mt-7 max-w-[640px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
            {movement.body}
          </p>
        </Reveal>
      </Container>

      <Ridgeline preset="band" className="mt-[clamp(48px,6vw,74px)] h-[clamp(96px,10vw,150px)]" />
    </section>
  );
}
