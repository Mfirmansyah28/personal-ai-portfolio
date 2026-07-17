export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    featured: boolean;
    status: "Completed" | "In Progress";
}

const projectsData: Project [] = [
     {
        id: 1,
        title: "StyleUp AI Customer Service Chatbot",
        slug: "styleup-chatbot",
        description:
            "AI-powered customer service chatbot built with Streamlit and OpenRouter. It provides intelligent product recommendations, answers customer questions, manages conversation history, and follows a customized customer service persona.",
        image: "/projects/chatbot.png",
        technologies: [
            "Python",
            "Streamlit",
            "OpenRouter",
            "LLM",
        ],
        github: "https://github.com/Mfirmansyah28/chatbot",
        demo: "",
        featured: true,
        status: "Completed",
    },

    {
        id: 2,
        title: "AI Agent App",
        slug: "ai-agent-app",
        description:
            "AI Agent application capable of executing multi-step reasoning workflows, integrating LLMs, and automating intelligent tasks through modular agent architecture.",
        image: "/projects/ai-agent.png",
        technologies: [
            "Python",
            "FastAPI",
            "AI Agent",
            "LLM",
        ],
        github: "https://github.com/Mfirmansyah28/ai-agent-app",
        demo: "",
        featured: true,
        status: "Completed",
    },

    {
        id: 3,
        title: "Enterprise RAG Agent",
        slug: "enterprise-rag-agent",
        description:
            "Enterprise Retrieval-Augmented Generation platform designed for intelligent document retrieval and currently evolving into a Multi-Agent System for enterprise knowledge management.",
        image: "/projects/enterprise-rag.png",
        technologies: [
            "LangChain",
            "RAG",
            "FastAPI",
            "Vector Database",
            "Multi-Agent",
        ],
        github: "https://github.com/Mfirmansyah28/enterprise_rag_agent",
        demo: "",
        featured: true,
        status: "In Progress",
    },
];

export default projectsData;