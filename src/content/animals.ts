/**
 * The Baylands animals. Each totem teaches one power. Lines are kept verbatim
 * from the mock (already on-voice: specific, grounded, no clichés).
 *
 * `icon` is the set of SVG path `d` strings drawn at viewBox 0 0 48 54, stroked
 * in currentColor. Ported from the inline icons in the mock.
 */
export type Animal = {
  name: string;
  power: string;
  line: string;
  icon: string[];
};

export const animals: Animal[] = [
  {
    name: "Heron",
    power: "Calm",
    line: "Stand tall, breathe slow. Patience and self-control, learned at the water's edge.",
    icon: [
      "M24 6 C18 14 18 22 24 30 C30 22 30 14 24 6Z",
      "M24 30 L24 48",
      "M16 40 L24 44 L32 40",
    ],
  },
  {
    name: "Hawk",
    power: "Perspective",
    line: "See the whole valley. Awareness, observation, the wider picture others miss.",
    icon: [
      "M24 10 L8 22 L20 22 L12 38",
      "M24 10 L40 22 L28 22 L36 38",
      "M24 10 L24 46",
    ],
  },
  {
    name: "Coyote",
    power: "Adaptability",
    line: "Plans change, we adjust. Problem solving, resilience, a quick and creative mind.",
    icon: [
      "M10 20 L16 8 L22 20",
      "M38 20 L32 8 L26 20",
      "M10 20 C8 34 16 46 24 46 C32 46 40 34 38 20",
      "M20 30 L28 30",
    ],
  },
  {
    name: "Mountain Lion",
    power: "Courage",
    line: "Healthy risk, real responsibility. The inner strength to do the hard, good thing.",
    icon: [
      "M14 16 L10 8 L18 14",
      "M34 16 L38 8 L30 14",
      "M12 18 C10 32 16 44 24 44 C32 44 38 32 36 18 C30 12 18 12 12 18Z",
      "M20 28 L20 30 M28 28 L28 30",
    ],
  },
];
