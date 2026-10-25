// Reactive theme store supporting dark & light mode with persistence
import { useState, useEffect } from "react";

let themeListeners = [];
let currentTheme = "dark"; // Default fallback

function applyTheme(next) {
  currentTheme = next;
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  themeListeners.forEach((fn) => fn(next));
}

export function toggleTheme() {
  const next = currentTheme === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}

export function setTheme(theme) {
  if (theme === "dark" || theme === "light") {
    applyTheme(theme);
  }
}

export function useTheme() {
  const [theme, setLocalTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return currentTheme;
  });

  useEffect(() => {
    // Sync initial state from DOM
    if (typeof document !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      currentTheme = isDark ? "dark" : "light";
      setLocalTheme(currentTheme);
    }

    const handler = (newTheme) => setLocalTheme(newTheme);
    themeListeners.push(handler);
    return () => {
      themeListeners = themeListeners.filter((fn) => fn !== handler);
    };
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
  };
}
