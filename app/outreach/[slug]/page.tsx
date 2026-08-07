import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function longDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${MONTHS[m - 1]} ${day}, ${y}`;
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.id === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      images: [event.cover],
      type: "article",
    },
  };
}

export default async function EventArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.id === slug);
  if (!event) notFound();

  const others = events.filter((e) => e.id !== event.id);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <header className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.cover}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-content px-margin-mobile pb-10 md:px-gutter">
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-white/85">
                {longDate(event.date)} · {event.location}
              </p>
              <h1 className="max-w-3xl font-display text-display-xl leading-[0.95] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
                {event.title}
              </h1>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="mx-auto max-w-[720px] px-margin-mobile py-16 md:px-gutter md:py-24">
          <Link
            href="/outreach"
            className="mb-10 inline-flex font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary transition-colors hover:text-primary"
          >
            ← All outreach
          </Link>

          {event.article.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "mb-6 font-body text-2xl leading-snug text-primary md:text-[28px] md:leading-[1.4]"
                  : "mb-6 font-body text-body-lg text-on-surface"
              }
            >
              {para}
            </p>
          ))}

          {/* Photo gallery */}
          {event.photos.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {event.photos.map((p, i) => (
                <figure
                  key={`${p.src}-${i}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          )}
        </article>

        {/* More sessions */}
        {others.length > 0 && (
          <section className="border-t border-outline/10 bg-surface px-margin-mobile py-16 md:px-gutter">
            <div className="mx-auto max-w-content">
              <p className="mb-8 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                More sessions
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((e) => (
                  <Link
                    key={e.id}
                    href={`/outreach/${e.id}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40"
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
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <p className="font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                        {longDate(e.date)}
                      </p>
                      <h3 className="font-display text-xl text-primary">
                        {e.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
