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
