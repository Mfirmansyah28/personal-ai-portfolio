"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaSearch,
  FaCode,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

import projectsData from "@/data/projectsData";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const totalProjects = projectsData.length;

  const completedProjects = projectsData.filter(
    (project) => project.status === "Completed",
  ).length;

  const totalTechnologies = new Set(
    projectsData.flatMap((project) => project.technologies),
  ).size;

  const categories = useMemo(() => {
    return ["All", ...new Set(projectsData.map((project) => project.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(keyword),
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <SectionContainer id="projects">
      {/* ================= Aurora Background ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
              absolute
              -left-40
              top-20
              h-95
              w-95
              rounded-full
              bg-cyan-500/15
              blur-[140px]
            "
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
                absolute
                -right-40
                bottom-20
                h-90
                w-90
                rounded-full
                bg-fuchsia-500/15
                blur-[140px]
              "
        />
      </div>
      <SectionHeading
        title="Projects"
        subtitle="Explore my AI projects, applications, and experiments."
      />

      {/* Statistics */}

      <div className="group border-white/10 bg-white/5 backdrop-blur-x1 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(34, 211, 238, 0.20)]">
        <Card
          className="
                group
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.20)]
              "
        >
          <CardContent className="py-10 text-center">
            <div
              className="
                    mx-auto
                    mb-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
            >
              <FaCode className="text-3xl" />
            </div>

            <h2 className="bg-linear-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent">{completedProjects}</h2>

            <p className="mt-2 text-muted-foreground">Completed Projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-8 text-center">
            <FaLaptopCode className="text-3xl bg-violet-500/10 text-violet-400" />

            <h2 className="text-4xl font-bold">{totalTechnologies}</h2>

            <p className="text-muted-foreground">Technologies</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-8 text-center">
            <FaRobot className="text-3xl bg-fuchsia-500/10 text-fuchsia-400" />

            <h2 className="text-4xl font-bold">{totalProjects}</h2>

            <p className="text-muted-foreground">AI Projects</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}

      <div className="mx-auto mb-10 max-w-2xl">

            <div
              className="
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                focus-within:border-cyan-500/40
                focus-within:shadow-[0_0_35px_rgba(34,211,238,0.20)]
              "
            >
              <FaSearch
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                placeholder="Search AI Projects, Technologies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  h-14
                  border-0
                  bg-transparent
                  pl-14
                  pr-5
                  text-base
                  shadow-none
                  focus-visible:ring-0
                "
              />

            </div>
          </div>

      {/* Filter */}
      <div className="mb-14 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Project List */}

      <div className="relative z-10 space-y-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Card className="transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="bg-yellow-500 text-white">
                        ⭐ Featured
                      </Badge>
                    )}

                    {/* Status */}
                    <Badge
                      variant={
                        project.status === "Completed" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>

                    {/* Category */}
                    <Badge variant="outline">{project.category}</Badge>
                  </div>

                  {/* Description */}
                  <p className="leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex justify-end">
                  <Link href={`/projects/${project.slug}`}>
                    <Button>
                      View Case Study
                      <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Empty State */}

        {filteredProjects.length === 0 && (
          <Card>
            <CardContent className="py-16 text-center">
              <FaSearch className="mx-auto mb-6 text-5xl text-muted-foreground" />

              <h3 className="text-2xl font-semibold">No Projects Found</h3>

              <p className="mt-3 text-muted-foreground">
                No projects match your search or selected category.
              </p>

              <Button
                className="mt-6"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filter
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* View All */}

      <div className="mt-12 flex justify-center">
        <Link href="/projects">
          <Button variant="outline">
            View All Projects
            <FaArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>

      {/* CTA */}

      <div className="mt-20 rounded-2xl border bg-muted/30 p-12 text-center">
        <h2 className="text-4xl font-bold">Lets Build AI Together</h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
          Interested in building AI Chatbots, AI Agents, Enterprise RAG Systems,
          or modern AI applications? Lets collaborate and create impactful AI
          solutions.
        </p>

        <Link href="#contact">
          <Button className="mt-8">Contact Me</Button>
        </Link>
      </div>
    </SectionContainer>
  );
}