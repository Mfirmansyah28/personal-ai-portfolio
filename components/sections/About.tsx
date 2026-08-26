"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import profile from "@/data/profile";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const stats = [
  { value: "3+", label: "AI Projects" },
  { value: "25+", label: "Technologies" },
  { value: "10+", label: "AI Models" },
  { value: "2025", label: "Started" },
];

const focus = [
  "Large Language Models (LLMs)",
  "AI Agent Systems",
  "Enterprise RAG",
  "FastAPI & Python",
  "Next.js & TypeScript",
];

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          title="About"
          subtitle="Building intelligent systems from the ground up."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={560}
                height={420}
                className="w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hi, Im {profile.name}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I specialize in building production-ready AI applications — from
                conversational chatbots to complex multi-agent pipelines and
                enterprise knowledge retrieval systems.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Focus Areas
              </h4>
              <ul className="space-y-2">
                {focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="h-1 w-1 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="mt-1 font-semibold">Informatics Engineering</p>
                <p className="mt-0.5 text-sm text-muted-foreground">Bachelors Degree</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="mt-1 font-semibold">{profile.location}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{profile.availability}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/contact">
                <Button className="rounded-full px-6 cursor-pointer">
                  Get in Touch
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href={profile.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 cursor-pointer">
                  GitHub
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
