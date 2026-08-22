export interface Experience {
    year: string;
    title: string;
    organization: string;
    description: string;
    technologies: string[];
    status: "Completed" | "In Progress";
}

const experienceData: Experience[] = [
    {
        year: "2025",
        title: "Started Learning Artificial Intelligence",
        organization: "Self Learning",
        description: "Began learning Python, machine learning fundamentals, and modern web development while building a strong programming foundation.",
        technologies: [
            "Python",
            "Git",
            "GitHub",
        ],
        status: "Completed",
    },

     {
        year: "2026",
        title: "Developed StyleUp AI Customer Service Chatbot",
        organization: "Personal Project",
        description:
            "Built an AI-powered customer service chatbot using Streamlit and OpenRouter. The chatbot answers product-related questions, manages conversation history, and follows a custom personality.",
        technologies: [
            "Python",
            "Streamlit",
            "OpenRouter",
            "LLM",
        ],
        status: "Completed",
    },

    {
        year: "2026",
        title: "Built AI Agent Application",
        organization: "Personal Project",
        description:
            "Developed an AI Agent capable of executing multi-step reasoning workflows and integrating AI capabilities into practical applications.",
        technologies: [
            "Python",
            "FastAPI",
            "AI Agent",
            "LLM",
        ],
        status: "Completed",
    },

    {
        year: "2026",
        title: "Enterprise RAG Agent (Multi-Agent System)",
        organization: "Personal Project",
        description:
            "Currently developing an Enterprise Retrieval-Augmented Generation (RAG) platform that evolves into a Multi-Agent System with enterprise knowledge management capabilities.",
        technologies: [
            "LangChain",
            "RAG",
            "Vector Database",
            "Multi-Agent",
            "FastAPI",
        ],
        status: "In Progress",
    },
];

export default experienceData;