"use client";
import { about } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionHead title="About" sub="Background & focus" />

      {/* Lead */}
      <p className="text-base sm:text-lg font-medium text-zinc-100 leading-snug">
        {about.lead}
      </p>

      {/* Body paragraphs */}
      <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
        {about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Now indicator */}
      <div className="pt-1">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{about.now}</span>
        </span>
      </div>

      {/* Original Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {about.stats.map((s) => (
          <div
            key={s.v}
            className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30"
          >
            <div className="text-xl sm:text-2xl font-semibold text-zinc-100 font-mono">
              {s.k}
            </div>
            <div className="text-xs text-zinc-400 font-mono mt-0.5">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
