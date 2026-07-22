"use client";
import { profile } from "@/lib/data";

const disp = { fontFamily: "var(--font-bricolage)" };
const marqueeWords = [
  "Java",
  "Spring Boot",
  "FastAPI",
  "Next.js",
  "LangGraph",
  "MCP",
  "AWS",
  "Agents",
];

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 overflow-hidden pt-16">
      {/* marquee band */}
      <div className="flex select-none whitespace-nowrap border-y border-white/10 py-4">
        <div className="marquee flex shrink-0">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              style={disp}
              className="mx-6 text-2xl font-bold text-ash sm:text-3xl"
            >
              {w}
              <span className="ml-12 text-lime">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-24 sm:px-10 lg:px-24 lg:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-lime">
          Let&apos;s build something
        </p>
        <a
          href={profile.links.email}
          style={disp}
          className="group inline-block text-[13vw] font-extrabold leading-[0.9] tracking-[-0.03em] transition-colors hover:text-lime sm:text-[10vw] lg:text-[8vw]"
        >
          Get in touch
          <span className="ml-4 inline-block transition-transform group-hover:translate-x-4">
            ↗
          </span>
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.name}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lime"
            >
              GitHub
            </a>
            <a
              href={profile.links.email}
              className="transition-colors hover:text-lime"
            >
              Email
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lime"
            >
              LinkedIn
            </a>
          </div>
          <span className="text-ash">© 2026 — built from scratch</span>
        </div>
      </div>
    </footer>
  );
}
