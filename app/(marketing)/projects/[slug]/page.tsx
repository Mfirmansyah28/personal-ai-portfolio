import type { Metadata } from "next";
import { notFound } from "next/navigation";

import projectsData from "@/data/projectsData";

interface ProjectsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectsPageProps) {
  const { slug } = await params;

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Project Overview
          </h2>

          <p className="leading-8 text-muted-foreground">
            {project.longDescription}
          </p>
        </div>
      </div>
    </main>
  ); 
}