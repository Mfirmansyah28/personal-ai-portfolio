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
        <SectionContainer id= "projects">

            {/* ================= Aurora Background ================= */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.35, 0.],
                    }}
                    transition={{
                        duration: 10,
                        repeat:Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -left-40
                        top-20
                        h-[360px]
                        w-[360px]
                        rounded-full
                        big-cyan-500/15
                        blur-[120px]"
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
                        blur-[120px]"
                />
            </div>
            <SectionHeading
                title= "Featured Projects"
                subtitle= "A selection of AI projects that showcase my experience in LLMs, AI Agent, and Retrieval-Augmented Generation. "
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: .5, delay: index * .1}}
                        whileHover={{
                             y: -8,
                             scale: 1.02,
                        }}
                    >
                        <Card className="
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
                                    hover:shadow-[0_25px_80px_rgba(34, 211, 238, 0.25)]">
                            <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width:1024px) 100vw, 33vw"
                                    className="
                                        object-cover
                                        transition-all
                                        duration-700
                                        group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="
                                        absolute
                                        inset-0
                                        -translate-x-full
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/20
                                        to-transparent
                                        transition-transform
                                        duration-1000
                                        gorup-hover:translate-x-full"
                                />
                            </div>

                            <CardContent className="flex-1 space-y-5 p-6">
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary">
                                        {project.category}
                                    </Badge>

                                    <Badge className={
                                        project.status === "Completed"
                                            ? "border-green-500/30 bg-green-500/15 text-green-400"
                                            : "border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
                                    }
                                >
                                        {project.status}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-bold leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-7">
                                    {project.description}
                                </p>

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
                                                hover:bprder-cyan-500/40
                                                hover:bg-cyan-500/10
                                                hover:text-cyan-400"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="mt-auto flex gap-3 p-6 pt-0">
                                <Button>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1"
                                    >
                                        <Button className="
                                            w-full
                                            transition-all
                                            duration-300
                                            hover:scale-[1.03]
                                            hover:shadow-lg
                                            hover:shadow-cyan-500/20"
                                        >
                                        <FaGithub className="mr-2"/>
                                            GitHub
                                        </Button>
                                    </Link>
                                </Button>

                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1"
                                    >
                                        <Button variant="outline"
                                                className="
                                                w-full
                                                transition-all
                                                duration-300
                                                hover:scale-[1.03]
                                                hover:shadow-lg
                                                hover:shadow-cyan-500/20"
                                        >
                                            Live Demo
                                            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1"  />
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