import { clsx } from "@/lib/clsx";

type EyebrowProps = {
  children: React.ReactNode;
  /** Add the section-eyebrow leading hairline (the mock's `.seyebrow`). */
  rule?: boolean;
  /** Override the color; defaults to bark (safe on light, per spec section 3). */
  className?: string;
};

/**
 * Eyebrow label. Jakarta 12px, .28em, uppercase (the `.eyebrow` primitive in
 * globals.css). On light backgrounds default to bark; pass a color utility for
 * dark sections (e.g. amber-deep or cream).
 */
export default function Eyebrow({ children, rule = false, className }: EyebrowProps) {
  return (
    <span
      className={clsx(
        "eyebrow inline-flex items-center text-bark",
        rule && "gap-3.5 before:inline-block before:h-px before:w-[30px] before:bg-current",
        className,
      )}
    >
      {children}
    </span>
  );
}
