import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider }  from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadaata: Metadata = {
  metadataBase: new URL ("https://your-domain.vercel.app"),
  title: {
    default: "M. Firmansyah | AI Engineer",
    template: "%s | M. Firmansyah",
  },

  description: "AI Engineer specializing in AI Chatbots, AI Agents, Enterprise Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), FastAPI, LangChain, and Next.js.",

  keywords: [
    "AI Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM",
    "Large Language Model",
    "LangChain",
    "RAG",
    "Enterprise RAG",
    "AI Agent",
    "OpenAI",
    "OpenRouter",
    "FastAPI",
    "Python",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],

  authors: [
    {
      name: "M. Firmansyah",
    },
  ],
   creator: "M. Firmansyah",

  publisher: "M. Firmansyah",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "M. Firmansyah | AI Engineer",

    description:
      "Building AI Chatbots, AI Agents, Enterprise RAG Systems and modern AI applications.",

    url: "https://your-domain.vercel.app",

    siteName: "M. Firmansyah Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "M. Firmansyah | AI Engineer",

    description:
      "AI Engineer specializing in LLMs, AI Agents, Enterprise RAG and modern AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors position="top-right" />
      </ThemeProvider>
      </body>
    </html>
  );
}