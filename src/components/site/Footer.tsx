import { footer } from "@/content/home";
import { routes } from "@/content/pages";
import Container from "@/components/ui/Container";

/**
 * Footer: a forest-deep band with the wordmark, a quiet set of links so every
 * page is reachable from the bottom, the practical one-liner, and the build
 * credit. The fuller practical band (group size, season dates) arrives with
 * Gabe's answers in a later ring.
 */
const LINKS = [
  { label: "The Movement", href: routes.movement },
  { label: "The Program", href: routes.program },
  { label: "For Dads", href: routes.forDads },
  { label: "About", href: routes.about },
  { label: "Reach out", href: routes.join },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep py-[clamp(48px,6vw,64px)] text-bone/70">
      <Container>
        <div className="flex flex-col gap-8 border-b border-mist/15 pb-8 md:flex-row md:items-start md:justify-between">
          <div className="font-display text-[24px] font-medium text-bone">{footer.wordmark}</div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline font-sans text-[13.5px] font-medium text-bone/80 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-sans text-[12.5px] tracking-[0.04em]">{footer.meta}</div>
          <div className="font-sans text-[10.5px] uppercase tracking-[0.22em] opacity-60">
            {footer.credit}
          </div>
        </div>
      </Container>
    </footer>
  );
}
