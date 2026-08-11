import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/** The three audiences SAIL asks something of, per the organizational one-pager. */
const ways = [
  {
    title: "Schools, libraries & community organizations",
    body: "Host a free SAIL workshop, bring our curriculum to your students, or partner with us on ongoing AI literacy programming. Our sessions are free and run by trained student leaders.",
    label: "Request a workshop",
    href: `mailto:${site.contact.email}?subject=Request%20a%20SAIL%20workshop`,
    external: true,
  },
  {
    title: "High school students",
    body: "Launch a chapter at your school, or join our marketing or finance team. Every role is student-run, and none of them require prior experience — just follow-through.",
    label: "See open roles",
    href: "/join",
  },
  {
    title: "Sponsors & community partners",
    body: "Support workshop materials, student resources, technology access, and free programming for the communities that need it most. Every dollar goes directly into running sessions.",
    label: "Support our work",
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
