import { flagship } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Contours from "@/components/ui/Contours";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

/**
 * Flagship program. Dark forest section, ported from the mock: copy on the
 * left, the Baylands badge on the right, a faint ridge backdrop along the
 * bottom that parallaxes on scroll. Eyebrow is cream on dark per the spec.
 */
export default function Flagship() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-[clamp(72px,12vw,130px)] text-bone">
      {/* Contour watermark, faint cream behind the copy (concept: terrain). */}
      <Contours
        color="#F2C879"
        opacity={0.1}
        className="pointer-events-none absolute -right-[6%] top-0 z-0 h-[78%] w-[58%]"
      />
      <Parallax
        y={16}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
      >
        <Ridgeline preset="flagship" opacity={0.5} className="h-[clamp(160px,20vw,280px)]" />
      </Parallax>

      <Container className="relative z-[2]">
        <div className="grid items-center gap-[clamp(40px,6vw,60px)] lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal stagger>
            <Eyebrow rule className="mb-7 text-cream">
              {flagship.eyebrow}
            </Eyebrow>
            <h2 className="font-display text-[clamp(2.25rem,5vw,62px)] font-[350] leading-[1.0] tracking-[-0.02em] text-bone [&_em]:text-cream">
              <RichText lines={flagship.headline} />
            </h2>
            <p className="mb-9 mt-7 max-w-[520px] font-sans text-[clamp(1rem,1.35vw,19px)] leading-[1.6] text-bone/85">
              {flagship.body}
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button variant="primary" href={flagship.primary.href}>
                {flagship.primary.label}
              </Button>
              <Button variant="ghost" href={flagship.secondary.href} className="text-bone">
                {flagship.secondary.label} &rarr;
              </Button>
            </div>
          </Reveal>

          <Reveal className="justify-self-center" delay={0.2}>
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[clamp(208px,28vw,300px)]"
              role="img"
              aria-label="Wild Wanderers badge, established on the Baylands"
            >
              <circle cx="150" cy="150" r="132" stroke="#F2C879" strokeWidth="1.5" opacity="0.6" />
              <circle cx="150" cy="150" r="116" stroke="#F2C879" strokeWidth="1" opacity="0.3" />
              <path
                d="M70,196 L126,108 L160,152 L196,96 L240,196 Z"
                stroke="#F2C879"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M70,196 L240,196" stroke="#F2C879" strokeWidth="2" />
              <circle cx="196" cy="80" r="11" fill="#F2C879" opacity="0.8" />
              <text
                x="150"
                y="244"
                textAnchor="middle"
                fontSize="13"
                letterSpacing="3"
                fill="#F2C879"
                opacity="0.85"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {flagship.badge}
              </text>
            </svg>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
