import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Outreach from "@/components/Outreach";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";

import { events } from "@/data/events";
import { site, ogImages } from "@/lib/site";

const description =
  "Free, hands-on AI literacy workshops taught by high school students in schools, libraries, and community programs. Read recaps of every session we have run, see what we teach, and request a workshop for your own students at no cost.";

export const metadata: Metadata = {
  title: "Outreach",
  description,
  alternates: { canonical: "/outreach" },
  openGraph: {
    title: "Outreach · SAIL",
    description,
    type: "website",
    images: ogImages,
  },
};

/**
 * Regenerate daily. This page is the one whose accuracy decays on its own:
 * "upcoming" and "most recent" are both relative to today, and a fully static
 * build would freeze them at deploy time and quietly drift.
 */
export const revalidate = 86400;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function longDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${MONTHS[m - 1]} ${day}, ${y}`;
}

/** Months between an ISO date and now, rounded down. */
function monthsSince(iso: string) {
  const [y, m] = iso.split("-").map(Number);
  const now = new Date();
  return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
}

/** What a host organization is actually agreeing to. */
const logistics = [
  {
    title: "What it costs",
    body: "Nothing. No fee, no minimum group size, no materials budget. Our grants exist so a host never has to weigh AI literacy against something else.",
  },
  {
    title: "What we need from you",
    body: "A room, a screen if you have one, and thirty to sixty minutes. A staff member stays in the room — our volunteers are high school students and teach under the host's supervision.",
  },
  {
    title: "Who it is for",
    body: "Middle and high school students, from a dozen to a full assembly. No prior knowledge of AI is assumed of anyone in the room.",
  },
  {
    title: "How to book one",
    body: "Email us a rough date range and the age of the students. We send the outline in advance so you know exactly what will be taught.",
  },
];

export default function OutreachPage() {
  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const next = sorted.find((e) => e.date >= today);
  const mostRecent = [...sorted].reverse().find((e) => e.date < today);
  const requestHref = `mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`;

  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="outreach"
          size="page"
          words={["RECENT", "OUTREACH"]}
          subtitle="Free, hands-on AI literacy sessions in schools, libraries, and community organizations — meeting students where they already are."
          ctas={[
            {
              label: "Request a workshop",
              href: `mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`,
              external: true,
            },
            { label: "Start a chapter", href: "/chapters" },
          ]}
        />
        {/* Scheduling status. Without this the page was a list of past dates
            with nothing saying whether the program is still running — the
            reading Ad Grants review takes as outdated content. It states the
            position either way, and always offers the booking path. */}
        <section className="border-b border-outline/10 bg-surface-container-lowest px-margin-mobile py-8 md:px-gutter">
          <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {next ? (
              <p className="font-body text-body-lg text-on-surface">
                <span className="font-bold text-primary">Next session:</span>{" "}
                {/* An upcoming session usually has no recap to link to yet. */}
                {next.calendarOnly ? (
                  next.title
                ) : (
                  <Link
                    href={`/outreach/${next.id}`}
                    className="underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    {next.title}
                  </Link>
                )}{" "}
                — {longDate(next.date)}, {next.location}.
              </p>
            ) : (
              <p className="max-w-2xl font-body text-body-lg text-on-surface">
                <span className="font-bold text-primary">
                  Our chapters run workshops throughout the school year.
                </span>{" "}
                Public dates are booked term by term as schools and community
                partners reach out
                {mostRecent
                  ? `, most recently ${monthsSince(mostRecent.date) < 1 ? "this month" : longDate(mostRecent.date)}`
                  : ""}
                . Tell us a date range and we will bring a session to your
                students.
              </p>
            )}
            <a
              href={requestHref}
              className="group inline-flex shrink-0 items-center gap-2 rounded bg-primary px-6 py-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-surface-tint"
            >
              Request a workshop
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </section>

        <Outreach events={events} showHeading={false} />

        {/* Hosting a session */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Host a session
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Bringing a workshop to your students
              </h2>
              <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
                We teach at schools, libraries, teen centers, and after-school programs
                across the Cincinnati area, and travel further when a date
                allows. Here is exactly what hosting one involves.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {logistics.map((l, i) => (
                <Reveal key={l.title} delay={i}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface p-6">
                    <h3 className="mb-3 font-display text-xl text-on-surface">
                      {l.title}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {l.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-12 max-w-3xl space-y-4">
                <p className="font-body text-body-md text-on-surface-variant">
                  Every session follows the same shape: open with a demonstration that
                  fails in front of the students, let them test the tool
                  themselves, then close on judgment rather than mechanics. The{" "}
                  <Link
                    href="/chapters"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    Chapter-in-a-Box page
                  </Link>{" "}
                  breaks it down activity by activity.
                </p>
                <p className="font-body text-body-md text-on-surface-variant">
                  To request a session, email{" "}
                  <a
                    href={`mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`}
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    {site.contact.email}
                  </a>{" "}
                  or call {site.contact.phone}. If your school would rather run its own
                  sessions on an ongoing basis,{" "}
                  <Link
                    href="/chapters"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    start a chapter
                  </Link>{" "}
                  — the curriculum is free.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionCTA
          eyebrow="Get involved"
          title="Want a session like this at your school?"
          href="/chapters"
          label="Start a chapter"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
