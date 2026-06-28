"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      id="mission"
      className="bg-surface-container-lowest px-margin-mobile py-section-gap md:px-gutter"
    >
      <motion.div
        style={{ y }}
        className="mx-auto max-w-[820px] text-center"
      >
        <motion.p
          className="font-body text-2xl font-medium leading-snug text-primary md:text-[34px] md:leading-[1.35]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.2 }}
        >
          Students For AI Literacy{" "}
          <span className="text-on-surface-variant">(SAIL)</span> is a non-profit
          created and led by students to promote AI literacy skills within youth.
        </motion.p>
      </motion.div>
    </section>
  );
}
