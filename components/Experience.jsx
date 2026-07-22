"use client";
import { experience } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-24 lg:py-36"
    >
      <SectionHead num="02" title="Experience" sub="Reverse chronological / what I shipped" />

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="group grid grid-cols-1 gap-6 border-t border-white/10 py-10 transition-colors hover:border-lime/40 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16 lg:py-12">
              {/* left: identity, offset */}
              <div className="lg:pt-1">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                  {String(i + 1).padStart(2, "0")}
                  {job.period && <span className="ml-3 text-bone-dim">{job.period}</span>}
                </div>
                <h3
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-2xl font-bold leading-tight tracking-[-0.01em] sm:text-3xl"
                >
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-bone-dim">{job.role}</p>
                {job.note && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
                    {job.note}
                  </p>
                )}
              </div>

              {/* right: details */}
              <div>
                <ul className="space-y-3">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[15px] leading-relaxed text-bone/90"
                    >
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-vermilion" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bone-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
