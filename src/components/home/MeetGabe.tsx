import { meetGabe } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Reveal from "@/components/motion/Reveal";

/**
 * Meet Gabe. The founder section. The real portrait is gated, so the ridgeline
 * illustration stands in (the spec's sanctioned fallback) with an honest
 * caption. Bio is on-voice placeholder, no invented credentials. Built
 * in-system, sand background to stay warm.
 */
export default function MeetGabe() {
  return (
    <section className="bg-sand py-[clamp(72px,12vw,130px)]">
      <Container>
        <div className="grid items-center gap-[clamp(40px,6vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait placeholder: ridgeline fallback until a real photo lands. */}
          <Reveal className="order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-gradient-to-b from-forest to-forest-deep">
              <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-cream/80" />
              <Ridgeline
                preset="flagship"
                className="absolute inset-x-0 bottom-0 h-[55%]"
              />
              <span className="absolute bottom-5 left-6 font-sans text-[11px] uppercase tracking-[0.18em] text-bone/70">
                {meetGabe.photoCaption}
              </span>
            </div>
          </Reveal>

          <Reveal stagger className="order-2">
            <Eyebrow rule className="mb-7">
              {meetGabe.eyebrow}
            </Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
              <RichText lines={meetGabe.headline} />
            </h2>
            <p className="mt-7 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.62] text-[#4A4234]">
              {meetGabe.body}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
