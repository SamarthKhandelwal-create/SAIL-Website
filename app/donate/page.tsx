import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import { sponsors } from "@/data/sponsors";
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
    body: "If you teach, run a library program, or lead a youth organization anywhere in the Cincinnati area, we will bring a session to your students at no cost. You provide the room and the students; we bring the curriculum, the activities, and the student instructors.",
    label: "Request a session",
    subject: "Hosting a SAIL workshop",
  },
  {
    title: "Donate materials",
    body: "Our workshops run on physical supplies — notebooks, UV pens for the invisible-ink activity, printed handouts, and name tags. Donated materials go directly into a classroom, and in-kind gifts are tax-deductible the same as cash.",
    label: "Offer materials",
    subject: "Donating materials to SAIL",
  },
  {
    title: "Sponsor a chapter",
    body: "Roughly $400 covers a new chapter's first year of programming — every workshop it runs, for every student it reaches. Local businesses and community foundations can sponsor a specific school and receive a short report on what that chapter did.",
    label: "Talk about sponsorship",
    subject: "Sponsoring a SAIL chapter",
  },
  {
    title: "Partner with us",
    body: "Schools, districts, and nonprofits working on digital literacy, workforce readiness, or youth programming often overlap with what we do. We are glad to co-design programming rather than drop in a one-off session.",
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
      <main>
        <Hero
          id="support"
          size="page"
          words={["SUPPORT", "OUR WORK"]}
          subtitle="SAIL runs on volunteered time and donated materials. Here is what actually helps."
          ctas={[
            {
              label: "Host a workshop",
              href: mailto("Hosting a SAIL workshop"),
              external: true,
            },
            { label: "Start a chapter", href: "/chapters" },
          ]}
        />

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
                SAIL is run entirely by high school students. We have no paid
                staff, no office, and no overhead beyond the cost of the
                materials we hand to students during a workshop and the filing
                fees required to operate as a nonprofit.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                In our last fiscal year we operated on $2,100+ in grants and
                contributions — money that covered our Ohio incorporation, our
                federal 501(c)(3) application, a domain name, and the supplies
                for every workshop we ran. Our sessions are free to every school
                and community organization that hosts one, and they will stay
                that way.
              </p>
              <p className="mb-4 font-body text-body-md text-on-surface-variant">
                Because there is no staff to pay, the marginal cost of reaching
                another classroom is close to the cost of its supplies. That is
                unusual, and it is the main argument for supporting us: a small
                contribution moves directly into a room full of students rather
                than into keeping an organization running.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                {site.name} is a federally recognized 501(c)(3) nonprofit
                organization, EIN {site.ein}. Contributions are tax-deductible
                to the extent allowed by law. We are glad to share our ledger
                and a summary of what a specific contribution funded with any
                donor or grantmaker who asks.
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
                We are a small organization, so specific offers are far more
                useful to us than general ones. Any of these can be arranged by
                email, usually within a week.
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

        {/* Sponsors — sits after the asks so a reader arrives at it already
            knowing what a contribution funds. */}
        <Sponsors sponsors={sponsors} background="lowest" />

        {/* Contact band */}
        <section className="bg-primary px-margin-mobile py-section-gap md:px-gutter">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-on-primary">
              Get in touch
            </h2>
            <p className="mb-10 font-body text-body-lg text-on-primary/80">
              {canDonate
                ? "Prefer to give directly? Donations are processed securely by our giving partner — SAIL never sees or stores your card details."
                : "Email us about any of the above and a student on our team will reply. Tell us what you have in mind and we will work out the details with you."}
            </p>
            <a
              href={canDonate ? site.donateUrl : mailto("Supporting SAIL")}
              {...(canDonate
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-3 rounded bg-on-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary shadow-sm transition-colors hover:bg-white"
            >
              {canDonate ? "Donate securely" : "Email our team"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-8 font-body text-body-md text-on-primary/70">
              {site.contact.email} · {site.contact.phone}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
