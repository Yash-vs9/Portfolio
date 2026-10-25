"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/themeStore";
import { SunIcon, MoonIcon } from "@/components/Icons";

export default function ThemeToggle({ className = "" }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a placeholder of equal size until mounted
  if (!mounted) {
    return (
      <div
        className={`h-7 w-7 rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus:outline-hidden ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <SunIcon className="h-3.5 w-3.5 transition-transform duration-200 rotate-0 hover:rotate-45 text-zinc-300 hover:text-amber-300" />
      ) : (
        <MoonIcon className="h-3.5 w-3.5 transition-transform duration-200 text-zinc-700 hover:text-indigo-600" />
      )}
    </button>
  );
}
