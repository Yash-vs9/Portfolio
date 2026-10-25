"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import { openResumeModal } from "@/lib/modalStore";
import {
  Mail,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
  Send,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const disp = { fontFamily: "var(--font-bricolage)" };
const marqueeWords = [
  "Java 21",
  "Spring Boot 3",
  "Python",
  "FastAPI",
  "LangGraph",
  "FastMCP",
  "Hybrid RAG",
  "AWS EC2",
  "Docker",
  "Next.js 15",
  "Microservices",
  "Qdrant",
  "PostgreSQL",
  "Kafka",
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Full-Time Role");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.rawEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const mailtoUrl = `mailto:${profile.links.rawEmail}?subject=${encodeURIComponent(
    `Opportunity Discussion: ${selectedRole} for Yash Vardhan Shukla`
  )}&body=${encodeURIComponent(
    `Hi Yash,\n\nI came across your portfolio and would love to discuss an opportunity regarding ${selectedRole}...\n\nBest regards,`
  )}`;

  return (
    <footer id="contact" className="relative z-10 overflow-hidden pt-16">
      {/* Marquee Band */}
      <div className="flex select-none whitespace-nowrap border-y border-white/10 bg-void-soft/40 py-4">
        <div className="marquee flex shrink-0">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              style={disp}
              className="mx-6 text-xl font-bold text-ash sm:text-2xl"
            >
              {w}
              <span className="ml-10 text-lime">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Contact & Conversion Area */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Big Headline & Details */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-lime font-bold">
              Let&apos;s build together
            </p>

            <h2
              style={disp}
              className="text-4xl font-extrabold leading-[1.0] tracking-[-0.03em] text-bone sm:text-6xl lg:text-7xl"
            >
              Ready to ship production systems.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone-dim sm:text-lg">
              Whether you are looking to hire a Full Stack & AI Systems Engineer, explore contract engineering, or discuss multi-agent system design — my inbox is open.
            </p>

            {/* Direct Contact Pills */}
            <div className="mt-8 flex flex-col gap-3 font-mono text-xs text-bone">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-lime animate-pulse" />
                <span className="text-bone-dim">Typical response time:</span>
                <span className="text-lime font-bold">Under 12 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ash" />
                <a
                  href={profile.links.email}
                  className="text-bone hover:text-lime transition-colors underline decoration-white/20 underline-offset-4"
                >
                  {profile.links.rawEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Connect Box */}
          <div className="rounded-2xl border border-white/10 bg-void-soft/60 p-6 sm:p-8 backdrop-blur-md">
            <h3
              style={disp}
              className="text-xl font-bold tracking-tight text-bone sm:text-2xl"
            >
              Start a Conversation
            </h3>
            <p className="mt-1 text-xs text-bone-dim">
              Choose your opportunity type to open a pre-filled direct email:
            </p>

            {/* Role Category Selector */}
            <div className="mt-5 grid grid-cols-2 gap-2 font-mono text-xs">
              {[
                "Full-Time Role",
                "AI / Agentic Project",
                "Internship 2026",
                "Advisory / Tech Chat",
              ].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`rounded-xl border px-3 py-2.5 text-center transition-all ${
                    selectedRole === role
                      ? "border-lime bg-lime/10 text-lime font-bold"
                      : "border-white/10 bg-white/[0.02] text-bone-dim hover:border-white/20 hover:text-bone"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Send Mail Action */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoUrl}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-void transition-all hover:bg-white hover:shadow-lg hover:shadow-lime/20"
              >
                <Send className="h-4 w-4" />
                <span>Open Email Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-bone transition-colors hover:border-white/30 hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-lime" />
                    <span className="text-lime">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Resume Callout in Footer Box */}
            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="font-mono text-[11px] text-bone-dim">
                Need an ATS-compliant PDF?
              </span>
              <button
                onClick={() => openResumeModal()}
                className="flex items-center gap-1.5 font-mono text-xs text-lime hover:underline font-semibold"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-bone-dim sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-bone font-bold">{profile.name}</span>
            <span className="text-ash">•</span>
            <span>Class of 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => openResumeModal()}
              className="flex items-center gap-1.5 transition-colors hover:text-lime"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
          </div>

          <span className="text-ash text-[10px]">
            © {new Date().getFullYear()} Yash Vardhan Shukla
          </span>
        </div>
      </div>
    </footer>
  );
}
