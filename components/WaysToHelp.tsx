import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/** The three audiences SAIL asks something of, per the organizational one-pager. */
const ways = [
  {
    title: "Schools & libraries",
    body: "Host a free session, run by trained student leaders. You provide the room; we bring everything else.",
    label: "Request a workshop",
    href: `mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`,
    external: true,
  },
  {
    title: "High school students",
    body: "Launch a chapter, or join our marketing or finance team. No prior experience required — just follow-through.",
    label: "See open roles",
    href: "/join",
  },
  {
    title: "Sponsors & partners",
    body: "About $400 covers a new chapter's first year of programming.",
    label: "See how to help",
    href: "/donate",
  },
];

export default function WaysToHelp() {
  return (
    <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            Get involved
          </p>
          <h2 className="mb-16 font-display text-display-xl leading-[0.95] text-primary">
            Help Us Expand AI Literacy
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i}>
              <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                <h3 className="mb-4 font-display text-2xl text-on-surface">
                  {w.title}
                </h3>
                <p className="mb-6 font-body text-body-md text-secondary">
                  {w.body}
                </p>
                {w.external ? (
                  <a
                    href={w.href}
                    className="group mt-auto inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
                  >
                    {w.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ) : (
                  <Link
                    href={w.href}
                    className="group mt-auto inline-flex items-center gap-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:text-surface-tint"
                  >
                    {w.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
