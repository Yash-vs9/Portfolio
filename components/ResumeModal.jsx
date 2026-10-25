"use client";
import { useEffect, useState } from "react";
import { useResumeModal } from "@/lib/modalStore";
import { profile, experience, projects, skills, achievements } from "@/lib/data";
import {
  Printer,
  Copy,
  Check,
  X,
  ExternalLink,
  Download,
  FileText,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ResumeModal() {
  const { isOpen, close } = useResumeModal();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
YASH VARDHAN SHUKLA
Full Stack & AI Systems Engineer
Email: ${profile.links.rawEmail} | GitHub: ${profile.links.github} | LinkedIn: ${profile.links.linkedin}
Education: B.Tech Computer Science & Engineering (Class of 2026), ZHCET, AMU

TECHNICAL SKILLS:
${skills.map((s) => `• ${s.label}: ${s.items.join(", ")}`).join("\n")}

PROFESSIONAL EXPERIENCE:
${experience
  .map(
    (exp) =>
      `• ${exp.company} — ${exp.role} (${exp.period})\n  ${exp.points.map((p) => `  - ${p}`).join("\n")}`
  )
  .join("\n\n")}

FEATURED PROJECTS:
${projects
  .map(
    (proj) =>
      `• ${proj.name} (${proj.tag})\n  ${proj.detail}\n  Tech: ${proj.stack.join(", ")}\n  Repo: ${proj.repo}${proj.live ? ` | Live: ${proj.live}` : ""}`
  )
  .join("\n\n")}

HONORS & CERTIFICATIONS:
${achievements.map((ach) => `• ${ach.title} (${ach.org}): ${ach.desc}`).join("\n")}
`.trim();

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(plainTextResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([plainTextResume], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Yash_Vardhan_Shukla_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10">
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-void/80 backdrop-blur-md transition-opacity"
        onClick={close}
      />

      {/* modal box */}
      <div className="relative z-10 flex h-full max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl border border-white/15 bg-void-soft shadow-2xl overflow-hidden">
        {/* header toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-void/90 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime/10 text-lime border border-lime/20">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-bone">
                Yash Vardhan Shukla — Resume / CV
              </h2>
              <p className="text-xs font-mono text-bone-dim">
                ATS-Optimized • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-bone hover:border-lime hover:bg-lime/10 hover:text-lime transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-bone hover:border-lime hover:bg-lime/10 hover:text-lime transition-colors"
              title="Copy plain text for job applications"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-lime" />
                  <span className="text-lime">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-bone hover:border-lime hover:bg-lime/10 hover:text-lime transition-colors"
              title="Download text resume"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">TXT</span>
            </button>
            <button
              onClick={close}
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-bone-dim hover:border-white/30 hover:text-bone transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* printable content view */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-bone bg-[#0d0d10] resume-print-area">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-bone sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-semibold text-lime">
                {profile.role}
              </p>
              <p className="mt-1 text-xs text-bone-dim">
                {profile.education.degree} • {profile.education.school}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-xs font-mono text-bone-dim sm:mt-0 sm:text-right">
              <a
                href={profile.links.email}
                className="hover:text-lime transition-colors flex items-center gap-1.5 sm:justify-end"
              >
                <Mail className="h-3 w-3" /> {profile.links.rawEmail}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime transition-colors flex items-center gap-1.5 sm:justify-end"
              >
                <LinkedinIcon className="h-3 w-3" /> {profile.links.linkedinUser}
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime transition-colors flex items-center gap-1.5 sm:justify-end"
              >
                <GithubIcon className="h-3 w-3" /> github.com/{profile.links.githubUser}
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime border-b border-white/10 pb-1.5 mb-3">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm">
              <div>
                <span className="font-bold text-bone">
                  {profile.education.school}
                </span>
                <span className="text-bone-dim"> — {profile.education.degree}</span>
              </div>
              <span className="font-mono text-xs text-bone-dim">
                2022 – 2026 (Expected)
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime border-b border-white/10 pb-1.5 mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {skills.map((cat) => (
                <div key={cat.label} className="leading-relaxed">
                  <span className="font-bold text-bone">{cat.label}: </span>
                  <span className="text-bone-dim">{cat.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime border-b border-white/10 pb-1.5 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="font-bold text-sm text-bone">
                        {job.role}
                      </span>
                      <span className="text-lime"> @ {job.company}</span>
                    </div>
                    <span className="font-mono text-xs text-bone-dim">
                      {job.period} • {job.location}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-bone-dim">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-lime mt-0.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-bone-dim border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mt-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime border-b border-white/10 pb-1.5 mb-4">
              Featured Engineering Projects
            </h3>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-bone">
                        {proj.name}
                      </span>
                      <span className="font-mono text-xs text-bone-dim">
                        — {proj.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-lime">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          Live Demo <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {proj.repo && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1 text-bone-dim hover:text-lime"
                        >
                          GitHub <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-bone-dim leading-relaxed">
                    {proj.detail}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-bone-dim">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-lime mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-bone-dim border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="mt-6 pb-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime border-b border-white/10 pb-1.5 mb-3">
              Honors, Leadership & Certifications
            </h3>
            <div className="space-y-2 text-xs">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-bone">{ach.title}</span>
                    <span className="text-bone-dim"> ({ach.org})</span>
                    <p className="text-[11px] text-bone-dim/80">{ach.desc}</p>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-lime shrink-0">
                    {ach.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
