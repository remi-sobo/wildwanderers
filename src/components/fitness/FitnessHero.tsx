import Image from "next/image";
import { fitnessCopy } from "@/content/fitness";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

const hero = fitnessCopy.hero;

/**
 * Fitness hero: forest-deep with the ridgeline along the base. Copy on the
 * left with one action (the free consult), Gabe training outdoors on the
 * right in a 4:5 frame.
 */
export default function FitnessHero() {
  return (
    <header className="relative flex min-h-[clamp(560px,84vh,780px)] items-center overflow-hidden bg-forest-deep pb-[clamp(72px,10vw,120px)] pt-[150px] text-bone">
      <Parallax y={14} className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        <Ridgeline preset="flagship" opacity={0.5} className="h-[clamp(160px,22vw,300px)]" />
      </Parallax>

      <Container className="relative z-[2]">
        <div className="grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
          <div>
            <Eyebrow rule className="mb-7 text-cream">
              {hero.eyebrow}
            </Eyebrow>
            <SplitReveal
              as="h1"
              weightFrom={330}
              className="max-w-[16ch] font-display text-[clamp(40px,6vw,76px)] font-[360] leading-none tracking-[-0.02em] text-bone [&_em]:text-cream"
            >
              <RichText lines={hero.headline} />
            </SplitReveal>
            <Reveal stagger delay={0.4}>
              <p className="mt-7 max-w-[540px] text-pretty font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-bone/85">
                {hero.sub}
              </p>
              <p className="mt-3.5 font-display text-[18px] italic text-cream">{hero.tagline}</p>
              <div className="mt-9">
                <Button variant="primary" href={hero.primary.href} arrow>
                  {hero.primary.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-[20px] bg-forest">
              <Image
                src={hero.photo}
                alt={hero.photoAlt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[42%_40%]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
