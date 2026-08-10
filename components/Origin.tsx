"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
          <h2 className="mb-stack-lg text-center font-display text-headline-lg text-primary">
            Our Beginnings
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-px overflow-hidden rounded-xl border border-outline-variant/40 bg-outline-variant/30 md:grid-cols-2">
          {/* Image with parallax */}
          <div ref={ref} className="relative h-72 overflow-hidden md:h-auto">
            <motion.div
              style={{ y: imgY, scale: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/walnut-hills.jpg"
                alt="Walnut Hills High School in Cincinnati, Ohio — the founding chapter of SAIL"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center bg-surface-container-lowest p-8 md:p-12">
            <Reveal>
              <p className="mb-2 font-display text-headline-lg text-primary">
                Walnut Hills High School
              </p>
              <p className="mb-6 font-body text-body-md text-on-surface-variant">
                Cincinnati, Ohio
              </p>
              <p className="font-body text-body-lg text-on-surface">
                An organization that began with a small $400 grant has expanded
                into a movement focused on empowering the next generation of youth.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
