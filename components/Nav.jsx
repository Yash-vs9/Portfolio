"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    if (id === "resume") {
      openResumeModal();
      setOpen(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Top Floating Glass Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-void/80 py-3.5 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Logo / Monogram */}
          <button
            onClick={() => go("hero")}
            className="group flex items-center gap-3 text-left"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-mono text-xs font-bold text-bone transition-all group-hover:border-lime group-hover:bg-lime/10 group-hover:text-lime">
              YS
            </div>
            <div className="hidden sm:block">
              <span className="block font-bold text-sm leading-tight text-bone group-hover:text-lime transition-colors">
                {profile.name}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                Available for Roles
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-void-soft/80 px-4 py-1.5 backdrop-blur-md">
            {nav
              .filter((n) => n.id !== "hero" && n.id !== "resume")
              .map((n) => {
                const on = active === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`relative rounded-full px-3.5 py-1 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      on
                        ? "text-lime font-semibold"
                        : "text-bone-dim hover:text-bone"
                    }`}
                  >
                    {n.label}
                    {on && (
                      <span className="absolute inset-x-3 -bottom-1 h-0.5 bg-lime rounded-full" />
                    )}
                  </button>
                );
              })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {/* Quick Resume Button - Primary Recruiter Target */}
            <button
              onClick={() => openResumeModal()}
              className="flex items-center gap-2 rounded-xl border border-lime/40 bg-lime/10 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-lime transition-all hover:border-lime hover:bg-lime hover:text-void shadow-sm hover:shadow-lime/20"
              title="View ATS Resume"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="font-semibold">Resume</span>
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => go("contact")}
              className="hidden lg:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-bone transition-all hover:border-white/30 hover:bg-white/10"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-lime" />
            </button>

            {/* Social Icons */}
            <div className="hidden xl:flex items-center gap-1 border-l border-white/10 pl-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-bone-dim hover:bg-white/5 hover:text-bone transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-bone-dim hover:bg-white/5 hover:text-bone transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-bone transition-colors hover:border-white/30 md:hidden"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-[1.5px] w-5 bg-bone transition-transform ${
                    open ? "translate-y-[7.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-5 bg-bone transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-5 bg-bone transition-transform ${
                    open ? "-translate-y-[7.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Left Rail Indicator */}
      <nav className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:block pointer-events-auto">
        <ul className="flex flex-col gap-4">
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="group flex items-center gap-3 text-left py-1"
                >
                  <span
                    className="relative flex h-2.5 w-2.5 items-center justify-center"
                    aria-hidden
                  >
                    <span
                      className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
                        on
                          ? "scale-150 bg-lime"
                          : "bg-ash group-hover:bg-bone-dim"
                      }`}
                    />
                    {on && (
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-lime opacity-40" />
                    )}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                      on
                        ? "text-bone font-semibold"
                        : "text-ash group-hover:text-bone-dim"
                    }`}
                  >
                    <span className="text-lime">{n.num}</span>{" "}
                    <span className="inline-block max-w-0 overflow-hidden align-middle opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100">
                      {n.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-void/98 p-8 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="pt-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-lime mb-6">
            Navigation Index
          </p>
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="flex items-baseline gap-4 py-2 text-left group border-b border-white/5"
              >
                <span className="font-mono text-xs text-lime">{n.num}</span>
                <span
                  className="text-3xl font-bold tracking-tight text-bone group-hover:text-lime transition-colors"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {n.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile bottom actions */}
        <div className="space-y-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              openResumeModal();
              setOpen(false);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime py-3 font-mono text-xs font-bold uppercase tracking-wider text-void"
          >
            <FileText className="h-4 w-4" />
            View ATS Resume / CV
          </button>

          <div className="flex items-center justify-around font-mono text-xs text-bone-dim pt-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-lime"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-lime"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.links.email}
              className="flex items-center gap-1.5 hover:text-lime"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
