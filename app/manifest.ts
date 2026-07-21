import type { MetadataRoute } from "next";

export default function manifest (): MetadataRoute.Manifest {
    return {
        name: "M. Firmansyah | AI Engineer",
        short_name: "Firman",

         description:
      "AI Engineer specializing in AI Chatbots, AI Agents, Enterprise RAG Systems, LLM Applications, FastAPI, LangChain, and Next.js.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#000000",

    orientation: "portrait",

    lang: "en",

    categories: [
      "technology",
      "portfolio",
      "developer",
      "artificial intelligence",
    ],

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    };
}