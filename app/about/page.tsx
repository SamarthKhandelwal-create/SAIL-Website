import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";
import Sponsors from "@/components/Sponsors";

import { site } from "@/lib/site";
import { stats } from "@/data/stats";
import { sponsors } from "@/data/sponsors";

const description =
  "Students For AI Literacy (SAIL) is a student-led nonprofit teaching young people to understand, question, and responsibly use artificial intelligence. Learn about our mission, programs, and organization.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · SAIL",
    description,
    type: "website",
  },
};

const programs = [
  {
    title: "Classroom workshops",
    body: "Free, hands-on sessions run by students for students. We cover how AI systems actually work, where they fail, how bias enters them, and how to use them honestly in schoolwork.",
  },
  {
    title: "Chapter-in-a-Box",
    body: "A complete kit — curriculum, slide decks, and operational guides — that lets any student start an AI literacy chapter at their own school without building materials from scratch.",
  },
  {
    title: "Community outreach",
    body: "Sessions at teen centers, libraries, and community programs, meeting students who would not otherwise encounter structured AI education.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          id="about"
          size="page"
          words={["ABOUT", "SAIL"]}
          subtitle="A student-led 501(c)(3) making AI understandable, accessible, and responsible for every young person."
          ctas={[
            { label: "Start a chapter", href: "/chapters" },
            { label: "Ways to help", href: "/donate" },
          ]}
        />

        {/* Mission */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="mb-stack-md font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Our Mission
              </p>
              <p className="mb-8 font-body text-2xl font-medium leading-snug text-primary md:text-[32px] md:leading-[1.35]">
                Students For AI Literacy exists to make artificial intelligence
                something young people understand, question, and use
                responsibly — rather than something that simply happens to them.
              </p>
              <p className="mb-6 font-body text-body-lg text-on-surface">
                AI is already deciding what students read, how their work is
                graded, and which opportunities they see. Most of them have never
                been taught how any of it works. Schools are moving quickly to
                write rules about AI, but far more slowly to teach the literacy
                those rules assume.
              </p>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                We close that gap the most direct way we know: students teaching
                students, in their own schools and communities, for free.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                The near-peer model is the part that makes this work. An adult
                explaining AI to a sixteen-year-old is a lecture. A
                seventeen-year-old explaining it is a conversation, and students
                will admit things in that conversation — that they have used AI
                on an assignment, that they cannot tell when it is making things
                up — that they would never raise with someone who grades them.
                Those admissions are where real learning starts.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                It also means our instructors are learning to teach, present,
                and lead while they are still in high school. The students who
                run SAIL chapters get as much out of this as the students they
                teach, which is what makes the model sustainable without any
                paid staff.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                What we do
              </p>
              <h2 className="mb-16 font-display text-display-xl leading-[0.95] text-primary">
                Our Programs
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {programs.map((p, i) => (
                <Reveal key={p.title} delay={i}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <h3 className="mb-3 font-display text-2xl text-on-surface">
                      {p.title}
                    </h3>
                    <p className="font-body text-body-md text-secondary">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our story + organization */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto grid max-w-content gap-stack-lg md:grid-cols-2">
            <Reveal>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Our story
              </h2>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                SAIL began at Walnut Hills High School in Cincinnati, Ohio, with
                a $400 grant and a single classroom session.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Since then we have taught more than {stats.studentsTaught}{" "}
                students, grown to {stats.activeChapters}{" "}
                {stats.activeChapters === 1 ? "chapter" : "chapters"}, and
                operated on $2,100+ in grants and contributions in our last
                fiscal year. Every chapter is run by students, and every session
                we teach is free to the school or community hosting it.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Our organization
              </h2>
              <dl className="space-y-4 font-body text-body-md">
                <div>
                  <dt className="text-secondary">Legal name</dt>
                  <dd className="text-on-surface">{site.name}</dd>
                </div>
                <div>
                  <dt className="text-secondary">Tax ID (EIN)</dt>
                  <dd className="text-on-surface">{site.ein}</dd>
                </div>
                <div>
                  <dt className="text-secondary">Founder</dt>
                  <dd className="text-on-surface">{site.contact.founder}</dd>
                </div>
                <div>
                  <dt className="text-secondary">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-secondary">Phone</dt>
                  <dd>
                    <a
                      href={site.contact.phoneHref}
                      className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 font-body text-body-md text-on-surface-variant">
                Questions about our programs or partnering with us? Email us —
                a student on our team will reply. You can also{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  meet the team
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Sponsors — directly after the grant and EIN figures above, which is
            where a funder or reviewer is already looking. */}
        <Sponsors sponsors={sponsors} />

        <SectionCTA
          eyebrow="Get involved"
          title="Bring AI literacy to your school."
          href="/chapters"
          label="Start a chapter"
        />
      </main>
      <Footer />
      <FloatingApply />
    </>
  );
}
