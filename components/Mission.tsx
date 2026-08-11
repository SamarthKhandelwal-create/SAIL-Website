import Reveal from "./Reveal";

/**
 * Mission statement. Server component — the scroll parallax this used to run
 * through framer-motion was not worth shipping the library for.
 */
export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter"
    >
      <div className="mx-auto max-w-[820px] text-center">
        <Reveal>
          <p className="mb-stack-md font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            Our Mission
          </p>
          <p className="font-body text-2xl font-medium leading-snug text-primary md:text-[34px] md:leading-[1.35]">
            Students For AI Literacy{" "}
            <span className="text-on-surface-variant">(SAIL)</span> is a
            student-led nonprofit working to make artificial intelligence
            understandable, accessible, and responsible for every young person
            — through a near-peer model where high school students teach the
            students right behind them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
