"use client";
import { ArrowUpRightIcon, GithubIcon } from "@/components/Icons";

export default function ProjectCard({ project }) {
  return (
    <div className="p-4 sm:p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors space-y-3">
      {/* Header & Repo Link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm sm:text-base text-zinc-100">
            {project.name}
          </h3>
          <span className="text-xs text-zinc-400 font-mono">
            / {project.tag}
          </span>
        </div>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors self-start sm:self-auto"
          >
            <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
            <span>View Repo</span>
            <ArrowUpRightIcon className="h-3 w-3 text-zinc-400" />
          </a>
        )}
      </div>

      {/* Short Desc */}
      <p className="text-xs sm:text-sm font-medium text-zinc-200">
        {project.desc}
      </p>

      {/* Detail */}
      <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
        {project.detail}
      </p>

      {/* Tools tags */}
      {project.tools && project.tools.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tools.map((t) => (
            <span
              key={t}
              className="rounded border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Stack Tags */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-850">
        <span className="text-[10px] text-zinc-400 font-mono mr-1">Stack:</span>
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] text-zinc-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
