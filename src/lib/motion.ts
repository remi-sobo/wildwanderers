/**
 * Shared motion constants. Defined once so every reveal across the site uses
 * the same ease and timing and the whole thing feels authored, not assembled
 * (spec section 11).
 *
 * Principles (spec section 5): animate transform and opacity only, motion
 * serves arrival not decoration, restraint over flourish.
 */

// One custom ease for the whole site. A gentle, slightly weighted ease-out
// that reads like settling rather than snapping.
export const EASE = "power3.out";

// One or two durations.
export const DURATION = {
  reveal: 0.9,
  quick: 0.5,
} as const;

// One stagger for grouped reveals (steps, totems, body lines).
export const STAGGER = 0.12;

// Default distance an element rises as it reveals (transform only).
export const RISE = 24;

/**
 * True when the user has asked for reduced motion. Every motion entry point
 * gates on this and falls back to a static, fully legible state.
 * Safe to call on the server (returns false when window is unavailable).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
