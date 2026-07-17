"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import projectsData from "@/data/projectsData";

import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
    return (
        <SectionContainer id="projects">
            <SectionHeading
                title="Projects"
                subtitle="Explore my AI projects, applications, and experiments."
            />
            <div className="space-y-6">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: .5, delay: index * .1}}
                    >
                        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-bold">
                                        {project.title}
                                    </h3>

                                    <Badge
                                        variant={
                                            project.status === "Completed"
                                            ? "default"
                                            : "secondary"
                                        }
                                    >
                                        {project.status}
                                    </Badge>
                                

                                <p className="text-muted-foreground">
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
                            </div>

                            <Link href={`/projects/${project.slug}`}>
                                <Button>
                                    Details
                                    <FaArrowRight />
                                </Button>
                            </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))} 
            </div>

            <div className="mt-10 flex justify-center">
                <Link href="/projects">
                    <Button variant="outline">
                        View All Projects
                        <FaArrowRight />
                    </Button>
                </Link>
            </div>
        </SectionContainer>

    );
}
