import { footer } from "@/content/home";
import Container from "@/components/ui/Container";

/**
 * Footer, ported from the mock: a forest-deep band with the wordmark, the
 * practical one-liner, and the build credit. Stacks on mobile, spreads to a row
 * on wider screens. The fuller practical info band (where, when, group size)
 * arrives with Gabe's answers in a later ring.
 */
export default function Footer() {
  return (
    <footer className="bg-forest-deep py-[clamp(36px,5vw,46px)] text-bone/70">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-display text-[22px] font-medium text-bone">
          {footer.wordmark}
        </div>
        <div className="font-sans text-[12.5px] tracking-[0.04em]">{footer.meta}</div>
        <div className="font-sans text-[10.5px] uppercase tracking-[0.22em] opacity-60">
          {footer.credit}
        </div>
      </Container>
    </footer>
  );
}
