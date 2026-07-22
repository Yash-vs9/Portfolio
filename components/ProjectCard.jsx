"use client";
import { useRef, useState } from "react";

// A project rendered as a 3D panel: real perspective tilt tracking the
// pointer, with layered depth (translateZ) on the inner content and a glare.
export default function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const isLime = project.accent === "lime";
  const accent = isLime ? "#d6ff3f" : "#ff4d2e";

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * 12,
      ry: (px - 0.5) * 14,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () =>
    setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div
      style={{ perspective: "1200px" }}
      className="w-full"
    >
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
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-void-soft/60 p-8 backdrop-blur-sm sm:p-12"
      >
        {/* glare */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: t.active ? 0.5 : 0,
            background: `radial-gradient(600px circle at ${t.gx}% ${t.gy}%, ${accent}22, transparent 40%)`,
          }}
        />
        {/* accent edge glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-40"
          style={{
            background: `linear-gradient(135deg, ${accent}, transparent 40%)`,
            mixBlendMode: "screen",
            maskImage:
              "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* giant index numeral, deep in the back */}
        <span
          style={{
            transform: "translateZ(-40px)",
            fontFamily: "var(--font-bricolage)",
            color: accent,
          }}
          className="pointer-events-none absolute -right-2 -top-8 select-none text-[10rem] font-extrabold leading-none opacity-[0.07] sm:text-[16rem]"
        >
          {project.index}
        </span>

        <div style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span style={{ color: accent }}>◆</span>
            <span className="text-bone-dim">{project.tag}</span>
          </div>

          <h3
            style={{ fontFamily: "var(--font-bricolage)", transform: "translateZ(30px)" }}
            className="mt-3 text-5xl font-extrabold tracking-[-0.02em] sm:text-7xl"
          >
            {project.name}
          </h3>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-bone">
            {project.desc}
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-bone-dim">
            {project.detail}
          </p>

          {/* tool chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{
                  border: `1px solid ${accent}44`,
                  color: accent,
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* stack + link */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ color: accent }}
            >
              View repo
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
