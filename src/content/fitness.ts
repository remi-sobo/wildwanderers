/**
 * Wild Wanderers Fitness copy. Words are data so edits never touch components.
 *
 * Same brand, same person, different buyer. The boys pages sell a parent on
 * trust; this section sells an adult on Gabe. Per Gabe's menu idea the
 * section runs as three tabs: Overview (/fitness) is the lean, emotional
 * front with one action and no price; Offers (/fitness/offers) is the menu
 * options, and the only place on the site a fitness price appears; About Gabe
 * (/fitness/about) carries the story, the arc, and the proof placeholders.
 *
 * Voice: Gabe's, plain and unhurried. No em dashes, no AI-giveaway words, no
 * aphorism buttons, no "real" as a crutch, no staccato fragment stacks. Never
 * frame a client as broken; the goal is helping a good person get back to
 * strong.
 *
 * Guardrails held in the copy, not just the components:
 *  - Scope: Gabe is a certified fitness trainer, not a nutritionist, dietitian,
 *    or mental health professional. Food and the mental side read as coaching
 *    and habits, never treatment, diagnosis, or a medical or meal plan. Prefer
 *    "eating guidance" and "habits" over "nutrition plan" or "diet".
 *  - Proof: no invented testimonials, names, numbers, or before-and-afters.
 *    Every proof slot is an obvious labeled placeholder until Gabe supplies the
 *    real thing.
 *  - Pricing: PROVISIONAL, from peninsula market research, with a plain note
 *    that it is being finalized. No invented discounts, guarantees, or
 *    deadlines.
 */
import type { Cta, HeadlineLine } from "@/content/home";

// Anchors the hero and CTAs point to, kept in one place. The plans anchor now
// lives on the Offers tab; consult is the closing band on Overview and Offers.
export const anchors = {
  plans: "plans",
  consult: "consult",
} as const;

// The Fitness section's own routes. Gabe's menu: a lean front, then the
// options one step in. The global nav stays untouched.
export const fitnessRoutes = {
  overview: "/fitness",
  offers: "/fitness/offers",
  about: "/fitness/about",
} as const;

// The sub-nav tabs, in order.
export const fitnessTabs = [
  { label: "Overview", href: fitnessRoutes.overview },
  { label: "Offers", href: fitnessRoutes.offers },
  { label: "About Gabe", href: fitnessRoutes.about },
] as const;

export const fitnessPage = {
  hero: {
    eyebrow: "Wild Wanderers Fitness",
    headline: [
      [{ text: "Strong for the" }],
      [{ text: "long haul.", em: true }],
    ] as HeadlineLine[],
    sub: "I'm Gabe. I coach adults who put everyone else first and want their own strength back. Not a bootcamp, not a quick fix. A body and a set of habits that hold up, so you can keep up with your life and be there for your people.",
    primary: { label: "Book a free consult", href: "/join" } as Cta,
    photoLabel: "Photo of Gabe coaching · placeholder to swap",
  },

  // Who this is for. The adult who has let their own health slide and wants it
  // back. One short block; the depth lives on the Offers and About tabs.
  whoFor: {
    eyebrow: "Who this is for",
    headline: [
      [{ text: "You put yourself last." }],
      [{ text: "Time to get it back.", em: true }],
    ] as HeadlineLine[],
    body: "You have a career, a family, and a long list of people who count on you. Somewhere in there your own health slid down the list. Do the work steadily and you get it back: keeping up with your kids, carrying your own weight, feeling good in the years ahead.",
  },

  // The quiet peek at the menu: the three offer names, nothing else. No price,
  // no detail, just the door to the Offers tab.
  peek: {
    link: { label: "See the offers", href: fitnessRoutes.offers } as Cta,
  },

  // The three offers, the menu options. Wellness coaching is the flagship.
  // Price rides each card on the Offers tab, value first and the number after,
  // and appears nowhere else on the site. PROVISIONAL pricing from peninsula
  // market research; the provisional line stays until Gabe locks the numbers.
  offers: {
    eyebrow: "The offers",
    headline: [[{ text: "Three ways to " }, { text: "train with me.", em: true }]] as HeadlineLine[],
    lead: "Start where it fits. Every one of them is built around you and where you are today, and every one of them starts with a free consult.",
    items: [
      {
        name: "One-on-one training",
        forWho: "For the person who wants full attention on their form and their goals.",
        body: "Private sessions on the peninsula, in person, and out on the trail when the weather and the work call for it. We build strength, movement, and good form around your body, at your pace.",
        priceNote: "Full attention, session by session.",
        price: "From $150",
        priceUnit: "per session",
        flagship: false,
      },
      {
        name: "Small-group training",
        forWho: "For those who want the pull of a group, or want to train with their own people.",
        body: "Semi-private sessions with a few others, or gather your own friends and family. More affordable than one-on-one, with the steadiness that comes from training alongside others.",
        priceNote: "The pull of a group, at a friendlier number.",
        price: "$55",
        priceUnit: "per person, per session",
        flagship: false,
      },
      {
        name: "Wellness coaching",
        forWho: "For the person ready to change the whole picture, not just add a few workouts.",
        body: "A six-month coaching relationship, not a stack of sessions. A training plan built for you, eating guidance, a couple of habits to build, and regular check-ins, all in one place through the Wild Wanderers platform.",
        priceNote: "Six months of coaching, the whole picture.",
        price: "$450",
        priceUnit: "per month",
        flagship: true,
        flag: "The flagship",
      },
    ],
    // The packages guardrail: this line, full stop, until Gabe gives real
    // package names and contents. Do not list tiers he has not confirmed.
    packagesLine: "Packages available.",
    // Promotions, kept generic on purpose. No invented offers, discounts, or
    // deadlines; whatever is running, Gabe names it in the conversation.
    promos: "Training offers and promotions come and go with the seasons. Ask what is running when we talk. The consult is free either way.",
    provisional: "Pricing is being finalized, so treat these as a guide rather than a locked number.",
    cta: { label: "Book a free consult", href: `#${anchors.consult}` } as Cta,
  },

  // How coaching works. The six-month arc, honestly. A timeline, start to
  // finish, ending on habits that hold after the six months are done.
  how: {
    eyebrow: "How coaching works",
    headline: [[{ text: "Six months, " }, { text: "start to finish.", em: true }]] as HeadlineLine[],
    lead: "The coaching arc, laid out plainly. No mystery, no gimmicks.",
    steps: [
      {
        time: "Week one",
        title: "See where you are",
        body: "We start by looking at where you are now and what you actually want. Your history, your schedule, what has worked before and what has not.",
      },
      {
        time: "The plan",
        title: "Get your plan",
        body: "You get a training plan built for you, eating guidance to support it, and a couple of habits to build. Enough to move the needle, not so much that it buries you.",
      },
      {
        time: "Every couple of weeks",
        title: "Check in and adjust",
        body: "We meet, look at how it is going, and adjust. Life shifts, and the plan shifts with it. This is the part that keeps you moving when motivation dips.",
      },
      {
        time: "Month six and beyond",
        title: "Habits that hold",
        body: "The goal is that the habits stay after the six months are done. You leave stronger, with a way of living you can keep on your own.",
      },
    ],
  },

  // The platform, one short line on the Offers tab. Introduce, do not sell.
  platformLine:
    "Whichever way in you pick, your plan, your habits, your check-ins, and your progress live in one place, on the Wild Wanderers platform.",

  // Meet Gabe. The credibility anchor a fitness page needs. Scope guardrail held
  // in the wording of the food and mental-side lines.
  gabe: {
    eyebrow: "About Gabe",
    headline: [[{ text: "A coach who " }, { text: "plays the long game.", em: true }]] as HeadlineLine[],
    sub: "The story behind the coaching, how it works, and how the six months run.",
    body: "Gabe has spent his life moving. An athlete, a longtime trainer, someone who grew up outdoors and never really stopped. He is a certified fitness trainer, and he coaches the whole picture: how you move, how you build strength, and the everyday habits around eating and rest that keep it going. He is in this for the long game, which means training you in a way you can carry for years, not weeks.",
    photoLabel: "Photo of Gabe · placeholder to swap",
    // Scope line, plain and honest, carried on the page near his bio.
    scopeNote: "Gabe is a certified fitness trainer. He offers guidance toward healthier habits, not medical, dietary, or mental health treatment. For medical questions, see your own doctor.",
  },

  // Proof. HARD RULE: obvious labeled placeholders only. No invented names,
  // numbers, quotes, or before-and-afters. These slots stay until Gabe supplies
  // real stories, with permission.
  proof: {
    eyebrow: "Proof",
    headline: [[{ text: "In their " }, { text: "own words.", em: true }]] as HeadlineLine[],
    lead: "Client stories and results will live here once clients share them, with their permission. Until then these are placeholders, not claims.",
    note: "Placeholder content. No testimonial here is real until Gabe provides it.",
    items: [
      {
        label: "Client story 01",
        quote: "[Client name], [what changed], in their own words. Placeholder to swap.",
        detail: "[Who they are, and what they were after] · placeholder",
      },
      {
        label: "Client story 02",
        quote: "[Client name], [what changed], in their own words. Placeholder to swap.",
        detail: "[Who they are, and what they were after] · placeholder",
      },
      {
        label: "Client story 03",
        quote: "[Client name], [what changed], in their own words. Placeholder to swap.",
        detail: "[Who they are, and what they were after] · placeholder",
      },
    ],
  },

  // FAQ. Short, condensed to an accordion at the bottom of the Offers tab,
  // since the purchase questions belong next to the purchase. Scope guardrail
  // held in the eating-guidance answer, plus the see-your-doctor line.
  faq: {
    eyebrow: "Questions",
    headline: [[{ text: "A few " }, { text: "honest answers.", em: true }]] as HeadlineLine[],
    items: [
      {
        q: "Do I need to be fit already?",
        a: "No. We start where you are. The whole point is to build you up steadily from wherever today happens to be.",
      },
      {
        q: "Where do we train?",
        a: "On the peninsula, in person, and outdoors on the trail when it fits. Between sessions, your plan and check-ins live on the Wild Wanderers platform.",
      },
      {
        q: "Is this only for adults?",
        a: "Mainly, yes. The coaching speaks to the adult first. Gabe also works with families and teens, so reach out if that is what you are looking for.",
      },
      {
        q: "Is the eating guidance a diet or a meal plan?",
        a: "No. It is guidance toward steadier, healthier habits around food, not a medical or dietary prescription. For anything medical, see your own doctor.",
      },
      {
        q: "How long is the commitment?",
        a: "Wellness coaching runs six months, so the habits have time to hold. One-on-one and small-group training work by session or by package, with no long commitment required.",
      },
    ],
  },

  // CTA band. Book a free consult. Reuses the closing-band pattern.
  cta: {
    headline: [[{ text: "Let's start with " }, { text: "a conversation.", em: true }]] as HeadlineLine[],
    body: "The first step is a free consult. We talk through where you are, what you want, and whether this is the right fit. No pressure, no pitch. Just a plan for getting you strong for the long haul.",
    primary: { label: "Book a free consult", href: "/join" } as Cta,
  },
};
