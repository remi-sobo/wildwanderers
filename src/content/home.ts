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
  primary: { label: "Find a place this season", href: "#" } as Cta,
  secondary: { label: "See how a day unfolds", href: "#" } as Cta,
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
  primary: { label: "Find a place this season", href: "#" } as Cta,
  secondary: { label: "See how a day unfolds", href: "#" } as Cta,
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
  allLink: { label: "Meet all of them", href: "#" } as Cta,
};

export const cta = {
  headline: [[{ text: "Get well " }, { text: "together.", em: true }]] as HeadlineLine[],
  body: "It starts with our boys' program, out on the Baylands. Spots are limited each season.",
  primary: { label: "Find a place this season", href: "#" } as Cta,
};

export const footer = {
  wordmark: "Wild Wanderers",
  meta: "Movement · nature · connection · on the Baylands",
  credit: "A SOBO build",
};
