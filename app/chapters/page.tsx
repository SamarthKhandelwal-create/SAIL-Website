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
    q: "Do I need to know anything about AI?",
    a: "No. The curriculum is written for students with no technical background and teaches you as you prepare it. We have accepted leads with no computer science coursework and no teaching experience.",
  },
  {
    q: "How much time does it take?",
    a: "Four to eight hours a week during an active term, less between sessions. Most of that is preparation, not teaching — a workshop itself runs thirty to sixty minutes.",
  },
  {
    q: "What does it cost my school?",
    a: "Nothing. The curriculum, slide decks, and support are free, and so is every workshop a chapter runs. Grants cover it so cost is never the reason a school says no.",
  },
  {
    q: "How do I get my school to approve it?",
    a: "Chapter-in-a-Box includes the operational guides: what to say to an administrator, what a club charter needs, how to find a faculty sponsor, and how to book a space.",
  },
  {
    q: "Do I have to teach alone?",
    a: "No. Chapters recruit a small team of volunteers, and someone from the national team walks through the material with you before your first session. You also get access to every other chapter lead.",
  },
  {
    q: "What if my school is outside Ohio?",
    a: "Apply anyway. Nothing in the curriculum is state-specific and support is remote. Our chapters are all in Ohio because that is where SAIL started, not because of any limit.",
  },
  {
    q: "How long does the application take?",
    a: "About ten minutes. It asks what you want to build, not what you have already done. We read every application and reply within a week.",
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
                The questions that actually decide whether a chapter happens.
                If yours is not here, email us.
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
                Still deciding? Read our{" "}
                <Link
                  href="/outreach"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  session recaps
                </Link>{" "}
                or{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  meet the team
                </Link>
                . Questions go to{" "}
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
