"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import {
  MailIcon,
  CopyIcon,
  CheckIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/Icons";
import SectionHead from "./SectionHead";

export default function Footer() {
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
    <footer id="contact" className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
      <SectionHead title="Get in Touch" sub="Open to roles & technical discussions" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm text-zinc-900 dark:text-zinc-200 font-medium">
            Let&apos;s build something reliable together.
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Available for full-time engineering roles, high-impact internships, or contract systems work.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-900 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-900 px-3 py-1.5 text-xs text-white dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <MailIcon className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-400" />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
          >
            {copied ? (
              <>
                <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={() => openResumeModal()}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors shadow-xs"
          >
            <FileTextIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-850 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-3">
          <span>{profile.name}</span>
          <span>•</span>
          <span>{profile.meta}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="h-3 w-3" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="h-3 w-3" />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
