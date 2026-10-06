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

## Open flags on the page

Each shows as visible bracket text. Nothing ships with a bracket in it; these
are Gabe's to answer, not ours to resolve.

- `src/content/fitness.ts`, Fitness Overview, Your coach:
  `[Gabe to confirm: certification name and years coaching.]`
- `src/content/fitness.ts`, Fitness About Gabe, Qualifications:
  `[Gabe to confirm: certification name, years coaching, and any other credentials.]`
- `src/content/fitness.ts`, Saturday Popups, Time (8:00–9:30am):
  `[Gabe to confirm: may move earlier]`
- `src/content/fitness.ts`, Saturday Popups, success state ("Watch your inbox
  before Oct 24."): `[Gabe to approve this line.]`

## Open questions not shown on the page

From the handoff README and "Site vs Ops Manual". The copy is written so
none of these is promised.

1. Session days per week for the boys program (the site says "after school").
2. Dads: expected regularly, or welcome as cleared volunteer mentors (the
   site says "can apply").
3. Boys tuition (the site says not final, scholarships will be available).
4. Whether Log in stays in the nav (keep only if the app is live for fitness
   clients at launch).
5. City permission and fitness insurance before any paid popup on city land:
   confirm "$25 a session" and the Oct 24 date can be promised.
6. Whether to name spring and the fall pilot publicly, and whether summer
   camp is really dropped.
7. The About family photo is being reshot with both boys.

Before printing any flyer or postcard, scan the QR from a physical proof and
confirm the signup lands in the app.
