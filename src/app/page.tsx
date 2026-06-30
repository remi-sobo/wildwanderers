import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Ridgeline from "@/components/ui/Ridgeline";

/**
 * Ring 0 placeholder. The real homepage (Hero, Thesis, Approach, CTA band) is
 * Ring 1. This dark holding screen keeps the transparent nav legible and points
 * to the design system while the spine gets built.
 */
export default function Home() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-forest-deep px-[60px]">
      <Eyebrow rule className="text-cream">
        Wild Wanderers · foundation
      </Eyebrow>
      <h1 className="mt-6 max-w-3xl font-display text-[64px] font-normal leading-[0.98] tracking-[-0.02em] text-bone">
        Born to <em className="text-cream">move.</em>
      </h1>
      <p className="mt-7 max-w-xl font-sans text-[19px] leading-[1.6] text-bone/85">
        The spine of the site is on its way. For now, the design system lives at{" "}
        <Link href="/styleguide" className="border-b border-cream/60 text-cream">
          /styleguide
        </Link>
        .
      </p>
      <Ridgeline
        preset="flagship"
        opacity={0.5}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px]"
      />
    </section>
  );
}
