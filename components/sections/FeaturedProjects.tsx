"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

import projectsData from "@/data/projectsData";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="border-b border-border py-24">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            title="Featured Projects"
            subtitle="Selected AI work — LLMs, Agents, and RAG."
          />
          <Link href="/projects" className="mb-14 shrink-0">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              All projects
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <Badge
                    className={`text-xs ${
                      project.status === "Completed"
                        ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-400"
                        : "border-amber-500/30 bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <span className="rounded-md bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-semibold leading-snug">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Github size={14} />
                      GitHub
                    </Button>
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full gap-2">
                        Demo
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
