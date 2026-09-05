import Reveal from "./Reveal";

/** Statistics cited in SAIL's workshop curriculum. */
const figures = [
  {
    value: "72%",
    body: "of students say guidance on how to use generative AI responsibly would be helpful.",
    source: "Center for Democracy & Technology, September 2023",
  },
  {
    value: "79%",
    body: "of teachers say their district does not have clear policies on AI in education.",
    source: "EdWeek, February 2024",
  },
];

export default function Challenge() {
  return (
    <section className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <div className="grid gap-stack-lg md:grid-cols-2">
          <Reveal>
            <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
              The challenge
            </p>
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
              Schools are banning AI faster than they can teach it
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p className="font-body text-body-lg text-on-surface">
              A ban teaches nothing about using these tools ethically or safely,
              and students use AI anyway — just without any guidance on
              verifying what it tells them.
            </p>
          </Reveal>
        </div>

        <div className="mt-stack-lg grid grid-cols-1 gap-6 sm:grid-cols-2">
          {figures.map((f, i) => (
            <Reveal key={f.value} delay={i}>
              <div className="h-full rounded-xl border border-outline-variant/40 bg-surface p-8">
                <p className="mb-3 font-display text-display-xl leading-none text-primary">
                  {f.value}
                </p>
                <p className="mb-4 font-body text-body-lg text-on-surface">
                  {f.body}
                </p>
                <p className="font-body text-body-md text-on-surface-variant">
                  {f.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
