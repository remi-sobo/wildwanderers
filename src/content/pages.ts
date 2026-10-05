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
  fitness: "/fitness",
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
  // All-weather: about how a day works, not who Gabe is, so it lives here.
  allWeather: {
    eyebrow: "Rain or shine",
    headline: [[{ text: "There is no such thing as " }, { text: "bad weather.", em: true }]] as HeadlineLine[],
    body: "We go outside in all of it. With the right gear, we head into the mud puddles and the creeks and learn to love every kind of day. The only thing that keeps us in is real danger, like lightning. Weather is not an obstacle to the adventure. Most days, it is the adventure.",
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
      { time: "Arrive", title: "Check in", body: "An emotional check-in and a welcome circle. Each boy sets an intention for the day." },
      { time: "Out", title: "Head out", body: "Free play, hiking, and climbing where it is safe. Tracking, and whatever wild things the day turns up." },
      { time: "Along the way", title: "Learn as we go", body: "Hands-on lessons, sparked by whatever the day serves up." },
      { time: "Back", title: "Reflect", body: "Stories, journals, and gratitude. We share what we saw before heading home." },
    ],
  },
  // Emergent curriculum: lessons follow the boys, not a worksheet. Reads as the
  // lead into the adventures list below.
  curriculum: "The curriculum follows the boys' questions. Lessons in ecology, communication, problem solving, and confidence arrive through what they meet on the trail, not off a worksheet. The goal is simple: a lifelong love of learning.",
  // What the days hold, curated to a handful of buckets. Plain nouns.
  adventures: {
    eyebrow: "On the trail",
    headline: [[{ text: "What the adventures " }, { text: "include.", em: true }]] as HeadlineLine[],
    items: [
      { name: "Wild play and exploration", body: "Free play, hikes, tree climbing, forts and shelters, treasure hunts." },
      { name: "Knowing the land", body: "Wildlife tracking, plants, insects, birds, weather and tides, nature journaling and sketching." },
      { name: "A strong body", body: "Fitness through play, how the body works, food, water, energy, breath work." },
      { name: "The group", body: "Team games, emotional check-ins, leadership, and boys inventing their own games." },
      { name: "Caring for the place", body: "Stewardship of the Baylands." },
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
  // The creed, in Gabe's voice. Eight principles as the fellowship holds them,
  // set apart by the closing fellowship line. Values carry the spirit; no
  // scripture on the public site (Gabe's call).
  principles: {
    eyebrow: "What we believe",
    headline: [[{ text: "Eight things we " }, { text: "hold to.", em: true }]] as HeadlineLine[],
    lead: "Not rules on a wall. The way this fellowship actually moves.",
    items: [
      { n: "01", title: "The boys are the heroes", body: "This is their story. We are not the point." },
      { n: "02", title: "The mentors walk beside", body: "Fathers and guides, shoulder to shoulder, not out front and not above." },
      { n: "03", title: "Kyezen", body: "Continuous improvement. One percent better, most days, for the long haul." },
      { n: "04", title: "Brotherhood", body: "We sharpen one another, hold one another accountable, and carry the mission together." },
      { n: "05", title: "Stewardship", body: "We care for the land, the community, and each other. Like the redwoods, we are only stronger together." },
      { n: "06", title: "Wonder before instruction", body: "Curiosity leads, and the curriculum follows." },
      { n: "07", title: "Strong hands, soft hearts", body: "We build physical courage and emotional strength in the same boy." },
      { n: "08", title: "Embodiment over expertise", body: "We become what we hope to inspire. In time, the student grows like the teacher." },
    ],
    close: "Wild Wanderers is not a program built around one leader. It is a fellowship of mentors always trying to get a little better, bound by a love for boys, the outdoors, and one another.",
  },
  // Kyezen: the one-percent, long-haul idea, carrying Gabe's son's name.
  kyezen: {
    eyebrow: "Kyezen",
    headline: [[{ text: "One percent, " }, { text: "most days.", em: true }]] as HeadlineLine[],
    body: "Kyezen means continuous improvement. Not a drastic change overnight, but a small one today, and again tomorrow. Some days a boy gains a lot and it feels great. Other days he gains a little, or he rests, and that counts just as much. Small changes become habits, and habits compound. Like a boulder starting downhill, once it rolls it is hard to stop. We are in this for the long haul.",
    note: "The word comes from kai, change, and zen, good. It is also the name of Gabe's first son.",
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

// ===========================================================================
// v2 (October 2026 handoff). Copy is verbatim from the approved prototypes,
// checked against Operations Manual v1.1 (see the handoff's "Site vs Ops
// Manual"). Facts follow the manual: one after-school cohort, 4:00 to 6:00,
// the Baylands trail from East Palo Alto to Palo Alto, two screened adults
// and no more than six boys per adult. No season, price, or insurance claim.
// The older page exports above retire as each page is rebuilt on these.
// ===========================================================================

// The two closing bands the boys pages share.
const cohortCta = {
  headline: [
    [{ text: "Interested in the first " }, { text: "Wild Wanderers cohort?", em: true }],
  ] as HeadlineLine[],
  body: "Tell us about your son and we'll follow up with availability and next steps.",
  primary: { label: "Join", href: "/join" } as Cta,
};

const questionsCta = {
  headline: [[{ text: "Have questions about " }, { text: "the program?", em: true }]] as HeadlineLine[],
  body: "Start with the interest form and we'll get back to you.",
  primary: { label: "Get in touch", href: "/join" } as Cta,
};

// The program page. Its hero is the former homepage hero (hero.png).
export const programCopy = {
  hero: {
    eyebrow: "The boys program",
    headline: [
      [{ text: "Boys were born" }],
      [{ text: "to " }, { text: "move.", em: true }],
    ] as HeadlineLine[],
    sub: "After school, small groups of boys ages 5–13 move through the Baylands with screened adult leaders. They exercise, explore, learn outdoor skills, spend time independently, and finish the day together.",
    primary: { label: "Join the first cohort", href: "/join" } as Cta,
    photoAlt: "A father and son on a ridge at golden hour, looking out over rolling hills",
  },
  facts: [
    { label: "Ages", value: "Boys 5–13" },
    { label: "Time", value: "After school, 4:00–6:00 PM" },
    { label: "Location", value: "The Baylands trail, East Palo Alto to Palo Alto" },
    {
      label: "Group size",
      value: "No more than six boys per adult. At least two screened adults are present.",
    },
  ],
  session: {
    eyebrow: "A session",
    headline: [[{ text: "What happens during " }, { text: "a session.", em: true }]] as HeadlineLine[],
    intro:
      "Each session moves along the trail from drop-off to pickup. Times may shift slightly as the schedule is finalized.",
    day: [
      { time: "4:00", title: "Arrive", body: "Check in, have a snack, and get moving while the group arrives." },
      { time: "4:20", title: "Check in", body: "Review the plan and boundaries for the day and take a few minutes to settle in." },
      { time: "4:30", title: "Move", body: "A movement game, workout, or physical challenge." },
      { time: "5:00", title: "Explore", body: "Explore the trail through nature, outdoor skills, and hands-on learning." },
      { time: "5:25", title: "Independent time", body: "Quiet time within a defined area, an individual responsibility, or a stewardship activity." },
      { time: "5:40", title: "Reflect", body: "Come back together, talk about the day, pack up, and meet parents at pickup." },
    ],
  },
  ages: {
    eyebrow: "Ages 5–13",
    headline: [[{ text: "How the program changes " }, { text: "by age.", em: true }]] as HeadlineLine[],
    stages: [
      { label: "Ages 5–7", name: "Notice", body: "The youngest boys focus on getting comfortable outside, paying attention, playing, exploring, and learning the basic rhythm of the group." },
      { label: "Ages 8–10", name: "Practice", body: "Boys take on more physical challenges, practice the program's core skills, and begin taking more responsibility." },
      { label: "Ages 11–13", name: "Belong", body: "Older boys take on more responsibility, help younger boys, and learn what it means to contribute to the group." },
    ],
  },
  launch: {
    eyebrow: "Launch",
    headline: [[{ text: "How we're " }, { text: "starting.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Pilot", body: "A small test session with a few families before enrollment opens." },
      { title: "First cohort", body: "The first full after-school group begins after the pilot and required operational work are complete." },
      { title: "Homeschool mornings", body: "A future option, not part of the initial launch." },
    ],
    pricing: {
      title: "Pricing",
      body: "Pricing is not final yet. We'll share it with interested families before enrollment opens. Scholarships will be available.",
    },
  },
  safety: {
    eyebrow: "Safety",
    headline: [[{ text: "How we keep " }, { text: "boys safe.", em: true }]] as HeadlineLine[],
    quote: "No adult is ever alone with one boy out of sight or hearing of another screened adult.",
    items: [
      { title: "Every adult is screened", body: "Application, interview, two references, background check, code of conduct, and an on-site walking interview. Current first aid and CPR are required." },
      { title: "At least two adults are present", body: "Every session has at least two screened adults, with no more than six boys per adult." },
      { title: "Forms come first", body: "Waivers, medical information, emergency contacts, and an authorized pickup list are completed before a boy participates." },
      { title: "Emergencies are planned for", body: "We have written procedures for injuries, a missing child, and weather, and every adult is trained on them before the first session." },
    ],
  },
  parents: {
    eyebrow: "Parent communication",
    headline: [[{ text: "You'll know " }, { text: "what happened.", em: true }]] as HeadlineLine[],
    body: "After each session, parents receive a short note. Each Friday, we send a field report with what the boys did, what we worked on, and anything families should know.",
  },
  // Framed as Gabe's experience, never as an admissions policy (CLAUDE.md).
  whyBoys: {
    eyebrow: "Why boys",
    headline: [[{ text: "Why we're starting " }, { text: "with boys.", em: true }]] as HeadlineLine[],
    paragraphs: [
      "Wild Wanderers is starting with boys because that is where Gabe's experience as a father, coach, and mentor is deepest. Boys often benefit from places where they can move, explore, take healthy risks, build relationships, and talk about what they're experiencing without having to sit still first.",
      "The long-term hope is that more kids have access to programs like this. Any future girls program would be built with women leaders and designed around girls' own experiences.",
    ],
  },
  cta: questionsCta,
};

// For Dads. Dads can apply to be screened volunteer mentors. Never say or
// imply that dads attend every session; that is still Gabe's open question.
export const dadsCopy = {
  hero: {
    eyebrow: "For dads",
    headline: [[{ text: "Dads can be part of it, " }, { text: "too.", em: true }]] as HeadlineLine[],
    sub: "Wild Wanderers is built for boys, but dads who want to get involved can apply to serve as volunteer mentors. Once screened and trained, they can join the group on the trail.",
  },
  involved: {
    eyebrow: "Getting involved",
    headline: [[{ text: "What dads " }, { text: "can do.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Join as a mentor", body: "Go through the same screening and training process as every adult leader." },
      { title: "Participate with the group", body: "Do the activities, learn the skills, and be present with the boys." },
      { title: "Meet other dads", body: "Serving with Wild Wanderers also creates a chance to know other fathers in the community." },
    ],
    photo: "/photos/dad-piggyback-trail.jpg",
    photoAlt:
      "A dad climbing a foggy wooded trail with his young son riding on his shoulders, seen from behind",
  },
  screening: {
    eyebrow: "Screening and training",
    headline: [[{ text: "How adult screening " }, { text: "works.", em: true }]] as HeadlineLine[],
    intro:
      "The same process applies to every volunteer and paid adult. Wild Wanderers pays for the background check.",
    items: [
      { title: "Screening", body: "Every volunteer and paid adult completes an application, interview, two references, a background check, a code of conduct, and an on-site walking interview. Current first aid and CPR certification are required." },
      { title: "Training", body: "A three-hour training session and a two-hour walk of the route. Every mentor learns headcounts and boundaries, the recall signal, what to do if a boy goes missing or gets hurt, and the two-adult rule." },
      { title: "The two-adult rule", body: "No adult is ever alone with one boy out of sight or hearing of another screened adult." },
    ],
  },
  cta: {
    headline: [[{ text: "Interested in " }, { text: "mentoring?", em: true }]] as HeadlineLine[],
    body: "Use the interest form and mention that you'd like to volunteer. We'll follow up with next steps for screening.",
    primary: { label: "Get in touch", href: "/join" } as Cta,
  },
};

// About. Gabe's first person leads; family as the roots, never the face.
export const aboutCopy = {
  hero: {
    eyebrow: "About",
    headline: [[{ text: "Why I started" }], [{ text: "Wild Wanderers.", em: true }]] as HeadlineLine[],
    sub: "Gabe Brewer, founder.",
  },
  story: {
    eyebrow: "From Gabe",
    paragraphs: [
      "I built Wild Wanderers for my own two boys first. Becoming a father showed me how hard the job really is, and it changed how I think about my own dad.",
      "The Baylands is home. I watched my dad play baseball out here. I learned the outdoors here, and I proposed to my wife at the marsh. I've walked my dog thousands of miles on these trails, and a lot of this program was planned on those walks. Now my sons are learning here too.",
    ],
    // Being replaced: Gabe is shooting a current family photo with both boys.
    photo: "/photos/gabe-family-baylands.jpg",
    photoAlt: "Gabe with his wife, their son, and their dog on a grassy levee above the Baylands marsh",
  },
  beliefs: {
    eyebrow: "What we believe",
    headline: [[{ text: "What we " }, { text: "believe.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Kids come first", body: "The program exists for the boys, not for adults to perform expertise." },
      { title: "Adults lead by example", body: "Adults participate, take responsibility, and model what we are asking boys to learn." },
      { title: "Keep getting better", body: "Small improvements practiced consistently become habits." },
      { title: "Take care of people and places", body: "We teach boys to contribute to the group and care for the places they use." },
      { title: "Strong hands, soft hearts", body: "Physical confidence and emotional maturity belong together." },
    ],
  },
  kyezen: {
    eyebrow: "A personal principle",
    headline: [[{ text: "Kyezen", em: true }]] as HeadlineLine[],
    body: "Kyezen is Gabe's word for continuous improvement: get a little better, practice again, and keep going. It is also the name of his oldest son.",
  },
  beforeLaunch: {
    eyebrow: "Before launch",
    headline: [[{ text: "What we're building " }, { text: "before launch.", em: true }]] as HeadlineLine[],
    body: "Before the first full cohort begins, Wild Wanderers is putting the curriculum, adult training, safety procedures, insurance, permits, and parent systems in place. We want families to know the program is being built carefully.",
  },
  cta: cohortCta,
};

// Why Wild Wanderers (replaces The Movement).
export const whyCopy = {
  hero: {
    eyebrow: "About the program",
    headline: [[{ text: "Why " }, { text: "Wild Wanderers", em: true }]] as HeadlineLine[],
    sub: "Kids spend a lot of time sitting, inside, and on screens. Wild Wanderers gives boys regular time each week to move, get outside, explore, and build relationships.",
  },
  pillars: [
    { name: "Movement", body: "Boys need regular physical activity. We run, climb, carry, balance, play, and build strength outside." },
    { name: "Nature", body: "The Baylands gives boys a real place to explore, pay attention, and learn from what is around them." },
    { name: "Connection", body: "Small groups make it possible for boys to know one another and for adults to actually know the boys." },
  ],
  weather: {
    eyebrow: "Weather",
    headline: [[{ text: "What happens when " }, { text: "the weather changes?", em: true }]] as HeadlineLine[],
    body: "We go out in rain and cold with the right gear. We cancel or shorten a session for lightning, unsafe wind, flooding, extreme heat, unhealthy air, or a park closure. Gabe makes the call, and families hear by noon on session days by text and email. On wet days, we may stay in one place and run games instead of the full route.",
  },
  location: {
    eyebrow: "Location",
    headline: [[{ text: "Why " }, { text: "the Baylands.", em: true }]] as HeadlineLine[],
    body: "Gabe grew up around the Baylands and knows the trail well. It is where Wild Wanderers is beginning. If the first program works well, the model may eventually expand to other outdoor locations.",
  },
  cta: questionsCta,
};

// Join. The form comes first; the steps follow the manual's join path.
export const joinCopy = {
  hero: {
    eyebrow: "Join",
    headline: [[{ text: "Interested in " }, { text: "Wild Wanderers?", em: true }]] as HeadlineLine[],
    sub: "Tell us a little about your family. We'll follow up with availability, the current schedule, and next steps.",
  },
  form: {
    nameLabel: "Your name",
    emailLabel: "Email",
    aboutLabel: "About your son",
    optional: "(optional)",
    aboutPlaceholder: "His age, what he enjoys, and anything you'd like us to know.",
    submit: "Send",
    sending: "Sending...",
    note: "We'll only use this to contact you about Wild Wanderers.",
    errors: {
      name: "Please add your name.",
      email: "Please check your email address.",
    },
    success: {
      eyebrow: "Sent",
      headline: "Thanks. We got it.",
      body: "We'll be in touch soon.",
    },
  },
  next: {
    headline: "What happens next",
    steps: [
      { n: "1", title: "We'll follow up.", body: "We'll answer your questions and learn a little about your son." },
      { n: "2", title: "We'll talk.", body: "Before enrollment, we'll have a conversation about the program and whether it seems like a good fit." },
      { n: "3", title: "You'll visit the trail.", body: "Every family visits the Baylands before enrolling." },
      { n: "4", title: "Enrollment and orientation.", body: "If you decide to join, we'll complete the forms and get you ready for the first session." },
    ],
  },
  practical: [
    { label: "Ages", value: "Boys 5–13" },
    { label: "Where", value: "The Baylands trail" },
    { label: "When", value: "After school, 4:00–6:00 PM" },
  ],
};
