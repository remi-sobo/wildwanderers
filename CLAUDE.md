@AGENTS.md
# Wild Wanderers — build rules

## What this is
Marketing site for Wild Wanderers, a family wellness brand. Movement, nature,
connection. For-profit. The boys program is the flagship.

## Source of truth, in order
1. design-reference/homepage-reference.html — the approved homepage. Match it.
2. design-reference/WildWanderers_Site_Spec.md — tokens, type, motion, IA, rings.
3. This file.
Where these conflict, the higher one wins. Never restyle away from the mock.

## Stack
Next.js App Router, TypeScript, Tailwind v4 (@theme tokens), React Server
Components with client islands only where motion needs them. Deploy: Vercel.

## Design system (from the mock, do not invent)
- Colors: bone #F6F1E7, sand #E7D9BF, ink #2A2118, bark #6B4A2E,
  forest #2E4A33, forest-deep #1E331F, fern #5F9A4F, amber #D98A3A,
  amber-deep #BF6F1C, cream #F2C879. Forest leads, amber is the only CTA color.
- Type: Fraunces (display, self-hosted variable), Plus Jakarta Sans (body).
  Italic accent words only. Eyebrows: Jakarta 12px, .28em, uppercase.
- Signature: the layered ridgeline. Use it only at section transitions and the
  CTA band, never everywhere.

## Motion
Lenis 1.3 + GSAP ScrollTrigger on ONE rAF loop (Lenis autoRaf:false, GSAP
ticker drives it). useGSAP from @gsap/react for cleanup. Reveal on enter,
one pinned moment max (the Approach trail). Everything gates behind
prefers-reduced-motion. Animate transform and opacity only.

## Voice (strict)
No em dashes. No AI-giveaway words (transformative, holistic, leverage, unlock,
seamless, robust, pivotal). Warm, direct, clear. Never frame a child as broken.

## Build discipline
Spec or plan before code. Phase the work. One change per commit, reversible.
Run `npm run build` before every commit and keep it green. Show me the plan and
the diff before committing.