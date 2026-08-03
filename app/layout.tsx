import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://mfirmansyah.vercel.app"),

  title: {
    default: "M. Firmansyah | AI Engineer",
    template: "%s | M. Firmansyah",
  },

  description:
    "AI Engineer specializing in AI Chatbots, AI Agents, Enterprise Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), FastAPI, LangChain, Python, TypeScript, and Next.js.",

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
    url: "https://mfirmansyah.vercel.app",
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "M. Firmansyah",
    jobTitle: "AI Engineer",
    description:
      "AI Engineer specializing in AI Chatbots, AI Agents, Enterprise RAG Systems, Large Language Models (LLMs), FastAPI, LangChain, Python, TypeScript, and Next.js.",
    url: "https://mfirmansyah.vercel.app",
    image: "https://mfirmansyah.vercel.app/images/avatar.jpg",
    email: "mailto:muhammadfirmansyah401@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },

    sameAs: [
      "https://github.com/Mfirmansyah28",
      "https://www.linkedin.com/in/mfirmansyah28/",
    ],

    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "AI Chatbot",
      "AI Agent",
      "Enterprise RAG",
      "LangChain",
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

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