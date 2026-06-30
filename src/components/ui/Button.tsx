import { clsx } from "@/lib/clsx";

type Variant = "primary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  /** Render an anchor when provided, otherwise a button. */
  href?: string;
  className?: string;
};

/**
 * The two button styles from the mock.
 *
 * primary: amber pill, near-black ink text, soft warm shadow. Amber is the
 *   only action color on the site, so primary is the only thing that shouts.
 * ghost: low-commitment underlined link. Inherits its text color from the
 *   surrounding section (bone on dark hero in the mock), so set a color
 *   utility on the parent or via className.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className,
}: ButtonProps) {
  const base = "font-sans font-semibold text-[15px] inline-flex items-center transition-colors";

  const styles: Record<Variant, string> = {
    primary: clsx(
      "rounded-full bg-amber px-[30px] py-4 text-ink hover:bg-amber-deep",
      "shadow-[0_12px_34px_rgba(120,68,16,0.34)]",
    ),
    ghost: "gap-2 border-b-[1.5px] border-current/50 pb-[3px] hover:border-current",
  };

  const cls = clsx(base, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return <button className={cls}>{children}</button>;
}
