import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChapterFunnel from "@/components/ChapterFunnel";
import ChaptersMap from "@/components/ChaptersMap";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";

import { chapters } from "@/data/chapters";
import { site } from "@/lib/site";

const description =
  "Start a Students For AI Literacy chapter at your high school. Chapter-in-a-Box gives you a tested AI literacy curriculum, editable slide decks, hands-on activities, and operational guides for booking rooms and recruiting a team — free, with no prior teaching or computer science experience required.";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description,
  alternates: { canonical: "/chapters" },
  openGraph: {
    title: "Start a Chapter · SAIL",
    description,
    type: "website",
  },
};

/** Questions we get from every prospective chapter lead, answered plainly. */
const faqs = [
  {
    q: "Do I need to know anything about AI to lead a chapter?",
    a: "No. The curriculum is written for students with no technical background, and it teaches you as you prepare it. We have accepted chapter leads with no computer science coursework and no teaching experience. What matters far more is that you are willing to stand in front of a room and keep a conversation going.",
  },
  {
    q: "How much time does it take?",
    a: "Plan on four to eight hours a week during an active term, and considerably less between sessions. Most of that is preparation and coordination rather than teaching — a workshop itself runs thirty to sixty minutes. Chapter leads are high school students with coursework and other commitments, and the program is built around that reality rather than in spite of it.",
  },
  {
    q: "What does it cost my school?",
    a: "Nothing. Chapter-in-a-Box, the curriculum, the slide decks, and the ongoing support are all free, and every workshop a chapter runs is free to the students and the school. SAIL is funded by grants and contributions specifically so that cost is never the reason a school says no.",
  },
  {
    q: "How do I get my school to approve it?",
    a: "The operational guides in Chapter-in-a-Box cover exactly this: what to say to an administrator, what a club charter needs to contain, how to find a faculty sponsor, and how to book a space. Most schools already know they have an AI problem and have no material to address it — you are arriving with the solution, not the request.",
  },
  {
    q: "Do I have to teach alone?",
    a: "No. Chapters recruit a small team of student volunteers, and a member of the national team will walk through the material with you before your first session. You also get access to every other chapter lead, so when something works at one school you hear about it, and when a session goes badly you have people to ask who have already had that happen.",
  },
  {
    q: "What if my school is outside Ohio?",
    a: "Apply anyway. Our current chapters are all in Ohio because that is where SAIL started, and expanding beyond it is exactly what we want. Nothing in the curriculum or the operational guides is state-specific, and support is delivered remotely.",
  },
  {
    q: "How long does the application take?",
    a: "About ten minutes. It asks what you want to build at your school and why AI literacy matters there — not what you have already accomplished. We read every application and reply within a week.",
  },
];

export default function ChaptersPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          id="chapters"
          size="page"
          words={["START A", "CHAPTER"]}
          subtitle="Everything you need to bring AI literacy to your school — curriculum, network, and support. You bring the leadership."
          ctas={[
            { label: "Apply now", href: site.applyUrl, external: true },
            { label: "Meet the team", href: "/leadership" },
          ]}
        />
        <ChapterFunnel showHeading={false} />
        <ChaptersMap chapters={chapters} />

        {/* FAQ */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Before you apply
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Questions we get from every chapter lead
              </h2>
              <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
                Starting something at a school is mostly a logistics problem,
                and the questions below are the ones that actually decide
                whether a chapter happens. If yours is not here, email us and a
                student on our team will answer it.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i % 2}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <h3 className="mb-3 font-display text-xl text-on-surface">
                      {f.q}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-12 max-w-3xl font-body text-body-md text-on-surface-variant">
                Still deciding? Read{" "}
                <Link
                  href="/outreach"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  recaps of the sessions we have already taught
                </Link>{" "}
                to see what a chapter actually does on a given afternoon, or{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  meet the students
                </Link>{" "}
                you would be working with. Questions go to{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <SectionCTA
          eyebrow="See it in action"
          title="Here's what a chapter actually does."
          href="/outreach"
          label="See our outreach"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
