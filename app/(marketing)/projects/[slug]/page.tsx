import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Layers, Sparkles, Workflow } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import projectsData from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    title: `${project.title} | M. Firmansyah Portfolio`,
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
    <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Kembali ke Daftar Proyek
          </Button>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            className={`text-xs font-medium ${
              project.status === "Completed"
                ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-400"
                : "border-amber-500/30 bg-amber-500/20 text-amber-400"
            }`}
          >
            {project.status}
          </Badge>
          <span className="rounded-full border border-border bg-card px-3 py-0.5 text-xs text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 shadow-sm">
                Lihat Live Demo
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <FaGithub size={16} />
                Source Code di GitHub
              </Button>
            </Link>
          )}
        </div>

        {/* Hero Image */}
        {project.image && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}

        {/* Tech Stack */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            <Cpu size={16} className="text-foreground" />
            Teknologi & Tools yang Digunakan
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Overview */}
        <div className="pt-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Sparkles size={22} className="text-foreground" />
            Ringkasan & Latar Belakang Proyek
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-wrap md:text-lg">
              {project.longDescription}
            </p>
          </div>
        </div>

        {/* Section 2: Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="pt-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
              <Layers size={22} className="text-foreground" />
              Fitur Utama & Kapabilitas Sistem
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/30 hover:shadow-md"
                >
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: System Architecture / Workflow */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="pt-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
              <Workflow size={22} className="text-foreground" />
              Arsitektur Alur Kerja (Workflow)
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col rounded-xl border border-border bg-card p-5"
                >
                  <span className="mb-3 inline-block font-mono text-2xl font-black text-muted-foreground/30">
                    {item.step}
                  </span>
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="pt-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">
              Sorotan Teknis & Rekayasa Sistem
            </h2>
            <ul className="space-y-3 rounded-2xl border border-border bg-card/60 p-6">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Navigation / Links */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-lg font-semibold">Tertarik mencoba langsung?</h3>
            <p className="text-sm text-muted-foreground">
              Jelajahi live demo aplikasi atau periksa struktur kodenya di GitHub.
            </p>
          </div>
          <div className="flex gap-3">
            {project.demo && (
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-2">
                  Buka Demo
                  <ArrowUpRight size={14} />
                </Button>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <FaGithub size={14} />
                  GitHub
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  ); 
}