import { clsx } from "@/lib/clsx";

type Tone = "bone" | "sand" | "forest";

const TONES: Record<Tone, string> = {
  bone: "bg-bone text-ink",
  sand: "bg-sand text-ink",
  forest: "bg-forest-deep text-bone",
};

/**
 * Section shell: the page's vertical rhythm and background tone in one place,
 * so every block down a page keeps the same padding and the alternating
 * bone / sand / forest cadence reads as authored. Full-bleed children
 * (ridgelines, contours) position against the `relative` box.
 */
export default function Section({
  children,
  tone = "bone",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  /** Anchor id, so in-page links (e.g. "See the plans") can target a section. */
  id?: string;
}) {
  return (
    <section id={id} className={clsx("relative overflow-hidden py-[clamp(72px,12vw,130px)]", TONES[tone], className)}>
      {children}
    </section>
  );
}
