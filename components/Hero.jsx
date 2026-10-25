"use client";
import { useState } from "react";
import { profile, heroStats } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import {
  FileText,
  Copy,
  Check,
  Mail,
  MapPin,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="hero" className="space-y-6 pt-4">
      {/* Top Header Block */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            {profile.name}
          </h1>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Available for 2026 roles</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-300 font-medium">
          {profile.role}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono pt-0.5">
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-zinc-400" />
            {profile.meta}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-zinc-400" />
            {profile.location}
          </span>
        </div>
      </div>

      {/* Concise Bio */}
      <div className="text-sm leading-relaxed text-zinc-300 max-w-2xl space-y-2">
        <p>
          I build resilient backend systems and autonomous AI agent architectures. Focused on the unglamorous parts of software engineering: infrastructure that survives restarts, reliable microservices with Java/Spring Boot and Python/FastAPI, and production-tested agentic workflows (LangGraph, FastMCP, and hybrid retrieval).
        </p>
      </div>

      {/* Quick Action Links Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => openResumeModal()}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
        >
          <FileText className="h-3.5 w-3.5 text-zinc-400" />
          <span>View Resume</span>
        </button>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
        >
          <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
          <span>GitHub</span>
          <ArrowUpRight className="h-3 w-3 text-zinc-400" />
        </a>

        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
        >
          <LinkedinIcon className="h-3.5 w-3.5 text-zinc-400" />
          <span>LinkedIn</span>
          <ArrowUpRight className="h-3 w-3 text-zinc-400" />
        </a>
      </div>

      {/* Key Metric Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-zinc-800/80">
        {heroStats.map((stat) => (
          <div key={stat.label} className="p-2.5 rounded-lg border border-zinc-800/60 bg-zinc-900/30">
            <div className="text-lg font-semibold text-zinc-100 font-mono">
              {stat.value}
            </div>
            <div className="text-[11px] text-zinc-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
