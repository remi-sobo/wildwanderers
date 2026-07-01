/**
 * The chapter model. Wild Wanderers is the movement; the Baylands is Chapter
 * One. This file is the seam that lets us split into a brand layer and
 * per-chapter pages later without a rebuild.
 *
 * Guardrail (CLAUDE.md): the Baylands is real and open. The horizon chapters
 * are illustrative of the vision, not announced commitments. Never present them
 * with dates or as sure things.
 */
export type Chapter = {
  name: string;
  place?: string;
  status: "open" | "horizon";
  blurb: string;
};

export const chapters: Chapter[] = [
  {
    name: "The Baylands",
    place: "Bedwell Bayfront Park",
    status: "open",
    blurb:
      "Chapter one. Home ground. Where Gabe learned the outdoors, walked thousands of miles, and started building this on the trail.",
  },
  { name: "Redwoods", status: "horizon", blurb: "A grove, and the lessons trees teach about growing slow and growing together." },
  { name: "The Coast", status: "horizon", blurb: "Tide and sand, a different kind of wild for a different kind of boy." },
  { name: "The Sierra", status: "horizon", blurb: "Higher ground, longer views, bigger challenge." },
  { name: "The Desert", status: "horizon", blurb: "Stillness and space, where less is the whole point." },
];
