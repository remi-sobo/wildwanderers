/**
 * Boys program page copy. Words are data so edits never touch components.
 *
 * Voice: plain, direct, complete sentences. No em dashes, no exclamation
 * marks, no slogan constructions, never a child framed as broken. Publish
 * only facts Gabe and the Operations Manual confirm. Gabe is final editor.
 */
import type { Cta, HeadlineLine } from "@/content/home";

// ===========================================================================
// v2 (October 2026 handoff). Copy is verbatim from the approved prototypes,
// checked against Operations Manual v1.1 (see the handoff's "Site vs Ops
// Manual"). Facts follow the manual: one after-school cohort, 4:00 to 6:00,
// the Baylands trail from East Palo Alto to Palo Alto, two screened adults
// and no more than six boys per adult. No season, price, or insurance claim.
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
