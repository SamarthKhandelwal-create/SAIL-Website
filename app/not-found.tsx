import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for is not here. Browse the rest of Students For AI Literacy — our programs, workshops, chapters, and open student roles.",
  robots: { index: false, follow: true },
};

/** Where someone who hit a dead link most likely meant to go. */
const destinations = [
  {
    href: "/about",
    title: "About SAIL",
    body: "Who we are and how the organization is run.",
  },
  {
    href: "/outreach",
    title: "Our workshops",
    body: "Session recaps, and how to request one for your students.",
  },
  {
    href: "/chapters",
    title: "Start a chapter",
    body: "Bring AI literacy to your school with the free curriculum.",
  },
  {
    href: "/join",
    title: "Open roles",
    body: "Chapter lead, marketing, and finance roles for students.",
  },
  {
    href: "/contact",
    title: "Contact us",
    body: "Request a workshop, ask about sponsorship, or reach our team.",
  },
  {
    href: "/donate",
    title: "Support our work",
    body: "Host a session, donate materials, or sponsor a chapter.",
  },
];

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <main
        id="main"
        className="bg-surface-container-lowest"
        style={{ paddingTop: "calc(var(--nav-h) + 3rem)" }}
      >
        <div className="mx-auto max-w-content px-margin-mobile pb-24 md:px-gutter">
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            Error 404
          </p>
          <h1 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
            Page not found
          </h1>
          <p className="mb-12 max-w-2xl font-body text-body-lg text-on-surface-variant">
            The page you were looking for does not exist. Everything SAIL
            publishes is one click away below, or you can{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-primary underline underline-offset-4 transition-colors hover:text-surface-tint"
            >
              email us
            </a>
            .
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {destinations.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface p-8 transition-colors hover:border-primary/40"
              >
                <h2 className="mb-3 font-display text-2xl text-on-surface">
                  {d.title}
                </h2>
                <p className="font-body text-body-md text-secondary">{d.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary">
                  Go
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
