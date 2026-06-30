import { clsx } from "@/lib/clsx";

type Variant = "primary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  /** Render an anchor when provided, otherwise a button. */
  href?: string;
  /** Append a nudging arrow that slides on hover. */
  arrow?: boolean;
  className?: string;
};

/**
 * The two button styles from the mock, with Phase 6 micro-interactions.
 *
 * primary: amber pill, near-black ink text, soft warm shadow. On hover an
 *   amber-deep fill wipes in from the left (transform only) and the arrow
 *   nudges. Amber is the only action color, so primary is the only shout.
 * ghost: low-commitment link whose underline draws in from the left on hover
 *   rather than snapping. Inherits its text color from the section.
 *
 * The arrow and underline animate transform only; nothing here animates layout.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  arrow = false,
  className,
}: ButtonProps) {
  const label = (
    <span className="relative z-[1] inline-flex items-center gap-2">
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </span>
  );

  let inner: React.ReactNode;
  let variantCls: string;

  if (variant === "primary") {
    variantCls = clsx(
      "group/btn relative isolate overflow-hidden rounded-full bg-amber px-[30px] py-4 text-ink",
      "shadow-[0_12px_34px_rgba(120,68,16,0.34)]",
    );
    inner = (
      <>
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-[1] origin-left scale-x-0 bg-amber-deep transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
        />
        {label}
      </>
    );
  } else {
    variantCls = "group/btn relative inline-flex items-center pb-[3px]";
    inner = (
      <>
        {label}
        {/* base hairline + the drawn underline over it */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full bg-current/40" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
        />
      </>
    );
  }

  const base = "font-sans font-semibold text-[15px] inline-flex items-center transition-colors";
  const cls = clsx(base, variantCls, className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return <button className={cls}>{inner}</button>;
}
