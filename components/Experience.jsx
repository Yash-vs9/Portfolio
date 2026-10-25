"use client";
import { experience } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHead title="Experience" sub="Production roles & engineering history" />

      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.company} className="space-y-2.5">
            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-zinc-100">
                  {job.role}
                </span>
                <span className="text-sm text-zinc-400">@</span>
                <span className="font-semibold text-sm text-zinc-200">
                  {job.company}
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                {job.period}
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-zinc-300 leading-relaxed pl-1">
              {job.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-400 select-none mt-1">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
