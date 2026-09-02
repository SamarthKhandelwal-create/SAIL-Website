import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

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
  // Event summaries run short on their own; the date and venue carry the recap
  // up to a full-length description without padding it.
  const description = `${event.summary} A free AI literacy workshop taught by Students For AI Literacy at ${event.location}, ${longDate(event.date)}.`;
  return {
    title: event.title,
    description,
    alternates: { canonical: `/outreach/${event.id}` },
    openGraph: {
      title: event.title,
      description,
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

  /* Reported as a Report rather than an Event: these are write-ups of sessions
     that already happened, and Event markup on a past date earns a stale-event
     warning in Search Console rather than a rich result. */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: event.title,
    description: event.summary,
    datePublished: event.date,
    image: `${site.url}${event.cover}`,
    articleBody: event.article.join("\n\n"),
    contentLocation: { "@type": "Place", name: event.location },
    author: { "@type": "NGO", name: site.name, url: site.url },
    publisher: { "@type": "NGO", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/outreach/${event.id}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static, server-built object
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <main id="main">
        {/* Hero */}
        <header className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
          <Image
            src={event.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
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
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
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
              {/* h2, not <p>: it is this block's heading, and as a paragraph
                  the page went straight from the article h1 to the h3 on each
                  card below. Styling is unchanged. */}
              <h2 className="mb-8 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                More sessions
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((e) => (
                  <Link
                    key={e.id}
                    href={`/outreach/${e.id}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={e.cover}
                        alt={e.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
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
