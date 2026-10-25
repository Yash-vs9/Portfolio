"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Systems & DevTools", "Agentic AI", "ML & Data"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-24 sm:px-10 lg:px-20 lg:py-32"
    >
      <SectionHead
        num="03"
        title="Featured Work"
        sub="Architecture, tools & production systems"
      />

      {/* Category filter tabs */}
      <Reveal delay={0.05}>
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <span className="mr-3 font-mono text-xs uppercase tracking-wider text-ash">
            Filter:
          </span>
          {categories.map((cat) => {
            const on = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  on
                    ? "bg-lime font-bold text-void shadow-sm shadow-lime/20"
                    : "border border-white/10 bg-white/[0.02] text-bone-dim hover:border-white/20 hover:text-bone"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Project Cards List */}
      <div className="flex flex-col gap-10 lg:gap-14">
        {filteredProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} y={30}>
            <div className={i % 2 === 1 ? "lg:ml-[4%]" : "lg:mr-[4%]"}>
              <ProjectCard project={p} i={i} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
