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
    [
      { text: "A weekly trail rhythm for boys becoming " },
      { text: "strong, calm, and connected.", em: true },
    ],
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
  eyebrow: "The movement",
  headline: [
    [{ text: "The Baylands is " }, { text: "Chapter One.", em: true }],
  ] as HeadlineLine[],
  body: "Wild Wanderers is bigger than one marsh. It is a movement of families raising boys outdoors, and every movement starts on some particular piece of ground. Ours starts on the Baylands, the ground Gabe knows best. When the first circle is strong, new chapters can follow, each with its own wild place and its own mentors.",
  horizonLabel: "Chapters on the horizon",
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
  headline: [
    [{ text: "Join the first" }],
    [{ text: "Baylands " }, { text: "circle.", em: true }],
  ] as HeadlineLine[],
  body: "The first group is gathering now, and it stays small on purpose. If you want your son to move more, get outside, grow in courage, and build real connection with you beside him, start the conversation.",
  primary: { label: "Join the first Baylands circle", href: "/join" } as Cta,
  secondary: { label: "Talk with Gabe", href: "/join" } as Cta,
};

export const footer = {
  wordmark: "Wild Wanderers",
  mission:
    "An outdoor movement and mentorship program for boys and their dads and mentors. Chapter One gathers on the Baylands.",
  facts: ["Bedwell Bayfront Park", "Weekly, by season", "Boys 6 to 13"],
  meta: "Strong hands · soft hearts · on the Baylands",
  credit: "A SOBO build",
};

// ---------------------------------------------------------------------------
// Ring 2. These sections are not in the mock and several are GATED on Gabe's
// transcript. Copy is on-voice placeholder; no fabricated specifics (exact
// ages, real bio claims, testimonials). Swap his truth in when it lands.
// ---------------------------------------------------------------------------

// Ages are the confirmed bands from the program page (6 to 13 overall).
export const agesStages = {
  eyebrow: "Who it's for",
  headline: [
    [{ text: "Start where he is." }],
    [{ text: "Grow from there.", em: true }],
  ] as HeadlineLine[],
  lead: "Three stages on one trail. He steps in where he fits and moves on when he is ready.",
  stages: [
    {
      label: "Ages 6 to 7",
      name: "Notice",
      body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and notice what is in front of him.",
    },
    {
      label: "Ages 8 to 10",
      name: "Practice",
      body: "The four steps become habit. He builds skill, takes small risks, and finds his footing with the group.",
    },
    {
      label: "Ages 11 to 13",
      name: "Belong",
      body: "He carries some of the load. He looks out for the younger ones, leads a stretch of trail, and learns what it is to show up for the others.",
    },
  ],
};

// What a season gives a boy. Outcomes, not features, and never deficit talk:
// nothing here frames a boy as broken, only as growing.
export const forBoys = {
  eyebrow: "For boys",
  headline: [
    [{ text: "Strong bodies. Soft hearts." }],
    [{ text: "Wide eyes.", em: true }],
  ] as HeadlineLine[],
  lead: "A boy who walks with us is working on the same few things every week, until they belong to him.",
  outcomes: [
    {
      title: "Confidence in his body",
      body: "He learns what he can lift, climb, and outrun, and starts to trust it.",
    },
    {
      title: "Comfort outdoors",
      body: "Weather, mud, and open sky stop being a big deal.",
    },
    {
      title: "A steady inside",
      body: "Breath he can reach for when the day gets loud.",
    },
    {
      title: "Courage and healthy risk",
      body: "The hard, good thing, sized to the boy and the day.",
    },
    {
      title: "Belonging with other boys",
      body: "Friendship built on shared miles, not shared screens.",
    },
    {
      title: "Respect for nature and others",
      body: "He learns to read the marsh, and to look out for the boy beside him.",
    },
  ],
};

// The fellowship is live. Dads and mentors are participants, never spectators,
// and the invitation stays warm, not guilt-heavy.
export const forDads = {
  eyebrow: "For dads and mentors",
  flag: "Now gathering",
  headline: [
    [{ text: "He does not do this " }, { text: "alone.", em: true }],
  ] as HeadlineLine[],
  body: "Fathers and mentors are not spectators here. You walk the same trail, try the same breath, take the same wrong turns, and let him watch you handle it. No wilderness resume required. Presence is the work, and most men find the circle is good for them too.",
  cta: { label: "Walk with us", href: "/for-dads" } as Cta,
};

// Portrait still GATED on a real photo; the ridgeline fallback stands in. Bio
// stays honest: no invented credentials, family as roots and never the face.
export const meetGabe = {
  eyebrow: "Meet Gabe",
  headline: [
    [{ text: "Built by a father" }],
    [{ text: "on the trail.", em: true }],
  ] as HeadlineLine[],
  body: "Gabe built Wild Wanderers with his own sons first, on the same Baylands trails where he grew up. The program brings together what he has spent years living: movement, real food, breath, time outside, and the daily work of being a dad. Now he is inviting a first circle of families to walk it with him.",
  more: { label: "Read his story", href: "/about" } as Cta,
  photoCaption: "A portrait from the Baylands is on the way.",
};
