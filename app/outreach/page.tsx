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
import { site } from "@/lib/site";

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
  },
};

/** What a host organization is actually agreeing to. */
const logistics = [
  {
    title: "What it costs",
    body: "Nothing. There is no fee, no minimum group size, and no materials budget required from the host. Our grants exist so that a school or community program never has to weigh AI literacy against something else in its budget.",
  },
  {
    title: "What we need from you",
    body: "A room, a screen or projector if you have one, and thirty to sixty minutes. A staff member from your organization stays in the room throughout — our volunteers are high school students and always teach under the host's own supervision.",
  },
  {
    title: "Who it is for",
    body: "Middle and high school students, in groups from a dozen to a full assembly. No prior knowledge of AI is assumed from the students or from the adults in the room — that is rather the point of the session.",
  },
  {
    title: "How to book one",
    body: "Email us with a rough date range and the age of the students. We will reply with what we can offer, send the outline in advance so you know exactly what will be taught, and confirm a date that fits your calendar.",
  },
];

export default function OutreachPage() {
  return (
    <>
      <Nav />
      <main>
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
                We teach at schools, libraries, teen centers, and after-school
                programs across the Cincinnati area, and we travel further when
                a date allows. Here is exactly what hosting one involves, so
                that nothing about it has to be negotiated over email.
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
                  Every session follows the same shape — open with a
                  demonstration that fails in front of the students, let them
                  test the tool themselves, then spend the last stretch on
                  judgment rather than mechanics: where AI helps with schoolwork
                  and where it crosses into doing the work for you, why a model
                  can sound authoritative about something it invented, and how
                  to check an answer before using it. The{" "}
                  <Link
                    href="/chapters"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    Chapter-in-a-Box page
                  </Link>{" "}
                  breaks that structure down activity by activity.
                </p>
                <p className="font-body text-body-md text-on-surface-variant">
                  To request a session, email{" "}
                  <a
                    href={`mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`}
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    {site.contact.email}
                  </a>{" "}
                  or call {site.contact.phone}. If your school would rather run
                  its own sessions on an ongoing basis instead of hosting ours,{" "}
                  <Link
                    href="/chapters"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                  >
                    start a chapter
                  </Link>{" "}
                  — we will give you the entire curriculum for free.
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
