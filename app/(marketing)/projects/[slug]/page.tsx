import { notFound } from "next/navigation";
import projectsData from "@/data/projectsData";

interface ProjectsPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectsDetailProps ({
    params,
}: ProjectsPageProps) {
    const { slug } = await params;
    const project = projectsData.find(
        (item) => item.slug === slug
    );

    if(!project) {
        notFound();
    }
    return (
        <main className="mx-auto max-w-6xl px-6 py-20">
            <h1 className="text-5xl font-bold">
                {project.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">

            </p>

        </main>
    );
}