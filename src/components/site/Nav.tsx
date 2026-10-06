"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteNav } from "@/content/home";
import Button from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

/** Which nav link reads as active for a route. */
function activeLabel(pathname: string): string {
  if (pathname.startsWith("/the-program")) return "Program";
  if (pathname.startsWith("/for-dads")) return "For Dads";
  if (pathname === "/about") return "About";
  if (pathname.startsWith("/fitness") || pathname.startsWith("/free-session")) return "Fitness";
  return "";
}

/**
 * Site nav. Transparent with bone ink over the dark heroes, condensing into a
 * bone bar with forest ink once the page scrolls past 80px. The homepage hero
 * is light (bone), so there the nav starts in the solid style even at the top.
 *
 * The pill CTA follows the section: boys pages point to Join, fitness pages to
 * the free consult, with Join added as a plain link so the boys program stays
 * one tap away. Below 1000px the links fold into a full-screen forest-deep
 * sheet.
 */
export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  // The sheet remembers the route it opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);

  const light = pathname === "/";
  const solid = scrolled || light;
  const fitness = pathname.startsWith("/fitness") || pathname.startsWith("/free-session");
  const active = activeLabel(pathname);
  const cta = fitness ? siteNav.fitnessCta : siteNav.boysCta;
  const links = fitness ? [...siteNav.links, siteNav.fitnessExtra] : siteNav.links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the sheet, and the page behind it holds still while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav
        className={clsx(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-5 px-[clamp(20px,4vw,60px)] transition-all duration-300",
          solid
            ? "border-b border-bark/15 bg-bone/95 py-3.5 backdrop-blur-[6px]"
            : "border-b border-transparent py-[26px]",
        )}
      >
        {/* The lockup swaps ink with the nav: bone over a dark hero, forest on
            the solid bar. Below 1000px the mark stands alone. */}
        <Link href="/" aria-label="Wild Wanderers home" className="relative block">
          <span className="relative hidden min-[1000px]:block">
            <Image
              src="/brand/full-bone.png"
              alt="Wild Wanderers"
              width={140}
              height={34}
              preload
              className={clsx("h-[34px] w-auto transition-opacity duration-300", solid ? "opacity-0" : "opacity-100")}
            />
            <Image
              src="/brand/full-forest.png"
              alt=""
              aria-hidden="true"
              width={140}
              height={34}
              className={clsx(
                "absolute inset-0 h-[34px] w-auto transition-opacity duration-300",
                solid ? "opacity-100" : "opacity-0",
              )}
            />
          </span>
          <span className="relative block min-[1000px]:hidden">
            <Image
              src="/brand/mark-bone.png"
              alt="Wild Wanderers"
              width={54}
              height={34}
              className={clsx("h-[34px] w-auto transition-opacity duration-300", solid ? "opacity-0" : "opacity-100")}
            />
            <Image
              src="/brand/mark-forest.png"
              alt=""
              aria-hidden="true"
              width={54}
              height={34}
              className={clsx(
                "absolute inset-0 h-[34px] w-auto transition-opacity duration-300",
                solid ? "opacity-100" : "opacity-0",
              )}
            />
          </span>
        </Link>

        <div className="flex items-center gap-[30px]">
          <div className="hidden items-center gap-[30px] min-[1000px]:flex">
            {links.map((link) => {
              const on = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={on ? "page" : undefined}
                  className={clsx(
                    "link-underline font-sans text-[13.5px] tracking-[0.02em] transition-colors",
                    on ? "font-semibold" : "font-medium",
                    solid
                      ? on
                        ? "text-ink"
                        : "text-ink/80 hover:text-ink"
                      : on
                        ? "text-bone"
                        : "text-bone/90 hover:text-bone",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Quiet text link for current fitness clients using the app. */}
            <a
              href={siteNav.login.href}
              className={clsx(
                "link-underline font-sans text-[13.5px] font-medium tracking-[0.02em] transition-colors",
                solid ? "text-ink/60 hover:text-ink" : "text-bone/70 hover:text-bone",
              )}
            >
              {siteNav.login.label}
            </a>
          </div>

          <Link
            href={cta.href}
            className={clsx(
              "whitespace-nowrap rounded-full px-5 py-[11px] font-sans text-[13px] font-semibold text-ink transition-colors",
              solid ? "bg-amber hover:bg-amber-deep" : "bg-bone hover:bg-bone-dim",
            )}
          >
            {cta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={siteNav.openMenu}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex h-11 w-11 flex-col justify-center gap-[5px] px-[11px] min-[1000px]:hidden"
          >
            <span className={clsx("block h-[1.5px]", solid ? "bg-ink" : "bg-bone")} />
            <span className={clsx("block h-[1.5px]", solid ? "bg-ink" : "bg-bone")} />
            <span className={clsx("block h-[1.5px] w-[70%]", solid ? "bg-ink" : "bg-bone")} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex flex-col overflow-auto bg-forest-deep px-6 pb-10 pt-[26px] min-[1000px]:hidden"
        >
          <div className="flex items-center justify-between">
            <Image src="/brand/full-bone.png" alt="Wild Wanderers" width={124} height={30} className="h-[30px] w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="min-h-11 px-1 font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-bone"
            >
              {siteNav.closeMenu}
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-1.5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[36px] font-[360] leading-[1.25] text-bone"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col items-start gap-[18px] pt-10">
            <Button variant="primary" href={cta.href} arrow>
              {cta.label}
            </Button>
            <a href={siteNav.login.href} className="font-sans text-[14px] font-medium text-bone/75">
              {siteNav.login.label}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
