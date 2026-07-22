"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const disp = { fontFamily: "var(--font-bricolage)" };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-24 sm:px-10 lg:px-24"
    >
      {/* top meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim"
      >
        <span>{profile.meta}</span>
        <span className="hidden sm:inline">Portfolio — 2026</span>
        <span className="text-lime">● available</span>
      </motion.div>

      {/* name block — asymmetric, oversized */}
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-lime sm:text-sm"
        >
          {profile.role}
        </motion.p>

        <h1
          style={disp}
          className="max-w-[14ch] text-[15vw] font-extrabold leading-[0.82] tracking-[-0.03em] sm:text-[13vw] lg:text-[11vw]"
        >
          {["Yash", "Vardhan", "Shukla"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.45 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block ${i === 1 ? "text-stroke pl-[0.15em] lg:pl-[1.2em]" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* intro + links, pushed right for asymmetry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="max-w-md text-base leading-relaxed text-bone-dim sm:ml-auto sm:text-right lg:text-lg">
          {profile.intro.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </div>
      </motion.div>

      {/* links row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.2em]"
      >
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-bone transition-colors hover:text-lime"
        >
          <span className="text-lime">→</span> GitHub
          <span className="text-ash group-hover:text-bone-dim">/Yash-vs9</span>
        </a>
        <a
          href={profile.links.email}
          className="group flex items-center gap-2 text-bone transition-colors hover:text-lime"
        >
          <span className="text-lime">→</span> Email
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-bone transition-colors hover:text-lime"
        >
          <span className="text-lime">→</span> LinkedIn
        </a>
        <span className="ml-auto hidden animate-bounce text-ash sm:inline">
          scroll ↓
        </span>
      </motion.div>
    </section>
  );
}
