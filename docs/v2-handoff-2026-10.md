# Marketing site v2, 2026-10

The October handoff (`design_handoff_marketing_site_v2`), built in the
README's order, one commit per step. Copy is verbatim from the prototypes and
lives in `src/content/{home,pages,fitness}.ts`. Facts follow Operations Manual
v1.1. Gabe is final editor on every string.

## Routes

| Route | Notes |
|---|---|
| `/` | Light photo hero, two programs, the boys program in brief |
| `/the-program` | The former homepage hero (`ProgramHero`) moved here |
| `/for-dads`, `/about`, `/join` | Rebuilt; Join is form first |
| `/why-wild-wanderers` | New. `/the-movement` 301s here |
| `/fitness` | Hero, In Motion reel, options (no prices), popups, Gabe |
| `/fitness/training-options` | New. `/fitness/offers` 301s here |
| `/fitness/about` | Testimonials removed |
| `/fitness/saturday` | New, canonical. `/saturday` 301s here |
| `/free-session` | Form first, chip UI |

The redirects use `statusCode: 301` in `next.config.ts` (Next's `permanent`
answers 308).

## Forms

| Form | Path | Lands in |
|---|---|---|
| Join | Server Action `submitJoin` | `lead_inquiries`, interest `boys_program`, "about your son" as `message` |
| Free consult | `POST /api/fitness/inquire` | `lead_inquiries`, chips map to `interest` and `preferred_times` |
| Pop-up list | `POST /api/fitness/saturday-signup` | `library_subscribers`, `source = 'saturday'` |

Join and the free consult share one insert path, `src/lib/inquiries.ts`
(anon insert-only, org resolved server-side, nothing read back, alert ping on
a fresh row). The pop-up route mirrors `/api/trailhead/subscribe`. All three:
honeypot, IP rate limit, idempotent on repeat (23505 is a success).

Notes for the app repo:
- `library_subscribers.source` (text, not null, default `'trailhead'`) was
  added to the live project on Oct 5 for the pop-up list. The app repo's
  migrations need to carry it (Saturday spec, commit 1).
- An email already on the list from the Trailhead door keeps source
  `trailhead`; anon can insert but not update.
- The pop-up form collects name and phone (per the spec's form) but the list
  stores email and source only. Name personalizes the success line; phone is
  validated and dropped. If Gabe wants either kept, the table needs columns.
- Join no longer depends on Resend or Slack. Those notices still fire, best
  effort, when their env vars are set.

## Flags, resolved

Gabe confirmed every open item on Oct 6, and no bracket text remains on the
site:

- Credentials: certified fitness trainer, 20 years coaching (Fitness
  Overview and Fitness About Gabe).
- Saturday popups start at 8:00 (8:00–9:30am).
- The success line "Watch your inbox before Oct 24." stands.
- The rest of the handoff's open questions (session days, the dads framing,
  tuition, Log in in the nav, city permission and insurance for the popups,
  naming the pilot and spring term, the About photo) are settled as the copy
  reads now.

Before printing any flyer or postcard, scan the QR from a physical proof and
confirm the signup lands in the app.
