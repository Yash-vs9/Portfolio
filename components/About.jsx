"use client";
import { about, profile } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { openResumeModal } from "@/lib/modalStore";
import { Server, Bot, Cloud, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export default function About() {
  const pillarIcons = [
    <Server key="0" className="h-5 w-5 text-lime" />,
    <Bot key="1" className="h-5 w-5 text-cyan-400" />,
    <Cloud key="2" className="h-5 w-5 text-vermilion" />,
  ];

  return (
    <section
      id="about"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
    >
      <SectionHead num="01" title="About" sub="Engineering philosophy & focus" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Left: Lead + Body Narrative */}
        <div>
          <Reveal>
            <p
              style={{ fontFamily: "var(--font-bricolage)" }}
              className="max-w-[20ch] text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              {about.lead.split(" — ")[0]} —{" "}
              <span className="text-lime">{about.lead.split(" — ")[1]}</span>
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="text-base leading-relaxed text-bone-dim sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-lime/30 bg-lime/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-wider text-lime">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-lime" />
                </span>
                {about.now}
              </span>

              <button
                onClick={() => openResumeModal()}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-bone-dim hover:text-lime transition-colors"
              >
                <span>Read Full CV / Background</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right: Stats Stack */}
        <div className="flex flex-col justify-center gap-px">
          {about.stats.map((s, i) => (
            <Reveal key={s.v} delay={0.08 * i}>
              <div className="group flex items-baseline justify-between border-b border-white/10 py-5 transition-colors hover:border-lime/40">
                <span
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-4xl font-extrabold tracking-[-0.02em] tabular text-bone transition-colors group-hover:text-lime sm:text-5xl"
                >
                  {s.k}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-dim">
                  {s.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Engineering Pillars - Tailored for Founders & Tech Leads */}
      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="mb-8 border-t border-white/10 pt-8 flex items-baseline justify-between">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-lime">
              Core Engineering Pillars
            </h3>
            <span className="font-mono text-[11px] text-bone-dim">
              Production Mindset
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {about.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-void-soft/50 p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-void-soft/80">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform group-hover:scale-105">
                  {pillarIcons[i]}
                </div>
                <h4
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-xl font-bold tracking-tight text-bone group-hover:text-lime transition-colors"
                >
                  {pillar.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
