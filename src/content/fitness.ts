/**
 * Wild Wanderers Fitness copy. Words are data so edits never touch components.
 *
 * Same brand, same person, different buyer: this section sells an adult on
 * Gabe. Voice is plain and direct: no em dashes, no exclamation marks, no
 * slogan constructions, never a client framed as broken.
 *
 * Guardrails held in the copy, not just the components:
 *  - Scope: Gabe is a fitness trainer, not a doctor, dietitian, or mental
 *    health professional. Food and the mental side read as guidance and
 *    habits, never treatment, diagnosis, or a medical or meal plan.
 *  - Proof: no invented testimonials, names, numbers, or before-and-afters.
 *  - Pricing: no fitness prices anywhere on the site (decided Oct 5). The
 *    only number is the $25 Saturday popup.
 */
import type { Cta, HeadlineLine } from "@/content/home";

// ===========================================================================
// v2 (October 2026 handoff). Copy is verbatim from the approved prototypes.
// Four tabs now: Overview, Training Options (replaces Offers), About Gabe, and
// Saturday Popups. Decided Oct 5: no fitness prices anywhere on the site; the
// only number is the $25 Saturday popup. The testimonial section is gone.
// Gabe confirmed the open items Oct 6: certified, 20 years coaching, and the
// popups start at 8.
// ===========================================================================

export const fitnessTabItems = [
  { label: "Overview", href: "/fitness" },
  { label: "Training Options", href: "/fitness/training-options" },
  { label: "About Gabe", href: "/fitness/about" },
  { label: "Saturday Popups", href: "/fitness/saturday" },
] as const;

// The four popup Saturdays, display only.
export const popupDates = [
  { month: "Oct", day: "24" },
  { month: "Nov", day: "7" },
  { month: "Nov", day: "21" },
  { month: "Dec", day: "5" },
];

// The closing band every fitness page shares.
export const consultCta = {
  headline: [[{ text: "Book a free " }, { text: "fitness consult.", em: true }]] as HeadlineLine[],
  body: "Tell Gabe what you're looking for. He'll follow up to talk through your goals and the best way to start.",
  primary: { label: "Book a free consult", href: "/free-session" } as Cta,
};

export const fitnessCopy = {
  hero: {
    eyebrow: "Wild Wanderers Fitness",
    headline: [
      [{ text: "Personal training and wellness coaching " }, { text: "for busy adults.", em: true }],
    ] as HeadlineLine[],
    sub: "One-on-one training, small-group training, and six-month coaching with Gabe on the Peninsula.",
    tagline: "Strong for the long haul.",
    primary: { label: "Book a free consult", href: "/free-session" } as Cta,
    photo: "/photos/gabe-training-outdoor.jpg",
    photoAlt: "Gabe driving a knee up against a cable machine, training outdoors in the sun",
  },
  inMotion: {
    eyebrow: "In Motion",
    headline: [[{ text: "This is what the work " }, { text: "looks like.", em: true }]] as HeadlineLine[],
    pause: "Pause clips",
    play: "Play clips",
    clips: [
      { src: "/video/ladder.mp4", poster: "/video/ladder-poster.jpg", title: "Agility ladder", alt: "Gabe running quick feet through an agility ladder on an open dirt field" },
      { src: "/video/sled-push.mp4", poster: "/video/sled-push-poster.jpg", title: "Sled push", alt: "Gabe driving a weighted sled across turf at golden hour" },
      { src: "/video/boxing.mp4", poster: "/video/boxing-poster.jpg", title: "Boxing training", alt: "Gabe coaching a client through boxing training" },
      { src: "/video/track-sprints.mp4", poster: "/video/track-sprints-poster.jpg", title: "Track sprints", alt: "Gabe sprinting down a track lane at sunset" },
    ],
  },
  options: {
    eyebrow: "Training options",
    headline: [[{ text: "Three ways to train " }, { text: "with Gabe.", em: true }]] as HeadlineLine[],
    items: [
      { name: "One-on-one training", line: "Private sessions with Gabe, built around your goals and schedule." },
      { name: "Small-group training", line: "Train with a few other people, or bring your own group." },
      { name: "Wellness coaching", line: "Six months of training, eating guidance, habits, and check-ins." },
    ],
    note: "Plans and pricing come after your free first session.",
    link: { label: "Compare training options", href: "/fitness/training-options" } as Cta,
  },
  whoFor: {
    eyebrow: "Who it's for",
    headline: [[{ text: "Who the coaching " }, { text: "is for.", em: true }]] as HeadlineLine[],
    body: "Gabe works with adults who have a job, a family, and not much spare time, and who want to get stronger and stay consistent. You don't need to be fit to start. He'll build the plan around where you are now and the schedule you actually have.",
    photo: "/photos/gabe-training-turf.jpg",
    photoAlt: "Gabe in a low crawl position on turf, hands planted, mid-drill",
  },
  saturday: {
    eyebrow: "Saturday popups",
    headline: [
      [{ text: "A real workout. Outside." }],
      [{ text: "Somewhere good.", em: true }],
    ] as HeadlineLine[],
    body: "Group workouts on four Saturdays this fall. All levels. $25 a session.",
    cta: { label: "Join the pop-up list", href: "/fitness/saturday" } as Cta,
  },
  gabe: {
    eyebrow: "Your coach",
    name: "Gabe Brewer",
    body: "Certified fitness trainer based on the Peninsula, with 20 years of coaching. Gabe coaches strength, movement, and everyday habits, in person and outdoors.",
    link: { label: "About Gabe", href: "/fitness/about" } as Cta,
    photo: "/photos/gabe-sierra-selfie.jpg",
    photoAlt: "Gabe smiling on a high Sierra slope",
  },
  cta: consultCta,
};

export const trainingOptionsCopy = {
  hero: {
    eyebrow: "Fitness",
    headline: [[{ text: "Training " }, { text: "options.", em: true }]] as HeadlineLine[],
    sub: "Three ways to train with Gabe on the Peninsula. Every option starts with a free consult.",
  },
  labels: { bestFor: "Best for", get: "What you get", pricing: "Plans and pricing" },
  pricingLine: "Plans and pricing come after your free first session, built around your goals.",
  items: [
    { name: "One-on-one training", bestFor: "People who want a plan built around their own body, goals, and schedule.", get: "Private sessions with Gabe on the Peninsula, indoors or outdoors. Strength, movement, and form coaching at your pace." },
    { name: "Small-group training", bestFor: "Friends, family, or coworkers who want to train together, or anyone who likes working out with others.", get: "Semi-private sessions with a few people. The same coaching at a lower cost per person." },
    { name: "Wellness coaching", bestFor: "Anyone who wants help with training, eating habits, and consistency over a longer stretch.", get: "Six months of coaching: a personal training plan, eating guidance, habit goals, and regular check-ins." },
  ],
  packagesLine:
    "Packages are available. Ask about them during your consult. Your plan, habits, and check-ins live in the Wild Wanderers app.",
  cta: { label: "Book a free consult", href: "/free-session" } as Cta,
  faq: {
    eyebrow: "Questions",
    headline: [[{ text: "Common " }, { text: "questions.", em: true }]] as HeadlineLine[],
    items: [
      { q: "Do I need to be fit already?", a: "No. Gabe starts where you are and builds from there." },
      { q: "Where do we train?", a: "In person on the Peninsula, and outdoors when it makes sense. Between sessions, your plan lives in the Wild Wanderers app." },
      { q: "Is this only for adults?", a: "Mainly, yes. Gabe also works with families and teens, so reach out if that's what you're looking for." },
      { q: "Is the eating guidance a diet or a meal plan?", a: "No. It's guidance toward healthier habits around food, not a medical or dietary prescription. For anything medical, talk to your doctor." },
      { q: "How long is the commitment?", a: "Wellness coaching runs six months. One-on-one and small-group training can be booked by the session or as a package." },
    ],
  },
  closing: consultCta,
};

export const fitnessAboutCopy = {
  hero: {
    eyebrow: "About Gabe",
    headline: [[{ text: "Meet " }, { text: "Gabe.", em: true }]] as HeadlineLine[],
    sub: "Certified fitness trainer and coach on the Peninsula.",
  },
  photo: "/photos/gabe-sierra-selfie.jpg",
  photoAlt: "Gabe smiling on a high Sierra scree slope with a snowfield behind him",
  blocks: [
    {
      title: "Qualifications and experience",
      body: "Gabe is a certified fitness trainer. He grew up as an athlete and has been coaching for 20 years.",
    },
    {
      title: "What he coaches",
      body: "Strength, movement, and conditioning, plus the everyday habits around eating and rest that help you stay consistent.",
    },
    {
      title: "How he works",
      body: "In person on the Peninsula, and outdoors when it makes sense. He starts with where you are today and builds a plan you can keep up with your job and family.",
    },
  ],
  scope: {
    title: "Scope",
    body: "Gabe is a fitness trainer, not a doctor, dietitian, or mental health professional. He offers guidance on training and healthy habits, not medical, dietary, or mental health treatment. For medical questions, talk to your doctor.",
  },
  process: {
    eyebrow: "Wellness coaching",
    headline: [[{ text: "The six-month " }, { text: "process.", em: true }]] as HeadlineLine[],
    steps: [
      { time: "Week one", title: "Assessment", body: "You and Gabe go over your history, schedule, goals, and what has and hasn't worked before." },
      { time: "After the assessment", title: "Your plan", body: "You get a training plan, eating guidance, and two or three habits to work on." },
      { time: "Every couple of weeks", title: "Check-ins", body: "You meet to review progress and adjust the plan as your schedule and goals change." },
      { time: "Month six", title: "Wrap-up", body: "You review the six months together and set you up to keep going on your own." },
    ],
  },
  cta: consultCta,
};

// Saturday Popups. The list page has one job: join the list. The location
// never appears on the site; the pre-Saturday email is the only place it goes.
export const saturdayCopy = {
  hero: {
    eyebrow: "Saturday popups",
    headline: [
      [{ text: "A real workout. Outside." }],
      [{ text: "Somewhere good.", em: true }],
    ] as HeadlineLine[],
    sub: "Group workouts with Gabe on four Saturdays this fall. All levels welcome. $25 a session.",
  },
  datesTitle: "Dates",
  details: [
    { label: "Time", value: "8:00–9:30am" },
    { label: "Level", value: "All levels. Every exercise can be scaled." },
    { label: "Price", value: "$25 per session. Bring two friends and yours is free." },
    { label: "Dates", value: "Oct 24, then every two weeks: Nov 7, Nov 21, Dec 5." },
    { label: "Location", value: "Outdoors on the Peninsula. Only ever shared by email." },
  ],
  howTitle: "How the pop-up list works",
  howSteps: [
    "Join the list with your name and email.",
    "Before each Saturday, an email arrives with the date, time, and the spot.",
    "RSVP from that email so Gabe knows you're coming. The email includes a calendar invite.",
  ],
  locationNote: "The location is only ever shared by email.",
  offer: {
    price: "$25",
    unit: "per session",
    line: "Bring two friends and your session is free.",
  },
  form: {
    headline: "Become a Wild Wanderer. Join the pop-up list.",
    nameLabel: "Your name",
    emailLabel: "Email",
    phoneLabel: "Phone (optional)",
    submit: "Join the pop-up list",
    sending: "Sending...",
    note: "We'll email you before each Saturday. That's all.",
    errors: {
      name: "Please add your name.",
      email: "Please check your email address.",
    },
  },
  success: {
    eyebrow: "On the list",
    // "You're on the list, {first name}."
    headline: (firstName: string) => `You're on the list, ${firstName}.`,
    body: "Watch your inbox before Oct 24.",
    reset: "Add someone else",
  },
};

// The free consult (/free-session). Form first, then what happens next.
// Interest values match the app's lead_interest enum.
export const freeSessionCopy = {
  hero: {
    eyebrow: "Fitness",
    headline: [[{ text: "Book a free" }], [{ text: "fitness consult.", em: true }]] as HeadlineLine[],
    sub: "Tell Gabe what you're looking for. He'll follow up to talk through your goals and the best way to start.",
  },
  next: {
    eyebrow: "After you send this",
    headline: [[{ text: "What happens " }, { text: "next.", em: true }]] as HeadlineLine[],
    items: [
      { title: "Gabe follows up", body: "He'll reach out by email or phone to set up a time to talk." },
      { title: "You talk through your goals", body: "Where you are now, what you want, and which training option makes sense." },
      { title: "No pressure", body: "The consult is free, whatever you decide." },
    ],
  },
  form: {
    nameLabel: "Your name",
    contactHint: "Email or phone, whichever you'd rather hear back on.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    interestLabel: "What you're interested in",
    interests: [
      { value: "one_on_one", label: "One-on-one training" },
      { value: "small_group", label: "Small-group training" },
      { value: "wellness", label: "Wellness coaching" },
    ],
    messageLabel: "What's going on",
    optional: "(optional)",
    messagePlaceholder: "What you want to work toward, in a sentence or two.",
    timesLabel: "When you're usually free",
    // Values are what Gabe sees in the app, so they read as plain phrases.
    times: [
      { value: "weekday mornings", label: "Weekday mornings" },
      { value: "weekday afternoons", label: "Weekday afternoons" },
      { value: "weekends", label: "Weekends" },
    ],
    submit: "Request a free consult",
    sending: "Sending...",
    note: "We'll only use this to contact you about training.",
    errors: {
      name: "Add your name so I know who I'm writing to.",
      contact: "Add an email or a phone number.",
    },
    success: {
      eyebrow: "Sent",
      headline: "Thanks. Gabe will be in touch.",
      body: "He reads every request himself and will follow up soon.",
    },
  },
};
