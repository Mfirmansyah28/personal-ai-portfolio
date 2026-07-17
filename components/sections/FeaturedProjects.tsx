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
        <SectionContainer id= "featured-projects">
            <SectionHeading
                title= "Featured Projects"
                subtitle= "A selection of AI projects that showcase my experience in LLMs, AI Agent, and Retrieval-Augmented Generation. "
            />
            <div className="grid gap-8 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 0}}
                        whileInView={{ opacity: 0, y: 30}}
                        viewport={{ once: true}}
                        transition={{ duration: .5, delay: index * .1}}
                        whileHover={{ y: -6}}
                    >
                        <Card className="fex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <CardContent className="flex-1 space-y-5 p-6">
                                <div className="flex items-center justify-between">
                                    <Badge
                                        variant={
                                            project.status === "Completed"
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {project.status}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-bold">
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
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex gap-3">
                                <Button>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </Link>
                                </Button>

                                {project.demo && (
                                    <Button
                                        variant="outline"
                                    >
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                        >
                                            Live Demo
                                            <FaArrowRight />
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
}