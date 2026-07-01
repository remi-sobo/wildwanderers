import type { Metadata } from "next";
import { joinPage as J } from "@/content/pages";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/motion/Reveal";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Start the conversation — Wild Wanderers",
  description:
    "Tell us about your boy and what you are hoping for. This begins as a conversation, not a form. Out on the Baylands at Bedwell Bayfront Park.",
};

export default function JoinPage() {
  const p = J.practical;
  return (
    <>
      <PageHero eyebrow={J.hero.eyebrow} headline={J.hero.headline} sub={J.hero.sub} />

      <Section tone="bone">
        <Container>
          <div className="grid items-start gap-[clamp(40px,6vw,72px)] lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left: why + practical */}
            <Reveal stagger>
              <Eyebrow rule className="mb-7 text-amber-deep">
                {J.form.eyebrow}
              </Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,46px)] font-[350] leading-[1.04] tracking-[-0.018em] text-forest-deep [&_em]:text-bark">
                <RichText lines={J.form.headline} />
              </h2>

              <ul className="mt-9 grid gap-7">
                {J.reasons.map((r) => (
                  <li key={r.title} className="border-t border-bark/20 pt-5">
                    <h3 className="font-display text-[20px] font-semibold text-forest-deep">
                      {r.title}
                    </h3>
                    <p className="mt-2 max-w-[420px] font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">
                      {r.body}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
                {[p.where, p.when, p.who].map((item) => (
                  <div key={item.label}>
                    <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-display text-[18px] text-forest-deep">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Right: the form */}
            <Reveal delay={0.15}>
              <JoinForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
