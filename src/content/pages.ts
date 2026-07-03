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
    sub: "He just needed room to roam. Wild Wanderers puts movement, time outside, and connection back into a childhood.",
  },
  thesis: {
    eyebrow: "The turn",
    headline: [[{ text: "Less still. " }, { text: "More wild.", em: true }]] as HeadlineLine[],
    body: "Kids today move less, connect less, and spend less time outside than any generation before them. That adds up, in the body and the mind. It is not a flaw in the child. He just was not given the room. So we open the door, walk him outside, and let the trail do the rest.",
  },
  steps: {
    eyebrow: "How a day moves",
    headline: [[{ text: "Four steps, " }, { text: "every time.", em: true }]] as HeadlineLine[],
    lead: "One rhythm, repeated until it becomes his own. It is not a worksheet, it is a way of meeting the day.",
    items: [
      {
        n: "01",
        title: "Observe",
        body: "Notice one thing at a time. A bird, a track, the turning tide, a feeling moving through the body.",
      },
      {
        n: "02",
        title: "Breathe",
        body: "Settle with animal breath. Heron tall, lizard long. A boy can practice getting calm the same way he practices a throw.",
      },
      {
        n: "03",
        title: "Explore",
        body: "Run, climb, build, wander. The body leads, and the learning comes along with it.",
      },
      {
        n: "04",
        title: "Reflect",
        body: "Sit, share, journal. He looks back on the day and leaves with something he worked out himself.",
      },
    ],
  },
  pillars: {
    eyebrow: "What holds it up",
    headline: [[{ text: "Three things, " }, { text: "done together.", em: true }]] as HeadlineLine[],
    items: [
      { name: "Movement", body: "Bodies built to run, climb, and carry. We give them the ground for it and get out of the way." },
      { name: "Nature", body: "The Baylands as the room. Weather, tide, and dirt do a lot of the teaching." },
      { name: "Connection", body: "A circle of boys with men beside them, so he belongs somewhere and feels it." },
    ],
  },
  // The manifesto, in Gabe's words, lightly tightened. Its home is here, as a
  // centerpiece moment. "Strong hands, soft hearts" recurs as the tagline.
  manifesto: {
    eyebrow: "The manifesto",
    body: "Wild Wanderers is a fellowship of boys, fathers, and mentors who believe childhood is a season of becoming. Through movement, meaningful relationships, and deep connection with the natural world, we make space for boys to run, jump, climb, tumble, wander, and discover who they are. The Baylands is our first chapter, but the vision reaches far beyond one place. We are cultivating strong hands, soft hearts, curious minds, and a lifelong commitment to caring for one another in the wild places that shape us.",
    motto: "Strong hands, soft hearts.",
  },
  animals: {
    eyebrow: "The Baylands animals",
    headline: [[{ text: "Every animal teaches " }, { text: "a power.", em: true }]] as HeadlineLine[],
    body: "Heron for calm, Hawk for perspective, Coyote for adaptability, Mountain Lion for courage. Each totem is a handle on a hard idea, sized for a kid. The full system has more, and it grows with him.",
    cta: { label: "Join the first Baylands circle", href: "/join" } as Cta,
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
    sub: "Our first program is for boys, out on the trail, learning to move, explore, and look out for each other. Every week, with the dads beside them.",
  },
  // Confirmed facts, all publishable: ages, group size, the park, the days.
  wayIn: {
    eyebrow: "The way in",
    headline: [[{ text: "What a gathering " }, { text: "looks like.", em: true }]] as HeadlineLine[],
    body: "A small group of boys, five to thirteen years old, around ten at a time, out on the Baylands Nature Preserve in Palo Alto. We keep the group small so every boy is known, encouraged, challenged, and mentored at his own level. We meet Monday, Wednesday, and Friday for three hours a day, and the day moves through the four steps from start to finish. Over time we will roam other Bay Area and peninsula wild places too.",
  },
  day: {
    eyebrow: "A day on the trail",
    headline: [[{ text: "Start to finish." }]] as HeadlineLine[],
    items: [
      { time: "Arrive", title: "Leave the week behind", body: "Boots on and phones away. We circle up, settle in, and look at where we are headed." },
      { time: "Settle", title: "Find calm", body: "Animal breath, and noticing one thing to start. We let the body settle before it gets going." },
      { time: "Out", title: "Head out", body: "Run, climb, wade, build. Rough ground and some risk, sized to the boy and the day." },
      { time: "Back", title: "Look back", body: "Sit, share, journal. He names what he found, and carries it home." },
    ],
  },
  // The whole year at a glance. Session language only; the next one opens soon,
  // and the conversation is still the way in (guardrails).
  year: {
    eyebrow: "The year",
    headline: [[{ text: "The shape of " }, { text: "the year.", em: true }]] as HeadlineLine[],
    lead: "We run the year in three sessions. A boy can come for one or grow across all three.",
    items: [
      { season: "Fall session", span: "September through December", body: "The main season on the Baylands, three mornings a week as the marsh turns toward winter." },
      { season: "Spring session", span: "January through May", body: "Back on the trail as the marsh comes alive, from the first warm weeks through late spring." },
      { season: "Summer camp", span: "June through August", body: "Camp through the summer, with longer mornings and more time outside." },
    ],
    close: "The next session opens soon. Starting a conversation is the way in.",
  },
  stages: {
    eyebrow: "Ages and stages",
    headline: [[{ text: "Start where he is. " }, { text: "Grow from there.", em: true }]] as HeadlineLine[],
    lead: "Three stages on one trail. He steps in where he fits and moves on when he is ready.",
    items: [
      { label: "Ages 5 to 7", name: "Notice", body: "First taste of the trail. Low stakes, plenty of wonder. He learns to slow down and notice what is in front of him." },
      { label: "Ages 8 to 10", name: "Practice", body: "The four steps become habit. He builds skill, takes small risks, and finds his footing with the group." },
      { label: "Ages 11 to 13", name: "Belong", body: "He carries some of the load, looks out for the younger ones, and learns what it is to show up for the others." },
    ],
  },
  // Why-boys: framed as Gabe's calling and lived experience. Never as an
  // admissions policy or legal claim (see CLAUDE.md guardrails).
  whyBoys: {
    eyebrow: "Why boys",
    headline: [[{ text: "Where I feel " }, { text: "called to begin.", em: true }]] as HeadlineLine[],
    body: "Wild Wanderers begins with boys, not because boys matter more than girls, but because this is where my own experience and relationships have led me. I believe boys do well where they can move, explore, and feel what they feel without shame, and figure out who they are without pressure to fit someone else's mold. My hope is that every child has a place like this. This is simply where I feel called to begin. If it grows, a girls' program would not be a copy of this one. It would be shaped by women leaders, built around girls' own experiences.",
  },
  safety: {
    eyebrow: "Safe ground",
    headline: [[{ text: "Brave is not " }, { text: "reckless.", em: true }]] as HeadlineLine[],
    points: [
      { title: "Vetted mentors", body: "Every man on the trail clears a background check, references, and a walking interview out on the ground before he is ever with the boys." },
      { title: "Trained and covered", body: "CPR, first aid, and child-safety training, with general liability and accident coverage built for outdoor youth programs." },
      { title: "Clear consent", body: "Signed waivers and informed consent, and we are plain with you about the risks." },
      { title: "Known ground, risk sized right", body: "We work a stretch of the Baylands we read before we set out, and we scale the challenge to the boy and the day. Healthy risk is part of it. We just keep it from tipping into reckless." },
    ],
  },
  // Fall session rate, published. Access mission stays; ends on the invitation.
  cost: {
    eyebrow: "Cost",
    headline: [[{ text: "What it costs, " }, { text: "for the fall.", em: true }]] as HeadlineLine[],
    body: "For the fall session, tuition is $60 a day, or $180 a week for all three days. That covers the mentors, the gear, and the mornings out on the Baylands. Scholarships and sliding-scale spots are part of the plan, because no boy should miss the trail over his family's money. If you have a question about the cost, reach out and we will talk it through.",
  },
  // Named future ring (the trail log). Teaser only; not built this round.
  trailLog: "Every wanderer gets his own trail log, coming as the program grows.",
  cta: {
    headline: [[{ text: "Find him " }, { text: "a place.", em: true }]] as HeadlineLine[],
    body: "Spots are limited each season, out on the Baylands. Tell us about your boy and we will take it from there.",
    primary: { label: "Join the first Baylands circle", href: "/join" } as Cta,
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
    headline: [[{ text: "Shoulder " }, { text: "to shoulder.", em: true }]] as HeadlineLine[],
    body: "Most of fathering happens side by side. A boy learns more from a man doing the hard thing next to him than from a man telling him to do it. So we put the dads on the trail too, next to their sons through the same day.",
  },
  does: {
    eyebrow: "What dads do",
    headline: [[{ text: "Show up. " }, { text: "Walk. Listen.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Be there", body: "The work is mostly presence. You do not have to be an outdoorsman. You have to show up and stay." },
      { title: "Model the steps", body: "Observe, breathe, explore, reflect. The boys watch you do it long before they trust it themselves." },
      { title: "Find your own circle", body: "Fathering can be lonely. Walking the same trail as a few other dads turns out to be good for the men too." },
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
    body: "We are forming the first circle of fathers and mentors this season. If walking beside your son, alongside a few other dads, is something you have been missing, reach out. This begins as a conversation.",
    cta: { label: "Join the first Baylands circle", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// About — GATED on Gabe's real bio and a real portrait. No invented credentials.
// ---------------------------------------------------------------------------
export const aboutPage = {
  hero: {
    eyebrow: "About",
    headline: [[{ text: "A dad, " }, { text: "and a trail.", em: true }]] as HeadlineLine[],
    sub: "Wild Wanderers started simply. One father, his own boys, and a hunch that the outdoors was where to start.",
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
    body: "We will not wave studies around to scare you. Kids who move more, get outside more, and feel they belong tend to do better, in the body and the mind, and the research keeps pointing the same way. We built the program around the parts a family can do together, every week. No deficit talk about your son. Just a good trail and good men on it.",
  },
  coaches: {
    eyebrow: "What he coaches toward",
    headline: [[{ text: "The whole " }, { text: "picture.", em: true }]] as HeadlineLine[],
    items: [
      { name: "Movement", body: "A body used the way it was built to be, often, outdoors." },
      { name: "Time outside", body: "Time outdoors in all kinds of weather, where attention and calm come back." },
      { name: "Food that fuels", body: "Talked about plainly, not preached. What you eat when you are living well." },
      { name: "A steadier mind", body: "Calm you can practice, and time to make sense of the day." },
    ],
  },
  cta: {
    headline: [[{ text: "Come meet " }, { text: "the trail.", em: true }]] as HeadlineLine[],
    body: "The fastest way to understand Wild Wanderers is to stand on the Baylands at golden hour. Start a conversation and we will find a time.",
    primary: { label: "Join the first Baylands circle", href: "/join" } as Cta,
  },
};

// ---------------------------------------------------------------------------
// Join — the single conversion page.
// ---------------------------------------------------------------------------
export const joinPage = {
  hero: {
    eyebrow: "Reach out",
    headline: [[{ text: "Start the " }, { text: "conversation.", em: true }]] as HeadlineLine[],
    sub: "Tell us about your boy and what you are hoping for. This is a conversation, not a form. We read every note, and a person writes back.",
  },
  reasons: [
    { title: "Limited each season", body: "Small groups are the point, so spots are few. The list is how we keep it fair." },
    { title: "A personal reply", body: "There is no automated funnel here. Gabe or someone close to him reads your note and writes back." },
    { title: "No pressure", body: "Being curious is enough. You can ask us anything before you decide." },
  ],
  form: {
    eyebrow: "The way in",
    headline: [[{ text: "Leave your name, " }, { text: "start the walk.", em: true }]] as HeadlineLine[],
    note: "We will only use this to talk with you about Wild Wanderers. Nothing else, ever.",
    success: {
      headline: "We have your note.",
      body: "Thank you for reaching out. Someone will write back soon about the way in for your family.",
    },
  },
  practical: {
    where: { label: "Where", value: "Baylands Nature Preserve, Palo Alto" },
    when: { label: "When", value: "Mon, Wed, Fri mornings, by season" },
    who: { label: "Who", value: "Boys, with their dads beside them" },
  },
};
