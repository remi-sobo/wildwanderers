/**
 * Homepage copy. Words are data so edits never touch components.
 *
 * Voice: SOBO house voice. Warm, direct, specific, premium restraint. No em
 * dashes, no wellness clichés, no pep talks. Headlines keep the approved mock
 * lines; supporting copy is tuned toward the ground.
 */

/** A run of text; `em` marks the italic display accent (one accent per line). */
export type Segment = { text: string; em?: boolean };
/** A headline is lines of segments; line breaks are explicit. */
export type HeadlineLine = Segment[];

export type Cta = { label: string; href: string };

export const hero = {
  eyebrow: "Wild Wanderers · movement, nature, connection",
  headline: [[{ text: "Born to " }, { text: "move.", em: true }]] as HeadlineLine[],
  sub: "Wellness for the whole family, built on movement, nature, and real connection. The three things a screen-heavy world keeps crowding out.",
  primary: { label: "Start the conversation", href: "/join" } as Cta,
  secondary: { label: "See how a day unfolds", href: "/the-program" } as Cta,
  scrollCue: "Scroll",
  photoAlt:
    "A father and son on a ridge at golden hour, looking out over rolling hills",
};

export const movement = {
  eyebrow: "The movement",
  headline: [
    [{ text: "The world went still." }],
    [{ text: "We were built to move.", em: true }],
  ] as HeadlineLine[],
  body: "Kids today move less, connect less, and spend less time outside. Wild Wanderers runs the other way. Bodies in motion, families in nature, real connection in a distracted age. You do it together, outdoors, and the whole family is welcome.",
};

export const flagship = {
  eyebrow: "The flagship program",
  headline: [[{ text: "It starts with " }, { text: "the boys.", em: true }]] as HeadlineLine[],
  body: "Our first trail is a boys' program built on movement, nature, and the kind of brotherhood that makes a kid brave. Out on the Baylands, every week, with the dads right beside them.",
  primary: { label: "Meet the boys' program", href: "/the-program" } as Cta,
  secondary: { label: "See how a day unfolds", href: "/the-program" } as Cta,
  badge: "EST. ON THE BAYLANDS",
};

export const approach = {
  eyebrow: "How a day moves",
  headline: [
    [{ text: "Four steps, every time." }],
    [{ text: "Observe. Breathe. Explore. Reflect.", em: true }],
  ] as HeadlineLine[],
  steps: [
    {
      n: "01",
      title: "Observe",
      body: "Notice one true thing. A bird, a track, the turning tide, a feeling moving through the body.",
    },
    {
      n: "02",
      title: "Breathe",
      body: "Settle with animal breath. Heron tall, lizard long. Calm is a skill, and it can be practiced.",
    },
    {
      n: "03",
      title: "Explore",
      body: "Run, climb, build, wander. The body leads and the curriculum stays quietly in the background.",
    },
    {
      n: "04",
      title: "Reflect",
      body: "Sit, share, journal. Meaning is found in the looking back, not handed down in a lesson.",
    },
  ],
};

export const animalsSection = {
  eyebrow: "The Baylands animals",
  headline: [[{ text: "Every animal teaches " }, { text: "a power.", em: true }]] as HeadlineLine[],
  allLink: { label: "Meet all of them", href: "/the-movement" } as Cta,
};

export const cta = {
  headline: [[{ text: "Get well " }, { text: "together.", em: true }]] as HeadlineLine[],
  body: "It starts with our boys' program, out on the Baylands. Spots are limited each season.",
  primary: { label: "Start the conversation", href: "/join" } as Cta,
};

export const footer = {
  wordmark: "Wild Wanderers",
  meta: "Strong hands · soft hearts · on the Baylands",
  credit: "A SOBO build",
};

// ---------------------------------------------------------------------------
// Ring 2. These sections are not in the mock and several are GATED on Gabe's
// transcript. Copy is on-voice placeholder; no fabricated specifics (exact
// ages, real bio claims, testimonials). Swap his truth in when it lands.
// ---------------------------------------------------------------------------

// Exact ages are GATED. Bands are descriptive until Gabe sets the numbers.
export const agesStages = {
  eyebrow: "Who it's for",
  headline: [
    [{ text: "Start where he is." }],
    [{ text: "Grow from there.", em: true }],
  ] as HeadlineLine[],
  lead: "Three stages on one trail. He steps in where he fits and moves on when he is ready.",
  stages: [
    {
      label: "The early years",
      name: "Notice",
      body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and pay attention to one true thing at a time.",
    },
    {
      label: "The middle years",
      name: "Practice",
      body: "The four steps become habit. He builds skill, takes small risks, and finds his footing with the group.",
    },
    {
      label: "The older boys",
      name: "Belong",
      body: "He carries some of the load. He looks out for the younger ones, leads a stretch of trail, and learns what it is to show up for the others.",
    },
  ],
};

// The fellowship is live. Gabe is inviting the first fathers and mentors now.
export const forDads = {
  eyebrow: "For Dads",
  flag: "Now gathering",
  headline: [
    [{ text: "The first circle is " }, { text: "gathering now.", em: true }],
  ] as HeadlineLine[],
  body: "The boys do not do this alone, and neither do you. We are inviting the first fathers and mentors this season, men who believe boys deserve real relationships, honest challenge, and encouragement. If that is you, walk with us.",
  cta: { label: "Join the first circle", href: "/for-dads" } as Cta,
};

// GATED on Gabe's real bio and a real portrait. Placeholder copy stays honest:
// no invented credentials. The ridgeline fallback stands in for the photo.
export const meetGabe = {
  eyebrow: "Meet Gabe",
  headline: [
    [{ text: "He's doing this" }],
    [{ text: "with his own sons.", em: true }],
  ] as HeadlineLine[],
  body: "Gabe built Wild Wanderers for his own boys first, then opened the trail to other families. He coaches toward the whole picture: movement, time outside, food that fuels, a steadier mind. Not as fixes. As the way you live when you live well.",
  photoCaption: "A portrait from the Baylands is on the way.",
};
