"use client";
import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 sm:p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors space-y-3">
      {/* Header & Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="font-semibold text-sm sm:text-base text-zinc-100">
            {project.name}
          </h3>
          <span className="text-xs text-zinc-400 font-mono">
            — {project.tag}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded border border-zinc-850 bg-zinc-900 px-2.5 py-1 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="h-3 w-3" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {project.detail}
      </p>

      {/* Architecture Highlights Collapsible */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="pt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-mono"
          >
            <span>{expanded ? "Hide architecture details" : "Architecture & technical specs"}</span>
            {expanded ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </button>

          {expanded && (
            <ul className="mt-2 space-y-1 rounded bg-zinc-950/60 p-3 border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed font-sans">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-zinc-400 select-none mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Stack Tags */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-zinc-850">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-zinc-800 bg-zinc-900/40 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
