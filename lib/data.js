// Central verified portfolio data for Yash Vardhan Shukla

export const profile = {
  name: "Yash Vardhan Shukla",
  role: "Full Stack & AI Systems Engineer",
  tagline: "Building resilient distributed backends & autonomous AI agent architectures.",
  status: "Available for SWE & AI Roles",
  location: "India • Open to Global & Remote Opportunities",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Zakir Husain College of Engineering & Technology (ZHCET), AMU",
    year: "3rd Year (Class of 2026)",
  },
  meta: "ZHCET • Class of 2026",
  links: {
    github: "https://github.com/Yash-vs9",
    githubUser: "Yash-vs9",
    email: "mailto:lakkyshukla74339@gmail.com",
    rawEmail: "lakkyshukla74339@gmail.com",
    linkedin: "https://www.linkedin.com/in/yash-vardhan-shukla-b0a71331b/",
    linkedinUser: "yash-vardhan-shukla",
  },
  summary: [
    "3rd-year CS engineer with production experience in Java/Spring Boot and Python/FastAPI.",
    "Specialized in autonomous multi-agent workflows (LangGraph, FastMCP), hybrid RAG pipelines, and cloud-native infrastructure on AWS.",
  ],
};

export const heroStats = [
  { value: "4", label: "Production & Intern Roles" },
  { value: "2x", label: "Hackathon Champion ($1.4k+ Won)" },
  { value: "15+", label: "Microservices & Tools Shipped" },
  { value: "99.9%", label: "Deployment Uptime on AWS" },
];

export const about = {
  lead: "I engineer the backend that holds systems up — and the AI layer that makes them autonomous.",
  body: [
    "Java and Spring Boot taught me architectural discipline, type safety, and how real enterprise systems handle concurrency. Python, FastAPI, and agentic workflows — LangGraph, FastMCP, and hybrid retrieval systems that actually work in production — are where I push boundaries today.",
    "I care deeply about the unglamorous engineering fundamentals: infrastructure that survives sudden restarts, zero-downtime CI/CD deployment pipelines, automated Nginx reverse proxying with SSL termination, and latency-optimized APIs.",
    "Recognized as a 2x hackathon winner and active Google Developer Groups on Campus (GDGC) web engineer, I combine rapid product execution with deep technical rigor from low-level JVM internals to cloud orchestration.",
  ],
  now: "Shipping production cloud infra & multi-agent architectures.",
  stats: [
    { k: "4", v: "Internships & Roles" },
    { k: "2x", v: "Hackathon Victories" },
    { k: "1,780+", v: "Dataset Records Curated" },
    { k: "100%", v: "Commitment to Code Quality" },
  ],
  pillars: [
    {
      title: "Resilient Backend Systems",
      desc: "Deep knowledge of JVM execution models, Spring Security filter chains, thread concurrency, and high-throughput async Python/FastAPI services.",
    },
    {
      title: "Agentic AI & Retrieval (RAG)",
      desc: "Building multi-agent state machines with LangGraph, Model Context Protocol (FastMCP) servers, and hybrid BM25 + semantic vector search with fusion ranking.",
    },
    {
      title: "DevOps & Cloud-Native Infra",
      desc: "Hands-on experience orchestrating multi-instance AWS EC2 environments, Nginx reverse proxies, Let's Encrypt SSL, PM2 process daemons, and GitHub Actions CI/CD.",
    },
  ],
};

export const nav = [
  { id: "hero", label: "Overview", num: "00" },
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Work", num: "03" },
  { id: "skills", label: "Stack", num: "04" },
  { id: "achievements", label: "Honors", num: "05" },
  { id: "resume", label: "Resume", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];

export const experience = [
  {
    company: "ENGINPILOT",
    role: "Full Stack & AI Engineer Intern",
    period: "Jul 2024 – Present",
    type: "Internship",
    location: "Remote",
    overview:
      "Spearheading backend microservice architecture and production AWS cloud deployment for AI-driven platform operations.",
    points: [
      "Architected backend microservices in Python/FastAPI and Java/Spring Boot handling concurrent core platform requests.",
      "Engineered multi-EC2 AWS production architecture across two dedicated instances coordinating FastAPI, a Node.js asset-synchronization worker, Next.js frontend, and PCPE machine learning service.",
      "Configured robust Nginx reverse proxy with automated Let's Encrypt SSL/TLS renewal; implemented PM2 process management with systemd persistence across server restarts.",
      "Established automated GitHub Actions CI/CD pipelines for automated code linting, test suites, and remote SSH automated deployments.",
    ],
    stack: ["FastAPI", "Spring Boot", "AWS EC2", "Nginx", "PM2", "GitHub Actions", "Docker", "Next.js"],
  },
  {
    company: "TSAR IT Pvt Ltd",
    role: "Software Engineering Intern",
    period: "2 Months",
    type: "Internship",
    location: "On-site / Hybrid",
    overview:
      "Engineered full-stack enterprise web solutions and integrated automated voice-AI candidate screening workflows.",
    points: [
      "Built end-to-end full stack modules utilizing Spring Boot RESTful APIs and modern React component architecture.",
      "Integrated Razorpay payment gateway with cryptographically verified server-side webhook signatures for idempotent transaction processing.",
      "Engineered an AI-powered voice interview screening system with real-time audio pipeline handling speech-to-text processing and automated transcript evaluation.",
    ],
    stack: ["Spring Boot 3", "React", "Razorpay API", "WebSockets", "Speech-to-Text AI", "REST APIs"],
  },
  {
    company: "AIForAll",
    role: "AI Engineering Intern",
    period: "3 Months",
    type: "Internship",
    location: "Remote",
    overview:
      "Designed and deployed production-grade Retrieval-Augmented Generation (RAG) search architectures for enterprise knowledge bases.",
    points: [
      "Architected production-grade RAG pipeline leveraging Qdrant vector database for high-dimensional document embedding retrieval.",
      "Implemented hybrid retrieval combining BM25 lexical keyword search with dense semantic vector embeddings, ranked using Reciprocal Rank Fusion (RRF) for 35% higher answer relevance.",
      "Benchmarked document chunking algorithms and cached embedding pipelines, significantly reducing downstream LLM token costs and achieving sub-second retrieval latency.",
    ],
    stack: ["RAG", "Qdrant", "BM25", "Semantic Search", "Reciprocal Rank Fusion", "Python", "Vector Databases"],
  },
];

export const projects = [
  {
    id: "springlens",
    index: "01",
    name: "SpringLens",
    tag: "Visual Architecture & Internals Canvas",
    category: "Systems & DevTools",
    desc: "Interactive visual system design platform & JVM call stack explorer for Spring Boot architecture.",
    detail:
      "Visualizes the complete Spring Boot request lifecycle: Tomcat NIO connector, Servlet filter chain, DelegatingFilterProxy, all 15 core Spring Security filters with ThreadLocal context mutations, and DispatcherServlet routing. Features an interactive IoC container 3-level cache simulator resolving circular dependencies.",
    metrics: "15+ Core Filters mapped • 3-Level Cache Simulator • 100% Interactive Canvas",
    stack: ["Spring Boot 3", "React 19", "TypeScript", "Tailwind CSS", "Vite", "System Design"],
    highlights: [
      "Tomcat NIO Connector to DispatcherServlet step-by-step trace",
      "15 Canonical Spring Security filter execution flow with ThreadLocal state",
      "DefaultListableBeanFactory 3-level cache simulator for circular dependency resolution",
      "Dual View Modes (LOD): High-Level Topology vs. Low-Level JVM Call Stacks",
    ],
    tools: ["Tomcat NIO", "Spring Security", "IoC Container", "JVM Stack", "Interactive SVG"],
    repo: "https://github.com/Yash-vs9/springboot-architecture-canvas",
    live: "https://yash-vs9.github.io/springboot-architecture-canvas/",
    accent: "lime",
  },
  {
    id: "codeguard",
    index: "02",
    name: "CodeGuard",
    tag: "Multi-Agent Code Intelligence MCP",
    category: "Agentic AI",
    desc: "Fan-out / fan-in multi-agent code review system packaged as a FastMCP server for Claude Desktop.",
    detail:
      "Orchestrates parallel specialized autonomous agents using LangGraph: Security Vulnerability Agent, Logic & Edge Case Agent, and Code Quality/Style Agent. Synthesizes individual evaluations via a fan-in aggregator node into structured, actionable pull request reviews. Seamlessly connects to Claude Desktop via the Model Context Protocol (MCP).",
    metrics: "3x Parallel Agent Fan-Out • FastMCP Protocol • Sub-5s AST & Logic Review",
    stack: ["LangGraph", "FastMCP", "Python", "Claude API", "AST Parsing", "Git Integration"],
    highlights: [
      "Parallel Fan-Out to Security, Logic, and Performance specialized agents",
      "LangGraph cyclic state graph with conditional validation checkpoints",
      "Model Context Protocol (MCP) server integration directly into Claude Desktop",
      "Structured output synthesis with actionable diff suggestions",
    ],
    tools: ["Security Agent", "Logic Agent", "Quality Agent", "FastMCP", "LangGraph"],
    repo: "https://github.com/Yash-vs9/CodeGuard",
    live: null,
    accent: "cyan",
  },
  {
    id: "aria",
    index: "03",
    name: "ARIA",
    tag: "Autonomous Agentic AI Assistant",
    category: "Agentic AI & Full Stack",
    desc: "Agentic assistant with real system tool execution, Spring Boot backend, and React PWA client.",
    detail:
      "Engineered an autonomous agentic engine backed by Gemini API and Spring Boot. Features a sandboxed tool-execution router capable of invoking Gmail API, Google Calendar scheduling, local file system manipulation, shell script execution, SERP live web crawling, and long-term vector memory.",
    metrics: "6 Discrete Tool Modules • PWA Offline Ready • Sandboxed Shell Execution",
    stack: ["Spring Boot", "React PWA", "Gemini API", "SERP API", "OAuth 2.0", "Shell Runner"],
    highlights: [
      "Autonomous tool-calling loop with reflection and error recovery",
      "OAuth 2.0 authentication for Gmail and Google Calendar integrations",
      "Spring Boot security sandbox for controlled shell command execution",
      "Persistent agent memory with contextual vector retrieval",
    ],
    tools: ["Gmail API", "Calendar API", "Shell Runner", "SERP Search", "Vector Memory"],
    repo: "https://github.com/Yash-vs9/ARIA",
    live: null,
    accent: "vermilion",
  },
  {
    id: "realval",
    index: "04",
    name: "RealVal India",
    tag: "Real Estate Valuation Engine (AVM)",
    category: "ML & Data Engineering",
    desc: "Pan-India residential valuation pipeline, 1,780+ properties dataset, and Spatial Comparable Market Analysis.",
    detail:
      "End-to-end data engineering pipeline scraping 1,940 listings across 16 major Indian metro hubs. Cleansed and engineered spatial features for 1,782 properties. Trained a Gradient Boosting Regressor (R² = 0.8938, MAPE = 22.8%) with a spatial Comparable Market Analysis (CMA) engine calculating Haversine distance and property spec similarity. Served via FastAPI REST API.",
    metrics: "1,782 Cleaned Listings across 16 Metros • R² = 0.8938 • Sub-50ms API Latency",
    stack: ["Python 3.10+", "FastAPI", "Scikit-Learn", "Pandas", "Spatial CMA", "Haversine"],
    highlights: [
      "Automated web-scraping & outlier cleaning pipeline across 16 metropolitan real estate markets",
      "Spatial CMA engine matching nearby comparable properties by Haversine distance",
      "Gradient Boosting valuation model with confidence intervals and distress bands",
      "FastAPI microservice serving live property valuations and market density reports",
    ],
    tools: ["Gradient Boosting", "Spatial CMA", "FastAPI", "Feature Engineering", "Pandas"],
    repo: "https://github.com/Yash-vs9",
    live: null,
    accent: "amber",
  },
];

export const skills = [
  {
    label: "Backend & Systems",
    items: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Python",
      "FastAPI",
      "RESTful APIs",
      "Microservices",
      "JVM Internals",
    ],
  },
  {
    label: "AI, Agents & RAG",
    items: [
      "LangGraph",
      "FastMCP / Model Context Protocol",
      "Hybrid RAG (BM25 + Semantic)",
      "Qdrant Vector DB",
      "ChromaDB",
      "Gemini API",
      "Claude API",
      "Agent Tool Use",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "Nginx Reverse Proxy",
      "GitHub Actions (CI/CD)",
      "PM2 Process Daemon",
      "systemd & Linux",
      "Let's Encrypt SSL",
    ],
  },
  {
    label: "Databases & Messaging",
    items: [
      "PostgreSQL / asyncpg",
      "MySQL",
      "Redis Caching",
      "Apache Kafka",
      "Vector Embeddings",
    ],
  },
  {
    label: "Frontend Engineering",
    items: [
      "React 19",
      "Next.js 15",
      "JavaScript (ESNext)",
      "Tailwind CSS",
      "Three.js / React Three Fiber",
      "Framer Motion",
      "PWA Architecture",
    ],
  },
  {
    label: "Certifications & Core CS",
    items: [
      "OCI 2025 AI Foundations Certified",
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "System Design & Architecture",
      "Concurrency & Thread Safety",
    ],
  },
];

export const achievements = [
  {
    title: "Vanilla Web Hackathon — 1st Place Winner",
    org: "Hackathon Raptors",
    prize: "$1,000 Cash Prize",
    tag: "Hackathon Champion",
    desc: "Secured 1st place among dozens of engineering teams for building an ultra-fast, high-performance web experience leveraging zero framework bloat and advanced DOM architecture.",
    highlight: "Winner ($1,000)",
  },
  {
    title: "DX Ray Hackathon — 2nd Place Winner",
    org: "Hackathon Raptors",
    prize: "$400 Cash Prize",
    tag: "National Runner-Up",
    desc: "Awarded 2nd place in an open national competition for creating innovative developer experience (DX) tooling and observability workflows.",
    highlight: "2nd Place ($400)",
  },
  {
    title: "Google Winter of Code — Winner",
    org: "GDGC, ZHCET",
    prize: "Top Contributor Honor",
    tag: "Open Source Winner",
    desc: "Recognized as a top open-source developer for building core algorithmic modules, reviewing PRs, and maintaining high software engineering standards.",
    highlight: "Hackathon Winner",
  },
  {
    title: "Google Developer Groups on Campus (GDGC)",
    org: "ZHCET Chapter",
    prize: "Core Web Developer",
    tag: "Leadership & Community",
    desc: "Selected as Web Developer for GDGC ZHCET. Contributed to developer workshops, guided peers in modern backend development, and engineered chapter web platforms.",
    highlight: "GDGC Developer",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) 2025",
    org: "Oracle University",
    prize: "AI Foundations Certified",
    tag: "Professional Certification",
    desc: "Certified in Oracle Cloud AI Foundations, demonstrating competency in enterprise cloud infrastructure, AI/ML workload deployment, and cloud security architectures.",
    highlight: "Certified AI Foundations",
  },
];

export const whyHireMe = [
  {
    q: "Why should an engineering leader or founder hire Yash?",
    a: "Full-stack versatility backed by true backend rigor. Unlike engineers who only assemble frontend templates or call basic LLM APIs, I understand the plumbing: JVM call stacks, Spring Security filters, multi-instance AWS cloud deployments, and stateful multi-agent systems.",
  },
  {
    q: "What is his work availability?",
    a: "Currently a 3rd-year CS undergraduate at ZHCET, AMU (graduating 2026). Available for Full-Time Software Engineering & AI Roles starting Summer 2026, as well as high-impact remote internships and contract engineering immediately.",
  },
  {
    q: "Can he handle production infrastructure independently?",
    a: "Yes. At ENGINPILOT, I independently deployed multi-EC2 AWS microservice environments with Nginx reverse proxying, Let's Encrypt SSL, PM2 process persistence, and GitHub Actions automated CI/CD pipelines.",
  },
];
