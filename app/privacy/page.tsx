import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, ogImages } from "@/lib/site";

const description =
  "How Students For AI Literacy collects, uses, and protects information on this website — the analytics we run, the cookies we set, what happens to chapter applications, and how to opt out or have your data deleted.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy · SAIL", description, type: "website", images: ogImages },
};

/** Update when the substance of the policy changes, not on every deploy. */
const LAST_UPDATED = "August 10, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav solid />
      <main
        id="main"
        className="bg-surface-container-lowest"
        style={{ paddingTop: "calc(var(--nav-h) + 3rem)" }}
      >
        <article className="mx-auto max-w-[720px] px-margin-mobile pb-24 md:px-gutter">
          <h1 className="mb-4 font-display text-display-xl leading-[0.95] text-primary">
            Privacy Policy
          </h1>
          <p className="mb-12 font-body text-body-md text-secondary">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-10 font-body text-body-md text-on-surface [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-primary [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>Who we are</h2>
              <p>
                {site.name} (&ldquo;SAIL,&rdquo; &ldquo;we,&rdquo; or
                &ldquo;us&rdquo;) is a student-led nonprofit organization, EIN{" "}
                {site.ein}. This policy explains what information we collect
                when you visit {site.url.replace("https://", "")} and what we do
                with it.
              </p>
            </section>

            <section>
              <h2>Information we collect</h2>
              <p>
                We do not ask you to create an account, and we do not collect
                names, addresses, or payment information through this website.
                The information we do receive falls into two categories.
              </p>

              <p className="font-semibold text-primary">
                Analytics data collected automatically
              </p>
              <p>
                We use Google Analytics to understand how people find and use
                this site so we can improve it. Google Analytics sets cookies
                and collects standard technical information, including:
              </p>
              <ul>
                <li>Pages you visit and how long you spend on them</li>
                <li>
                  The site or search that referred you, and general campaign
                  information if you arrived from one of our ads
                </li>
                <li>
                  Your approximate location (city or region level, derived from
                  your IP address — we do not receive your full IP address)
                </li>
                <li>
                  Your device type, browser, and operating system
                </li>
              </ul>
              <p>
                This data is aggregated and statistical. We use it to see which
                pages are useful and where visitors come from — not to identify
                you personally, and we make no attempt to do so.
              </p>

              <p className="font-semibold text-primary">
                Information you choose to give us
              </p>
              <p>
                If you email or call us, we receive whatever you send. If you
                apply to start a chapter, that application is hosted by JotForm
                rather than on this website, and the information you enter is
                handled under JotForm&rsquo;s privacy policy in addition to
                ours. We use application details only to evaluate and support
                your chapter.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                The only cookies this site sets are those used by Google
                Analytics, described above. We do not use advertising cookies on
                this site, and we do not sell or share your information with
                data brokers.
              </p>
              <p>
                You can block or delete cookies in your browser settings, or
                install{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  Google&rsquo;s opt-out browser add-on
                </a>{" "}
                to prevent Google Analytics from collecting data about your
                visits. The site works normally either way.
              </p>
            </section>

            <section>
              <h2>Advertising</h2>
              {/* This paragraph claimed SAIL "participates in the Google Ad
                  Grants program" while the Ad Grants application was still
                  being rejected. It was the same false claim corrected in
                  data/sponsors.ts, in a second place the first pass missed.
                  Say nothing here about advertising SAIL does not run; if the
                  grant is approved, describe it then. */}
              <p>
                We do not run advertising on this website, we do not use
                affiliate links, and we do not sell ad space. If that ever
                changes, we will say so here before it does.
              </p>
            </section>

            <section>
              <h2>How we share information</h2>
              <p>
                We do not sell your information. We share it only with the
                service providers that make this site work — Google Analytics
                for measurement, JotForm for chapter applications, and Vercel
                for website hosting — and only to the extent each needs to
                provide that service. We may also disclose information if the
                law requires it.
              </p>
            </section>

            <section>
              <h2>Students and young people</h2>
              <p>
                Much of our work is with students, including people under 18.
                This website is an informational site and is not directed at
                children under 13, and we do not knowingly collect personal
                information from them through it. When we run sessions at a
                school, any student information involved stays with that school
                — we do not collect or keep student records. If you believe a
                child has sent us personal information, email us and we will
                delete it.
              </p>
            </section>

            <section>
              <h2>Your choices</h2>
              <p>
                You can opt out of analytics as described above. You can also
                email us to ask what information we hold about you, to correct
                it, or to have it deleted, and we will honor reasonable requests.
              </p>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p>
                If we change how we handle information, we will update this page
                and revise the date at the top. Material changes will be
                described here rather than made silently.
              </p>
            </section>

            <section>
              <h2>Contact us</h2>
              <p>
                Questions about this policy or your information? Contact{" "}
                {site.contact.founder} at{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.email}
                </a>{" "}
                or{" "}
                <a
                  href={site.contact.phoneHref}
                  className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
                >
                  {site.contact.phone}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
