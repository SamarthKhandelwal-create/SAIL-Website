import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Sponsors from "@/components/Sponsors";
import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import { sponsors } from "@/data/sponsors";
import { site, ogImages } from "@/lib/site";

const description =
  "The foundations, grant programs, and businesses funding Students For AI Literacy — including Google for Nonprofits and The Pollination Project.";

export const metadata: Metadata = {
  title: "Our Sponsors and Funders",
  description,
  alternates: { canonical: "/sponsors" },
  openGraph: { title: "Our Sponsors · SAIL", description, type: "website", images: ogImages },
};

export default function SponsorsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero
          id="sponsors"
          size="page"
          words={["OUR", "SPONSORS"]}
          subtitle="Every workshop we teach is free. These are the funders who make that possible."
          ctas={[{ label: "Support our work", href: "/donate" }]}
        />

        {/* Why it matters — kept short. The sponsor wall below is the page. */}
        <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="font-body text-2xl font-medium leading-snug text-primary md:text-[30px] md:leading-[1.35]">
                SAIL has no paid staff and no office. Grants go almost entirely
                into programming — the supplies handed to students in a
                workshop, and the fees that keep us a nonprofit.
              </p>
              <p className="mt-6 font-body text-body-lg text-on-surface">
                In our last fiscal year SAIL operated on $2,100+ in grants and
                contributions. That covered our Ohio incorporation, our federal
                501(c)(3) application, a domain name, and the workshop supplies
                handed to every student we taught — notebooks, UV pens for the
                invisible-ink activity, printed handouts, and name tags.
              </p>
              <p className="mt-4 font-body text-body-md text-on-surface-variant">
                Because there is no staff to pay, the cost of reaching another
                classroom is close to the cost of its supplies. Roughly $250
                funds a new chapter&rsquo;s entire first year of programming.
                That ratio is unusual, and it is the main argument our funders
                have made for backing a student-run organization.
              </p>
              <p className="mt-4 font-body text-body-md text-on-surface-variant">
                {site.name} is a registered 501(c)(3), EIN {site.ein}, based at{" "}
                {site.contact.address.line1}, {site.contact.address.city},{" "}
                {site.contact.address.region}{" "}
                {site.contact.address.postalCode}. We are glad to share our
                ledger and a summary of what a specific contribution funded
                with any donor or grantmaker who asks.
              </p>
            </Reveal>
          </div>
        </section>

        <Sponsors sponsors={sponsors} />

        {/* Ask */}
        <section className="bg-primary px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-on-primary">
              Fund a chapter
            </h2>
            <p className="mb-10 font-body text-body-lg text-on-primary/80">
              About $250 covers a new chapter&rsquo;s first year — every
              workshop it runs, for every student it reaches.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <DonateButton variant="inverse" />
              <a
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Sponsoring a SAIL chapter")}`}
                className="group inline-flex items-center gap-2 rounded border border-on-primary/60 px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary transition-colors hover:border-on-primary hover:bg-on-primary/10"
              >
                Talk to us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
