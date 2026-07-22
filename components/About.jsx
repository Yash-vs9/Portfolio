"use client";
import { about } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-24 lg:py-36"
    >
      <SectionHead num="01" title="About" sub="Who's behind the work" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        {/* left: lead + body */}
        <div>
          <Reveal>
            <p
              style={{ fontFamily: "var(--font-bricolage)" }}
              className="max-w-[18ch] text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
            >
              {about.lead.split(" — ")[0]} —{" "}
              <span className="text-lime">{about.lead.split(" — ")[1]}</span>
            </p>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-5">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-lg leading-relaxed text-bone-dim">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-10 inline-flex items-center gap-3 rounded-full border border-lime/30 bg-lime/[0.04] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-lime">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime opacity-60" />
                <span className="h-2 w-2 rounded-full bg-lime" />
              </span>
              {about.now}
            </p>
          </Reveal>
        </div>

        {/* right: stats stack */}
        <div className="flex flex-col justify-center gap-px">
          {about.stats.map((s, i) => (
            <Reveal key={s.v} delay={0.08 * i}>
              <div className="group flex items-baseline justify-between border-b border-white/10 py-5 transition-colors hover:border-vermilion/40">
                <span
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-5xl font-extrabold tracking-[-0.02em] tabular transition-colors group-hover:text-vermilion sm:text-6xl"
                >
                  {s.k}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
                  {s.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
