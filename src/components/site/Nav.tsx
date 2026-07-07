"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "@/lib/clsx";

const LINKS = [
  { label: "The Movement", href: "/the-movement" },
  { label: "The Program", href: "/the-program" },
  { label: "Fitness", href: "/fitness" },
  { label: "For Dads", href: "/for-dads" },
  { label: "Library", href: "/trailhead" },
  { label: "About", href: "/about" },
];

/**
 * Site nav. Transparent over the hero (bone text on the photo, per the mock),
 * condensing into a bone bar with ink text and a quiet backing once the hero
 * has left the viewport (Phase 6), not at an arbitrary scroll offset.
 *
 * It watches the hero with an IntersectionObserver so the change lands exactly
 * as the photo goes. Falls back to a scroll threshold if the hero is absent.
 */
export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (hero && "IntersectionObserver" in window) {
      // Flip once the hero is all but gone (a nav-height sliver still showing).
      const io = new IntersectionObserver(
        ([entry]) => setSolid(!entry.isIntersecting),
        { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
      );
      io.observe(hero);
      return () => io.disconnect();
    }

    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 sm:px-10 lg:px-[60px]",
        solid
          ? "border-b border-bark/15 bg-bone/95 py-4 backdrop-blur-sm"
          : "border-b border-transparent py-[22px] sm:py-[30px]",
      )}
    >
      {/* The lockup swaps ink with the nav: bone over the hero photo, forest on
          the condensed bar, crossfading on the same beat as the links. Below sm
          the mark stands alone so the actions keep their room. */}
      <Link href="/" aria-label="Wild Wanderers home" className="relative block">
        <span className="relative hidden sm:block">
          <Image
            src="/brand/full-bone.png"
            alt="Wild Wanderers"
            width={140}
            height={34}
            preload
            className={clsx(
              "h-[34px] w-auto transition-opacity duration-300",
              solid ? "opacity-0" : "opacity-100",
            )}
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
        <span className="relative block sm:hidden">
          <Image
            src="/brand/mark-bone.png"
            alt="Wild Wanderers"
            width={54}
            height={34}
            className={clsx(
              "h-[34px] w-auto transition-opacity duration-300",
              solid ? "opacity-0" : "opacity-100",
            )}
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

      <div className="flex items-center gap-[34px]">
        {/* Links collapse below md; the action stays so the way in is always
            one tap away on mobile. */}
        <div className="hidden items-center gap-[34px] md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={clsx(
                "link-underline font-sans text-[13.5px] font-medium tracking-[0.02em] transition-colors",
                solid ? "text-ink/80 hover:text-ink" : "text-bone/90 hover:text-bone",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Quiet, secondary text link for returning members. Stays to the left
            of the action and lower in weight than the nav items so it never
            reads as the way in. Kept visible on mobile beside the action. */}
        <a
          href="https://app.wildwanderers.life"
          className={clsx(
            "link-underline font-sans text-[13.5px] font-medium tracking-[0.02em] transition-colors",
            solid ? "text-ink/65 hover:text-ink" : "text-bone/75 hover:text-bone",
          )}
        >
          Log in
        </a>
        <a
          href="/join"
          className={clsx(
            "rounded-full px-5 py-[11px] font-sans text-[13px] font-semibold transition-colors",
            solid ? "bg-amber text-ink hover:bg-amber-deep" : "bg-bone text-ink hover:bg-bone-dim",
          )}
        >
          Join the circle
        </a>
      </div>
    </nav>
  );
}
