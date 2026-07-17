export interface Skill {
    name: string;
    icon: string;
    category: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    percentage: number;
}

const skillsData: Skill[] = [
    // Frontend
    {
        name: "Next.js",
        icon: "nextjs",
        category: "Frontend",
        level: "Advanced",
        percentage: 90,
    },
    {
        name: "React",
        icon: "react",
        category: "Frontend",
        level: "Advanced",
        percentage: 88,
    },
    {
        name: "TypeScript",
        icon: "typescript",
        category: "Frontend",
        level: "Advanced",
        percentage: 85,
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
        category: "Frontend",
        level: "Advanced",
        percentage: 90,
    },

    // Backend
    {
        name: "Python",
        icon: "python",
        category: "Backend",
        level: "Expert",
        percentage: 95,
    },
    {
        name: "FastAPI",
        icon: "fastapi",
        category: "Backend",
        level: "Advanced",
        percentage: 90,
    },

    // AI
    {
        name: "OpenAI",
        icon: "openai",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 90,
    },
    {
        name: "OpenRouter",
        icon: "openrouter",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 88,
    },
    {
        name: "LangChain",
        icon: "langchain",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 90,
    },
    {
        name: "RAG",
        icon: "rag",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 90,
    },
    {
        name: "AI Agent",
        icon: "agent",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 88,
    },
    {
        name: "Prompt Engineering",
        icon: "prompt",
        category: "Artificial Intelligence",
        level: "Advanced",
        percentage: 90,
    },

    // Database
    {
        name: "PostgreSQL",
        icon: "postgresql",
        category: "Database",
        level: "Intermediate",
        percentage: 80,
    },
    {
        name: "SQLite",
        icon: "sqlite",
        category: "Database",
        level: "Intermediate",
        percentage: 75,
    },

    // DevOps
    {
        name: "Docker",
        icon: "docker",
        category: "DevOps",
        level: "Intermediate",
        percentage: 75,
    },
    {
        name: "Git",
        icon: "git",
        category: "DevOps",
        level: "Advanced",
        percentage: 90,
    },
    {
        name: "GitHub",
        icon: "github",
        category: "DevOps",
        level: "Advanced",
        percentage: 90,
    },
];

export default skillsData;