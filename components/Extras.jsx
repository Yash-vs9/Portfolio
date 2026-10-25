"use client";
import { extras } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Extras() {
  return (
    <section id="extras" className="space-y-6">
      <SectionHead title="More" sub="Community & wins" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {extras.map((x, i) => (
          <div
            key={x.title}
            className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between space-y-2 hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-1">
                0{i + 1}
              </div>
              <h3 className="font-semibold text-sm text-zinc-100">
                {x.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                {x.line}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
