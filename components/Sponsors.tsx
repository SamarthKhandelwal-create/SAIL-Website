import Image from "next/image";
import type { Sponsor } from "@/data/types";
import Reveal from "./Reveal";

/**
 * Fallback for a sponsor whose logo artwork we do not have yet. Setting the
 * name in the display face reads as a deliberate wordmark rather than as a
 * missing asset, so the section can ship before every logo file arrives.
 */
function Wordmark({ name }: { name: string }) {
  return (
    <span className="text-balance px-2 text-center font-display text-xl leading-tight text-on-surface-variant">
      {name}
    </span>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const plate = (
    <div className="flex h-28 w-full items-center justify-center rounded-lg bg-white p-5">
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          width={320}
          height={160}
          // Logos arrive at every aspect ratio, so the plate is a fixed box and
          // the artwork is contained inside it. That keeps the row of logos
          // optically even without cropping anyone's mark.
          className="max-h-full w-auto max-w-full object-contain"
        />
      ) : (
        <Wordmark name={sponsor.name} />
      )}
    </div>
  );

  return (
    <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6">
      {sponsor.url ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${sponsor.name} (opens in a new tab)`}
          className="rounded-lg transition-opacity hover:opacity-80"
        >
          {plate}
        </a>
      ) : (
        plate
      )}
      <h3 className="mb-2 mt-6 font-display text-xl text-on-surface">
        {sponsor.name}
      </h3>
      <p className="font-body text-body-md text-secondary">{sponsor.note}</p>
    </div>
  );
}

/**
 * Written out in full rather than interpolated: Tailwind scans source text for
 * class names, so a constructed `bg-${...}` would never be generated.
 */
const BACKGROUNDS = {
  surface: "bg-surface",
  lowest: "bg-surface-container-lowest",
} as const;

/**
 * Sponsor wall. Rendered on /donate and /about from the single list in
 * data/sponsors.ts — add a sponsor there and it appears in both places.
 */
export default function Sponsors({
  sponsors,
  background = "surface",
}: {
  sponsors: Sponsor[];
  /** Lets the section alternate against whatever precedes it on the page. */
  background?: keyof typeof BACKGROUNDS;
}) {
  if (sponsors.length === 0) return null;

  return (
    <section
      className={`${BACKGROUNDS[background]} px-margin-mobile py-section-gap md:px-gutter`}
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            Our supporters
          </p>
          <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
            Who Funds This Work
          </h2>
          <p className="mb-16 max-w-3xl font-body text-body-lg text-on-surface-variant">
            SAIL has no paid staff, so grants and sponsorships go almost
            entirely into programming — the supplies our student instructors
            hand out, and the filing fees that keep us operating as a nonprofit.
            These are the funders and businesses who made that possible.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s, i) => (
            <Reveal key={s.id} delay={i % 3}>
              <SponsorCard sponsor={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
