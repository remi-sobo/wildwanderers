# Wild Wanderers — Website Design and Build Spec

Prepared by SOBO Consulting. Working draft for the marketing site (Ring 1). This is the brief to drop into a fresh repo. It assumes the SOBO stack and build discipline: spec first, phased commits, repo as source of truth.

The parts marked GATED depend on Gabe's voice-memo answers and should not be finalized until his transcript lands. Everything else can be built now.

---

## 1. What we are building, and what we are upgrading from

Trellis is editorial-SaaS: italic-accented serif headlines, sharp section eyebrows, a thesis-driven spine, and product screenshots carrying the visual weight. The bones are excellent and we keep them. What changes for Wild Wanderers is the surface. This is not a product you see on a screen. It is a place a boy goes and a feeling a parent wants for their son. So the screenshots come out and cinematic photography goes in, the motion gets more alive, and the whole thing moves from "calm product" to "wild and warm."

Said plainly: keep the SOBO editorial intelligence, lose the SaaS, add the outdoors.

The one-line spine for the whole site: **raise a boy who knows himself.** Movement, nature, brotherhood, and a few good men beside him.

---

## 2. Creative concept

**Cinematic outdoor editorial.** Big sky, layered ridgelines, golden light, generous space, confident serif display, and motion that feels like walking a trail rather than clicking a UI. The recurring graphic device is the **layered ridgeline**, receding from pale to deep, which doubles as our illustration system when a real photo is not available. The mockup uses it for the hero and the closing band, and it can carry the brand on its own until the photo library is full.

The emotional arc of the homepage is a walk: you start at the overlook (hero), you hear why this exists (thesis), you learn how a day moves (approach), you meet the world of it (animals, ages, dads), you meet the man (Gabe), and you are invited in (CTA). The page should feel like it descends a trail and arrives somewhere.

---

## 3. Color system

Earthy and bright. Green, brown, tan, white, with one warm light that does the "bright."

| Token | Hex | Role |
|---|---|---|
| `--ww-bone` | `#F6F1E7` | Primary page background, text on dark |
| `--ww-bone-dim` | `#EDE4D3` | Quiet fills, hairlines on light |
| `--ww-sand` | `#E7D9BF` | Alternate section background, warmth |
| `--ww-ink` | `#2A2118` | Primary text on light (warm near-black) |
| `--ww-bark` | `#6B4A2E` | Italic display accent on light, secondary |
| `--ww-forest` | `#2E4A33` | Primary brand green |
| `--ww-forest-deep` | `#1E331F` | Dark sections, footer |
| `--ww-fern` | `#5F9A4F` | Bright natural accent, very sparing |
| `--ww-amber` | `#D98A3A` | Primary CTA, warm highlight |
| `--ww-amber-deep` | `#BF6F1C` | Hover, eyebrows on dark |
| `--ww-mist` | `#C4D3CC` | Cool pale, hairlines on dark |

Rules. Forest leads, bone is the canvas, sand warms the alternate sections, amber is the single action color and the only thing that should ever shout. Fern is a seasoning, used for one small live element at a time, never a field. The dawn tints in the hero scene (amber haze, warm cream) live only inside photographic or illustrated scenes, never as UI.

Accessibility note to verify in build: `--ww-ink` on `--ww-bone` and `--ww-bone` on `--ww-forest-deep` are high contrast and safe for body text. Amber-deep eyebrows on bone sit near the AA line at small sizes, so on light backgrounds default eyebrows to `--ww-bark` and reserve amber-deep eyebrows for dark sections. CTA buttons use near-black ink text on amber, not white.

---

## 4. Type system

Two families. One is the SOBO family spine, one is the Wild Wanderers dial.

**Display: Fraunces (variable).** A warm old-style serif with real character and optical sizing. This is the upgrade from Cormorant. It carries the wildness Cormorant is too polite for. Use high optical size for big display, keep the WONK axis low for legibility, allow a touch of SOFT for warmth. Italic is for accent words only, the SOBO-family move, tinted bark on light and warm cream on dark.

**Body and UI: Plus Jakarta Sans (variable).** Same body voice as Trellis and the rest of the SOBO family, on purpose. It keeps Wild Wanderers in the family while the display face sets it apart.

Scale (desktop, fluid down with `clamp`):

- Hero H1: Fraunces ~88px, weight ~340, line-height .99, tracking -0.018em
- Section H2: Fraunces 52 to 60px, weight ~360
- Sub-display H3: Fraunces 28 to 32px, weight ~500
- Body large: Jakarta 19px, 1.6
- Body: Jakarta 16px, 1.6
- Eyebrow: Jakarta 12px, weight 600, uppercase, tracking .28em

Both fonts are free and self-hosted from the variable files, no external font network request, which keeps the hero fast.

---

## 5. Motion system

The current best-in-class pairing, confirmed against where the tooling actually is in mid 2026: **Lenis 1.3.x** for smooth scroll plus **GSAP 3.12+ ScrollTrigger** for the scroll math, both driven off a single requestAnimationFrame loop. Note for Code: the package is the new `lenis` (import from `lenis/react`), not the retired `@studio-freight/*`, and Lenis must run with `autoRaf: false` while GSAP's ticker drives it, so there is only one loop. Use `useGSAP` from `@gsap/react` for automatic cleanup in React. GSAP's premium plugins, including SplitText, are now free, so we can use them.

Principles.

- Motion serves arrival, not decoration. Content reveals as it enters, it does not jiggle for attention.
- One smooth-scroll loop for the whole site.
- Animate transform and opacity only. No layout animation.
- Everything gates behind `prefers-reduced-motion`. When reduced motion is on, Lenis smoothing is off and scrubbed animations become simple immediate states. The site must be fully legible and usable with zero motion. This is also an INP and Core Web Vitals safeguard, not only accessibility.

The named interactions, per section.

- **Hero.** Ridge layers parallax at different speeds on scroll (scrub). Slow ambient drift or ken-burns on the scene. Headline reveals line by line on load with an upward clip-mask (SplitText by line). Scroll cue fades out as the hero leaves.
- **Thesis.** Headline clip-reveal on enter, body fades up beneath it with a short stagger.
- **The Approach.** This is the one pinned moment. The section pins briefly and the trail line "draws" left to right while the four steps reveal in sequence as you scroll through. One pin on the page, no more.
- **Animals.** Totems stagger up on enter, subtle lift on hover.
- **CTA band.** Ridge parallax, headline reveal, the amber button is the visual rest point.

Restraint is the brief. Trellis earns trust by being calm. Wild Wanderers should feel alive but never busy. If a visitor notices the animation before the message, we went too far.

---

## 6. Photography and art direction

The photos Gabe sent from the trail are exactly the palette and feeling. What to gather from him, framed as a real shot list:

- **Hero.** A real father and son, or mentor and boy, on a ridge or overlook at golden hour, shot wide with open space on the left for the headline and the figures sitting in the right third. This is the single most important image on the site.
- **Action.** Boys mid-climb, wading, building, running. Movement, not poses.
- **Quiet.** Reflective moments. A boy looking out, a circle, a journal on a knee.
- **The men.** Dads beside boys, walking, kneeling to a kid's level. This carries the For Dads story and the founder section.

Treatment. Warm, natural, lightly lifted shadows, a consistent warmth across the set so a mixed camera roll still feels like one brand. A faint unifying grain. Faces are optional and entirely Gabe's call per family consent. Until the real library is deep enough, the layered ridgeline illustration is the fallback and a permanent brand motif either way. Use `AVIF` with `WebP` fallback, the hero image marked priority, everything below lazy-loaded.

---

## 7. Information architecture

```
/                 Home
/the-program      The boys program: ages and stages, a day, safety, cost, the way in
/the-approach     Observe Breathe Explore Reflect, the pillars, the animal system
/for-dads         The fellowship, walk beside not above, mentor invite (GATED on whether live)
/about            Gabe's story, the why, the honest research
/join             The conversion page (form or inquiry), single clear action
```

Later rings: `/journal` for essays and field notes, deeper animal pages, a seasons page. Not now.

The practical information a parent hunts for (where, when, group size, safety, cost) lives at the top of `/the-program` and in a compact band in the footer, so it is never more than one click away.

---

## 8. Homepage, section by section

The scroll narrative. Sections marked GATED need Gabe's answers before the copy is final, but the layout can be built with placeholder content.

1. **Hero.** The promise, one line of what and where, a single primary CTA, a low-commitment secondary link. Full viewport, cinematic. (Built in the mockup.)
2. **Thesis.** It was never that the boy was broken, he just needed room to roam. The SOBO false-cause turn in Gabe's own conviction. No deficit framing of the child, ever.
3. **The Approach.** Observe, Breathe, Explore, Reflect, as a trail of four steps. The pinned moment.
4. **A day on the trail.** GATED. What one gathering actually looks like, start to finish. Likely a sticky image with the rhythm beside it. Needs his "the way in" answer.
5. **The Baylands animals.** The signature. A teaser row of totems, each with its power, linking to the full animal page. This is the thing no other program has, so it earns real space.
6. **Who it's for.** The three stages, Notice, Practice, Belong, by age. Brief, three cards.
7. **For Dads.** GATED on whether the fellowship is live. The walk-beside ethos, an invitation or a "coming" flag.
8. **Proof.** GATED on real assets. Photos and one or two real parent sentences with names and permission. Built only when real. We do not ship a placeholder testimonial.
9. **Meet Gabe.** The dad doing this with his own sons, his training, why him. Warm, photographic. Nutrition and the mental side written as things he coaches toward, not treats.
10. **CTA band.** Every boy needs a place to become. The single action, repeated. (Built in the mockup.)
11. **Footer.** Where, when, the practical band, the quiet links.

---

## 9. CTA strategy

One verb across the whole site, repeated, never competing with itself. The exact verb is GATED on Gabe's "one move" answer:

- Enrolling now: "Find a place this season" to `/join` as an inquiry or application.
- Pre-launch: "Join the first season list" to a waitlist capture.
- Consult-first: "Book a walk and talk" to scheduling.

Whichever it is, the secondary action stays low-commitment for the not-ready ("See how a day unfolds"). The hero, the CTA band, and the nav all point at the same primary action.

---

## 10. Component library

```
components/
  motion/SmoothScroll.tsx     Lenis + GSAP ticker, one loop, reduced-motion aware
  motion/Reveal.tsx           enter reveal wrapper (fade + rise, configurable)
  motion/SplitReveal.tsx      line-by-line headline clip reveal (SplitText)
  site/Nav.tsx                transparent over hero, solidifies on scroll
  site/Footer.tsx             practical band + links
  home/Hero.tsx
  home/Thesis.tsx
  home/Approach.tsx           the pinned trail
  home/DayOnTrail.tsx         GATED
  home/Animals.tsx
  home/AgesStages.tsx
  home/ForDads.tsx            GATED
  home/Proof.tsx              GATED
  home/MeetGabe.tsx
  home/CtaBand.tsx
  ui/Button.tsx               primary (amber) and ghost
  ui/Eyebrow.tsx
  ui/Section.tsx              padding, max-width, background variants
  ui/Ridgeline.tsx            the reusable layered-ridge SVG, themeable
```

Content is data, not hardcoded, so copy edits never touch components:

```
content/
  home.ts        section copy and CTA labels
  animals.ts     the totems (name, power, line, icon)
  agesStages.ts  Notice / Practice / Belong
  site.ts        nav, footer, practical info
```

---

## 11. Tech stack and repo

Matches the SOBO stack so it is familiar and deployable day one.

- Next.js App Router, TypeScript, Tailwind v4 (`@theme` tokens), React Server Components where possible with client islands for motion.
- Motion: `lenis`, `gsap`, `@gsap/react`.
- Deploy Vercel, DNS Cloudflare, the `wildwanderers.com` domain for the for-profit site, `wildwanderers.org` reserved for the future nonprofit arm.
- Forms: Resend for notification, a simple typed server action for the join inquiry, no heavy form platform for v1.

```
app/
  layout.tsx        fonts, SmoothScroll, base metadata
  page.tsx          composes the homepage sections
  globals.css       tokens as CSS vars + Tailwind @theme
  the-program/page.tsx
  the-approach/page.tsx
  for-dads/page.tsx
  about/page.tsx
  join/page.tsx
components/ ...      (section 10)
content/ ...
lib/motion.ts        shared ease curves and durations
public/images/       AVIF/WebP photography
public/fonts/        Fraunces + Jakarta variable files (self-hosted)
specs/wildwanderers-site.md   this document
CLAUDE.md            build rules, voice rules, source-of-truth note
CURRENT.md           running status log
```

Shared motion constants in `lib/motion.ts` so every reveal uses the same ease and timing and the site feels authored, not assembled. One custom ease, one or two durations, one stagger. Define them once.

---

## 12. Performance, accessibility, SEO

- Hero image priority, everything else lazy, `AVIF`/`WebP`, sized correctly. The hero is the Largest Contentful Paint, so it must be fast.
- Motion behind `prefers-reduced-motion`, which protects INP.
- Semantic headings, real focus states, keyboard-navigable nav, alt text on every image.
- Color contrast verified per section 3.
- Per-page metadata and Open Graph, a real OG image per page, sitemap, `wildwanderers.com` canonical.
- The marketing site is fully public and indexable, unlike the client pages on the SOBO site, which stay gated.

---

## 13. Build sequence

Rings, shippable at each stop, a commit between each.

- **Ring 0. Foundation.** Repo, tokens, type, the motion provider (Lenis + GSAP), Nav, Footer, the Ridgeline component, a design-system page that renders the type scale, colors, and buttons. Verifiable on its own.
- **Ring 1. The spine that wows.** Hero, Thesis, Approach (the pinned trail), CTA band, Footer. This is the part that earns the "that's it." Shippable as a teaser even before the rest exists.
- **Ring 2. The rest of the homepage.** Animals teaser, Ages and Stages, For Dads teaser, Meet Gabe. GATED sections wait on the transcript.
- **Ring 3. Interior pages.** The Program with the join form, The Approach deep page with the full animal system, For Dads, About.
- **Ring 4. Proof and polish.** Real testimonials and photos when they exist, Journal if we want it, motion polish, performance pass.

We build Ring 0 and the non-gated parts of Ring 1 now. The rest unlocks with his voice memo.

---

## 14. Open questions, gated on Gabe's transcript

The site cannot finalize without these, and they are the same ones in his voice-memo prompt:

1. The way in. The actual offer: ages, what a gathering is, where, how often, when it starts. Unlocks section 4 and `/the-program`.
2. The one move. Sets the single CTA verb sitewide.
3. Cost. Said plainly on the program page.
4. How forward to be that this is for boys. Sets the thesis and program voice.
5. Real photos and any real parent words, with permission. Unlocks the hero image and the proof section.
6. Name and line locked. Confirms the wordmark and the hero subhead.

Until these land, we build the foundation and the spine with the mockup's placeholder copy, and we swap in his truth the moment it arrives.

---

## 15. The mockup

The accompanying homepage mockup is real, working HTML and SVG, not a picture of a design. It demonstrates the hero, the thesis, the approach trail, the animal totems, and the CTA band in the actual color and type system. It is the reference Ring 1 builds toward. The father-and-son ridge in the hero is the illustrated stand-in for the real golden-hour photo we will get from Gabe.
