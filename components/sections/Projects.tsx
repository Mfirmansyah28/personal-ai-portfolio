"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import projectsData from "@/data/projectsData";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const keyword = search.toLowerCase();

      return (
        project.title.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(keyword)
        )
      );
    });
  }, [search]);

  return (
    <SectionContainer id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Explore my AI projects, applications, and experiments."
      />

      {/* Search */}
      <div className="mx-auto mb-10 max-w-xl">
        <Input
          placeholder="Search AI Projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                {/* Left */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold">
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
                  </div>

                  <p className="leading-7 text-muted-foreground">
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

                {/* Right */}
                <div className="flex justify-end">
                  <Link href={`/projects/${project.slug}`}>
                    <Button>
                      Details
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
              <h3 className="text-2xl font-semibold">
                No Projects Found
              </h3>

              <p className="mt-3 text-muted-foreground">
                Try another keyword.
              </p>
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
    </SectionContainer>
  );
}