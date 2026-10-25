"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile, heroStats } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import {
  FileText,
  Copy,
  Check,
  ArrowDown,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const disp = { fontFamily: "var(--font-bricolage)" };

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-12 pt-28 sm:px-10 lg:px-20 lg:pt-32"
    >
      {/* Top Meta & Status Badges */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-[11px] uppercase tracking-[0.2em]"
      >
        <div className="flex flex-wrap items-center gap-4 text-bone-dim">
          <span className="inline-flex items-center gap-1.5 text-bone">
            <GraduationCap className="h-3.5 w-3.5 text-lime" />
            {profile.meta}
          </span>
          <span className="hidden md:inline text-white/20">•</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-bone-dim">
            <MapPin className="h-3 w-3 text-vermilion" />
            {profile.location}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-lime">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-lime opacity-75" />
              <span className="h-2 w-2 rounded-full bg-lime" />
            </span>
            {profile.status}
          </span>
        </div>
      </motion.div>

      {/* Main Name & Hero Statement */}
      <div className="my-auto py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-lime"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>{profile.role}</span>
        </motion.div>

        <h1
          style={disp}
          className="max-w-[15ch] text-[13vw] font-extrabold leading-[0.85] tracking-[-0.03em] sm:text-[11vw] lg:text-[8.5vw]"
        >
          {["Yash", "Vardhan", "Shukla"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block ${
                i === 1
                  ? "text-stroke pl-[0.1em] text-transparent hover:text-white/20 transition-colors lg:pl-[0.8em]"
                  : "text-bone"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline / Elevator Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-bone-dim sm:text-lg lg:text-xl"
        >
          <p>
            Architecting <span className="text-bone font-semibold">resilient distributed backends</span> (Java / Spring Boot & Python / FastAPI) and <span className="text-lime font-semibold">autonomous AI agent systems</span> (LangGraph, FastMCP, and production Hybrid RAG).
          </p>
        </motion.div>

        {/* Recruiter Fast-Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          {/* Primary View Work */}
          <button
            onClick={scrollToWork}
            className="group flex items-center gap-2.5 rounded-xl bg-lime px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-void transition-all hover:bg-white hover:shadow-lg hover:shadow-lime/20"
          >
            <span>View Featured Work</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>

          {/* View Resume Button */}
          <button
            onClick={() => openResumeModal()}
            className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-void-soft/80 px-5 py-3 font-mono text-xs uppercase tracking-wider text-bone backdrop-blur hover:border-lime hover:bg-lime/10 hover:text-lime transition-all"
          >
            <FileText className="h-4 w-4 text-lime" />
            <span>ATS Resume / CV</span>
          </button>

          {/* Copy Email Fast Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-wider text-bone-dim hover:border-white/30 hover:text-bone transition-all"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-lime" />
                <span className="text-lime">Copied Email!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Bottom KPI & Social Links Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-6 border-t border-white/10 pt-6"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col border-l border-white/10 pl-4 transition-colors hover:border-lime"
            >
              <span
                style={disp}
                className="text-2xl font-extrabold text-bone sm:text-3xl lg:text-4xl"
              >
                {stat.value}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-bone-dim">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Links row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 font-mono text-xs uppercase tracking-[0.2em]">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-bone-dim transition-colors hover:text-lime"
            >
              <GithubIcon className="h-3.5 w-3.5 text-lime" />
              <span>GitHub</span>
              <span className="text-ash group-hover:text-bone-dim">/Yash-vs9</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-bone-dim transition-colors hover:text-lime"
            >
              <LinkedinIcon className="h-3.5 w-3.5 text-lime" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.links.email}
              className="group flex items-center gap-2 text-bone-dim transition-colors hover:text-lime"
            >
              <Mail className="h-3.5 w-3.5 text-lime" />
              <span>Direct Email</span>
            </a>
          </div>

          <span className="hidden text-ash sm:inline text-[11px]">
            Scroll to explore ↓
          </span>
        </div>
      </motion.div>
    </section>
  );
}
