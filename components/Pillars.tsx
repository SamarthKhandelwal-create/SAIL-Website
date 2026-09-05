import Reveal from "./Reveal";

/** The three pillars, as described in SAIL's organizational one-pager. */
export const pillars = [
  {
    title: "Accessible technology",
    body: "AI explained in plain language, with hands-on activities instead of lectures. No prior technical experience needed.",
  },
  {
    title: "Digital ethics",
    body: "Misinformation, bias, hallucinations, privacy, academic integrity — and how to verify what a model tells you. A system that is confident and wrong is more dangerous than one that is obviously broken.",
  },
  {
    title: "Student mentorship",
    body: "High school leaders teach the students right behind them, building their own leadership skills while making the technology feel approachable.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            What we teach
          </p>
          <h2 className="mb-16 font-display text-display-xl leading-[0.95] text-primary">
            Our Three Pillars
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                <h3 className="mb-4 font-display text-2xl text-on-surface">
                  {p.title}
                </h3>
                <p className="font-body text-body-md text-secondary">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
