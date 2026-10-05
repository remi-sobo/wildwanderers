import Image from "next/image";
import { homeCopy } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";

const hero = homeCopy.hero;

/**
 * The homepage hero: a full-bleed golden-hour photo on bone, so the homepage
 * speaks for the whole brand. The nav sits on bone above it (solid from the
 * top here), so the photo starts 72px down.
 *
 * From 820px a left-to-right bone wash keeps the copy legible over open sky,
 * with Gabe and his son held in the right third. Below 820px the layout is art
 * directed instead: the photo becomes its own 4:3 block and the copy sits
 * below it on plain bone, never over the photo. No dark scrim, no ridgeline.
 */
export default function HomeHero() {
  return (
    <section className="relative mt-[72px] bg-bone">
      <div className="relative flex flex-col overflow-hidden min-[820px]:min-h-[clamp(620px,calc(100svh-80px),720px)] min-[820px]:flex-row min-[820px]:items-center">
        <div className="relative aspect-[4/3] w-full min-[820px]:absolute min-[820px]:inset-0 min-[820px]:aspect-auto">
          <Image
            src={hero.photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_50%] min-[820px]:object-[68%_55%]"
          />
          {/* Bone wash, wide layout only. */}
          <div
            className="pointer-events-none absolute inset-0 hidden min-[820px]:block"
            style={{
              background:
                "linear-gradient(90deg,rgba(246,241,231,.94) 0%,rgba(246,241,231,.84) 26%,rgba(246,241,231,.5) 40%,rgba(246,241,231,0) 54%)",
            }}
          />
          {/* Fade into bone at the bottom so the photo meets the next section. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-bone to-bone/0 min-[820px]:h-[90px]" />
        </div>

        <div className="relative z-[2] w-full pb-14 pt-2 min-[820px]:py-0">
          <Container>
            <Eyebrow className="mb-[22px] text-amber-deep">{hero.eyebrow}</Eyebrow>
            <SplitReveal
              as="h1"
              weightFrom={330}
              className="max-w-[14ch] font-display text-[clamp(44px,5.6vw,82px)] font-[360] leading-[0.96] tracking-[-0.022em] text-forest-deep min-[820px]:max-w-[580px] [&_em]:text-bark"
            >
              <RichText lines={hero.headline} />
            </SplitReveal>
            <Reveal stagger delay={0.4}>
              <p className="mt-6 max-w-[480px] text-pretty font-sans text-[clamp(16px,1.25vw,18px)] leading-[1.58] text-[#3A3226]">
                {hero.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-[26px] gap-y-3.5">
                <Button variant="primary" href={hero.primary.href} arrow>
                  {hero.primary.label}
                </Button>
                <Button variant="ghost" href={hero.secondary.href} arrow className="text-forest-deep">
                  {hero.secondary.label}
                </Button>
              </div>
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
