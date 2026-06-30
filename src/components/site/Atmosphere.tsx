/**
 * Site atmosphere: the single persistent layer that carries the page's light.
 * Mounted once in the root layout, it spans the whole document and sits above
 * the section fills but below the nav, pointer-events-none so it never
 * intercepts a click or a focus.
 *
 * Phase 1 fills it with two quiet things:
 *  - a background-tint progression down the page, cool dawn light at the top
 *    (hero) warming to golden dusk at the bottom (the closing CTA). Every stop
 *    is an existing token (mist -> cream -> amber) at very low alpha, so the
 *    bone and sand sections still read true through the middle of the page.
 *  - a faint paper grain over the light sections, a static SVG noise tile.
 *
 * Both are static, so there is nothing here to gate behind reduced motion.
 * Phase 3 will add the horizon line and the travelling sun into this same
 * layer, where they belong with the rest of the atmosphere.
 */

// Greyscale fractal-noise tile for the paper grain. Built once on the server.
const GRAIN_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>" +
  "<filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/></filter>" +
  "<rect width='140' height='140' filter='url(#g)'/></svg>";
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`;

export default function Atmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* Dawn-cool to golden-dusk tint, mapped to page progress. Neutral through
          the middle so the light sections keep their true color. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom," +
            "rgba(196,211,204,0.06) 0%," + // mist, dawn-cool at the hero
            "rgba(196,211,204,0.00) 24%," +
            "rgba(242,200,121,0.00) 56%," +
            "rgba(217,138,58,0.06) 86%," + // amber, warming toward dusk
            "rgba(191,111,28,0.10) 100%)", // amber-deep at the closing CTA
        }}
      />

      {/* Paper grain. Soft-light keeps the mid-grey noise near neutral so it
          reads as fiber, not a film over the type. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: GRAIN_URL,
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px",
          mixBlendMode: "soft-light",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
