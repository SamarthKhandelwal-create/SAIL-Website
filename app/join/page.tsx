import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const description =
  "Join Students For AI Literacy. Open roles for high school students: chapter leads, marketing team, and finance team. All positions are student-run and remote-friendly.";

export const metadata: Metadata = {
  title: "Join the Team",
  description,
  alternates: { canonical: "/join" },
  openGraph: { title: "Join the Team · SAIL", description, type: "website" },
};

export default function JoinPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="join"
          size="page"
          words={["JOIN", "THE TEAM"]}
          subtitle="SAIL is built and run entirely by high school students. Here is where we need people."
          /* "Start a chapter" sits here rather than only in the closing CTA:
             /chapters is no longer its own nav item, so this hero is the main
             way a visitor finds it above the fold. */
          ctas={[
            { label: "See open roles", href: "#roles" },
            { label: "Start a chapter", href: "/chapters" },
          ]}
        />

        {/* Why join */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Why join
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Real responsibility, not busywork
              </h2>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                Every part of SAIL is run by students — the workshops, the
                curriculum, the books, the outreach. There is no layer of adults
                above you assigning tasks. If you join the finance team, you
                keep a real nonprofit&rsquo;s ledger. If you join marketing, the
                things you make are what schools and funders actually see.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                Every role is open to high school students, and no prior
                experience is required for any of them — we care much more that
                you follow through on what you take on.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                We try to be honest about the commitment. These are real hours
                on top of coursework, and the work is sometimes unglamorous:
                reconciling receipts, rewriting a slide for the fourth time,
                emailing a school that has not replied. What you get back is
                that the results are visibly yours — a chapter that exists
                because you started it, a budget that balances because you kept
                it.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Everyone here is doing this around school, so we build roles
                around commitments people can actually keep. If your workload
                changes, tell us and we will adjust rather than lose you.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Roles */}
        <section
          id="roles"
          className="scroll-mt-24 bg-surface px-margin-mobile py-section-gap md:px-gutter"
        >
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Open roles
              </p>
              <h2 className="mb-16 font-display text-display-xl leading-[0.95] text-primary">
                Apply to a Team
              </h2>
            </Reveal>

            <div className="space-y-6">
              {site.roles.map((role, i) => (
                <Reveal key={role.id} delay={i}>
                  <div
                    id={role.id}
                    className="scroll-mt-28 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8 md:p-10"
                  >
                    <div className="grid gap-stack-md md:grid-cols-3">
                      <div className="md:col-span-2">
                        <h3 className="mb-2 font-display text-headline-lg text-primary">
                          {role.title}
                        </h3>
                        <p className="mb-5 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                          {role.commitment}
                        </p>
                        <p className="mb-6 font-body text-body-lg text-on-surface">
                          {role.blurb}
                        </p>
                        <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                          What you would do
                        </p>
                        <ul className="list-disc space-y-2 pl-5 font-body text-body-md text-on-surface-variant">
                          {role.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-start md:justify-end">
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 rounded bg-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary shadow-sm transition-colors hover:bg-surface-tint"
                        >
                          Apply
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-stack-lg font-body text-body-md text-on-surface-variant">
                Not sure which fits, or want to help in a way not listed? Email{" "}
                <a
                  href={`mailto:${site.contact.email}?subject=Joining%20SAIL`}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.email}
                </a>{" "}
                and tell us what you would want to work on.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionCTA
          eyebrow="Prefer to teach?"
          title="Start a chapter at your own school."
          href="/chapters"
          label="How chapters work"
        />
      </main>
      <Footer />
    </>
  );
}
