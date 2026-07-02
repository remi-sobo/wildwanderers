import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Ridgeline from "@/components/ui/Ridgeline";

export const metadata: Metadata = {
  title: "Design System · Wild Wanderers",
};

// Color tokens with explicit utility classes (Tailwind needs literal class
// names, so these are not interpolated). Order follows the spec table.
const COLORS: { name: string; hex: string; swatch: string }[] = [
  { name: "bone", hex: "#F6F1E7", swatch: "bg-bone" },
  { name: "bone-dim", hex: "#EDE4D3", swatch: "bg-bone-dim" },
  { name: "sand", hex: "#E7D9BF", swatch: "bg-sand" },
  { name: "ink", hex: "#2A2118", swatch: "bg-ink" },
  { name: "bark", hex: "#6B4A2E", swatch: "bg-bark" },
  { name: "forest", hex: "#2E4A33", swatch: "bg-forest" },
  { name: "forest-deep", hex: "#1E331F", swatch: "bg-forest-deep" },
  { name: "fern", hex: "#5F9A4F", swatch: "bg-fern" },
  { name: "amber", hex: "#D98A3A", swatch: "bg-amber" },
  { name: "amber-deep", hex: "#BF6F1C", swatch: "bg-amber-deep" },
  { name: "mist", hex: "#C4D3CC", swatch: "bg-mist" },
  { name: "cream", hex: "#F2C879", swatch: "bg-cream" },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-8 border-t border-bark/12 py-7">
      <div className="font-sans text-[12px] uppercase tracking-[0.12em] text-bark/70">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function Styleguide() {
  return (
    <div>
      {/* Dark header band: keeps the transparent nav legible and shows it
          before the scroll-solid state. */}
      <header className="bg-forest-deep px-[60px] pb-20 pt-40">
        <Eyebrow rule className="text-cream">
          Wild Wanderers · Ring 0
        </Eyebrow>
        <h1 className="mt-6 font-display text-[72px] font-normal leading-[0.98] tracking-[-0.02em] text-bone">
          The design <em className="text-cream">system.</em>
        </h1>
        <p className="mt-5 max-w-xl font-sans text-[17px] leading-[1.6] text-bone/80">
          Type, color, and buttons in isolation, so the foundation can be
          verified before any page sections exist.
        </p>
      </header>

      {/* TYPE SCALE */}
      <section className="px-[60px] py-[110px]">
        <Eyebrow rule>Type scale</Eyebrow>
        <div className="mt-10">
          <Row label="Hero H1">
            <p className="font-display text-[88px] font-[340] leading-[0.99] tracking-[-0.018em] text-forest-deep">
              Born to <em className="text-bark">move.</em>
            </p>
          </Row>
          <Row label="Section H2">
            <p className="font-display text-[56px] font-[360] leading-[1.02] tracking-[-0.02em] text-forest-deep">
              We were built to <em className="text-bark">move.</em>
            </p>
          </Row>
          <Row label="Sub-display H3">
            <p className="font-display text-[30px] font-medium text-forest-deep">
              Observe. Breathe. Explore. Reflect.
            </p>
          </Row>
          <Row label="Body large">
            <p className="max-w-2xl font-sans text-[19px] leading-[1.6] text-ink/90">
              Whole-person wellness for the whole family, built on movement,
              nature, and real connection, in a world that forgot all three.
            </p>
          </Row>
          <Row label="Body">
            <p className="max-w-2xl font-sans text-[16px] leading-[1.6] text-ink/90">
              Bodies in motion, families in nature, real connection in a
              distracted age. This is wellness you do together, outdoors.
            </p>
          </Row>
          <Row label="Eyebrow">
            <Eyebrow>The Baylands animals</Eyebrow>
          </Row>
        </div>
      </section>

      {/* COLORS */}
      <section className="bg-sand px-[60px] py-[110px]">
        <Eyebrow rule>Color tokens</Eyebrow>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
          {COLORS.map((c) => (
            <div key={c.name}>
              <div
                className={`${c.swatch} h-24 rounded-xl border border-ink/10`}
              />
              <div className="mt-3 font-sans text-[14px] font-semibold text-ink">
                {c.name}
              </div>
              <div className="font-sans text-[12.5px] uppercase tracking-[0.08em] text-ink/55">
                {c.hex}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUTTONS */}
      <section className="px-[60px] py-[110px]">
        <Eyebrow rule>Buttons</Eyebrow>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-bark/15 bg-bone p-10">
            <div className="mb-6 font-sans text-[12px] uppercase tracking-[0.12em] text-bark/70">
              Primary · on light
            </div>
            <Button variant="primary" href="#">
              Start the conversation
            </Button>
          </div>
          <div className="rounded-2xl bg-forest-deep p-10 text-bone">
            <div className="mb-6 font-sans text-[12px] uppercase tracking-[0.12em] text-cream/70">
              Primary + ghost · on dark
            </div>
            <div className="flex items-center gap-7">
              <Button variant="primary" href="#">
                Find a place this season
              </Button>
              <Button variant="ghost" href="#">
                See how a day unfolds &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RIDGELINE */}
      <section className="bg-bone px-[60px] pb-[60px] pt-[110px]">
        <Eyebrow rule>Ridgeline motif</Eyebrow>
        <p className="mt-4 max-w-xl font-sans text-[15px] leading-[1.6] text-ink/70">
          The signature layered ridge. Used only at section transitions and the
          CTA band.
        </p>
      </section>
      <Ridgeline preset="band" className="h-[150px]" />
    </div>
  );
}
