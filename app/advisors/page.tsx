import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";

import { advisors } from "@/data/advisors";
import { site, ogImages } from "@/lib/site";

const description =
  "The educators and industry professionals who advise Students For AI Literacy, bringing classroom and engineering experience to a student-run nonprofit.";

export const metadata: Metadata = {
  title: "Board of Advisors",
  description,
  alternates: { canonical: "/advisors" },
  openGraph: {
    title: "Board of Advisors · SAIL",
    description,
    type: "website",
    images: ogImages,
  },
};

/** Fallback avatar for an advisor listed without a headshot. */
function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** What advisors do — and, as importantly, what they do not. */
const roleOfAdvisors = [
  {
    title: "They advise, students decide",
    body: "Advisors have no vote and no veto. The student board sets direction and owns every decision; advisors tell us when we are about to make an avoidable mistake.",
  },
  {
    title: "Curriculum review",
    body: "Before material reaches a classroom, someone who teaches for a living and someone who builds systems for a living have both read it.",
  },
  {
    title: "Institutional doors",
    body: "Schools and districts have processes a high schooler has no reason to know. Our advisors have navigated them before.",
  },
  {
    title: "Continuity",
    body: "Every student on our board graduates. Advisors carry context across those handovers, so each year does not start from zero.",
  },
];

export default function AdvisorsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="advisors"
          size="page"
          words={["BOARD OF", "ADVISORS"]}
          subtitle="Educators and engineers who advise our student board — without taking the organization out of students' hands."
          ctas={[
            { label: "Meet the student board", href: "/leadership" },
            { label: "See our workshops", href: "/outreach" },
          ]}
        />

        {/* The advisors */}
        <section className="bg-background px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <div className="mb-16 text-center">
                <p className="mx-auto max-w-3xl font-body text-body-lg text-secondary">
                  SAIL is run entirely by high school students. Our advisors are
                  the adults we go to when we need experience we have not had
                  time to accumulate — and they are advisors rather than
                  directors on purpose.
                </p>
              </div>
            </Reveal>

            <h2 className="sr-only">Our advisors</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {advisors.map((a, i) => (
                <Reveal key={a.id} delay={i % 2}>
                  <div className="flex h-full flex-col rounded-xl border border-outline/15 bg-surface-container-lowest p-8 transition-colors duration-500 hover:border-primary/40 md:p-10">
                    {/* Headshots are supplied at modest resolution, so they are
                        rendered small and round rather than scaled up into a
                        banner where the softness would show. */}
                    <div className="mb-5 flex items-center gap-4">
                      {a.photo ? (
                        <Image
                          src={a.photo}
                          alt={`${a.name}, SAIL board advisor`}
                          width={72}
                          height={72}
                          className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-surface-container-high font-display text-2xl text-primary"
                        >
                          {initials(a.name)}
                        </span>
                      )}
                      <p className="font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                        {a.role}
                      </p>
                    </div>
                    <h3 className="mb-2 font-display text-headline-lg text-primary">
                      {a.name}
                    </h3>
                    <p className="mb-4 font-body text-body-md font-bold text-on-surface">
                      {a.affiliation}
                    </p>
                    {a.bio && (
                      <p className="font-body text-body-md text-on-surface-variant">
                        {a.bio}
                      </p>
                    )}
                    {a.email && (
                      <a
                        href={`mailto:${a.email}`}
                        className="mt-4 inline-flex break-all font-body text-body-md text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                      >
                        {a.email}
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How advising works here */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                How it works
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                What an advisor does at a student-run nonprofit
              </h2>
              <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
                The near-peer model only works if students actually run the
                organization. Our advisory structure is built to keep it that
                way.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roleOfAdvisors.map((r, i) => (
                <Reveal key={r.title} delay={i}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface p-6">
                    <h3 className="mb-3 font-display text-xl text-on-surface">
                      {r.title}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-12 max-w-3xl font-body text-body-md text-on-surface-variant">
                If you work in education, AI, or nonprofit governance and would
                consider advising a student board, email{" "}
                <a
                  href={`mailto:${site.contact.email}?subject=Advising%20SAIL`}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.email}
                </a>
                . You can also meet{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  the students who run SAIL
                </Link>{" "}
                or read{" "}
                <Link
                  href="/about"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  about the organization
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        <SectionCTA
          eyebrow="Get involved"
          title="Want to support student-led AI literacy?"
          href="/donate"
          label="Support our work"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
