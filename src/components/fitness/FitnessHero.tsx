import { fitnessPage as F } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Contours from "@/components/ui/Contours";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import PhotoSlot from "@/components/fitness/PhotoSlot";

/**
 * Fitness hero. Photo-forward, since a fitness page sells the adult on Gabe:
 * copy on the left with the two CTAs (a consult is the front door, seeing the
 * plans is the quiet second step), a coaching-photo placeholder on the right.
 * Built from the shared primitives and the same ridgeline / contour scene the
 * interior PageHero uses, so it opens inside the same day on the trail.
 */
export default function FitnessHero() {
  const { hero } = F;

  return (
    <header className="relative flex min-h-[clamp(540px,82vh,760px)] items-center overflow-hidden bg-forest-deep pb-[clamp(72px,10vw,120px)] pt-[150px] text-bone">
      {/* Layered ridges along the base, drifting on scroll (behind the copy). */}
      <Parallax y={14} className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        <Ridgeline preset="flagship" opacity={0.5} className="h-[clamp(160px,22vw,300px)]" />
      </Parallax>
      {/* Contour watermark, faint cream. */}
      <Contours
        color="#F2C879"
        opacity={0.08}
        className="pointer-events-none absolute -left-[6%] top-[10%] z-0 h-[70%] w-[48%]"
      />

      <Container className="relative z-[2]">
        <div className="grid items-center gap-[clamp(40px,6vw,72px)] lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Eyebrow rule className="mb-7 text-cream">
              {hero.eyebrow}
            </Eyebrow>
            <SplitReveal
              as="h1"
              weightFrom={330}
              className="max-w-[14ch] font-display text-[clamp(2.75rem,7vw,86px)] font-[360] leading-[0.96] tracking-[-0.02em] text-bone [&_em]:text-cream"
            >
              <RichText lines={hero.headline} />
            </SplitReveal>
            <Reveal stagger delay={0.4}>
              <p className="mt-7 max-w-[560px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.55] text-bone/85">
                {hero.sub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Button variant="primary" href={hero.primary.href} arrow>
                  {hero.primary.label}
                </Button>
                <Button variant="ghost" href={hero.secondary.href} arrow className="text-bone">
                  {hero.secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Coaching-photo placeholder. Hidden on small screens so the copy
              carries the hero on mobile, shown from lg up. */}
          <Reveal className="hidden lg:block">
            <PhotoSlot label={hero.photoLabel} className="aspect-[4/5] w-full" />
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
