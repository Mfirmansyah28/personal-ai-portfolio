"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import projectsData from "@/data/projectsData";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projectsData.map((p) => p.category))],
    [],
  );

  const filtered = useMemo(() => {
    const kw = search.toLowerCase();
    return projectsData.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(kw) ||
        p.description.toLowerCase().includes(kw) ||
        p.technologies.some((t) => t.toLowerCase().includes(kw));
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  return (
    <section id="projects" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="All AI projects, applications, and experiments."
        />

        {/* Stats */}
        <div className="mb-14 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card">
          {[
            { label: "Total Projects", value: projectsData.length },
            { label: "Completed", value: projectsData.filter((p) => p.status === "Completed").length },
            { label: "Technologies", value: new Set(projectsData.flatMap((p) => p.technologies)).size },
          ].map((s) => (
            <div key={s.label} className="py-6 text-center">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects or technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 pl-9"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-4">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20"
            >
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                {/* Thumbnail */}
                <div className="relative h-44 shrink-0 overflow-hidden rounded-xl border border-border sm:h-36 sm:w-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:640px) 100vw, 224px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute right-3 top-3">
                    <Badge
                      className={`text-xs ${
                        project.status === "Completed"
                          ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-400"
                          : "border-amber-500/30 bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground">{project.category}</span>
                      <h3 className="mt-0.5 font-semibold">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-row gap-2 sm:flex-col">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <FaGithub size={14} />
                      GitHub
                    </Button>
                  </Link>
                  <Link href={`/projects/${project.slug}`}>
                    <Button size="sm" className="w-full gap-2">
                      Details
                      <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-border bg-card py-20 text-center">
              <p className="font-medium">No projects found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a different keyword or category.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => { setSearch(""); setSelectedCategory("All"); }}
              >
                Reset
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
