"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import projectsData from "@/data/projectsData";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  const featuredProjects = projectsData.filter(
    (project) => project.featured
  );

  return (
    <SectionContainer id="projects">

      {/* ================= Aurora Background ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[360px]
            w-[360px]
            rounded-full
            bg-cyan-500/15
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-20
            h-[340px]
            w-[340px]
            rounded-full
            bg-fuchsia-500/15
            blur-[120px]
          "
        />
      </div>

      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of AI projects that showcase my experience in LLMs, AI Agent, and Retrieval-Augmented Generation."
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
          >
            <Card
  className="
    group
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-cyan-500/30
    hover:shadow-[0_25px_80px_rgba(34,211,238,0.25)]
  "
>
  {/* ================= Image ================= */}

  <div className="relative h-56 overflow-hidden border-b border-white/10">
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width:1024px) 100vw, 33vw"
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    {/* Gradient Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    {/* Featured Badge */}

    <div className="absolute left-4 top-4 z-20">
      <Badge
        className="
          border
          border-cyan-500/30
          bg-cyan-500/20
          text-cyan-300
          backdrop-blur-xl
        "
      >
        ⭐ Featured
      </Badge>
    </div>

    {/* Ranking */}

    <div
      className="
        absolute
        right-4
        top-4
        z-20
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

    {/* Project Title */}

    <div
      className="
        absolute
        bottom-4
        left-4
        right-4
        z-20
      "
    >
      <h3 className="text-xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-1 text-sm text-white/70">
        {project.category}
      </p>
    </div>

    {/* Shine Effect */}

    <div
      className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        transition-transform
        duration-1000
        group-hover:translate-x-full
      "
    />
    
  </div>

 <CardContent className="flex-1 space-y-6 p-6">

  {/* Category & Status */}

  <div className="flex items-center justify-between">

    <Badge
      variant="secondary"
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-1
      "
    >
      {project.category}
    </Badge>

    <Badge
      className={
        project.status === "Completed"
          ? "border border-green-500/30 bg-green-500/15 text-green-400"
          : "border border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
      }
    >
      {project.status}
    </Badge>

  </div>

  {/* Description */}

  <p className="leading-7 text-muted-foreground">
    {project.description}
  </p>

  {/* Technologies */}

  <div className="flex flex-wrap gap-2">

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
          text-xs
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

  {/* Divider */}

  <div className="border-t border-white/10" />

</CardContent>
<CardFooter className="mt-auto flex gap-3 p-6 pt-0">
  <Link
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      className="
        group
        w-full
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-lg
        hover:shadow-cyan-500/20
      "
    >
      <FaGithub className="mr-2 text-base transition-transform group-hover:rotate-12" />
      GitHub
    </Button>
  </Link>

  {project.demo && (
    <Link
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1"
    >
      <Button
        variant="outline"
        className="
          group
          w-full
          border-white/10
          bg-white/5
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:border-cyan-500/40
          hover:bg-cyan-500/10
          hover:text-cyan-400
        "
      >
        Live Demo
        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </Link>
  )}
</CardFooter>

</Card>

</motion.div>
))}

</div>

</SectionContainer>

);
}