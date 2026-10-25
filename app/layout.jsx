import "./globals.css";

export const metadata = {
  title: "Yash Vardhan Shukla | Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer. Java/Spring Boot, Python/FastAPI, Next.js, and AI agent systems (LangGraph, MCP).",
  keywords: [
    "Yash Vardhan Shukla",
    "Full Stack Engineer",
    "AI Engineer",
    "Spring Boot",
    "FastAPI",
    "LangGraph",
    "MCP",
    "Next.js",
  ],
  authors: [{ name: "Yash Vardhan Shukla", url: "https://github.com/Yash-vs9" }],
  creator: "Yash Vardhan Shukla",
  metadataBase: new URL("https://yash-vs9.github.io/Portfolio"),
  openGraph: {
    title: "Yash Vardhan Shukla | Full Stack & AI Engineer",
    description:
      "Java/Spring Boot, Python/FastAPI, Next.js, and AI agent systems.",
    url: "https://yash-vs9.github.io/Portfolio",
    siteName: "Yash Vardhan Shukla Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Vardhan Shukla | Full Stack & AI Engineer",
    description:
      "Java/Spring Boot, Python/FastAPI, Next.js, and AI agent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Vardhan Shukla",
    jobTitle: "Full Stack & AI Engineer",
    url: "https://github.com/Yash-vs9",
    sameAs: [
      "https://github.com/Yash-vs9",
      "https://www.linkedin.com/in/yash-vardhan-shukla-b0a71331b/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Zakir Husain College of Engineering and Technology, AMU",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "LangGraph",
      "FastMCP",
      "RAG",
      "AWS",
      "Docker",
      "React",
      "Next.js",
    ],
  };

  const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}else{document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}}catch(e){}})();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-white transition-colors duration-150">
        {children}
      </body>
    </html>
  );
}
