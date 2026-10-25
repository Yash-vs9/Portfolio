"use client";
import { experience } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
    >
      <SectionHead
        num="02"
        title="Experience"
        sub="Production deployments & engineering impact"
      />

      <div className="flex flex-col gap-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="group rounded-2xl border border-white/10 bg-void-soft/40 p-6 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-lime/40 hover:bg-void-soft/70">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.8fr] lg:gap-12">
                {/* Left: Company & Role Metadata */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-lime font-bold">
                      0{i + 1}
                    </span>
                    <span className="rounded-full border border-lime/30 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                      {job.type}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-bricolage)" }}
                    className="text-2xl font-bold leading-tight tracking-tight text-bone sm:text-3xl"
                  >
                    {job.company}
                  </h3>

                  <p className="mt-1 text-base font-medium text-bone-dim">
                    {job.role}
                  </p>

                  <div className="mt-4 flex flex-col gap-1.5 font-mono text-xs text-bone-dim/80">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-ash" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-ash" />
                      {job.location}
                    </span>
                  </div>

                  {job.overview && (
                    <p className="mt-4 text-xs leading-relaxed text-bone-dim border-l-2 border-lime/30 pl-3">
                      {job.overview}
                    </p>
                  )}
                </div>

                {/* Right: Technical Deliverables & Stack */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim mb-3">
                      Key Technical Contributions
                    </h4>
                    <ul className="space-y-3">
                      {job.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm leading-relaxed text-bone/90"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Pills */}
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="mr-2 font-mono text-[10px] uppercase tracking-wider text-ash">
                        Tech Stack:
                      </span>
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-bone-dim transition-colors group-hover:border-white/20 group-hover:text-bone"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
