import type { Metadata } from "next";
import { getPublicLibrary, type PublicPost } from "@/lib/data/trailhead";
import { categoryLabel } from "@/lib/library/categories";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import Ridgeline from "@/components/ui/Ridgeline";
import LibraryGrid from "@/components/trailhead/LibraryGrid";
import SubscribeForm from "@/components/trailhead/SubscribeForm";

// Refresh the library on a short timer without going dynamic: the page stays a
// cached static render and regenerates in the background so new posts show up
// fast (ISR). The Supabase read runs at generation time, not per request.
export const revalidate = 120;

export const metadata: Metadata = {
  title: "Trailhead Library · Wild Wanderers",
  description:
    "Short reads, links, and a weekly challenge from Wild Wanderers. Notes from the trail on movement, play, the outdoors, and raising boys who move.",
};

const h2 = "font-display text-[clamp(2rem,4.4vw,52px)] font-[350] leading-[1.04] tracking-[-0.018em]";

export default async function TrailheadPage() {
  const { posts, challenge } = await getPublicLibrary();
  const gridPosts = challenge ? posts.filter((p) => p.id !== challenge.id) : posts;

  return (
    <>
      {/* Header */}
      <header className="relative flex min-h-[clamp(360px,52vh,520px)] items-end overflow-hidden bg-forest-deep pb-[clamp(48px,7vw,80px)] pt-[150px] text-bone">
        <Ridgeline
          preset="flagship"
          opacity={0.5}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(160px,24vw,300px)]"
        />
        <Container className="relative z-[2]">
          <Eyebrow rule className="mb-6 text-cream">
            The Trailhead Library
          </Eyebrow>
          <h1 className="max-w-[16ch] font-display text-[clamp(2.5rem,6vw,72px)] font-[360] leading-[0.98] tracking-[-0.02em] text-bone">
            Notes from the trail
          </h1>
          <p className="mt-6 max-w-[560px] font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.55] text-bone/85">
            Short reads, links, and a weekly challenge on movement, play, the outdoors, and
            raising boys who move. New notes land as Gabe posts them.
          </p>
        </Container>
      </header>

      {/* Featured weekly challenge */}
      {challenge && (
        <Section tone="sand" className="!py-[clamp(48px,7vw,80px)]">
          <Container>
            <ChallengeFeature challenge={challenge} />
          </Container>
        </Section>
      )}

      {/* The library */}
      <Section tone="bone">
        <Container>
          {posts.length === 0 ? (
            <div className="max-w-[560px]">
              <Eyebrow rule className="mb-6 text-amber-deep">
                The library
              </Eyebrow>
              <h2 className={`${h2} text-forest-deep`}>The first notes are on the way.</h2>
              <p className="mt-6 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.6] text-[#4A4234]">
                This is where Gabe shares reads, links, and a weekly challenge. Leave your
                email below and the first trail note comes to you.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-[clamp(40px,6vw,64px)] max-w-[640px]">
                <Eyebrow rule className="mb-6 text-amber-deep">
                  The library
                </Eyebrow>
                <h2 className={`${h2} text-forest-deep [&_em]:text-bark`}>
                  A living field journal.
                </h2>
              </div>
              <LibraryGrid posts={gridPosts} />
            </>
          )}
        </Container>
      </Section>

      {/* Subscribe */}
      <Section tone="forest">
        <Container>
          <div className="max-w-[640px]">
            <Eyebrow rule className="mb-6 text-cream">
              Get the weekly trail note
            </Eyebrow>
            <h2 className={`${h2} text-bone [&_em]:text-cream`}>
              One note a week, straight from the trail.
            </h2>
            <p className="mb-8 mt-6 font-sans text-[clamp(1rem,1.4vw,20px)] leading-[1.6] text-bone/85">
              The week&apos;s challenge and a short read, no noise. Leave your email and it
              comes to you.
            </p>
            <SubscribeForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

function ChallengeFeature({ challenge }: { challenge: PublicPost }) {
  const isLink = Boolean(challenge.external_link);
  const count = challenge.completion_count;

  return (
    <div className="grid gap-8 rounded-[22px] border border-amber/40 bg-bone p-7 sm:p-9 md:grid-cols-[1.5fr_1fr] md:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-amber/15 px-3.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-deep">
          This week&apos;s challenge{challenge.challenge_week ? ` · week ${challenge.challenge_week}` : ""}
        </div>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,40px)] font-[350] leading-[1.05] tracking-[-0.015em] text-forest-deep">
          {challenge.title}
        </h2>
        {challenge.body && (
          <p className="mt-4 max-w-[520px] font-sans text-[clamp(1rem,1.3vw,18px)] leading-[1.6] text-[#4A4234]">
            {challenge.body}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {isLink && (
            <a
              href={challenge.external_link!}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-[14px] font-semibold text-forest"
            >
              Open it &#8599;
            </a>
          )}
          <span className="font-sans text-[13.5px] text-[#5A5142]">
            {count > 0
              ? `${count} ${count === 1 ? "person has" : "people have"} taken it on in the app`
              : "New this week. Take it on in the app."}
          </span>
        </div>
      </div>

      {challenge.cover_image_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={challenge.cover_image_url}
          alt=""
          className="aspect-[4/3] w-full rounded-[16px] object-cover"
        />
      ) : (
        <div className="hidden md:block" aria-hidden="true">
          <Ridgeline preset="band" opacity={0.5} className="h-[160px] w-full rounded-[16px]" />
        </div>
      )}
    </div>
  );
}
