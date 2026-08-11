import Image from "next/image";
import Reveal from "./Reveal";

/** Founding story. Server component — no JS. */
export default function Origin() {
  return (
    <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="mb-stack-lg text-center font-display text-headline-lg text-primary">
            Our Beginnings
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-px overflow-hidden rounded-xl border border-outline-variant/40 bg-outline-variant/30 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden md:h-auto md:min-h-[340px]">
            <Image
              src="/images/walnut-hills.jpg"
              alt="Walnut Hills High School in Cincinnati, Ohio — the founding chapter of SAIL"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
          </div>

          <div className="flex flex-col justify-center bg-surface-container-lowest p-8 md:p-12">
            <Reveal>
              <p className="mb-2 font-display text-headline-lg text-primary">
                Walnut Hills High School
              </p>
              <p className="mb-6 font-body text-body-md text-on-surface-variant">
                Cincinnati, Ohio
              </p>
              <p className="mb-4 font-body text-body-lg text-on-surface">
                SAIL started with a $400 seed contribution and a single
                classroom session. We incorporated as an Ohio nonprofit in June
                2026 and are a federally recognized 501(c)(3).
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                What began as one chapter is now a network of student leaders
                across four Ohio high schools, running free workshops for the
                students in their own communities.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
