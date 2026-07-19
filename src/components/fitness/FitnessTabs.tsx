"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { fitnessTabs } from "@/content/fitness";
import Container from "@/components/ui/Container";
import { clsx } from "@/lib/clsx";

/**
 * The Fitness sub-nav: the section's own small menu, so the global nav stays
 * quiet. Three tabs (Overview, Offers, About Gabe), rendered directly under
 * each fitness hero. Active tab reads forest with an amber underline; the rest
 * stay muted until hover. A client island only because the active state needs
 * the pathname.
 */
export default function FitnessTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Fitness section" className="border-b border-bark/15 bg-bone">
      <Container>
        <div className="-mx-1 flex gap-x-2 overflow-x-auto px-1 sm:gap-x-6">
          {fitnessTabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "flex min-h-[52px] shrink-0 items-center border-b-2 px-2 font-sans text-[12.5px] font-semibold uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "border-amber text-forest-deep"
                    : "border-transparent text-[#6B6152] hover:text-forest-deep",
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
