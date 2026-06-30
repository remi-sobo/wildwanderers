import { cta } from "@/content/home";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RichText from "@/components/ui/RichText";
import Contours from "@/components/ui/Contours";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

/**
 * Closing CTA band. The layered-ridge scene from the mock with a dawn-tinted
 * sky (scene colors live only inside the illustration, never as UI). The ridges
 * parallax on scroll, the headline reveals on enter, and the amber button is
 * the visual rest point. One action, repeated from the hero.
 */
export default function CtaBand() {
  return (
    <section className="relative flex min-h-[clamp(440px,62vh,540px)] items-center overflow-hidden">
      {/* Ridge scene, parallaxed. Overscanned so the drift never reveals an edge. */}
      <Parallax y={-8} className="absolute -top-[8%] left-0 right-0 h-[116%]">
        <svg
          viewBox="0 0 1440 540"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cta-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E4A37" />
              <stop offset="60%" stopColor="#5C6F44" />
              <stop offset="100%" stopColor="#A98E54" />
            </linearGradient>
          </defs>
          <rect width="1440" height="540" fill="url(#cta-sky)" />
          <path
            d="M0,300 L300,270 L620,300 L900,262 L1180,298 L1440,272 L1440,540 L0,540 Z"
            fill="#33503C"
          />
          <path
            d="M0,392 L360,364 L760,396 L1080,360 L1440,392 L1440,540 L0,540 Z"
            fill="#21351F"
          />
        </svg>
      </Parallax>

      {/* Contour watermark over the scrim, under the copy. */}
      <Contours
        color="#F2C879"
        opacity={0.08}
        className="pointer-events-none absolute -left-[8%] top-[6%] z-[2] h-[88%] w-[52%]"
      />

      {/* Scrim keeps the bone headline readable across the lit sky. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg,rgba(18,28,20,.74) 0%,rgba(18,28,20,.42) 55%,rgba(18,28,20,.16) 100%)",
        }}
      />

      <Container className="relative z-[3]">
        <Reveal stagger className="max-w-[800px]">
          <h2 className="font-display text-[clamp(2.5rem,5.4vw,66px)] font-[330] leading-[1.0] tracking-[-0.02em] text-bone [&_em]:text-cream">
            <RichText lines={cta.headline} />
          </h2>
          <p className="mb-[34px] mt-6 max-w-[520px] font-sans text-[clamp(1rem,1.3vw,18px)] leading-[1.55] text-bone/90">
            {cta.body}
          </p>
          <Button variant="primary" href={cta.primary.href}>
            {cta.primary.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
