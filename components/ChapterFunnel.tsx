import { site } from "@/lib/site";
import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Apply",
    body: "A ten-minute application asking what you want to build, not what you have already done. No teaching or computer science background needed. We reply within a week.",
  },
  {
    n: "2",
    title: "Get the guide",
    body: "The Chapter-in-a-Box kit: full curriculum, editable slide decks, activity materials, and operational guides for booking a room, recruiting a team, and getting school approval.",
  },
  {
    n: "3",
    title: "Teach",
    body: "Run your first session, usually fifteen to thirty students. Someone from the national team walks through the material with you beforehand, and you keep every future curriculum update.",
  },
];

/** What a Chapter Lead actually receives. */
const kit = [
  {
    title: "The curriculum",
    body: "What AI is, how language models generate text, where they fail, and how to check them. Built and tested by students, and adaptable from a 30-minute assembly to a full class period.",
  },
  {
    title: "Slide decks and activities",
    body: "Editable slides plus the hands-on activities that carry the session. Run the deck as-is or rebuild it around your own examples.",
  },
  {
    title: "Operational guides",
    body: "How to pitch the club to an administrator, book a space, recruit a team, and structure a session so it finishes on time.",
  },
  {
    title: "The network",
    body: "Access to every other chapter lead. When something works at Mason or Ottawa-Glandorf, you hear about it.",
  },
];

/** The session structure, drawn from SAIL's workshop deck. */
const session = [
  {
    title: "Open with a game",
    body: "Students play QuickDraw, where a neural network guesses their doodles. It gets things right, then confidently gets things wrong, and the conversation starts on its own.",
  },
  {
    title: "Human or AI?",
    body: "Students read passages and decide which were written by a person. One recommends the Ottawa Food Bank as a tourist destination — fluent, well-formed, and completely false. That is the hallucination lesson.",
  },
  {
    title: "Prompt engineering",
    body: "Students see how much phrasing changes the output — explaining photosynthesis, versus explaining it to a five-year-old.",
  },
  {
    title: "Close on judgment",
    body: "Misinformation, bias, privacy, and academic integrity. The goal is not a list of rules but the habit of asking where an answer came from.",
  },
];

const INTRO =
  "Everything you need to bring AI literacy to your school — curriculum, network, and support. You bring the leadership.";

export default function ChapterFunnel({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="relative bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        {/* Pitch */}
        {showHeading ? (
          <div className="mb-24 grid items-end gap-stack-lg md:grid-cols-2">
            <Reveal>
              <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
                Start a Chapter
              </p>
              <h2 className="font-display text-display-xl leading-[0.95] text-primary">
                Chapter-in-a-Box
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="font-body text-body-lg text-on-surface-variant">
                {INTRO}
              </p>
            </Reveal>
          </div>
        ) : (
          <Reveal className="mb-24">
            <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
              Chapter-in-a-Box
            </p>
            <p className="max-w-3xl font-body text-body-lg text-on-surface-variant">
              {INTRO}
            </p>
          </Reveal>
        )}

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-stack-lg md:grid-cols-3">
          <div className="absolute left-0 top-[44px] hidden h-px w-full bg-outline-variant/60 md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i}>
              <div className="group relative flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8 transition-colors duration-500 hover:border-primary/40">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-3xl font-bold text-on-primary">
                  {step.n}
                </div>
                <h3 className="mb-3 font-display text-2xl text-on-surface">
                  {step.title}
                </h3>
                <p className="font-body text-body-md text-secondary">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What's in the box */}
        <div className="mt-section-gap">
          <Reveal>
            <h3 className="mb-4 font-display text-headline-lg text-primary">
              What&rsquo;s in the box
            </h3>
            <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
              The hardest part of starting something at a school is never the idea — it is the logistics between the idea and thirty students in a room.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {kit.map((k, i) => (
              <Reveal key={k.title} delay={i % 2}>
                <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-8">
                  <h4 className="mb-3 font-display text-2xl text-on-surface">
                    {k.title}
                  </h4>
                  <p className="font-body text-body-md text-secondary">
                    {k.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What a session looks like */}
        <div className="mt-section-gap">
          <Reveal>
            <h3 className="mb-4 font-display text-headline-lg text-primary">
              What a first session looks like
            </h3>
            <p className="mb-12 max-w-3xl font-body text-body-lg text-on-surface-variant">
              Our workshops replace lectures with demonstrations. Run a session exactly like this, or rebuild it once you know your students.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {session.map((s, i) => (
              <Reveal key={s.title} delay={i}>
                <div className="flex h-full flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6">
                  <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                    Step {i + 1}
                  </p>
                  <h4 className="mb-3 font-display text-xl text-on-surface">
                    {s.title}
                  </h4>
                  <p className="font-body text-body-md text-secondary">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-stack-lg flex justify-center">
          <a
            href={site.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded bg-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary shadow-sm transition-colors hover:bg-surface-tint"
          >
            Apply to lead a chapter
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
