/**
 * Homepage and site-chrome copy, plus the shared copy types. Words are data so
 * edits never touch components.
 *
 * Voice: plain, direct, complete sentences. No em dashes, no exclamation
 * marks, no slogan constructions. Gabe is final editor on every string.
 */

/** A run of text; `em` marks the italic display accent (one accent per line). */
export type Segment = { text: string; em?: boolean };
/** A headline is lines of segments; line breaks are explicit. */
export type HeadlineLine = Segment[];

export type Cta = { label: string; href: string };

// ===========================================================================
// v2 (October 2026 handoff). Copy is verbatim from the approved prototypes,
// checked against Operations Manual v1.1. The homepage now represents the
// whole brand: the boys program and adult fitness.
// ===========================================================================

export const homeCopy = {
  hero: {
    eyebrow: "Wild Wanderers",
    headline: [
      [{ text: "Movement and" }],
      [{ text: "connection, " }, { text: "outside.", em: true }],
    ] as HeadlineLine[],
    body: "Gabe coaches two things on the Peninsula: an outdoor program for boys 5 to 13, and fitness for the adults in their lives. Same trail, same idea: people grow when they move together outside.",
    primary: { label: "Explore the boys program", href: "/the-program" } as Cta,
    secondary: { label: "Explore fitness", href: "/fitness" } as Cta,
    photo: "/photos/golden-hour-family-hike.jpg",
    photoAlt:
      "Gabe and his son walking a Baylands trail at golden hour, with other dads and kids ahead and the marsh and hills to the left",
  },
  programs: [
    {
      photo: "/photos/dad-piggyback-trail.jpg",
      photoAlt: "A dad climbing a wooded trail with his young son on his shoulders, seen from behind",
      objectPosition: "50% 50%",
      eyebrow: "For boys 5–13",
      headline: [[{ text: "The Boys " }, { text: "Program", em: true }]] as HeadlineLine[],
      body: "Small groups of boys meet after school on the Baylands trail to move, explore, and build skills outside. Every session has screened adults, with no more than six boys per adult.",
      cta: { label: "See the program", href: "/the-program" } as Cta,
    },
    {
      photo: "/photos/gabe-training-outdoor.jpg",
      photoAlt: "Gabe training outdoors in the sun",
      objectPosition: "42% 38%",
      eyebrow: "For adults",
      headline: [[{ text: "Wild Wanderers " }, { text: "Fitness", em: true }]] as HeadlineLine[],
      body: "One-on-one training, small-group training, and coaching for busy adults. Saturday popups are the easiest way to start.",
      cta: { label: "See fitness", href: "/fitness" } as Cta,
    },
  ],
  whyExists: {
    eyebrow: "Why it exists",
    headline: [[{ text: "Kids need more time moving " }, { text: "and outside.", em: true }]] as HeadlineLine[],
    body: "School, screens, and busy schedules mean a lot of kids spend much of the day sitting indoors. Wild Wanderers gives boys regular time each week to move, explore the outdoors, and build relationships in a small group.",
    cta: { label: "Why Wild Wanderers", href: "/why-wild-wanderers" } as Cta,
  },
  session: {
    eyebrow: "A session",
    headline: [[{ text: "What happens during " }, { text: "a session.", em: true }]] as HeadlineLine[],
    steps: [
      { title: "Arrive", body: "Check in, have a snack, and get moving while the group arrives." },
      { title: "Move", body: "A movement game, workout, or physical challenge." },
      { title: "Explore", body: "Nature, outdoor skills, and hands-on learning along the trail." },
      { title: "Reflect", body: "Come back together, talk about the day, and meet parents at pickup." },
    ],
    fieldGuide: {
      title: "The Field Guide",
      body: "Boys use animals they see around the Baylands as simple reminders for skills like calm, awareness, adaptability, and courage.",
      cta: { label: "See how the program works", href: "/the-program" } as Cta,
    },
  },
  supervision: {
    eyebrow: "Supervision",
    headline: [[{ text: "Who is with " }, { text: "your son.", em: true }]] as HeadlineLine[],
    body: "At least two screened adults are present at every session, with no more than six boys per adult. No adult is ever alone with one boy out of sight or hearing of another screened adult.",
    dads: {
      title: "Dads can get involved, too.",
      body: "Dads who want to participate can apply to serve as volunteer mentors. Every adult on the trail goes through the same screening and safety process.",
      cta: { label: "For dads", href: "/for-dads" } as Cta,
    },
  },
  meetGabe: {
    eyebrow: "Founder",
    headline: [[{ text: "Meet " }, { text: "Gabe.", em: true }]] as HeadlineLine[],
    body: "Gabe started Wild Wanderers with his own family on the Baylands. Now he is building the first small cohort for local boys.",
    cta: { label: "Read his story", href: "/about" } as Cta,
    photo: "/photos/gabe-family-swing.jpg",
    photoAlt:
      "Gabe and his family walking through tall grass, swinging their son between them, the dog alongside",
  },
  cta: {
    headline: [
      [{ text: "Interested in the first " }, { text: "Wild Wanderers cohort?", em: true }],
    ] as HeadlineLine[],
    body: "Tell us about your son and we'll follow up with availability and next steps.",
    primary: { label: "Join", href: "/join" } as Cta,
  },
};

// The site chrome: nav and footer. The pill CTA depends on the section: the
// boys pages point to /join, the fitness pages to the free consult (and add
// "Join" as a plain link so the boys program stays one tap away).
export const siteNav = {
  links: [
    { label: "Program", href: "/the-program" },
    { label: "For Dads", href: "/for-dads" },
    { label: "About", href: "/about" },
    { label: "Fitness", href: "/fitness" },
  ],
  fitnessExtra: { label: "Join", href: "/join" },
  login: { label: "Log in", href: "https://app.wildwanderers.life" },
  boysCta: { label: "Join", href: "/join" } as Cta,
  fitnessCta: { label: "Book a free consult", href: "/free-session" } as Cta,
  openMenu: "Open menu",
  closeMenu: "Close",
};

export const siteFooter = {
  wordmark: "Wild Wanderers",
  mission:
    "Outdoor movement and mentorship for boys ages 5–13 on the Baylands trail, and personal training for adults on the Peninsula.",
  columns: [
    {
      title: "Boys program",
      links: [
        { label: "Program", href: "/the-program" },
        { label: "For Dads", href: "/for-dads" },
        { label: "Why Wild Wanderers", href: "/why-wild-wanderers" },
        { label: "About", href: "/about" },
        { label: "Join", href: "/join" },
      ],
    },
    {
      title: "Fitness",
      links: [
        { label: "Overview", href: "/fitness" },
        { label: "Training Options", href: "/fitness/training-options" },
        { label: "About Gabe", href: "/fitness/about" },
        { label: "Saturday Popups", href: "/fitness/saturday" },
        { label: "Book a free consult", href: "/free-session" },
      ],
    },
  ],
  basics: {
    title: "Boys program basics",
    items: ["Boys 5–13", "Baylands trail, East Palo Alto to Palo Alto", "After school, 4:00–6:00 PM"],
  },
  motto: "Strong hands, soft hearts.",
  credit: "A SOBO build",
};
