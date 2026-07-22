"use client";
import { useEffect, useState } from "react";

// Detects device capability so the 3D scene degrades gracefully.
export function useCapabilities() {
  const [caps, setCaps] = useState({
    ready: false,
    webgl: true,
    mobile: false,
    reduced: false,
    lowPower: false,
  });

  useEffect(() => {
    let webgl = true;
    try {
      const c = document.createElement("canvas");
      webgl = !!(
        c.getContext("webgl2") ||
        c.getContext("webgl") ||
        c.getContext("experimental-webgl")
      );
    } catch {
      webgl = false;
    }

    const mobile = window.matchMedia("(max-width: 820px)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cores =
      typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 8 : 8;
    const lowPower = cores <= 4;

    setCaps({ ready: true, webgl, mobile, reduced, lowPower });
  }, []);

  return caps;
}
