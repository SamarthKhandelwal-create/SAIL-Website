"use client";

import { motion } from "framer-motion";
import ShaderBackground from "./ShaderBackground";

const words = ["STUDENTS", "FOR AI", "LITERACY"];

export default function Hero() {
  return (
    <header
      id="home"
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <ShaderBackground className="absolute inset-0 z-0 h-full w-full" />
      {/* Legibility veil over the shader */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto max-w-content px-margin-mobile text-center md:px-gutter">
        <h1 className="font-display text-display-xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-stack-md max-w-2xl font-body text-body-lg text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Bridging the gap between artificial intelligence and grassroots student
          activism through AI literacy.
        </motion.p>
      </div>
    </header>
  );
}
