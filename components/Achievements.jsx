"use client";
import { useState } from "react";
import { achievements, whyHireMe } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { openResumeModal } from "@/lib/modalStore";
import {
  Trophy,
  Award,
  Medal,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Achievements() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section
      id="achievements"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
    >
      <SectionHead
        num="05"
        title="Honors & Impact"
        sub="Competitive hackathons, leadership & credentials"
      />

      {/* Grid of Verified Honors */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-void-soft/50 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-lime/40 hover:bg-void-soft/80">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime font-bold">
                    {item.tag}
                  </span>
                  <Trophy className="h-4 w-4 text-lime opacity-75 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3
                  style={{ fontFamily: "var(--font-bricolage)" }}
                  className="text-xl font-bold tracking-tight text-bone group-hover:text-lime transition-colors"
                >
                  {item.title}
                </h3>

                <p className="mt-1 font-mono text-xs text-bone-dim">
                  {item.org} • <span className="text-lime">{item.prize}</span>
                </p>

                <p className="mt-3 text-xs leading-relaxed text-bone-dim">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ash">
                  Verified Honor
                </span>
                <span className="font-mono text-xs font-semibold text-lime">
                  {item.highlight}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Founder & Hiring Manager FAQ / Executive Alignment */}
      <div className="mt-20 sm:mt-28 border-t border-white/10 pt-12 sm:pt-16">
        <Reveal>
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-lime font-bold">
                Founder & Recruiter Briefing
              </span>
              <h3
                style={{ fontFamily: "var(--font-bricolage)" }}
                className="mt-2 text-2xl font-bold tracking-tight text-bone sm:text-4xl"
              >
                Why Hire Yash?
              </h3>
            </div>

            <button
              onClick={() => openResumeModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-lime/40 bg-lime/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-lime hover:bg-lime hover:text-void transition-all self-start sm:self-auto"
            >
              <FileText className="h-4 w-4" />
              <span>Preview ATS Resume / CV</span>
            </button>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {whyHireMe.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <Reveal key={item.q} delay={index * 0.08}>
                <div className="rounded-xl border border-white/10 bg-void-soft/40 backdrop-blur overflow-hidden transition-colors hover:border-white/20">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="text-base font-semibold text-bone sm:text-lg pr-4">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-lime" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-bone-dim" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/5 bg-void/50 p-5 pt-3">
                      <p className="text-sm leading-relaxed text-bone-dim">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
