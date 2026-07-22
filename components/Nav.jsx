"use client";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

// Left-rail index navigation — a vertical spine with numbered nodes and a
// marker that tracks the active section. Replaces the flat top navbar.
export default function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

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
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop left rail */}
      <nav className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col gap-6">
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="group flex items-center gap-3"
                >
                  <span
                    className="relative flex h-3 w-3 items-center justify-center"
                    aria-hidden
                  >
                    <span
                      className={`h-[7px] w-[7px] rounded-full transition-all duration-300 ${
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
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                      on
                        ? "text-bone"
                        : "text-ash group-hover:text-bone-dim"
                    }`}
                  >
                    <span className="text-lime">{n.num}</span>{" "}
                    <span
                      className="inline-block max-w-0 overflow-hidden align-middle opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100"
                    >
                      {n.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed right-5 top-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-void-soft/70 backdrop-blur lg:hidden"
        aria-label="Menu"
      >
        <div className="flex flex-col gap-[5px]">
          <span
            className={`h-[1.5px] w-5 bg-bone transition-all ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-bone transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-bone transition-all ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[65] flex flex-col justify-center gap-2 bg-void/95 px-8 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => go(n.id)}
            className="flex items-baseline gap-4 py-2 text-left"
          >
            <span className="font-mono text-xs text-lime">{n.num}</span>
            <span
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              {n.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
