/**
 * Interior-page copy. Words are data so edits never touch components.
 *
 * Voice: SOBO house voice. Warm, direct, specific, premium restraint. No em
 * dashes, no wellness clichés, never a child framed as broken. Gated specifics
 * (exact ages, cost, dates, real bio claims, testimonials) are left as honest
 * placeholders, not invented. Swap Gabe's truth in when it lands.
 */
import type { Cta, HeadlineLine } from "@/content/home";

export const routes = {
  movement: "/the-movement",
  program: "/the-program",
  forDads: "/for-dads",
  about: "/about",
  join: "/join",
} as const;

// ---------------------------------------------------------------------------
// The Movement — the why and the four-step approach.
// ---------------------------------------------------------------------------
export const movementPage = {
  hero: {
    eyebrow: "The movement",
    headline: [
      [{ text: "It was never that" }],
      [{ text: "the boy was broken.", em: true }],
    ] as HeadlineLine[],
    sub: "He just needed room to roam. Wild Wanderers is movement, nature, and real connection, put back where a childhood can reach them.",
  },
  thesis: {
    eyebrow: "The turn",
    headline: [[{ text: "Less still. " }, { text: "More wild.", em: true }]] as HeadlineLine[],
    body: "Kids today move less, connect less, and spend less time outside than any generation before them. The quiet cost lands on the body and the mind at once. We do not treat that as a flaw in the child. We treat it as a room he was never given. So we open the door, walk him outside, and let the trail do what trails have always done.",
  },
  steps: {
    eyebrow: "How a day moves",
    headline: [[{ text: "Four steps, " }, { text: "every time.", em: true }]] as HeadlineLine[],
    lead: "One rhythm, repeated until it is his. Not a worksheet. A way of meeting a day.",
    items: [
      {
        n: "01",
        title: "Observe",
        body: "Notice one true thing. A bird, a track, the turning tide, a feeling moving through the body. Attention is the first muscle.",
      },
      {
        n: "02",
        title: "Breathe",
        body: "Settle with animal breath. Heron tall, lizard long. Calm is a skill, and a boy can practice it the same way he practices a throw.",
      },
      {
        n: "03",
        title: "Explore",
        body: "Run, climb, build, wander. The body leads and the learning rides along quietly underneath, where it sticks.",
      },
      {
        n: "04",
        title: "Reflect",
        body: "Sit, share, journal. Meaning is found in the looking back, not handed down in a lesson. He leaves with something he found himself.",
      },
    ],
  },
  pillars: {
    eyebrow: "What holds it up",
    headline: [[{ text: "Three things, " }, { text: "done together.", em: true }]] as HeadlineLine[],
    items: [
      { name: "Movement", body: "Bodies built to run, climb, and carry. We give them the ground for it and get out of the way." },
      { name: "Nature", body: "The Baylands as the room. Weather, tide, and dirt, the oldest teachers a boy ever had." },
      { name: "Connection", body: "A circle of boys and a few good men beside them. Belonging he can feel, not just be told about." },
    ],
  },
  animals: {
    eyebrow: "The Baylands animals",
    headline: [[{ text: "Every animal teaches " }, { text: "a power.", em: true }]] as HeadlineLine[],
    body: "Heron for calm, Hawk for perspective, Coyote for adaptability, Mountain Lion for courage. Each totem is a handle on a hard idea, sized for a kid. The full system has more, and it grows with him.",
    cta: { label: "Find a place this season", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// The Program — the boys program, with the practical answers a parent hunts for.
// Exact ages, cost, dates, group size are GATED on Gabe.
// ---------------------------------------------------------------------------
export const programPage = {
  hero: {
    eyebrow: "The flagship program",
    headline: [[{ text: "A boys' program," }], [{ text: "out on the Baylands.", em: true }]] as HeadlineLine[],
    sub: "Our first trail is built on movement, nature, and the kind of brotherhood that makes a kid brave. Every week, with the dads right beside them.",
  },
  // GATED: the actual offer (ages, what a gathering is, where, how often, when).
  wayIn: {
    eyebrow: "The way in",
    headline: [[{ text: "What a gathering " }, { text: "actually is.", em: true }]] as HeadlineLine[],
    body: "A small group of boys, a stretch of the Baylands, and a few hours that move through the four steps from start to finish. They arrive, they settle, they head out, and they come back changed in a small way they can name. The exact ages, days, and meeting spot are being set now and land here the moment they are final.",
    flag: "Details landing soon",
  },
  day: {
    eyebrow: "A day on the trail",
    headline: [[{ text: "Start to finish." }]] as HeadlineLine[],
    items: [
      { time: "Arrive", title: "Drop the week", body: "Boots on, screens off. A circle to land, and a look at where we are headed." },
      { time: "Settle", title: "Find calm", body: "Animal breath and one true thing noticed. The nervous system comes down before the body goes up." },
      { time: "Out", title: "Into it", body: "Run, climb, wade, build. Real terrain, real risk sized right, a body that gets to be a body." },
      { time: "Back", title: "Look back", body: "Sit, share, journal. He names what he found, and carries it home." },
    ],
  },
  stages: {
    eyebrow: "Ages and stages",
    headline: [[{ text: "Start where he is. " }, { text: "Grow from there.", em: true }]] as HeadlineLine[],
    lead: "Three stages on one trail. He steps in where he fits and moves on when he is ready. Exact ages land with the rest of the details.",
    items: [
      { label: "The early years", name: "Notice", body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and pay attention to one true thing at a time." },
      { label: "The middle years", name: "Practice", body: "The four steps become habit. He builds skill, takes small risks, and finds his footing with the group." },
      { label: "The older boys", name: "Belong", body: "He carries some of the load, looks out for the younger ones, and learns what it is to show up for the others." },
    ],
  },
  safety: {
    eyebrow: "Safe ground",
    headline: [[{ text: "Brave is not " }, { text: "reckless.", em: true }]] as HeadlineLine[],
    points: [
      { title: "Known ground", body: "We work a stretch of the Baylands we know by heart, in weather we read before we set out." },
      { title: "A few good men", body: "Real adults beside the boys the whole way, kneeling to a kid's level, never barking from the side." },
      { title: "Risk, sized right", body: "Healthy risk is the point. We scale it to the boy and the day so the stretch is real and the floor is solid." },
    ],
  },
  // GATED: said plainly when Gabe sets it.
  cost: {
    eyebrow: "Cost",
    headline: [[{ text: "Said plainly, " }, { text: "when you reach out.", em: true }]] as HeadlineLine[],
    body: "This is a for-profit program, priced to run well and last. We would rather tell you the number in a real conversation than bury it in fine print, and we are working on the ways in for families it should not lock out. Reach out and we will be straight with you.",
  },
  cta: {
    headline: [[{ text: "Find him " }, { text: "a place.", em: true }]] as HeadlineLine[],
    body: "Spots are limited each season, out on the Baylands. Tell us about your boy and we will take it from there.",
    primary: { label: "Find a place this season", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// For Dads — GATED on whether the fellowship is live. Framed as forming.
// ---------------------------------------------------------------------------
export const dadsPage = {
  hero: {
    eyebrow: "For Dads",
    headline: [[{ text: "Walk beside him," }], [{ text: "not ahead.", em: true }]] as HeadlineLine[],
    sub: "The boys do not do this alone, and neither do you. The fellowship is a few good men walking the same trail as their sons.",
  },
  ethos: {
    eyebrow: "The ethos",
    headline: [[{ text: "Beside, " }, { text: "not above.", em: true }]] as HeadlineLine[],
    body: "Most of fathering happens shoulder to shoulder, not face to face. A boy learns more from a man doing the hard thing next to him than from a man telling him to. So we put the dads on the trail too, breathing the same air, taking the same small risks, looking back at the same day.",
  },
  does: {
    eyebrow: "What dads do",
    headline: [[{ text: "Show up. " }, { text: "Walk. Listen.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Be there", body: "The work is mostly presence. You do not have to be an outdoorsman. You have to show up and stay." },
      { title: "Model the steps", body: "Observe, breathe, explore, reflect. The boys watch you do it long before they trust it themselves." },
      { title: "Find your own circle", body: "Fathering can be lonely. A few good men on the same trail turns out to be good for the men too." },
    ],
  },
  invite: {
    eyebrow: "The fellowship",
    flag: "Forming now",
    headline: [[{ text: "It is " }, { text: "forming now.", em: true }]] as HeadlineLine[],
    body: "We are gathering the first circle of dads this season. If walking beside your son, and beside a few good men, sounds like something you have been missing, leave your name and we will tell you the moment it opens.",
    cta: { label: "Tell me when it opens", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// About — GATED on Gabe's real bio and a real portrait. No invented credentials.
// ---------------------------------------------------------------------------
export const aboutPage = {
  hero: {
    eyebrow: "About",
    headline: [[{ text: "A dad, " }, { text: "and a trail.", em: true }]] as HeadlineLine[],
    sub: "Wild Wanderers started the way the best things do. One father, his own boys, and a hunch that the way out was outside.",
  },
  story: {
    eyebrow: "Meet Gabe",
    headline: [[{ text: "He is doing this" }], [{ text: "with his own sons.", em: true }]] as HeadlineLine[],
    body: "Gabe built Wild Wanderers for his own boys first, then opened the trail to other families. He coaches toward the whole picture: movement, time outside, food that fuels, a steadier mind. Not as fixes for something wrong. As the way you live when you live well. The fuller story, and a real portrait from the Baylands, are on the way.",
    caption: "A portrait from the Baylands is on the way.",
  },
  why: {
    eyebrow: "The why",
    headline: [[{ text: "Honest about " }, { text: "the research.", em: true }]] as HeadlineLine[],
    body: "We will not wave studies around to scare you. The plain version: kids who move more, get outside more, and feel they belong tend to do better, in the body and the mind, and the research keeps pointing the same way. We built a program around the parts a family can actually do, together, every week. No deficit talk about your son. Just a good trail and good men on it.",
  },
  coaches: {
    eyebrow: "What he coaches toward",
    headline: [[{ text: "The whole " }, { text: "picture.", em: true }]] as HeadlineLine[],
    items: [
      { name: "Movement", body: "A body used the way it was built to be, often, outdoors." },
      { name: "Time outside", body: "Real hours in real weather, where attention and calm are rebuilt." },
      { name: "Food that fuels", body: "Coached toward, plainly, never preached. What you eat when you are living well." },
      { name: "A steadier mind", body: "Calm as a practiced skill, and meaning a boy finds in the looking back." },
    ],
  },
  cta: {
    headline: [[{ text: "Come meet " }, { text: "the trail.", em: true }]] as HeadlineLine[],
    body: "The fastest way to understand Wild Wanderers is to stand on the Baylands at golden hour. Start a conversation and we will find a time.",
    primary: { label: "Start the conversation", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// Join — the single conversion page.
// ---------------------------------------------------------------------------
export const joinPage = {
  hero: {
    eyebrow: "Find a place",
    headline: [[{ text: "Find a place " }, { text: "this season.", em: true }]] as HeadlineLine[],
    sub: "Tell us about your boy and what you are hoping for. We read every note, and we will write back like humans, because we are.",
  },
  reasons: [
    { title: "Limited each season", body: "Small groups are the point, so spots are few. The list is how we keep it fair." },
    { title: "A real reply", body: "No funnel, no drip. Gabe or someone close to him reads your note and answers it." },
    { title: "No pressure", body: "Curious counts. You can ask everything before you decide anything." },
  ],
  form: {
    eyebrow: "The way in",
    headline: [[{ text: "Leave your name, " }, { text: "start the walk.", em: true }]] as HeadlineLine[],
    note: "We will only use this to talk with you about Wild Wanderers. Nothing else, ever.",
    success: {
      headline: "We have your note.",
      body: "Thank you for reaching out. We will write back soon, from a real person, about the way in for your family.",
    },
  },
  practical: {
    where: { label: "Where", value: "On the Baylands" },
    when: { label: "When", value: "Weekly, by season" },
    who: { label: "Who", value: "Boys, with their dads beside them" },
  },
};
