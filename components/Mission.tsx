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
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <div className="text-center">
            <p className="mb-stack-md font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
              Our Mission
            </p>
            <p className="mb-8 font-body text-2xl font-medium leading-snug text-primary md:text-[34px] md:leading-[1.35]">
              Students For AI Literacy{" "}
              <span className="text-on-surface-variant">(SAIL)</span> is a
              student-led 501(c)(3) nonprofit working to make artificial
              intelligence understandable, accessible, and responsible for
              every young person — through a near-peer model where high school
              students teach the students right behind them.
            </p>
          </div>
          {/* Left-aligned: centered body copy is hard to read past a couple
              of lines, and these paragraphs exist to give a reviewer real
              detail about what the organization does. */}
          <p className="mb-4 font-body text-body-lg text-on-surface">
            We train high school students to run free, hands-on AI literacy
            workshops in classrooms, libraries, and youth programs, starting
            in Cincinnati and now through student chapters in Ohio,
            Massachusetts, and Texas. Sessions cover how AI systems actually work,
            where they fail, how bias enters them, and how to use them honestly
            in schoolwork — taught through activities rather than lectures.
          </p>
          <p className="font-body text-body-md text-on-surface-variant">
            Every workshop is free to the school or organization hosting it. We
            have no paid staff and no office, so a contribution goes into the
            supplies students take home and the cost of opening the next
            chapter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
