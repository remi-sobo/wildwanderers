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
    cta: { label: "Start the conversation", href: "/join" } as Cta,
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
  // Confirmed facts. Ages, group size, ratio, and the park are publishable.
  // No hard price yet; day and dates still landing.
  wayIn: {
    eyebrow: "The way in",
    headline: [[{ text: "What a gathering " }, { text: "actually is.", em: true }]] as HeadlineLine[],
    body: "A small group of boys, six to thirteen years old, eight to ten at a time, out on a stretch of the Baylands we know by heart at Bedwell Bayfront Park. We keep the ratio close, around one adult for every six boys, so no one wanders alone. A gathering runs a few hours and moves through the four steps from start to finish. We meet weekly, by season.",
    flag: "Day and dates landing soon",
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
    lead: "Three stages on one trail. He steps in where he fits and moves on when he is ready.",
    items: [
      { label: "Ages 6 to 7", name: "Notice", body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and pay attention to one true thing at a time." },
      { label: "Ages 8 to 10", name: "Practice", body: "The four steps become habit. He builds skill, takes small risks, and finds his footing with the group." },
      { label: "Ages 11 to 13", name: "Belong", body: "He carries some of the load, looks out for the younger ones, and learns what it is to show up for the others." },
    ],
  },
  // Why-boys: framed as Gabe's calling and lived experience. Never as an
  // admissions policy or legal claim (see CLAUDE.md guardrails).
  whyBoys: {
    eyebrow: "Why boys",
    headline: [[{ text: "Where I feel " }, { text: "called to begin.", em: true }]] as HeadlineLine[],
    body: "Wild Wanderers begins with boys, not because boys matter more than girls, but because this is where my own experience and relationships have led me. I believe boys thrive where they can move, explore, and feel real emotion without shame, and discover who they are without the pressure to fit someone else's mold. My hope is that every child has a place like this. This is simply where I feel called to begin. If it grows, a girls' program would not be a copy of this one. It would be shaped by women leaders, built around girls' own experiences.",
  },
  safety: {
    eyebrow: "Safe ground",
    headline: [[{ text: "Brave is not " }, { text: "reckless.", em: true }]] as HeadlineLine[],
    points: [
      { title: "Vetted mentors", body: "Every man on the trail clears a background check, references, and a walking interview out on the ground before he is ever with the boys." },
      { title: "Trained and covered", body: "CPR, first aid, and child-safety training, with general liability and accident coverage built for outdoor youth programs." },
      { title: "Clear consent", body: "Signed waivers and informed consent, plain about the risks. Nothing hidden, nothing assumed." },
      { title: "Known ground, risk sized right", body: "We work a stretch of the Baylands we read before we set out, and we scale the challenge to the boy and the day. Healthy risk is the point. Recklessness is not." },
    ],
  },
  // Price not set yet. Say it plainly in a real conversation, with the access
  // mission stated. No number.
  cost: {
    eyebrow: "Cost",
    headline: [[{ text: "Said plainly, " }, { text: "when you reach out.", em: true }]] as HeadlineLine[],
    body: "This is a for-profit program, and tuition keeps it running well. We would rather tell you the number in a real conversation than bury it in fine print. Scholarships and sliding-scale spots are part of the plan, because no boy should miss the trail over his family's finances. Reach out and we will be straight with you.",
  },
  // Named future ring (the trail log). Teaser only; not built this round.
  trailLog: "Every wanderer gets his own trail log, coming as the program grows.",
  cta: {
    headline: [[{ text: "Find him " }, { text: "a place.", em: true }]] as HeadlineLine[],
    body: "Spots are limited each season, out on the Baylands. Tell us about your boy and we will take it from there.",
    primary: { label: "Start the conversation", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// For Dads — the fellowship is live. Gabe is inviting the first circle now.
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
  // How mentors are chosen. Reuses the "Vetted mentors" language so a father
  // sees the bar before he applies.
  mentors: {
    eyebrow: "How we choose mentors",
    headline: [[{ text: "Vetted before " }, { text: "the trail.", em: true }]] as HeadlineLine[],
    body: "Every man on the trail clears a background check, references, and a walking interview out on the ground before he is ever with the boys. CPR, first aid, and child-safety training on top, with coverage built for outdoor youth programs. We hold the bar high, because you are trusting us with your son.",
  },
  invite: {
    eyebrow: "The fellowship",
    flag: "Now gathering",
    headline: [[{ text: "It is " }, { text: "gathering now.", em: true }]] as HeadlineLine[],
    body: "We are forming the first circle of fathers and mentors this season. If walking beside your son, and beside a few good men, is something you have been missing, reach out. This begins as a conversation.",
    cta: { label: "Join the first circle", href: "/join" } as Cta,
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
  // First person, Gabe's voice. Softened origin: keeps the fatherhood turn and
  // the shift toward his own dad, holds the explicit forgiveness for later.
  story: {
    eyebrow: "From Gabe",
    headline: [[{ text: "For my own " }, { text: "boys, first.", em: true }]] as HeadlineLine[],
    body: "I built Wild Wanderers for my own two boys first. Becoming a father cracked something open in me. It showed me how hard the job really is, and it softened how I think about my own dad. The Baylands is home. I watched my dad play baseball out here. I learned the outdoors out here, and I had the space to just be a kid. I proposed to my wife at the marsh. I have walked my dog thousands of miles on these trails, and a lot of this program was built on those walks. My sons are learning here now.",
    caption: "A portrait from the Baylands is on the way.",
  },
  // The careful-builder block. Reframes "new at this" as patience and care.
  careful: {
    eyebrow: "How we build",
    headline: [[{ text: "Slowly, " }, { text: "and on purpose.", em: true }]] as HeadlineLine[],
    body: "Before I invite a single family, I am building the curriculum, the mentor training, the risk management, the permits, and the partnerships. I take a parent's trust seriously, so I am taking my time. I am new at some of this, and that is fine. This is for the community, and the community is worth building slowly.",
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
    eyebrow: "Reach out",
    headline: [[{ text: "Start the " }, { text: "conversation.", em: true }]] as HeadlineLine[],
    sub: "Tell us about your boy and what you are hoping for. This begins as a conversation, not a form. We read every note and we write back like humans, because we are.",
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
    where: { label: "Where", value: "Bedwell Bayfront Park, on the Baylands" },
    when: { label: "When", value: "Weekly, by season" },
    who: { label: "Who", value: "Boys, with their dads beside them" },
  },
};
