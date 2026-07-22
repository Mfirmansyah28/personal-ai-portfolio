export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    longDescription: string,
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
        category: "Chatbot",
        description: "AI Costumer Service Chatbot",
        longDescription:
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
        category: "AI Agent",
        description: "AI Agent App",
        longDescription:
            "AI Agent App is an intelligent application capable of multi-step reasoning, task planning, and workflow automation using Large Language Models. The project is designed with a modular architecture that enables future expansion into multi-agent collaboration and enterprise automation.",
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
        category: "RAG",
        description: "Enterprise RAG Agent",
        longDescription:
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