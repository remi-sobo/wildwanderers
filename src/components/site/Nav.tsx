"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "@/lib/clsx";

const LINKS = [
  { label: "The Movement", href: "#" },
  { label: "The Program", href: "#" },
  { label: "For Dads", href: "#" },
  { label: "About", href: "#" },
];

/**
 * Site nav. Transparent over the hero (bone text on the photo, per the mock),
 * solidifying into a bone bar with ink text once the user scrolls past the top.
 *
 * Note: the mock only draws the transparent state. The solid state is inferred
 * from the spec ("solidifies on scroll") and uses a bone bar, ink text, a thin
 * hairline, and an amber CTA so the action stays visible off the photo.
 */
export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[60px] transition-all duration-300",
        solid
          ? "border-b border-bark/15 bg-bone/95 py-4 backdrop-blur-sm"
          : "border-b border-transparent py-[30px]",
      )}
    >
      <Link
        href="/"
        className={clsx(
          "font-display text-[25px] font-medium transition-colors",
          solid ? "text-forest-deep" : "text-bone",
        )}
      >
        Wild Wanderers
      </Link>

      <div className="flex items-center gap-[34px]">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={clsx(
              "font-sans text-[13.5px] font-medium tracking-[0.02em] transition-colors hover:opacity-100",
              solid ? "text-ink/80 hover:text-ink" : "text-bone/90 hover:text-bone",
            )}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className={clsx(
            "rounded-full px-5 py-[11px] font-sans text-[13px] font-semibold transition-colors",
            solid ? "bg-amber text-ink hover:bg-amber-deep" : "bg-bone text-ink hover:bg-bone-dim",
          )}
        >
          Find a place
        </a>
      </div>
    </nav>
  );
}
