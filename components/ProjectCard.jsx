"use client";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Cpu, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  const [expanded, setExpanded] = useState(false);

  // Dynamic accent color map
  const accentColors = {
    lime: "#d6ff3f",
    cyan: "#00e5ff",
    vermilion: "#ff4d2e",
    amber: "#ffb703",
  };
  const accent = accentColors[project.accent] || "#d6ff3f";

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * 8,
      ry: (px - 0.5) * 10,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () =>
    setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div style={{ perspective: "1200px" }} className="w-full">
      <article
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: t.active
            ? "transform 0.08s linear"
            : "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-void-soft/70 p-6 sm:p-10 backdrop-blur-md transition-all duration-300 hover:border-white/25"
      >
        {/* Dynamic radial glare */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: t.active ? 0.45 : 0,
            background: `radial-gradient(600px circle at ${t.gx}% ${t.gy}%, ${accent}20, transparent 40%)`,
          }}
        />

        {/* Accent edge highlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-30"
          style={{
            background: `linear-gradient(135deg, ${accent}, transparent 45%)`,
            mixBlendMode: "screen",
            maskImage: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* Index numeral in the background */}
        <span
          style={{
            transform: "translateZ(-30px)",
            fontFamily: "var(--font-bricolage)",
            color: accent,
          }}
          className="pointer-events-none absolute -right-3 -top-10 select-none text-[8rem] font-extrabold leading-none opacity-[0.06] sm:text-[13rem]"
        >
          {project.index}
        </span>

        {/* Card Content with 3D depth */}
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          {/* Top metadata tags */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-bone-dim">{project.tag}</span>
            </div>

            <span
              className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider border"
              style={{
                borderColor: `${accent}40`,
                backgroundColor: `${accent}10`,
                color: accent,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            style={{ fontFamily: "var(--font-bricolage)" }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-bone sm:text-5xl"
          >
            {project.name}
          </h3>

          {/* Key Metric Banner */}
          {project.metrics && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-bone-dim">
              <Cpu className="h-3.5 w-3.5" style={{ color: accent }} />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* One-line Hook */}
          <p className="mt-4 text-base font-medium leading-relaxed text-bone sm:text-lg">
            {project.desc}
          </p>

          {/* Deep Architectural Detail */}
          <p className="mt-2 text-sm leading-relaxed text-bone-dim">
            {project.detail}
          </p>

          {/* Expandable Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-5">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-bone-dim hover:text-bone transition-colors"
              >
                <span>{expanded ? "Hide Architecture Specs" : "View Architecture Specs"}</span>
                {expanded ? (
                  <ChevronUp className="h-3.5 w-3.5 text-lime" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 text-lime" />
                )}
              </button>

              {expanded && (
                <ul className="mt-3 space-y-2 rounded-xl border border-white/10 bg-void/60 p-4 text-xs text-bone-dim">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5" style={{ color: accent }}>✓</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Tool Chips */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                style={{
                  border: `1px solid ${accent}33`,
                  backgroundColor: `${accent}08`,
                  color: accent,
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Footer Actions: Stack + Links */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-bone-dim">
              {project.stack.map((s) => (
                <span key={s} className="hover:text-bone transition-colors">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-bone transition-all hover:border-lime hover:bg-lime hover:text-void"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-void px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all hover:border-white/30"
                  style={{ color: accent }}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
