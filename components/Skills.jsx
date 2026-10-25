"use client";
import { skills } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHead title="Technical Stack" sub="Languages, frameworks & infrastructure" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((group) => (
          <div
            key={group.label}
            className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 space-y-2 shadow-xs"
          >
            <h3 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 font-mono uppercase tracking-wider">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-zinc-950/60 px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
