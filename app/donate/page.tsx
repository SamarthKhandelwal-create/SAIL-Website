import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const description =
  "Support Students For AI Literacy. Donations fund workshop materials, chapter startup kits, and free AI literacy programming for students across Ohio.";

export const metadata: Metadata = {
  title: "Donate",
  description,
  alternates: { canonical: "/donate" },
  openGraph: { title: "Donate · SAIL", description, type: "website" },
};

/** What a gift actually pays for — figures from SAIL's FY2026 ledger. */
const uses = [
  {
    amount: "$25",
    body: "Hands-on workshop supplies for a full classroom session — the notebooks, UV pens, and activity materials students use during our demonstrations.",
  },
  {
    amount: "$100",
    body: "Materials for a new chapter's first three workshops, so a student leader can start teaching without paying out of pocket.",
  },
  {
    amount: "$400",
    body: "The seed amount that started SAIL. It funds an entire new chapter's first year of programming.",
  },
];

export default function DonatePage() {
  const canDonate = Boolean(site.donateUrl);

  return (
    <>
      <Nav />
      <main>
        <Hero
          id="donate"
          size="page"
          words={["SUPPORT", "OUR WORK"]}
          subtitle="Every dollar goes directly into free AI literacy programming, run by students."
          ctas={
            canDonate
              ? [{ label: "Donate now", href: site.donateUrl!, external: true }]
              : [
                  {
                    label: "Email us to give",
                    href: `mailto:${site.contact.email}?subject=Supporting%20SAIL`,
                    external: true,
                  },
                ]
          }
        />

        {/* Why give */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Why give
              </p>
              <h2 className="mb-6 font-display text-headline-lg text-primary">
                A student-run budget, spent on students
              </h2>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                SAIL is run entirely by high school students. We have no paid
                staff, no office, and no overhead beyond the cost of the
                materials we hand to students during a workshop and the filing
                fees required to operate as a nonprofit.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                In our first fiscal year we operated on $900 in grants. That
                money covered our Ohio incorporation, our federal 501(c)(3)
                application, a domain name, and the supplies for every workshop
                we ran. Our sessions are free to every school and community
                organization that hosts one, and they will stay that way.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                {site.name} is a federally recognized 501(c)(3) nonprofit
                organization, EIN {site.ein}. Contributions are tax-deductible
                to the extent allowed by law.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What it funds */}
        <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-content">
            <Reveal>
              <h2 className="mb-16 font-display text-display-xl leading-[0.95] text-primary">
                What your gift funds
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {uses.map((u, i) => (
                <Reveal key={u.amount} delay={i}>
                  <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                    <p className="mb-4 font-display text-display-xl leading-none text-primary">
                      {u.amount}
                    </p>
                    <p className="font-body text-body-md text-secondary">
                      {u.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Give */}
        <section className="bg-primary px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-on-primary">
              Make a donation
            </h2>
            {canDonate ? (
              <>
                <p className="mb-10 font-body text-body-lg text-on-primary/80">
                  Donations are processed securely by our giving partner. SAIL
                  never sees or stores your card details.
                </p>
                <a
                  href={site.donateUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded bg-on-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary shadow-sm transition-colors hover:bg-white"
                >
                  Donate securely
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </>
            ) : (
              <>
                <p className="mb-10 font-body text-body-lg text-on-primary/80">
                  We are finishing setup with our giving partner. In the
                  meantime, email us and we will arrange a contribution
                  directly — including employer matching and in-kind gifts of
                  workshop materials.
                </p>
                <a
                  href={`mailto:${site.contact.email}?subject=Supporting%20SAIL`}
                  className="group inline-flex items-center gap-3 rounded bg-on-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary shadow-sm transition-colors hover:bg-white"
                >
                  Email us to give
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </>
            )}
            <p className="mt-8 font-body text-body-md text-on-primary/70">
              Prefer to help another way? Host a workshop or start a chapter —
              both are free and both reach more students than a cheque.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
