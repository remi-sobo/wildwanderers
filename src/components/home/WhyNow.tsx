import { whyNow } from "@/content/home";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RichText from "@/components/ui/RichText";
import Ridgeline from "@/components/ui/Ridgeline";
import Reveal from "@/components/motion/Reveal";

/**
 * Why now. The case for the program in one breath: childhood got still, and we
 * go the other direction. Three trade cards (less X, more Y) make the promise
 * concrete without a single statistic, per the no-fabricated-facts guardrail.
 * Ends on the layered ridge band, the bone-to-dark bridge into What It Is.
 */
export default function WhyNow() {
  return (
    <section className="relative bg-bone pt-[clamp(72px,12vw,130px)]">
      <Container>
        <Reveal stagger className="max-w-[820px]">
          <Eyebrow rule className="mb-7 text-amber-deep">
            {whyNow.eyebrow}
          </Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,5.4vw,66px)] font-[350] leading-[1.02] tracking-[-0.02em] text-forest-deep [&_em]:text-bark">
            <RichText lines={whyNow.headline} />
          </h2>
          <p className="mt-7 max-w-[640px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.62] text-[#4A4234]">
            {whyNow.body}
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-[clamp(44px,6vw,68px)] grid grid-cols-1 gap-[clamp(18px,2vw,26px)] md:grid-cols-3"
        >
          {whyNow.trades.map((trade, i) => (
            <article
              key={trade.less}
              className="rounded-[20px] border border-bark/12 bg-sand/50 p-[clamp(26px,3vw,36px)] transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="mb-6 flex items-center gap-3.5">
                <span className="font-display text-[17px] italic text-bark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-bark/20" />
              </div>
              <h3 className="font-display text-[clamp(1.6rem,2.4vw,30px)] font-[420] leading-[1.12] tracking-[-0.01em] text-forest-deep">
                {trade.less}
                <br />
                <em className="text-amber-deep">{trade.more}</em>
              </h3>
              <p className="mt-4 font-sans text-[14.5px] leading-[1.6] text-[#5A5142]">
                {trade.body}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>

      {/* The bone-to-dark ridge bridge into What It Is. */}
      <Ridgeline preset="band" className="mt-[clamp(56px,7vw,88px)] h-[clamp(96px,10vw,150px)]" />
    </section>
  );
}
