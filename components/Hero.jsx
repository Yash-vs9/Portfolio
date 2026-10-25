"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import {
  FileTextIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/Icons";

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
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {profile.name}
          </h1>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Available</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
          {profile.role}
        </p>

        <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          {profile.meta}
        </div>
      </div>

      {/* Intro from original data */}
      <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl space-y-1">
        {profile.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* Quick Action Links Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => openResumeModal()}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-900 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors shadow-xs"
        >
          <FileTextIcon className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-400" />
          <span>Resume</span>
        </button>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
        >
          {copied ? (
            <>
              <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
        >
          <GithubIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>GitHub</span>
          <ArrowUpRightIcon className="h-3 w-3 text-zinc-400" />
        </a>

        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
        >
          <LinkedinIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>LinkedIn</span>
          <ArrowUpRightIcon className="h-3 w-3 text-zinc-400" />
        </a>
      </div>
    </section>
  );
}
