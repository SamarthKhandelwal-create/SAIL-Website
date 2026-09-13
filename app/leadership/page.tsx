import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Board from "@/components/Board";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";

import { board } from "@/data/board";
import { site } from "@/lib/site";

const description =
  "Meet the high school students who run Students For AI Literacy — the volunteer board that writes our curriculum, books our workshops, keeps our books, and teaches every session. No paid staff, no adult executive director.";

export const metadata: Metadata = {
  title: "Leadership",
  description,
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Leadership · SAIL",
    description,
    type: "website",
  },
};

/** How the work is actually divided. Mirrors the open roles in lib/site.ts. */
const teams = [
  {
    title: "Curriculum",
    body: "Keeps the material current — an example that landed a year ago may be obsolete now. Rewrites activities that did not work and pushes updates out to the chapter network.",
  },
  {
    title: "Outreach",
    body: "Books sessions with schools, libraries, and community organizations, and makes sure volunteers and materials arrive together.",
  },
  {
    title: "Finance",
    body: "Maintains the ledger, reconciles receipts, and prepares grant reporting. Every dollar is tracked against the programming it paid for.",
  },
  {
    title: "Marketing",
    body: "Our social presence, the outreach materials chapters hand to administrators, and how we describe the work to students and funders.",
  },
];

/** The unglamorous nonprofit obligations the board carries. */
const governance = [
  {
    title: "501(c)(3) standing",
    body: `SAIL is a registered 501(c)(3) nonprofit, EIN ${site.ein}. The board handles annual filings, state registration, and IRS recordkeeping.`,
  },
  {
    title: "Financial accountability",
    body: "We operated on $2,100+ in grants and contributions last fiscal year. Every expense is receipted against a budget line.",
  },
  {
    title: "Student safety",
    body: "Volunteers teach under the host organization's own supervision. We do not collect or retain student records.",
  },
  {
    title: "Succession",
    body: "Every board member graduates. Roles are documented and handed over deliberately, so a chapter does not close when its founder leaves for college.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="board"
          size="page"
          words={["OUR", "LEADERSHIP"]}
          subtitle="The high school students building SAIL — and teaching every workshop we run."
          ctas={[
            { label: "Join the team", href: "/join" },
            { label: "See our workshops", href: "/outreach" },
          ]}
        />
        <Board board={board} showHeading={false} />

        {/* How the work is divided */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                How we work
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Four teams, no hierarchy
              </h2>
              <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
                SAIL is organized into small working teams rather than a chain of
                command. Each team owns its piece outright and reports to the
                board as a whole.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {teams.map((t, i) => (
                <Reveal key={t.title} delay={i % 2}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <h3 className="mb-3 font-display text-2xl text-on-surface">
                      {t.title}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-12 max-w-3xl font-body text-body-md text-on-surface-variant">
                Each chapter lead runs their own school&rsquo;s programming and brings
                what works back to the network. Most of our best activities
                started as a chapter lead&rsquo;s improvisation in a room that was
                not going well.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Governance */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Governance
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                What the board is responsible for
              </h2>
              <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
                Alongside teaching, the board carries the parts of running a nonprofit
                that are easy to overlook.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {governance.map((g, i) => (
                <Reveal key={g.title} delay={i}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface p-6">
                    <h3 className="mb-3 font-display text-xl text-on-surface">
                      {g.title}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {g.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-12 max-w-3xl font-body text-body-md text-on-surface-variant">
                Questions about how SAIL is run, or about partnering with us? Email{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.email}
                </a>
                . You can also meet{" "}
                <Link
                  href="/advisors"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  our board of advisors
                </Link>
                , read more{" "}
                <Link
                  href="/about"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  about the organization
                </Link>{" "}
                or see{" "}
                <Link
                  href="/outreach"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  the workshops this team teaches
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <SectionCTA
          eyebrow="Open roles"
          title="We're looking for students to join this team."
          href="/join"
          label="See open roles"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
