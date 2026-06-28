"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

export default function Origin() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="bg-surface px-margin-mobile py-section-gap md:px-gutter">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 text-center font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
            The Origin
          </p>
          <h2 className="mb-stack-lg text-center font-display text-headline-lg text-primary">
            Where it started
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-px overflow-hidden rounded-xl border border-outline-variant/40 bg-outline-variant/30 md:grid-cols-2">
          {/* Image with parallax */}
          <div ref={ref} className="relative h-72 overflow-hidden md:h-auto">
            <motion.img
              style={{ y: imgY, scale: 1.2 }}
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1400&auto=format&fit=crop"
              alt="Modern high school learning environment"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center bg-surface-container-lowest p-8 md:p-12">
            <Reveal>
              <h3 className="mb-2 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-secondary">
                Founded at
              </h3>
              <p className="mb-2 font-display text-headline-lg text-primary">
                Walnut Hills High School
              </p>
              <p className="mb-6 font-body text-body-md text-on-surface-variant">
                Cincinnati, Ohio
              </p>
              <p className="font-body text-body-lg text-on-surface">
                What started as a local initiative has grown into a movement. Our
                founding chapter set the blueprint for empowering students to
                understand and shape the future of artificial intelligence — one
                classroom at a time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
