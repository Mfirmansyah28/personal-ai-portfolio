"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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

  const categories = useMemo(
    () => ["All", ...new Set(projectsData.map((project) => project.category))],
    [],
  );

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

      {/* ================= Statistics ================= */}

      <div className="relative z-10 mb-16 grid gap-6 md:grid-cols-3">
        <Card className="group border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(34,211,238,.20)]">
          <CardContent className="py-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <FaCode className="text-3xl" />
            </div>

            <h2 className="bg-linear-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent">
              {completedProjects}
            </h2>

            <p className="mt-2 text-muted-foreground">Completed Projects</p>
          </CardContent>
        </Card>

        <Card className="group border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_20px_60px_rgba(139,92,246,.20)]">
          <CardContent className="py-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <FaLaptopCode className="text-3xl" />
            </div>

            <h2 className="bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent">
              {totalTechnologies}
            </h2>

            <p className="mt-2 text-muted-foreground">Technologies</p>
          </CardContent>
        </Card>

        <Card className="group border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-500/30 hover:shadow-[0_20px_60px_rgba(217,70,239,.20)]">
          <CardContent className="py-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <FaRobot className="text-3xl" />
            </div>

            <h2 className="bg-linear-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
              {totalProjects}
            </h2>

            <p className="mt-2 text-muted-foreground">AI Projects</p>
          </CardContent>
        </Card>
      </div>

      {/* ================= Search ================= */}

      <div className="mx-auto mb-10 max-w-2xl">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 focus-within:border-cyan-500/40 focus-within:shadow-[0_0_35px_rgba(34,211,238,.20)]">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search AI Projects, Technologies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-14 border-0 bg-transparent pl-14 pr-5 text-base shadow-none focus-visible:ring-0"
          />
        </div>
      </div>

      {/* ================= Filter ================= */}
      <div className="mb-14 flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <motion.div
              key={category}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setSelectedCategory(category)}
                className={`
                  rounded-full
                  px-6
                  py-6
                  font-medium
                  transition-all
                  duration-300

            ${
              active
                ? `
                  border
                  border-cyan-500/40
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-500
                  text-white
                  shadow-[0_10px_30px_rgba(34,211,238,.35)]
                `
                : `
                  border
                  border-white/10
                  bg-white/5
                  text-muted-foreground
                  backdrop-blur-xl
                  hover:border-cyan-500/30
                  hover:bg-cyan-500/10
                  hover:text-cyan-400
                `
            }
          `}
              >
                {category}
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* ================= Project List ================= */}

      <div className="relative z-10 min-h-87 space-y-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Card
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_25px_80px_rgba(34,211,238,.25)]
              "
            >
              <CardContent className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center">
                {/* ================= Thumbnail ================= */}

                <div
                  className="
                    group/image
                    relative
                    h-60
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    transition-all
                    duration-500
                    group-hover:border-cyan-500/40
                    lg:w-85
                    shrink-0
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:1024px)100vw,340px"
                    className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover/image:scale-110
                      group-hover/image:rotate-1
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-linear-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover/image:translate-x-full
                    "
                  />

                  {/* Featured */}

                  <div className="absolute left-4 top-4 flex gap-2">
                    {project.featured && (
                      <Badge
                        className="
                        border-cyan-500/30
                        bg-cyan-500/20
                        text-cyan-300
                        backdrop-blur-xl
                      "
                      >
                        ⭐ Featured
                      </Badge>
                    )}

                    <Badge
                      className="
                      border-white/10
                      bg-black/40
                      text-white
                      backdrop-blur-xl
                    "
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Status */}

                  <div className="absolute right-4 top-4">
                    <Badge
                      className={
                        project.status === "Completed"
                          ? "border-green-500/30 bg-green-500/20 text-green-300"
                          : "border-yellow-500/30 bg-yellow-500/20 text-yellow-300"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Number */}

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      rounded-full
                      bg-black/40
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-xl
                    "
                  >
                    #{index + 1}
                  </div>

                  {/* Title */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3
                      className="
                      text-xl
                      font-bold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300
                    "
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* ================= Content ================= */}

                <div className="flex-1 space-y-6">
                  <h2
                    className="
                    text-3xl
                    font-bold
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-cyan-400
                  "
                  >
                    {project.title}
                  </h2>

                  <p className="leading-8 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="
                        rounded-full
                        border-white/10
                        bg-white/5
                        px-3
                        py-1
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-500/40
                        hover:bg-cyan-500/10
                        hover:text-cyan-400
                      "
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* ================= Button ================= */}

                <div className="shrink-0">
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      className="
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-cyan-500/20
                    "
                    >
                      View Case Study
                      <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {/* ================= Empty State ================= */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
            >
              <CardContent className="py-20 text-center">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="
                      mx-auto
                      mb-8
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-400
                    "
                  >
                    <FaSearch className="text-5xl" />
                  </div>
                </motion.div>

                <h2 className="text-3xl font-bold">No Projects Found</h2>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-lg
                    leading-8
                    text-muted-foreground
                  "
                >
                  We couldnt find any project matching your search keyword or
                  selected category. Try another keyword or reset the filter.
                </p>

                <Button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="
                    mt-8
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                  "
                >
                  Reset Filter
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* ================= View All ================= */}

      <div className="mt-14 flex justify-center">
        <Link href="/projects">
          <Button
            variant="outline"
            className="
              rounded-full
              px-8
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-500/40
              hover:bg-cyan-500/10
              hover:text-cyan-400
            "
          >
            View All Projects
            <FaArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>

      {/* ================= CTA ================= */}

      <div
        className="
          relative
          mt-24
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          px-8
          py-20
          text-center
          backdrop-blur-xl
        "
      >
        {/* Aurora */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-32
              top-10
              h-72
              w-72
              rounded-full
              bg-cyan-500/20
              blur-[120px]
            "
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-32
              bottom-10
              h-72
              w-72
              rounded-full
              bg-fuchsia-500/20
              blur-[120px]
            "
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-linear-to-r
            from-cyan-400
            via-sky-400
            to-fuchsia-400
            bg-clip-text
            text-4xl
            font-bold
            text-transparent
            md:text-5xl
          "
        >
          Lets Build AI Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            leading-8
            text-muted-foreground
          "
        >
          Interested in building AI Chatbots, AI Agents, Enterprise RAG Systems,
          or modern AI applications? Lets collaborate and create impactful AI
          solutions together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-10"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="
                rounded-full
                px-10
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-cyan-500/30
              "
            >
              Contact Me
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
