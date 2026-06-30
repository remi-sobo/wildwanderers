import { clsx } from "@/lib/clsx";

/**
 * Horizontal rhythm for section content. The mock uses 60px gutters on a 1440
 * canvas; this scales the gutter down on small screens and caps the content
 * width so long lines never sprawl. Full-bleed elements (ridgelines) render
 * outside this.
 */
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-[60px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
