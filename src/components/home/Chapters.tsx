import { chaptersSection } from "@/content/home";
import { chapters } from "@/content/chapters";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Contours from "@/components/ui/Contours";
import Ridgeline from "@/components/ui/Ridgeline";
import Reveal from "@/components/motion/Reveal";

/**
 * The chapter model. Wild Wanderers is the movement; the Baylands is Chapter
 * One. Sits between Movement and Flagship so it carries the place-vision and
 * the Flagship can stay about the program.
 *
 * Light section, in-system: the contour watermark reads like a quiet map, the
 * Baylands is the one open chapter, and the rest sit in an "on the horizon" row,
 * clearly aspirational (never dated, never a commitment, per CLAUDE.md). It ends
 * on the layered ridge band, the bone-to-dark bridge into the flagship section.
 */
export default function Chapters() {
  const open = chapters.find((c) => c.status === "open");
  const horizon = chapters.filter((c) => c.status === "horizon");

  return (
    <section className="relative overflow-hidden bg-bone pt-[clamp(72px,12vw,130px)]">
      {/* Contour watermark, faint bark, read as a map behind the copy. */}
      <Contours
        color="#6B4A2E"
        opacity={0.06}
        className="pointer-events-none absolute -right-[6%] top-[4%] z-0 h-[80%] w-[54%]"
      />

      <Container className="relative z-[1]">
        <Reveal stagger className="max-w-[860px]">
          <Eyebrow rule className="mb-7 text-amber-deep">
            {chaptersSection.eyebrow}
          </Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4.6vw,56px)] font-[350] leading-[1.03] tracking-[-0.02em] text-forest-deep [&_em]:text-bark">
            <RichText lines={chaptersSection.headline} />
          </h2>
          <p className="mt-7 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
            {chaptersSection.body}
          </p>
        </Reveal>

        {/* The one open chapter, given weight. */}
        {open && (
          <Reveal className="mt-[clamp(40px,6vw,60px)]">
            <div className="rounded-[20px] border border-bark/15 bg-sand/60 p-[clamp(28px,4vw,44px)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
                  <span className="h-[7px] w-[7px] rounded-full bg-fern" />
                  Open now
                </span>
                {open.place && (
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-bark/70">
                    {open.place}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,40px)] font-medium text-forest-deep">
                {open.name}
              </h3>
              <p className="mt-3 max-w-[560px] font-sans text-[clamp(1rem,1.35vw,18px)] leading-[1.6] text-[#4A4234]">
                {open.blurb}
              </p>
            </div>
          </Reveal>
        )}

        {/* The horizon chapters, quiet and clearly aspirational. */}
        <Reveal stagger className="mt-[clamp(44px,6vw,64px)]">
          <Eyebrow className="mb-7 text-bark/70">{chaptersSection.horizonLabel}</Eyebrow>
          <div className="grid grid-cols-1 gap-x-[26px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {horizon.map((c) => (
              <div key={c.name} className="border-t border-bark/20 pt-5">
                <div className="flex items-center gap-2">
                  <span className="h-[6px] w-[6px] rounded-full border border-bark/40" />
                  <h4 className="font-display text-[clamp(1.4rem,2.2vw,24px)] font-medium text-forest-deep/85">
                    {c.name}
                  </h4>
                </div>
                <p className="mt-2.5 font-sans text-[13.5px] leading-[1.6] text-[#5A5142]">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Motto strip. "Run · Jump · Climb · Tumble · Wander · Become." */}
        <Reveal className="mt-[clamp(48px,7vw,80px)] border-y border-bark/15 py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
            {chaptersSection.motto.map((word, i) => (
              <li key={word} className="flex items-center gap-x-5">
                {i > 0 && <span aria-hidden="true" className="text-bark/40">&middot;</span>}
                <span className="font-display text-[clamp(1.1rem,2vw,22px)] italic text-forest-deep">
                  {word}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      {/* The bone-to-dark ridge bridge into the flagship section. */}
      <Ridgeline preset="band" className="mt-[clamp(48px,6vw,74px)] h-[clamp(96px,10vw,150px)]" />
    </section>
  );
}
