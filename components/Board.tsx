"use client";

import { motion } from "framer-motion";
import type { BoardMember } from "@/data/types";
import Reveal from "./Reveal";

function MemberCard({
  member,
  className,
  large,
}: {
  member: BoardMember;
  className?: string;
  large?: boolean;
}) {
  const inner = (
    <div
      className={`group relative h-full overflow-hidden rounded-xl border border-outline/15 bg-surface-container-lowest transition-colors duration-500 hover:border-primary/40 ${className ?? ""}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          large ? "aspect-[16/10]" : "aspect-square"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className={`absolute inset-x-0 bottom-0 ${large ? "p-8" : "p-6"}`}>
          <p className="mb-1 font-body text-label-caps font-bold uppercase tracking-[0.1em] text-primary-fixed">
            {member.role}
          </p>
          <h3
            className={`font-display text-white ${
              large ? "text-headline-lg" : "text-2xl"
            }`}
          >
            {member.name}
          </h3>
          {member.bio && (
            <p className="mt-3 max-h-0 overflow-hidden font-body text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target={member.link.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Board({ board }: { board: BoardMember[] }) {
  const feature = board.find((m) => m.feature) ?? board[0];
  const rest = board.filter((m) => m.id !== feature.id);

  return (
    <section
      id="board"
      className="scroll-mt-24 bg-background px-margin-mobile py-section-gap md:px-gutter"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="mb-3 font-body text-label-caps font-bold uppercase tracking-[0.2em] text-secondary">
              Leadership
            </p>
            <h2 className="mb-6 font-display text-display-xl leading-[0.95] text-primary">
              Executive Board
            </h2>
            <p className="mx-auto max-w-2xl font-body text-body-lg text-secondary">
              Meet the students leading the charge in AI literacy — bridging the
              gap between complex technology and accessible education.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <MemberCard member={feature} large className="h-full" />
          </motion.div>

          {rest.map((member, i) => (
            <motion.div
              key={member.id}
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
