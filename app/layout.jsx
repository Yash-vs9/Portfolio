import "./globals.css";
import {
  Bricolage_Grotesque,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Yash Vardhan Shukla — Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer. Java/Spring Boot, Python/FastAPI, Next.js, and AI agent systems (LangGraph, MCP).",
  metadataBase: new URL("https://yash.vercel.app"),
  openGraph: {
    title: "Yash Vardhan Shukla — Full Stack & AI Engineer",
    description:
      "Java/Spring Boot, Python/FastAPI, Next.js, and AI agent systems.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${space.variable} ${jetbrains.variable} grain`}
        style={{
          fontFamily: "var(--font-space), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
