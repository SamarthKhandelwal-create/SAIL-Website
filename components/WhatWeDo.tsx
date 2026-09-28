import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Plain-language summary of SAIL's charitable activities. Google for Nonprofits
 * review found "the organization's charitable activities are currently unclear"
 * — the detail existed on /about, but the homepage led with a slogan and
 * abstract pillars. This answers what we do, for whom, where, and at what cost
 * before a visitor scrolls past the first screen of content.
 */
const programs = [
  {
    title: "Free AI workshops in schools",
    who: "Middle and high school students",
    body: "Trained high school instructors teach 45-to-90-minute, hands-on sessions in classrooms and after-school programs: how AI tools produce answers, why they are sometimes confidently wrong, how bias gets in, and how to use them honestly for schoolwork.",
  },
  {
    title: "Student-led school chapters",
    who: "High school students who want to teach",
    body: "We give students everything they need to start a SAIL chapter at their own school — curriculum, slide decks, facilitator notes, activity supplies, and coaching — so they can run free workshops for the younger students in their community.",
  },
  {
    title: "Community sessions",
    who: "Young people outside the classroom",
    body: "We bring the same workshops to libraries, Boys & Girls Clubs, summer camps, and youth programs, reaching students who would not otherwise get any structured AI education.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-surface px-margin-mobile py-section-gap md:px-gutter"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            What we do
          </p>
          <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
            Our Programs
          </h2>
          <p className="mb-16 max-w-3xl font-body text-body-lg text-on-surface-variant">
            SAIL is an educational charity. We run three programs, all free to
            every student, school, and organization that takes part.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <article className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                <h3 className="mb-2 font-display text-2xl text-on-surface">
                  {p.title}
                </h3>
                <p className="mb-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary">
                  {p.who}
                </p>
                <p className="font-body text-body-md text-secondary">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-stack-lg max-w-3xl font-body text-body-md text-on-surface-variant">
            Donations pay for workshop supplies and for opening new chapters. We
            have no paid staff.{" "}
            <Link
              href="/about"
              className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
            >
              What happens in a workshop
            </Link>{" "}
            ·{" "}
            <Link
              href="/outreach"
              className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
            >
              Recent sessions
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
