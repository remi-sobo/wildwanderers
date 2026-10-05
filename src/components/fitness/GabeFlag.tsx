import { clsx } from "@/lib/clsx";

/**
 * A visible "[Gabe to confirm: ...]" placeholder. It shows on the page on
 * purpose so nothing unconfirmed passes for fact; every one is resolved with
 * Gabe, or the line removed, before launch. Nothing ships with a bracket.
 */
export default function GabeFlag({ children, className }: { children: React.ReactNode; className?: string }) {
  if (!children) return null;
  return <span className={clsx("block font-sans text-[13px] font-semibold text-amber-deep", className)}>{children}</span>;
}
