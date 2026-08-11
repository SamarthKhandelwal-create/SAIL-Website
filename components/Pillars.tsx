import Reveal from "./Reveal";

/** The three pillars, as described in SAIL's organizational one-pager. */
export const pillars = [
  {
    title: "Accessible technology",
    body: "We explain artificial intelligence in clear, age-appropriate language and give students the chance to explore it through practical, hands-on activities — regardless of any previous technical experience. Workshops replace passive lectures with demonstrations, discussions, collaborative challenges, and guided experimentation.",
  },
  {
    title: "Digital ethics",
    body: "Students examine misinformation, algorithmic bias, hallucinations, privacy, and academic integrity. We spend real time on how to independently verify what a model tells you — because a system that is confident and wrong is more dangerous than one that is obviously broken.",
  },
  {
    title: "Student mentorship",
    body: "High school leaders serve as relatable role models, helping younger students build confidence while developing their own leadership, communication, and teaching skills. Because students learn from mentors close to their own age, complex technology becomes approachable rather than intimidating.",
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
          <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
            Our Three Pillars
          </h2>
          <p className="mb-16 max-w-3xl font-body text-body-lg text-on-surface-variant">
            Students learn not only how to use AI, but how to question it,
            verify it, and make responsible decisions with it.
          </p>
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
