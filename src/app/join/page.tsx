import type { Metadata } from "next";
import { joinCopy as J } from "@/content/pages";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Join · Wild Wanderers",
  description:
    "Tell us a little about your family. We'll follow up with availability, the current schedule, and next steps for the boys program on the Baylands trail.",
};

/**
 * Join: the form comes first (left on desktop, top on mobile), then what
 * happens next and the practical facts.
 */
export default function JoinPage() {
  return (
    <>
      <PageHero eyebrow={J.hero.eyebrow} headline={J.hero.headline} sub={J.hero.sub} />

      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
            <Reveal>
              <JoinForm />
            </Reveal>

            <Reveal stagger delay={0.1}>
              <h2 className="font-display text-[clamp(26px,2.8vw,32px)] font-medium text-forest-deep">
                {J.next.headline}
              </h2>
              <ol className="mt-5">
                {J.next.steps.map((r) => (
                  <li
                    key={r.n}
                    className="grid grid-cols-[32px_1fr] items-baseline gap-2.5 border-t border-bark/20 py-[18px]"
                  >
                    <span className="font-display text-[17px] italic text-bark">{r.n}</span>
                    <div>
                      <h3 className="font-display text-[19px] font-semibold text-forest-deep">{r.title}</h3>
                      <p className="mt-1 max-w-[420px] font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
                {J.practical.map((p) => (
                  <div key={p.label}>
                    <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                      {p.label}
                    </dt>
                    <dd className="mt-1 font-display text-[18px] text-forest-deep">{p.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
