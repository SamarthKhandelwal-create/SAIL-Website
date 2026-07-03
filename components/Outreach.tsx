import Link from "next/link";
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

export default function Outreach({ events }: { events: OutreachEvent[] }) {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  // A photo strip for the home page, drawn from across the recent sessions.
  const gallery = sorted.flatMap((e) => e.photos).slice(0, 8);

  return (
    <section
      id="outreach"
      className="scroll-mt-24 bg-surface px-margin-mobile py-section-gap md:px-gutter"
    >
      <div className="mx-auto max-w-content">
        {/* Heading */}
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
              AI literacy only matters if it reaches people. Here&rsquo;s where
              we&rsquo;ve been — hands-on sessions meeting students where they
              already are and making AI something they can question and use well.
            </p>
          </Reveal>
        </div>

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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.cover}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
