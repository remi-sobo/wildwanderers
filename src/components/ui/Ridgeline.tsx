import { clsx } from "@/lib/clsx";

export type RidgeLayer = {
  /** SVG path `d` for a filled ridge silhouette. */
  d: string;
  fill: string;
  opacity?: number;
};

export type RidgePreset = {
  viewBox: string;
  layers: RidgeLayer[];
};

/**
 * The layered ridgeline motif, ported from the mock. It is the brand's
 * signature illustration device and doubles as the fallback when a real photo
 * is not available. Use it only at section transitions and the CTA band, never
 * everywhere (CLAUDE.md).
 *
 * Decorative by default (aria-hidden). The literal greens are scene colors,
 * not UI tokens, so they live inside this illustration and nowhere else.
 */
export const RIDGE_PRESETS = {
  // The bone -> dark-flagship bridge (mock `.ridgeband`, 150 tall, 3 layers).
  band: {
    viewBox: "0 0 1440 150",
    layers: [
      { d: "M0,96 L240,80 L470,52 L700,86 L960,60 L1200,88 L1440,70 L1440,150 L0,150 Z", fill: "#688A62" },
      { d: "M0,120 L300,104 L620,124 L900,100 L1180,122 L1440,108 L1440,150 L0,150 Z", fill: "#3C5A37" },
      { d: "M0,140 L360,130 L760,142 L1080,128 L1440,140 L1440,150 L0,150 Z", fill: "#1E331F" },
    ],
  },
  // The dark flagship backdrop (mock `.ridgebg`, 280 tall, 2 layers, set faint).
  flagship: {
    viewBox: "0 0 1440 280",
    layers: [
      { d: "M0,150 L300,120 L620,150 L900,112 L1180,150 L1440,122 L1440,280 L0,280 Z", fill: "#2A4430" },
      { d: "M0,210 L360,182 L760,214 L1080,180 L1440,210 L1440,280 L0,280 Z", fill: "#16291A" },
    ],
  },
} satisfies Record<string, RidgePreset>;

export type RidgePresetName = keyof typeof RIDGE_PRESETS;

type RidgelineProps = {
  /** Named preset from the mock, or supply `layers` + `viewBox` directly. */
  preset?: RidgePresetName;
  layers?: RidgeLayer[];
  viewBox?: string;
  className?: string;
  /** Whole-graphic opacity (the flagship backdrop renders at ~.5 in the mock). */
  opacity?: number;
};

export default function Ridgeline({
  preset = "band",
  layers,
  viewBox,
  className,
  opacity,
}: RidgelineProps) {
  const base = RIDGE_PRESETS[preset];
  const resolvedLayers: RidgeLayer[] = layers ?? base.layers;
  const resolvedViewBox = viewBox ?? base.viewBox;

  return (
    <svg
      className={clsx("block w-full", className)}
      viewBox={resolvedViewBox}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={opacity != null ? { opacity } : undefined}
    >
      {resolvedLayers.map((layer, i) => (
        <path key={i} d={layer.d} fill={layer.fill} opacity={layer.opacity} />
      ))}
    </svg>
  );
}
