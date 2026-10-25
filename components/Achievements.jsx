"use client";
import { useState } from "react";
import { achievements, whyHireMe } from "@/lib/data";
import SectionHead from "./SectionHead";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/Icons";

export default function Achievements() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="achievements" className="space-y-6">
      <SectionHead title="Honors & Leadership" sub="Competitions, awards & credentials" />

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between space-y-2 hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                <span>{item.tag}</span>
                <span className="text-zinc-200 font-semibold">{item.highlight}</span>
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-zinc-100">
                {item.title}
              </h3>
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                {item.org} • {item.prize}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter / Founder FAQ */}
      <div className="pt-4 space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
          Recruiter & Founder Quick Q&A
        </h3>
        <div className="space-y-2">
          {whyHireMe.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="rounded-lg border border-zinc-800 bg-zinc-900/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-3 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-zinc-800/60 text-xs text-zinc-400 leading-relaxed bg-zinc-950/40">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
