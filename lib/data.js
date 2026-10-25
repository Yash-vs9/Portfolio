// Central portfolio content for Yash Vardhan Shukla

export const profile = {
  name: "Yash Vardhan Shukla",
  role: "Full Stack & AI Engineer",
  intro: [
    "3rd-year CS student. Java/Spring Boot at the core,",
    "now building across Python/FastAPI, Next.js,",
    "and AI agent systems (LangGraph, MCP).",
  ],
  meta: "ZHCET",
  education: {
    school: "ZHCET",
    degree: "B.Tech in Computer Science (3rd Year)",
  },
  links: {
    github: "https://github.com/Yash-vs9",
    githubUser: "Yash-vs9",
    email: "mailto:lakkyshukla74339@gmail.com",
    rawEmail: "lakkyshukla74339@gmail.com",
    linkedin: "https://www.linkedin.com/in/yash-vardhan-shukla-b0a71331b/",
    linkedinUser: "yash-vardhan-shukla",
  },
};

export const about = {
  lead: "I build the backend that holds things up, and the AI layer that makes it smart.",
  body: [
    "Java and Spring Boot taught me discipline. FastAPI, Next.js, and agent systems (LangGraph, MCP, retrieval that actually works) are where I spend my time now.",
    "I care about the unglamorous parts: infra that survives a reboot, deploys that don't fall over, pipelines that just run.",
    "Full-stack by range, backend by instinct, AI by obsession.",
  ],
  now: "Currently shipping production infra & AI agents at ENGINPILOT.",
  stats: [
    { k: "2", v: "Hackathon wins" },
    { k: "2", v: "Internships" },
    { k: "20+", v: "Technologies" },
    { k: "∞", v: "Curiosity" },
  ],
};

export const nav = [
  { id: "hero", label: "Index" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "extras", label: "More" },
];

export const experience = [
  {
    company: "ENGINPILOT",
    role: "Full Stack & AI Engineer: Intern",
    period: "Jul 2024 to Present",
    points: [
      "Backend infra in Python/FastAPI and Spring Boot.",
      "Multi-EC2 production deploy across two instances: FastAPI, a Node asset-sync service, Next.js frontend, and a PCPE ML service.",
      "Nginx reverse proxy + Let's Encrypt SSL; PM2 process management with reboot persistence.",
      "GitHub Actions CI/CD.",
    ],
    stack: ["FastAPI", "Spring Boot", "AWS EC2", "Nginx", "PM2", "CI/CD"],
  },
  {
    company: "AIForAll",
    role: "AI Engineering: Intern",
    period: "3 months",
    points: [
      "Built a production-grade RAG system: Qdrant vector store, hybrid retrieval (BM25 + semantic search) with fusion ranking.",
    ],
    stack: ["RAG", "Qdrant", "BM25", "Semantic Search", "Fusion Ranking"],
  },
];

export const projects = [
  {
    id: "aria",
    index: "01",
    name: "ARIA",
    tag: "Personal AI Assistant",
    desc: "Agentic assistant with real tool access. Spring Boot backend, React PWA client.",
    detail:
      "Integrates Gemini API, SERP, Gmail, Calendar, Files, Shell, and Memory as discrete tool modules the agent can call.",
    stack: ["Spring Boot", "React PWA", "Gemini API", "SERP API"],
    tools: ["Gmail", "Calendar", "Files", "Shell", "Memory"],
    repo: "https://github.com/Yash-vs9/ARIA",
  },
  {
    id: "codeguard",
    index: "02",
    name: "CodeGuard",
    tag: "Multi-Agent Code Review",
    desc: "Fan-out / fan-in review system that plugs straight into Claude Desktop.",
    detail:
      "LangGraph + FastMCP. Fans out to parallel specialized agents (security, logic, quality), then fans back in to one consolidated review. Wrapped as an MCP server.",
    stack: ["LangGraph", "FastMCP", "MCP Server"],
    tools: ["Security", "Logic", "Quality"],
    repo: "https://github.com/Yash-vs9/CodeGuard",
  },
];

export const skills = [
  {
    label: "Languages / Backend",
    items: ["Java", "Spring Boot", "Python", "FastAPI"],
  },
  { label: "Frontend", items: ["React", "Next.js"] },
  {
    label: "AI / Agents",
    items: ["LangGraph", "MCP (FastMCP)", "RAG", "ChromaDB", "Groq", "Gemini API"],
  },
  {
    label: "Infra / DevOps",
    items: ["AWS EC2", "Docker", "Nginx", "GitHub Actions", "PM2", "systemd"],
  },
  {
    label: "Data",
    items: ["PostgreSQL / asyncpg", "MySQL", "Kafka", "Redis"],
  },
  {
    label: "Certifications",
    items: ["Oracle Cloud Infrastructure 2025 AI Foundations"],
  },
];

export const extras = [
  {
    title: "GDGC",
    line: "Google Developer Groups on Campus: web developer.",
  },
  {
    title: "Vanilla Web Hackathon",
    line: "Winner, by Hackathon Raptors ($1000 prize).",
  },
  {
    title: "DX Ray Hackathon",
    line: "2nd place, open competition, by Hackathon Raptors ($400 prize).",
  },
  {
    title: "Google Winter of Code",
    line: "Hackathon winner: GDGC, ZHCET.",
  },
];
