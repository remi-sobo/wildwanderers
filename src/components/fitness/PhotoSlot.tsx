import { clsx } from "@/lib/clsx";
import Ridgeline from "@/components/ui/Ridgeline";

/**
 * A clearly-marked photo placeholder, built from the same ridgeline fallback
 * the boys pages use for gated portraits (see MeetGabe). Real coaching photos
 * of Gabe are coming from Remi; until they land, this slot reads as an obvious
 * placeholder to swap, never as a real image.
 */
export default function PhotoSlot({
  label,
  className,
  sun = true,
}: {
  label: string;
  className?: string;
  /** The cream sun dot, on by default; off for tighter slots. */
  sun?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[20px] bg-gradient-to-b from-forest to-forest-deep",
        className,
      )}
    >
      {sun && <div className="absolute right-8 top-8 h-12 w-12 rounded-full bg-cream/80" />}
      <Ridgeline preset="flagship" className="absolute inset-x-0 bottom-0 h-[55%]" />
      <span className="absolute bottom-5 left-6 max-w-[80%] font-sans text-[11px] uppercase tracking-[0.18em] text-bone/70">
        {label}
      </span>
    </div>
  );
}
