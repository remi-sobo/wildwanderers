import { footer } from "@/content/home";
import { routes } from "@/content/pages";
import Container from "@/components/ui/Container";

/**
 * Footer. A forest-deep band that closes the site the way the sections opened
 * it: the wordmark with the one-line mission, a trail column of links, the
 * confirmed practicals, and the motto strip along the bottom. Only
 * Gabe-confirmed facts appear here.
 */
const LINKS = [
  { label: "The Movement", href: routes.movement },
  { label: "The Program", href: routes.program },
  { label: "For Dads", href: routes.forDads },
  { label: "About", href: routes.about },
  { label: "Join the circle", href: routes.join },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep pb-[clamp(36px,4vw,48px)] pt-[clamp(64px,8vw,96px)] text-bone/70">
      <Container>
        <div className="grid gap-x-[clamp(32px,5vw,80px)] gap-y-12 border-b border-mist/15 pb-[clamp(40px,5vw,64px)] md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Wordmark and mission. */}
          <div>
            <div className="font-display text-[clamp(26px,3vw,34px)] font-medium text-bone">
              {footer.wordmark}
            </div>
            <p className="mt-4 max-w-[380px] font-sans text-[14px] leading-[1.65] text-bone/75">
              {footer.mission}
            </p>
          </div>

          {/* The trail: every page, reachable from the bottom. */}
          <nav aria-label="Footer" className="flex flex-col items-start gap-3.5">
            <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-cream/80">
              The trail
            </div>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline font-sans text-[14px] font-medium text-bone/85 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* The confirmed practicals. */}
          <div className="flex flex-col items-start gap-3.5">
            <div className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-cream/80">
              Chapter One
            </div>
            {footer.facts.map((fact) => (
              <div key={fact} className="font-sans text-[14px] text-bone/75">
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-display text-[15px] italic tracking-[0.01em] text-cream/85">
            {footer.meta}
          </div>
          <div className="font-sans text-[10.5px] uppercase tracking-[0.22em] opacity-60">
            {footer.credit}
          </div>
        </div>
      </Container>
    </footer>
  );
}
