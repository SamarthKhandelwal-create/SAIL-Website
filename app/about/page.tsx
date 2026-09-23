import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import FloatingApply from "@/components/FloatingApply";
import Reveal from "@/components/Reveal";

import { site, ogImages } from "@/lib/site";
import { stats } from "@/data/stats";
import { chapters } from "@/data/chapters";

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
    images: ogImages,
  },
};

const programs = [
  {
    title: "Classroom workshops",
    body: "Free 45-to-90-minute sessions, run by trained high school instructors, in classrooms and after-school programs across the Cincinnati area.",
    detail: [
      "A session opens with a drawing game in which a neural network guesses doodles in real time. It identifies a bicycle instantly, then insists a recognizable cat is a lion. Students reach the central idea themselves — a system can be confident and wrong at the same time — before anyone defines a technical term.",
      "From there we work through how a language model actually produces text: not by retrieving facts, but by predicting which word tends to follow the last. Students then run a human-or-AI exercise, reading short passages and voting on which were machine-written. Most groups are confident and most groups are wrong, which is the point. One passage recommends a food bank as a must-visit tourist attraction — fluent, well-structured, and entirely false.",
      "The final stretch is about judgment rather than mechanics: where AI genuinely helps with schoolwork, where it crosses into doing the work for you, why a model can sound authoritative about something it invented, and how to verify a claim from a tool that has no way of knowing whether it is true.",
    ],
  },
  {
    title: "Chapter-in-a-Box",
    body: "A complete kit that lets a student start an AI literacy chapter at their own school without building materials from scratch.",
    detail: [
      "Every chapter receives the full curriculum, slide decks, facilitator notes, and the activity materials a session needs. Chapter leads also get operational support: how to approach an administrator, how to recruit a small team, how to book a room, and how to adapt a session for the age group in front of them.",
      "The model is deliberately low-overhead. A chapter needs roughly $250 for its first year of programming, and its leads commit four to eight hours a week. That is what makes the network expandable by students rather than staff — we have no paid employees, so a new chapter costs close to the price of its supplies.",
    ],
  },
  {
    title: "Community outreach",
    body: "Sessions at teen centers, libraries, and youth programs, reaching students who would not otherwise encounter structured AI education.",
    detail: [
      "Our outreach began at a Boys & Girls Club in Cincinnati, and that first session reshaped the whole curriculum. We had planned a presentation; it lasted about five minutes. The students had more to say than we expected, so we abandoned the slides and moved to the tables, and the session became a set of small-group conversations instead.",
      "Nearly every workshop since is built that way. Students told us they were already using AI tools for schoolwork and were unsure whether they were allowed to, or where the line was. Some had simply been told not to. Almost none had been taught how the tools work or how to tell when one is wrong — which is the gap this organization exists to close.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
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
                AI already decides what students read, how their work is graded,
                and which opportunities they see. Schools are writing rules
                about it far faster than they are teaching the literacy those
                rules assume. We close that gap the most direct way we know:
                students teaching students, for free.
              </p>
              <p className="mb-6 font-body text-body-md text-on-surface-variant">
                The need is documented. In a 2023 survey by the Center for
                Democracy &amp; Technology, 72% of students said guidance on
                using generative AI responsibly would be helpful to them. A 2024
                EdWeek survey found 79% of teachers reported their district had
                no clear policy on AI in education. Students are left to work it
                out alone, and a ban teaches nothing about using these tools
                honestly — it only moves the use out of sight.
              </p>
              <p className="mb-6 font-body text-body-md text-on-surface-variant">
                An adult explaining AI to a sixteen-year-old is a lecture; a
                seventeen-year-old explaining it is a conversation — and
                students admit things in that conversation they would never
                raise with someone who grades them. That is the whole argument
                for the near-peer model, and it is why every one of our
                instructors is a high school student.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                It also makes the work sustainable. Our instructors learn to
                teach, plan, and lead while still in high school, and they train
                the students who replace them. There is no paid staff to fund
                and no consultant to bring in — which is why a session is free
                to every school and community organization that hosts one, and
                why it will stay that way.
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

            {/* One program per row rather than three columns: reviewers and
                funders both asked what actually happens in a session, and the
                answer does not fit in a card. */}
            <div className="flex flex-col gap-6">
              {programs.map((p, i) => (
                <Reveal key={p.title} delay={i % 2}>
                  <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8 md:p-10">
                    <h3 className="mb-3 font-display text-2xl text-on-surface md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mb-6 max-w-3xl font-body text-body-lg text-on-surface">
                      {p.body}
                    </p>
                    <div className="max-w-3xl space-y-4">
                      {p.detail.map((para) => (
                        <p
                          key={para.slice(0, 40)}
                          className="font-body text-body-md text-secondary"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve. Named schools and real figures — the specifics a
            reviewer or funder looks for to confirm the programs above are
            actually running. */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Who we serve
              </p>
              <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
                Where SAIL Operates
              </h2>
              <p className="mb-10 max-w-3xl font-body text-body-lg text-on-surface-variant">
                We serve middle and high school students in Greater Cincinnati,
                through chapters based in public high schools and through
                community sessions open to any young person who turns up. Every
                program is free, and no student, school, or family is ever
                charged.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-xl border border-outline-variant/40 bg-surface p-8">
                  <h3 className="mb-4 font-display text-2xl text-on-surface">
                    Our chapters
                  </h3>
                  <ul className="mb-4 space-y-2 font-body text-body-md text-secondary">
                    {chapters.map((c) => (
                      <li key={c.id}>
                        <span className="text-on-surface">{c.name}</span> —{" "}
                        {c.location}
                        {c.flagship ? " · founding chapter" : ""}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/chapters"
                    className="group inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
                  >
                    See the chapter map
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="h-full rounded-xl border border-outline-variant/40 bg-surface p-8">
                  <h3 className="mb-4 font-display text-2xl text-on-surface">
                    Our reach so far
                  </h3>
                  <dl className="space-y-4 font-body text-body-md">
                    <div>
                      <dt className="text-secondary">Students taught</dt>
                      <dd className="font-display text-3xl text-primary">
                        {stats.studentsTaught}+
                      </dd>
                    </div>
                    <div>
                      <dt className="text-secondary">
                        Engagement hours delivered
                      </dt>
                      <dd className="font-display text-3xl text-primary">
                        {stats.engagementHours.toLocaleString()}+
                      </dd>
                    </div>
                    <div>
                      <dt className="text-secondary">Cost to a host</dt>
                      <dd className="font-display text-3xl text-primary">$0</dd>
                    </div>
                  </dl>
                  <p className="mt-4 font-body text-body-md text-on-surface-variant">
                    Counted across classroom workshops and community sessions
                    since 2024.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our story + organization */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto grid max-w-content gap-stack-lg md:grid-cols-2">
            <Reveal>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Our story
              </h2>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                SAIL began at Walnut Hills High School in Cincinnati, Ohio, with
                a $400 grant and a single classroom session.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                Since then we have taught more than {stats.studentsTaught}{" "}
                students, grown to {stats.activeChapters}{" "}
                {stats.activeChapters === 1 ? "chapter" : "chapters"}, and
                operated on $2,100+ in grants last fiscal year. Every session is
                free to the school or community hosting it.
              </p>
              <Link
                href="/sponsors"
                className="group inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
              >
                Who funds this
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
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
                  <dt className="text-secondary">Mailing address</dt>
                  <dd className="text-on-surface">
                    <address className="not-italic">
                      {site.contact.address.line1}
                      <br />
                      {site.contact.address.city},{" "}
                      {site.contact.address.region}{" "}
                      {site.contact.address.postalCode}
                    </address>
                  </dd>
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
                a student on our team will reply. You can also meet{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  the student board that runs SAIL
                </Link>{" "}
                and{" "}
                <Link
                  href="/advisors"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  our board of advisors
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>


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
