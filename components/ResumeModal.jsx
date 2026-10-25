"use client";
import { useEffect, useState } from "react";
import { useResumeModal } from "@/lib/modalStore";
import { profile, experience, projects, skills, extras } from "@/lib/data";
import {
  PrinterIcon,
  CopyIcon,
  CheckIcon,
  XIcon,
  DownloadIcon,
  FileTextIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/Icons";

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
      `• ${exp.company} (${exp.role}, ${exp.period})\n  ${exp.points.map((p) => `  - ${p}`).join("\n")}`
  )
  .join("\n\n")}

FEATURED PROJECTS:
${projects
  .map(
    (proj) =>
      `• ${proj.name} (${proj.tag})\n  ${proj.detail}\n  Tech: ${proj.stack.join(", ")}\n  Repo: ${proj.repo}${proj.live ? ` | Live: ${proj.live}` : ""}`
  )
  .join("\n\n")}

HONORS & RECOGNITION:
${extras.map((x) => `• ${x.title}: ${x.line}`).join("\n")}
`.trim();

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(plainTextResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={close}
      />

      {/* modal box */}
      <div className="relative z-10 flex h-full max-h-[90vh] w-full max-w-3xl flex-col rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
        {/* toolbar */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <FileTextIcon className="h-4 w-4 text-zinc-400" />
            <span className="text-xs font-semibold text-zinc-200">
              Yash Vardhan Shukla: Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <PrinterIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">TXT</span>
            </button>
            <button
              onClick={close}
              className="ml-2 flex h-7 w-7 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-100 transition-colors"
              aria-label="Close"
            >
              <XIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* resume body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-zinc-200 resume-print-area space-y-6 text-xs sm:text-[13px]">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-4">
            <h1 className="text-xl font-bold tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="text-xs text-zinc-400 mt-0.5">
              {profile.role} • {profile.education.school}
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <MailIcon className="h-3 w-3" /> {profile.links.rawEmail}
              </span>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-zinc-200"
              >
                <GithubIcon className="h-3 w-3" /> github.com/{profile.links.githubUser}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-zinc-200"
              >
                <LinkedinIcon className="h-3 w-3" /> {profile.links.linkedinUser}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono border-b border-zinc-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-zinc-200">
                {profile.education.school}
              </span>
              <span className="font-mono text-xs text-zinc-400">
                2022 to 2026
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              {profile.education.degree}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono border-b border-zinc-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              {skills.map((cat) => (
                <div key={cat.label}>
                  <span className="font-semibold text-zinc-300">{cat.label}: </span>
                  <span className="text-zinc-400">{cat.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono border-b border-zinc-800 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={job.company} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-zinc-200">
                      {job.role} <span className="text-zinc-400 font-normal">@ {job.company}</span>
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-400 pl-1">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-zinc-400">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono border-b border-zinc-800 pb-1 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-zinc-200">
                      {proj.name} <span className="text-zinc-400 font-normal">({proj.tag})</span>
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {proj.stack.slice(0, 3).join(", ")}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    {proj.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Extras */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono border-b border-zinc-800 pb-1 mb-2">
              Honors & Activities
            </h2>
            <div className="space-y-1.5 text-xs">
              {extras.map((x) => (
                <div key={x.title} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-zinc-300">{x.title}: </span>
                    <span className="text-zinc-400">{x.line}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
