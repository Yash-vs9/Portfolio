"use client";
import { about } from "@/lib/data";
import SectionHead from "./SectionHead";
import { Server, Bot, Cloud } from "lucide-react";

export default function About() {
  const pillarIcons = [
    <Server key="0" className="h-4 w-4 text-zinc-300" />,
    <Bot key="1" className="h-4 w-4 text-zinc-300" />,
    <Cloud key="2" className="h-4 w-4 text-zinc-300" />,
  ];

  return (
    <section id="about" className="space-y-6">
      <SectionHead title="About" sub="Engineering background & pillars" />

      {/* Narrative paragraphs */}
      <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
        {about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {about.pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-zinc-800 text-zinc-200">
                {pillarIcons[i]}
              </div>
              <h3 className="text-xs font-semibold text-zinc-200">
                {pillar.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
