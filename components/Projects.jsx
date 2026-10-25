"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Systems & DevTools", "Agentic AI", "ML & Data"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="space-y-6">
      <SectionHead title="Selected Work" sub="Systems, compilers, agent frameworks & tools" />

      {/* Clean category pills */}
      <div className="flex flex-wrap items-center gap-1.5 pb-2">
        {categories.map((cat) => {
          const on = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded px-2.5 py-1 text-xs font-mono transition-colors ${
                on
                  ? "bg-zinc-100 text-zinc-950 font-medium"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
