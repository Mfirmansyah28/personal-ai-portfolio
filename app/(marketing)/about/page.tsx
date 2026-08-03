import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about M. Firmansyah — AI Engineer specializing in LLMs, AI Agents, and Enterprise RAG.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Skills />
      <Timeline />
    </main>
  );
}
