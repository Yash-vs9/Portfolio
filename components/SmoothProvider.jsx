"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { view } from "@/lib/store";

// Sets up Lenis smooth scroll (skipped for reduced-motion) and feeds the
// shared `view` store from pointer + scroll events.
export default function SmoothProvider({ children }) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let lenis;
    let raf;

    const setProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      view.scroll = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const loop = (time) => {
        lenis.raf(time);
        setProgress();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } else {
      window.addEventListener("scroll", setProgress, { passive: true });
    }

    const onMove = (e) => {
      view.tmx = (e.clientX / window.innerWidth) * 2 - 1;
      view.tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    setProgress();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", setProgress);
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
