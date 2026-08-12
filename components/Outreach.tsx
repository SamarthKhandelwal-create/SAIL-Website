import Link from "next/link";
import Image from "next/image";
import type { OutreachEvent } from "@/data/types";
import EventCalendar from "./EventCalendar";
import Reveal from "./Reveal";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function shortDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${MONTHS[m - 1]} ${day}, ${y}`;
}

const INTRO =
  "AI literacy only matters if it reaches people. Here’s where we’ve been — hands-on sessions meeting students where they already are and making AI something they can question and use well.";

export default function Outreach({
  events,
  showHeading = true,
}: {
  events: OutreachEvent[];
  showHeading?: boolean;
}) {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  // A photo strip drawn from across the recent sessions. Kept short — this
  // page is the heaviest on the site and every extra photo is a real download.
  const gallery = sorted.flatMap((e) => e.photos).slice(0, 6);

  return (
    <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        {/* Heading */}
        {showHeading ? (
          <div className="mb-16 grid items-end gap-stack-lg md:grid-cols-2">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                In the community
              </p>
              <h2 className="font-display text-display-xl leading-[0.95] text-primary">
                Recent Outreach
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="font-body text-body-lg text-on-surface-variant">
                {INTRO}
              </p>
            </Reveal>
          </div>
        ) : (
          <Reveal className="mb-16">
            <p className="mb-6 max-w-3xl font-body text-body-lg text-on-surface-variant">
              {INTRO}
            </p>
            <div className="grid max-w-4xl gap-6 md:grid-cols-2">
              <p className="font-body text-body-md text-on-surface-variant">
                Every session is free to the school or organization hosting it,
                and every one is taught by high school students rather than
                adults. We have found that matters more than any part of the
                curriculum: a fifteen-year-old will admit to a seventeen-year-old
                that they have been using AI to write essays, and that admission
                is where the useful conversation starts.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Sessions run thirty to sixty minutes and adapt to the room. We
                have taught classrooms, after-school clubs, and drop-in
                community programs where students arrived halfway through. What
                stays constant is the structure — open with a demonstration,
                let students test the tool themselves, then talk about what it
                got wrong and why that matters.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                We deliberately do not teach AI as a list of tools to use or
                avoid. Tools change every few months; the underlying questions
                do not. How does this system produce an answer? What would it
                look like if it were wrong? Who is accountable when it is? A
                student who can ask those questions can handle whatever
                replaces today&rsquo;s applications.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                If you run a school, library, or youth program in the Cincinnati
                area and want a session, email us. There is no cost, no minimum
                group size, and no requirement that anyone involved knows
                anything about AI beforehand — that is rather the point.
              </p>
            </div>
          </Reveal>
        )}

        {/* Calendar */}
        <Reveal className="mb-20">
          <EventCalendar events={events} />
        </Reveal>

        {/* Event cards → article pages */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sorted.map((e, i) => (
            <Reveal key={e.id} delay={i}>
              <Link
                href={`/outreach/${e.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={e.cover}
                    alt={e.title}
                    fill
                    quality={68}
                    sizes="(max-width: 768px) 92vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                    {shortDate(e.date)} · {e.location}
                  </p>
                  <h3 className="font-display text-2xl text-primary">{e.title}</h3>
                  <p className="font-body text-body-md text-on-surface-variant">
                    {e.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors group-hover:text-surface-tint">
                    Read recap
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Photo gallery */}
        <Reveal>
          <p className="mb-6 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            From the sessions
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((p, i) => (
              <div
                key={`${p.src}-${i}`}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={62}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 31vw, 24vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
