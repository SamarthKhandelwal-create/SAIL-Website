import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const description =
  "Contact Students For AI Literacy — request a free AI literacy workshop for your school, library, or youth program, ask about starting a chapter, offer materials or sponsorship, or reach our student team directly by email or phone.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us · SAIL", description, type: "website" },
};

const mailto = (subject: string) =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;

/**
 * The reasons people actually write to us, each with its own subject line so
 * the request arrives already sorted.
 */
const reasons = [
  {
    title: "Request a workshop",
    body: "For schools, libraries, teen centers, and after-school programs anywhere in the Cincinnati area. Free, no minimum group size, thirty to sixty minutes. Tell us a rough date range and the age of your students.",
    label: "Request a session",
    subject: "Request a SAIL workshop",
  },
  {
    title: "Start a chapter",
    body: "For high school students who want to run AI literacy programming at their own school. Most of this is answered on the chapters page, and the application takes about ten minutes.",
    label: "Ask about chapters",
    subject: "Starting a SAIL chapter",
  },
  {
    title: "Sponsor or donate materials",
    body: "For businesses, foundations, and community partners. Roughly $250 covers a new chapter's first year of programming, and in-kind gifts of workshop supplies are tax-deductible the same as cash.",
    label: "Talk about giving",
    subject: "Supporting SAIL",
  },
  {
    title: "Press and everything else",
    body: "Media questions, partnership ideas, questions about how the organization is run, or anything that does not fit the categories above. A student on our team answers these.",
    label: "Send a message",
    subject: "Question for SAIL",
  },
];

export default function ContactPage() {
  const hasForm = Boolean(site.contactFormUrl);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="contact"
          size="page"
          words={["CONTACT", "US"]}
          subtitle="Request a free workshop, ask about starting a chapter, or reach our student team directly. We reply to everything within a week."
          ctas={[
            {
              label: "Request a workshop",
              href: mailto("Request a SAIL workshop"),
              external: true,
            },
            { label: "Start a chapter", href: "/chapters" },
          ]}
        />

        {/* Embedded form, when one is configured. */}
        {hasForm && (
          <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
            <div className="mx-auto max-w-[820px]">
              <Reveal>
                <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                  Send a message
                </p>
                <h2 className="mb-6 font-display text-headline-lg text-primary">
                  Tell us what you need
                </h2>
                <p className="mb-10 font-body text-body-lg text-on-surface-variant">
                  Fill this in and it reaches our student team directly. If you
                  would rather email or call, everything below works too.
                </p>
                <iframe
                  src={site.contactFormUrl}
                  title="Contact Students For AI Literacy"
                  loading="lazy"
                  className="h-[900px] w-full rounded-xl border border-outline-variant/40 bg-surface"
                />
              </Reveal>
            </div>
          </section>
        )}

        {/* Direct routes */}
        <section
          className={`${hasForm ? "bg-surface" : "bg-surface-container-lowest"} px-margin-mobile py-section-gap md:px-gutter`}
        >
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                What are you writing about?
              </p>
              <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
                Reach the Right Person
              </h2>
              <p className="mb-16 max-w-3xl font-body text-body-lg text-on-surface-variant">
                SAIL is run by high school students around coursework, so a
                specific subject line gets you a faster answer. Each of these
                opens an email with the subject already filled in.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i % 2}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <h3 className="mb-4 font-display text-2xl text-on-surface">
                      {r.title}
                    </h3>
                    <p className="mb-6 font-body text-body-md text-secondary">
                      {r.body}
                    </p>
                    <a
                      href={mailto(r.subject)}
                      className="group mt-auto inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
                    >
                      {r.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Organization details */}
        <section
          className={`${hasForm ? "bg-surface-container-lowest" : "bg-surface"} px-margin-mobile py-section-gap md:px-gutter`}
        >
          <div className="mx-auto grid max-w-content gap-stack-lg md:grid-cols-2">
            <Reveal>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Direct contact
              </h2>
              <dl className="space-y-4 font-body text-body-md">
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
                <div>
                  <dt className="text-secondary">Founder &amp; President</dt>
                  <dd className="text-on-surface">{site.contact.founder}</dd>
                </div>
                <div>
                  <dt className="text-secondary">Based in</dt>
                  <dd className="text-on-surface">Cincinnati, Ohio</dd>
                </div>
              </dl>
              <p className="mt-6 font-body text-body-md text-on-surface-variant">
                You can also reach individual board members directly — every
                address is listed on the{" "}
                <Link
                  href="/leadership"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  leadership page
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Organization
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
                  <dt className="text-secondary">Status</dt>
                  <dd className="text-on-surface">
                    Registered 501(c)(3) nonprofit organization
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-3">
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-md text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  Instagram
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-md text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-6 font-body text-body-md text-on-surface-variant">
                Questions about how we handle your information are answered in
                our{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  privacy policy
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
