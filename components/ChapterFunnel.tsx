import { site } from "@/lib/site";
import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Apply",
    body: "Tell us about your school and why AI literacy matters there. The application takes about ten minutes and asks what you want to build, not what you have already done — we have accepted leads with no teaching experience and no computer science background. We read every application and reply within a week.",
  },
  {
    n: "2",
    title: "Get the guide",
    body: "You receive the Chapter-in-a-Box kit: the full workshop curriculum, editable slide decks, activity materials, and the operational guides for booking a room, recruiting a team, and getting approval from your school. Nothing needs to be built from scratch.",
  },
  {
    n: "3",
    title: "Teach",
    body: "Run your first session, usually to a class or club of fifteen to thirty students. A member of the national team is available to walk through the material with you beforehand, and you keep access to every update we make to the curriculum afterward.",
  },
];

/** What a Chapter Lead actually receives. */
const kit = [
  {
    title: "The curriculum",
    body: "A complete workshop built and tested by students: what AI is, how large language models actually generate text, where they fail, and how to check them. Written for students with no technical background, and adaptable from a 30-minute assembly to a full class period.",
  },
  {
    title: "Slide decks and activities",
    body: "Editable slides plus the hands-on activities that carry the session — the ones students remember, not the ones that make them sit still. You can run the deck as-is or rebuild it around your own examples.",
  },
  {
    title: "Operational guides",
    body: "The unglamorous part: how to pitch the club to an administrator, book a space, recruit a small team, and structure a session so it finishes on time. This is the part most student organizations get wrong.",
  },
  {
    title: "The network",
    body: "Access to every other chapter lead. When something works at Mason or Ottawa-Glandorf, you hear about it — and when a session goes badly, you have people to ask who have already had that happen.",
  },
];

/** The session structure, drawn from SAIL's workshop deck. */
const session = [
  {
    title: "Open with a game",
    body: "Students play QuickDraw, where a neural network guesses their doodles. It gets things right, then confidently gets things wrong, and the conversation about how the model is guessing starts on its own.",
  },
  {
    title: "Human or AI?",
    body: "Students read passages and decide which were written by a person. Most are confident and many are wrong. One passage recommends the Ottawa Food Bank as a tourist destination — fluent, well-formed, and completely false. That is the hallucination lesson, and it lands harder than a definition would.",
  },
  {
    title: "Prompt engineering",
    body: "Working through real prompts, students see how much the phrasing changes the output — asking a model to recreate the Mona Lisa versus describing the oil painting and the period it came from, or explaining photosynthesis to a five-year-old.",
  },
  {
    title: "Close on judgment",
    body: "We end where the ethics live: misinformation, bias, privacy, and academic integrity. The goal is not a list of rules but the habit of asking where an answer came from before using it.",
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
              Chapter-in-a-Box exists because the hardest part of starting
              something at a school is never the idea — it is the hundred small
              logistics between the idea and thirty students in a room.
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
              Our workshops replace lectures with demonstrations and
              experiments. Here is the shape of a standard session — you can run
              it exactly like this, or rebuild it once you know your students.
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
