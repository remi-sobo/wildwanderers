/**
 * Wild Wanderers Fitness copy. Words are data so edits never touch components.
 *
 * Same brand, same person, different buyer. The boys pages sell a parent on
 * trust; this page sells an adult on Gabe. Credibility and proof move forward,
 * and unlike the boys pages this one makes an offer and names a price.
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

// Anchors the hero and CTAs point to, kept in one place.
export const anchors = {
  plans: "plans",
  consult: "consult",
} as const;

export const fitnessPage = {
  hero: {
    eyebrow: "Wild Wanderers Fitness",
    headline: [
      [{ text: "Strong for the" }],
      [{ text: "long haul.", em: true }],
    ] as HeadlineLine[],
    sub: "Coaching for adults who want to move again, get strong, and set up the second half of life to be better than the first. Not a bootcamp, not a quick fix. A body and a set of habits that last, so you can keep up with your life and be there for your people.",
    primary: { label: "Book a consult", href: `#${anchors.consult}` } as Cta,
    secondary: { label: "See the plans", href: `#${anchors.plans}` } as Cta,
    photoLabel: "Photo of Gabe coaching · placeholder to swap",
  },

  // Who this is for. The adult who has let their own health slide and wants it
  // back. Names the long-haul promise plainly, never frames them as broken.
  whoFor: {
    eyebrow: "Who this is for",
    headline: [
      [{ text: "You put yourself last." }],
      [{ text: "Time to get it back.", em: true }],
    ] as HeadlineLine[],
    body: "You have a career, a family, and a long list of people who count on you. Somewhere in there your own health slid down the list. This is about getting moving again, getting strong, and building a body that holds up under a full life. The promise is plain. Do the work steadily and you get to keep up with your kids, carry your own weight, and feel good in the years ahead.",
  },

  // The three offers. Wellness coaching is the flagship.
  offers: {
    eyebrow: "The three offers",
    headline: [[{ text: "Three ways to " }, { text: "train with me.", em: true }]] as HeadlineLine[],
    lead: "Start where it fits. Every one of them is built around you and where you are today.",
    items: [
      {
        name: "One-on-one training",
        forWho: "For the person who wants full attention on their form and their goals.",
        body: "Private sessions on the peninsula, in person, and out on the trail when the weather and the work call for it. We build strength, movement, and good form around your body, at your pace.",
        flagship: false,
      },
      {
        name: "Small-group training",
        forWho: "For those who want the pull of a group, or want to train with their own people.",
        body: "Semi-private sessions with a few others, or gather your own friends and family. More affordable than one-on-one, with the steadiness that comes from training alongside others.",
        flagship: false,
      },
      {
        name: "Wellness coaching",
        forWho: "For the person ready to change the whole picture, not just add a few workouts.",
        body: "A six-month coaching relationship, not a stack of sessions. A training plan built for you, eating guidance, a couple of habits to build, and regular check-ins, all in one place through the Wild Wanderers platform.",
        flagship: true,
        flag: "The flagship",
      },
    ],
  },

  // How coaching works. The six-month arc, honestly. A timeline, start to
  // finish, ending on habits that hold after the six months are done.
  how: {
    eyebrow: "How coaching works",
    headline: [[{ text: "Six months, " }, { text: "start to finish.", em: true }]] as HeadlineLine[],
    lead: "The wellness coaching arc, laid out plainly. No mystery, no gimmicks.",
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

  // The platform. Introduce it, do not sell it. One short section, growing.
  platform: {
    eyebrow: "The platform",
    headline: [[{ text: "Everything in " }, { text: "one place.", em: true }]] as HeadlineLine[],
    body: "The coaching is delivered through the Wild Wanderers platform. Your workouts, your eating guidance, your habits, your check-ins, and your progress all live in one place, so you can see the work move over time. It is growing, and it grows with the coaching.",
  },

  // Meet Gabe. The credibility anchor a fitness page needs. Scope guardrail held
  // in the wording of the food and mental-side lines.
  gabe: {
    eyebrow: "Meet Gabe",
    headline: [[{ text: "A coach who " }, { text: "plays the long game.", em: true }]] as HeadlineLine[],
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

  // Investment. PROVISIONAL tiers, framed as premium, with a free intro consult
  // as the front door. A single quiet line that pricing is being finalized.
  investment: {
    eyebrow: "Investment",
    headline: [[{ text: "What it " }, { text: "costs.", em: true }]] as HeadlineLine[],
    lead: "Premium coaching, priced for the attention it takes. The front door is a free intro consult, so we can find the right fit before you commit to anything.",
    tiers: [
      {
        name: "One-on-one training",
        price: "From $150",
        unit: "per session",
        note: "Less per session in a package.",
        flagship: false,
      },
      {
        name: "Small-group training",
        price: "$55",
        unit: "per person, per session",
        note: "Train with a few others or bring your own group.",
        flagship: false,
      },
      {
        name: "Wellness coaching",
        price: "$450",
        unit: "per month",
        note: "Six-month commitment. Free intro consult.",
        flagship: true,
        flag: "The flagship",
      },
    ],
    provisional: "Pricing is being finalized, so treat these as a guide rather than a locked number.",
    cta: { label: "Book a free consult", href: `#${anchors.consult}` } as Cta,
  },

  // FAQ. Short. Scope guardrail held in the eating-guidance answer, plus the
  // see-your-doctor line.
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

  // CTA band. Book a consult. Reuses the closing-band pattern.
  cta: {
    headline: [[{ text: "Let's start with " }, { text: "a conversation.", em: true }]] as HeadlineLine[],
    body: "The first step is a free consult. We talk through where you are, what you want, and whether this is the right fit. No pressure, no pitch. Just a plan for getting you strong for the long haul.",
    primary: { label: "Book a consult", href: "/join" } as Cta,
  },
};
