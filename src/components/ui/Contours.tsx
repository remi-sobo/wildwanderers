import { clsx } from "@/lib/clsx";

/**
 * Topographic contour-line system. Faint nested elevation curves, derived from
 * the Baylands feel, used as a low-opacity watermark behind the dark sections
 * and as quiet section dividers (CLAUDE.md, the day-on-the-trail concept).
 *
 * Stroke-only and decorative (aria-hidden). The rings are generated
 * deterministically so server and client render identically, and so the same
 * component can later self-draw (stroke-dashoffset) without rework.
 */

// A fixed, gently lobed radius profile shared by every ring, so the nested
// loops read like real contour lines (roughly concentric, never perfect
// circles). 12 samples around the loop.
const PROFILE = [1.0, 0.93, 1.07, 0.9, 1.03, 0.95, 1.08, 0.91, 1.01, 0.94, 1.06, 0.9];

const CX = 300;
const CY = 200;
const VERT_SQUASH = 0.6; // flatten the rings so they sit like terrain, not targets

/** One closed contour ring as a smooth Catmull-Rom path, at the given radius. */
function ringPath(radius: number): string {
  const n = PROFILE.length;
  const pts = PROFILE.map((f, i) => {
    const a = (i / n) * Math.PI * 2;
    const r = radius * f;
    return [CX + Math.cos(a) * r, CY + Math.sin(a) * r * VERT_SQUASH] as const;
  });

  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return `${d}Z`;
}

type ContoursProps = {
  className?: string;
  /** Stroke color. Defaults to currentColor so the parent sets the hue. */
  color?: string;
  /** Whole-graphic opacity. Kept low: this is a watermark, never a subject. */
  opacity?: number;
  /** Number of nested elevation rings. */
  rings?: number;
  /** Innermost radius; rings step outward from here. */
  innerRadius?: number;
  /** Radius added per ring. */
  step?: number;
};

export default function Contours({
  className,
  color = "currentColor",
  opacity = 0.12,
  rings = 8,
  innerRadius = 24,
  step = 30,
}: ContoursProps) {
  const paths = Array.from({ length: rings }, (_, i) => ringPath(innerRadius + i * step));

  return (
    <svg
      className={clsx("block", className)}
      viewBox="0 0 600 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      <g stroke={color} strokeWidth={1} vectorEffect="non-scaling-stroke">
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
