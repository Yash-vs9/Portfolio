"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import { FileTextIcon, MailIcon, ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Honors" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 flex items-center justify-between">
        {/* Name / Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 text-left group"
        >
          <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            {profile.name}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 border border-zinc-800 bg-zinc-900/60 rounded-full px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline">Open to Roles</span>
          </span>
        </button>

        {/* Links & Actions */}
        <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
          <nav className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-zinc-800">
            <button
              onClick={() => openResumeModal()}
              className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all"
            >
              <FileTextIcon className="h-3.5 w-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
