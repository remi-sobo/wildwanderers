import Image from "next/image";
import Link from "next/link";
import { siteFooter as F } from "@/content/home";
import Container from "@/components/ui/Container";

const colTitle = "font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-cream/80";

/**
 * Footer. A forest-deep band in four columns: the stacked word mark with the
 * one-line description of both programs, the boys program pages, the fitness
 * pages, and the boys program basics. The motto and credit run along the
 * bottom. Only Gabe-confirmed facts appear here.
 */
export default function Footer() {
  return (
    <footer className="bg-forest-deep pb-11 pt-[clamp(64px,8vw,96px)] text-bone/70">
      <Container>
        <div className="grid gap-x-14 gap-y-12 border-b border-mist/15 pb-[52px] sm:grid-cols-2 lg:grid-cols-4">
          {/* The stacked word mark appears only here, in bone on forest-deep,
              so the footer reads like a signature. */}
          <div className="min-w-0">
            <Image
              src="/brand/word-bone.png"
              alt={F.wordmark}
              width={172}
              height={64}
              className="h-auto w-[160px]"
            />
            <p className="mt-4 max-w-[340px] font-sans text-[14px] leading-[1.65] text-bone/75">
              {F.mission}
            </p>
          </div>

          {F.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col items-start gap-3.5">
              <div className={colTitle}>{col.title}</div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="link-underline font-sans text-[14px] font-medium text-bone/85 transition-colors hover:text-bone"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3.5">
            <div className={colTitle}>{F.basics.title}</div>
            {F.basics.items.map((item) => (
              <div key={item} className="font-sans text-[14px] text-bone/75">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <div className="font-display text-[15px] italic text-cream/85">{F.motto}</div>
          <div className="font-sans text-[10.5px] uppercase tracking-[0.22em] opacity-60">{F.credit}</div>
        </div>
      </Container>
    </footer>
  );
}
