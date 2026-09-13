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

/** Calendar-only entries have no write-up, so they get no page. */
const articles = events.filter((e) => !e.calendarOnly);

export function generateStaticParams() {
  return articles.map((e) => ({ slug: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = articles.find((e) => e.id === slug);
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
  const event = articles.find((e) => e.id === slug);
  if (!event) notFound();

  const others = articles.filter((e) => e.id !== event.id);

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

  /* These are the only pages nested a level deep. The trail is what Google
     renders in place of the raw URL in a result, and it gives /outreach a
     path to the article that does not depend on the sitemap alone. */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outreach",
        item: `${site.url}/outreach`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: event.title,
        item: `${site.url}/outreach/${event.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static, server-built object
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static, server-built object
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main id="main">
        {/* Hero */}
        {/* `h-auto` with a minimum rather than a fixed 52vh: a long headline at
            display size used to overflow its fixed-height box upward and run
            into the fixed nav. The hero now grows to fit its own text, and the
            pt-32 below reserves the nav's band so a title can never reach it. */}
        <header className="relative flex min-h-[62vh] w-full flex-col justify-end overflow-hidden pt-32 md:min-h-[58vh]">
          <Image
            src={event.cover}
            /* Not decorative: this is the article's main image, and an empty
               alt kept it out of image search entirely. The title already
               names the session and venue, which is what a caption would say. */
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Two overlays, not one. The bottom-up gradient makes the title
              legible; on its own it faded to near-nothing at the top of the
              image, which is exactly where the fixed nav sits — so the white
              wordmark and links landed on whatever the photo happened to be
              and disappeared over a light one. The second gradient darkens
              just the top strip behind the nav. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
          {/* In the flex flow, not absolutely positioned: the header now sizes
              itself around this block instead of letting it escape. */}
          <div className="relative mx-auto w-full max-w-content px-margin-mobile pb-12 md:px-gutter">
            <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-white/85">
              {longDate(event.date)} · {event.location}
            </p>
            <h1 className="max-w-3xl font-display text-display-xl leading-[0.95] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
              {event.title}
            </h1>
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
