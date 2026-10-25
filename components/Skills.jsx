"use client";
import { skills } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { Server, Bot, Cloud, Database, Layout, Award } from "lucide-react";

export default function Skills() {
  const domainIcons = [
    <Server key="0" className="h-4 w-4 text-lime" />,
    <Bot key="1" className="h-4 w-4 text-cyan-400" />,
    <Cloud key="2" className="h-4 w-4 text-vermilion" />,
    <Database key="3" className="h-4 w-4 text-amber-400" />,
    <Layout key="4" className="h-4 w-4 text-purple-400" />,
    <Award key="5" className="h-4 w-4 text-emerald-400" />,
  ];

  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
    >
      <SectionHead
        num="04"
        title="Technical Arsenal"
        sub="Production-proven tools & technologies"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-white/10 bg-void-soft/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-lime/30 hover:bg-void-soft/80">
              {/* Category Header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    {domainIcons[i % domainIcons.length]}
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-bricolage)" }}
                    className="text-lg font-bold tracking-tight text-bone group-hover:text-lime transition-colors"
                  >
                    {group.label}
                  </h3>
                </div>
                <span className="font-mono text-xs text-ash">
                  0{i + 1}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-bone-dim transition-all duration-200 hover:border-lime/50 hover:bg-lime/[0.04] hover:text-bone"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
