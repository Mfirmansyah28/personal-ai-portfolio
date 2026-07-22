import type { MetadataRoute } from "next";
import projectsData from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl="https://your-domain.vercel.app";

    //Static Page
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date (),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: .9,
        },
    ];

    // Dynamic Projects Pages
    const projectsPages: MetadataRoute.Sitemap = projectsData.map((projects) =>({
        url: `${baseUrl}/projects/${projects.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: .8,
    }));
    return [...staticPages,...projectsPages];
}