"use client";
import { skills } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-24 lg:py-36"
    >
      <SectionHead num="04" title="Stack" sub="Tools I reach for" />

      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.06}>
            <div className="group border-t border-white/10 pt-5">
              <div className="mb-4 flex items-baseline justify-between">
                <h3
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-xl font-bold tracking-[-0.01em] text-bone"
                >
                  {group.label}
                </h3>
                <span className="font-mono text-[11px] text-ash">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-sm text-bone-dim transition-all duration-200 hover:border-lime/50 hover:text-bone"
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
