"use client";
import { extras } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Extras() {
  return (
    <section
      id="extras"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-24 lg:py-36"
    >
      <SectionHead num="05" title="More" sub="Community & wins" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {extras.map((x, i) => (
          <Reveal key={x.title} delay={i * 0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-xl border border-white/10 bg-void-soft/40 p-7 transition-colors hover:border-vermilion/40">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-vermilion">
                0{i + 1}
              </span>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-2xl font-bold tracking-[-0.01em]"
                >
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                  {x.line}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
