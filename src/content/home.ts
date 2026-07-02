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
  eyebrow: "Wild Wanderers · Baylands Chapter One",
  headline: [
    [{ text: "Boys were born" }],
    [{ text: "to " }, { text: "move.", em: true }],
  ] as HeadlineLine[],
  sub: "An outdoor movement and mentorship program for boys and their dads and mentors. A weekly rhythm of nature, breath, courage, and connection, out on the Baylands.",
  primary: { label: "Join the first Baylands circle", href: "/join" } as Cta,
  secondary: { label: "See how it works", href: "#how-it-works" } as Cta,
  scrollCue: "Scroll",
  photoAlt:
    "A father and son on a ridge at golden hour, looking out over rolling hills",
};

// Why now. The strongest argument for the program, made concrete: what a
// screen-heavy, sat-down childhood costs, and the trade we offer instead.
export const whyNow = {
  eyebrow: "Why now",
  headline: [
    [{ text: "Childhood has gotten" }],
    [{ text: "too " }, { text: "still.", em: true }],
  ] as HeadlineLine[],
  body: "Kids spend more time inside, more time on screens, and less time moving through the real world with people who know them. Boys feel it in the body and in the mind. Wild Wanderers goes the other direction.",
  trades: [
    {
      less: "Less screen.",
      more: "More sky.",
      body: "Trade the feed for weather, tide, and mud that is actually cold.",
    },
    {
      less: "Less sitting.",
      more: "More strength.",
      body: "Run, climb, carry, tumble. A body used the way it was built to be used.",
    },
    {
      less: "Less isolation.",
      more: "More belonging.",
      body: "A circle of boys and men who know his name and expect him back.",
    },
  ],
};

// What it is, said plainly, with the confirmed facts as a spec row. Facts are
// GATED: publish only what Gabe confirmed (CLAUDE.md). No price, no dates.
export const whatItIs = {
  eyebrow: "What it is",
  headline: [
    [{ text: "A weekly trail rhythm for boys" }],
    [{ text: "becoming " }, { text: "strong, calm, and connected.", em: true }],
  ] as HeadlineLine[],
  body: "Every week, a small circle of boys gathers outdoors with their dads and mentors and moves through the Baylands together. They run and climb, practice animal breath, track what the marsh is doing, build, wander, and sit down at the end to make sense of it all. Simple on purpose, and it adds up.",
  facts: [
    { label: "Who", value: "Boys 6 to 13, with dads and mentors beside them" },
    { label: "Group", value: "8 to 10 boys, about one adult per six" },
    { label: "Where", value: "Bedwell Bayfront Park, on the Baylands" },
    { label: "When", value: "Weekly, by season" },
  ],
  primary: { label: "Join the first Baylands circle", href: "/join" } as Cta,
  secondary: { label: "See a full gathering", href: "/the-program" } as Cta,
  badge: "EST. ON THE BAYLANDS",
};

// The chapter model on the homepage. Leads with the movement, presents the
// Baylands as Chapter One, teases the horizon. Sits between Movement and
// Flagship. Motto strip carries "Run · Jump · Climb · Tumble · Wander · Become".
export const chaptersSection = {
  eyebrow: "The bigger picture",
  headline: [
    [{ text: "The Baylands is " }, { text: "chapter one.", em: true }],
  ] as HeadlineLine[],
  body: "Wild Wanderers is not about one marsh. It is about the wild places inside every community, and what they can do for a childhood. We start on the Baylands because it is home. Someday there may be other chapters, each with its own ground and its own mentors, all built the same way.",
  horizonLabel: "On the horizon",
  motto: ["Run", "Jump", "Climb", "Tumble", "Wander", "Become"],
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
      body: "Notice the world, the body, and the moment. A bird, a track, the turning tide, a feeling moving through.",
    },
    {
      n: "02",
      title: "Breathe",
      body: "Practice calm with animal breath. Heron tall, lizard long. Getting steady is a skill, and he can train it.",
    },
    {
      n: "03",
      title: "Explore",
      body: "Run, climb, build, wander. Move with purpose over real ground, and the learning comes along with it.",
    },
    {
      n: "04",
      title: "Reflect",
      body: "Sit, share, journal. He names what the day taught him, and carries it home.",
    },
  ],
};

export const animalsSection = {
  eyebrow: "The field guide",
  headline: [[{ text: "Every animal teaches " }, { text: "a power.", em: true }]] as HeadlineLine[],
  note: "The animals are memory anchors. Each one gives a boy a handle on character, movement, and staying steady when a day gets hard.",
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
      body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and notice what is in front of him.",
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
  body: "The boys do not do this alone, and neither do you. We are inviting the first fathers and mentors this season, men who believe boys deserve good relationships, honest challenge, and encouragement. If that is you, walk with us.",
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
  body: "Gabe built Wild Wanderers for his own boys first, then opened the trail to other families. He coaches the whole picture: moving your body, getting outside, eating well, keeping a steady mind. Not to fix anything, just how you live when you are living well.",
  photoCaption: "A portrait from the Baylands is on the way.",
};
