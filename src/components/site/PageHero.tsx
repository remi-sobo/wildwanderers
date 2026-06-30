import type { HeadlineLine } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Contours from "@/components/ui/Contours";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

/**
 * Interior-page hero. A short cinematic header that uses the layered ridgeline
 * and contour system as the illustration device (the spec's sanctioned
 * stand-in until the photo library is deep). The global atmosphere, horizon and
 * sun layer over it, so every interior page opens inside the same day on the
 * trail. Headline reveals line by line with the Fraunces weight settling.
 */
export default function PageHero({
  eyebrow,
  headline,
  sub,
}: {
  eyebrow: string;
  headline: HeadlineLine[];
  sub?: string;
}) {
  return (
    <header className="relative flex min-h-[clamp(440px,68vh,680px)] items-end overflow-hidden bg-forest-deep pb-[clamp(56px,8vw,96px)] pt-[150px] text-bone">
      {/* Layered ridges along the base, drifting on scroll. */}
      <Parallax y={14} className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        <Ridgeline preset="flagship" opacity={0.55} className="h-[clamp(180px,26vw,340px)]" />
      </Parallax>
      {/* Contour watermark, faint cream. */}
      <Contours
        color="#F2C879"
        opacity={0.09}
        className="pointer-events-none absolute -right-[8%] top-[8%] z-0 h-[80%] w-[56%]"
      />

      <Container className="relative z-[2]">
        <Eyebrow rule className="mb-7 text-cream">
          {eyebrow}
        </Eyebrow>
        <SplitReveal
          as="h1"
          weightFrom={330}
          className="max-w-[15ch] font-display text-[clamp(2.75rem,7vw,86px)] font-[360] leading-[0.96] tracking-[-0.02em] text-bone [&_em]:text-cream"
        >
          <RichText lines={headline} />
        </SplitReveal>
        {sub && (
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-[560px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.55] text-bone/85">
              {sub}
            </p>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
