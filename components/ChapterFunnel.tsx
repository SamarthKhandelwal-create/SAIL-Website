"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const steps = [
  {
    n: "1",
    title: "Apply",
    body: "Submit your application to become a Chapter Lead. Tell us about your vision for AI literacy at your school.",
  },
  {
    n: "2",
    title: "Get the Guide",
    body: "Receive the comprehensive Chapter-in-a-Box kit — our vetted curriculum, slide decks, and operational blueprints.",
  },
  {
    n: "3",
    title: "Teach",
    body: "Host your first session and empower your peers with the knowledge to navigate an AI-driven future.",
  },
];

export default function ChapterFunnel() {
  return (
    <section
      id="chapters"
      className="relative scroll-mt-24 bg-surface px-margin-mobile py-section-gap md:px-gutter"
    >
      <div className="mx-auto max-w-content">
        {/* Pitch */}
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
              Everything you need to bring AI literacy to your school — curriculum,
              network, and support. You bring the leadership.
            </p>
          </Reveal>
        </div>

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

        {/* CTA */}
        <motion.div
          className="mt-stack-lg flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Magnetic strength={0.5}>
            <a
              href={site.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded bg-primary px-8 py-4 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-on-primary shadow-sm transition-colors hover:bg-surface-tint"
            >
              Apply Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
