import { movement } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Reveal from "@/components/motion/Reveal";

/**
 * Movement manifesto (the thesis). The world went still; we were built to move.
 * Reveals on enter, then flows into the Chapters section (both bone, so the seam
 * reads as one continuous ground). The layered ridge band that bridges down into
 * the dark flagship now lives at the foot of Chapters, past the place-vision.
 */
export default function Movement() {
  return (
    <section className="bg-bone py-[clamp(72px,12vw,130px)]">
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
    </section>
  );
}
