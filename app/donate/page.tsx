import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const description =
  "Support Students For AI Literacy — host a free workshop, donate materials, partner with us, or sponsor a chapter. A student-run 501(c)(3) bringing AI literacy to Ohio schools.";

export const metadata: Metadata = {
  title: "Support Our Work",
  description,
  alternates: { canonical: "/donate" },
  openGraph: { title: "Support Our Work · SAIL", description, type: "website" },
};

/**
 * Concrete, non-cash ways to help. These are real asks a school, library, or
 * local business can act on today — deliberately not a giving form, because
 * SAIL has no payment processor yet and Ad Grants treats a donate link that
 * cannot take a donation as a broken one.
 */
const ways = [
  {
    title: "Host a workshop",
    body: "You provide the room and the students; we bring the curriculum and the student instructors. Free, anywhere in the Cincinnati area.",
    label: "Request a session",
    subject: "Hosting a SAIL workshop",
  },
  {
    title: "Donate materials",
    body: "Notebooks, UV pens, printed handouts, name tags. In-kind gifts are tax-deductible the same as cash.",
    label: "Offer materials",
    subject: "Donating materials to SAIL",
  },
  {
    title: "Sponsor a chapter",
    body: "About $400 covers a new chapter's first year. Sponsor a specific school and we will report back on what it did.",
    label: "Talk about sponsorship",
    subject: "Sponsoring a SAIL chapter",
  },
  {
    title: "Partner with us",
    body: "Working on digital literacy or youth programming? We would rather co-design something than drop in a one-off session.",
    label: "Explore a partnership",
    subject: "Partnering with SAIL",
  },
];

export default function SupportPage() {
  const canDonate = Boolean(site.donateUrl);
  const mailto = (subject: string) =>
    `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="support"
          size="page"
          words={["SUPPORT", "OUR WORK"]}
          subtitle="Every workshop we teach is free. Donations pay for the supplies students take home — and for the next chapter we open."
          ctas={
            canDonate
              ? [
                  { label: "Donate online", href: site.donateUrl, external: true },
                  {
                    label: "Host a workshop",
                    href: mailto("Hosting a SAIL workshop"),
                    external: true,
                  },
                ]
              : [
                  {
                    label: "Host a workshop",
                    href: mailto("Hosting a SAIL workshop"),
                    external: true,
                  },
                  { label: "Start a chapter", href: "/chapters" },
                ]
          }
        />

        {/* Give online. Ad Grants review requires a direct, functional
            transaction CTA on the page the "Support" nav item leads to, above
            the fold rather than at the foot of the page. Amounts are tied to
            what they actually buy so the ask is concrete. */}
        {canDonate && (
          <section className="border-b border-outline/10 bg-primary px-margin-mobile py-section-gap md:px-gutter">
            <div className="mx-auto max-w-[820px] text-center">
              <Reveal>
                <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                  Donate online
                </p>
                <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-on-primary">
                  Put AI literacy in another classroom
                </h2>
                <p className="mb-10 font-body text-body-lg text-on-primary/85">
                  Processed securely by Zeffy. SAIL never sees or stores your
                  card details, and Zeffy takes no cut — every dollar reaches
                  us.
                </p>

                <ul className="mb-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                  {[
                    { amount: "$25", buys: "Smart notebooks for five students." },
                    { amount: "$100", buys: "Materials for a full workshop." },
                    { amount: "$400", buys: "A new chapter's first year." },
                  ].map((tier) => (
                    <li
                      key={tier.amount}
                      className="rounded-xl border border-on-primary/25 bg-on-primary/5 p-5"
                    >
                      <p className="font-display text-3xl text-on-primary">
                        {tier.amount}
                      </p>
                      <p className="mt-2 font-body text-body-md text-on-primary/85">
                        {tier.buys}
                      </p>
                    </li>
                  ))}
                </ul>

                <DonateButton variant="inverse" className="px-10 py-5" />

                <p className="mt-6 font-body text-body-md text-on-primary/85">
                  {site.name} is a registered 501(c)(3), EIN {site.ein}.
                  Donations are tax-deductible to the extent allowed by law.
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {/* Transparency */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Where the money goes
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                A student-run budget, spent on students
              </h2>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                No paid staff, no office. Last fiscal year we ran on $2,100+ in
                grants — covering incorporation, our 501(c)(3) filing, a domain,
                and supplies for every workshop we taught.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                With no staff to pay, reaching another classroom costs about
                what its supplies cost. That is the case for funding us: a small
                contribution lands in a room full of students rather than in
                keeping an organization running.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                We will show any donor or grantmaker exactly what their
                contribution paid for — just ask.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ways to help */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                How to help
              </p>
              <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
                Four Things That Help Most
              </h2>
              <p className="mb-16 max-w-3xl font-body text-body-lg text-on-surface-variant">
                Specific offers help us more than general ones. Any of these can
                be arranged by email, usually within a week.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {ways.map((w, i) => (
                <Reveal key={w.title} delay={i % 2}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <h3 className="mb-4 font-display text-2xl text-on-surface">
                      {w.title}
                    </h3>
                    <p className="mb-6 font-body text-body-md text-secondary">
                      {w.body}
                    </p>
                    <a
                      href={mailto(w.subject)}
                      className="group mt-auto inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
                    >
                      {w.label}
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

        {/* The wall itself lives on /sponsors. Repeating it here and on /about
            was the same six cards three times over. */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Our supporters
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                Who already funds this
              </h2>
              <p className="mb-8 font-body text-body-lg text-on-surface-variant">
                Google for Nonprofits, the Engineers and Scientists Foundation
                of Cincinnati, The Pollination Project, the Karma for Cara
                Foundation, and others.
              </p>
              <Link
                href="/sponsors"
                className="group inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
              >
                Meet our sponsors
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Contact band */}
        <section className="bg-primary px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-on-primary">
              Get in touch
            </h2>
            <p className="mb-10 font-body text-body-lg text-on-primary/80">
              {canDonate
                ? "Give directly, or email us about any of the above — a student on our team will reply."
                : "Email us about any of the above and a student on our team will reply."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <DonateButton variant="inverse" />
              <a
                href={mailto("Supporting SAIL")}
                className={`group inline-flex items-center gap-3 rounded px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] transition-colors ${
                  canDonate
                    ? "border border-on-primary/60 text-on-primary hover:border-on-primary hover:bg-on-primary/10"
                    : "bg-on-primary text-primary shadow-sm hover:bg-white"
                }`}
              >
                Email our team
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
            {/* /85: at 16px on the primary band /70 measures 4.19:1, under AA. */}
            <p className="mt-8 font-body text-body-md text-on-primary/85">
              {site.contact.email} · {site.contact.phone}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
