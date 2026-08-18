export interface ProjectFeature {
    title: string;
    description: string;
}

export interface ProjectArchitectureStep {
    step: string;
    title: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    featured: boolean;
    status: "Completed" | "In Progress";
    features?: ProjectFeature[];
    architecture?: ProjectArchitectureStep[];
    highlights?: string[];
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "StyleUp AI Customer Service Chatbot",
        slug: "styleup-chatbot",
        category: "Chatbot",
        description: "Asisten virtual cerdas untuk e-commerce fashion dengan deteksi intent otomatis, rekomendasi produk, dan guardrail topik.",
        longDescription:
            "StyleUp Chatbot adalah asisten layanan pelanggan digital berbasis AI yang ditenagai oleh model OpenRouter (Nvidia Nemotron-3-Nano-30B) dan dibangun menggunakan framework Streamlit.\n\nAplikasi ini tidak sekadar menjawab teks, melainkan dibekali dengan kepribadian khusus ('Siti') yang ramah, informatif, dan komunikatif dalam Bahasa Indonesia. Sistem ini memiliki kemampuan Deteksi Intent Otomatis (Intent Detection) yang memungkinkannya mengenali tujuan spesifik pelanggan—seperti mencari produk, menanyakan harga, mengecek stok barang, hingga prosedur retur dan pengiriman.\n\nFitur unggulan lainnya meliputi pencarian katalog cerdas yang dapat memfilter produk berdasarkan warna dan budget, sistem Guardrail untuk menolak secara halus pertanyaan di luar konteks e-commerce, dan manajemen riwayat percakapan (Conversation Memory) lintas sesi yang disimpan persisten dalam format JSON. Hasilnya adalah pengalaman pengguna yang kontekstual, di mana bot dapat merespons pertanyaan lanjutan tanpa pelanggan perlu mengulang informasi dari awal.",
        image: "/images/chatbot.png",
        technologies: [
            "Python",
            "Streamlit",
            "OpenRouter",
            "Nvidia Nemotron",
            "LLM Prompt Engineering",
            "JSON State Management",
        ],
        github: "https://github.com/Mfirmansyah28/chatbot",
        demo: "https://chatbot-xdpwmm2snbqlywrjzrpq2m.streamlit.app/",
        featured: true,
        status: "Completed",
        features: [
            {
                title: "Kepribadian CS 'Siti'",
                description: "Merespons dalam Bahasa Indonesia yang santun, ramah, dan kasual (menggunakan sapaan Kak/Kakak dan emoji yang relevan)."
            },
            {
                title: "Deteksi Intent Otomatis",
                description: "Mengenali dan mengklasifikasikan intent pelanggan (pencarian produk, harga, stok, pemesanan, pembayaran, pengiriman, retur, greeting)."
            },
            {
                title: "Pencarian Produk Cerdas",
                description: "Mencari produk berdasarkan nama, warna, budget, dan preferensi harga dari katalog data StyleUp."
            },
            {
                title: "Konteks Percakapan (Memory)",
                description: "Memahami pertanyaan lanjutan seperti 'yang tadi berapa?' atau 'ada warna lain?' tanpa perlu mengulang info sebelumnya."
            },
            {
                title: "Guardrail & Filter Topik",
                description: "Menolak secara halus pertanyaan di luar topik fashion, belanja, dan layanan toko untuk menjaga fokus bisnis."
            },
            {
                title: "Manajemen Multi-Chat Persisten",
                description: "Mendukung beberapa sesi chat terpisah dengan fitur buat, pilih, dan hapus riwayat chat yang tersimpan di JSON."
            },
            {
                title: "Real-Time Streaming Response",
                description: "Jawaban AI disajikan secara token-by-token secara real-time untuk interaksi yang responsif."
            }
        ],
        architecture: [
            {
                step: "01",
                title: "User Input & Intent Classification",
                description: "Input pengguna dianalisis untuk mengidentifikasi kategori kebutuhan (produk, harga, komplain, atau greeting)."
            },
            {
                step: "02",
                title: "Context & Guardrail Check",
                description: "Sistem memvalidasi batasan topik dan menggabungkan pesan dengan riwayat obrolan sebelumnya."
            },
            {
                step: "03",
                title: "Catalog & Persona Injection",
                description: "Data katalog produk dan instruksi persona Siti disuntikkan ke dalam prompt sesuai intent terdeteksi."
            },
            {
                step: "04",
                title: "LLM Streaming Generation",
                description: "Model OpenRouter memproses prompt dan melakukan streaming jawaban langsung ke antarmuka pengguna."
            }
        ],
        highlights: [
            "Implementasi Guardrail cerdas untuk membatasi ruang lingkup percakapan pada domain e-commerce",
            "Sistem riwayat obrolan multi-sesi yang persisten terhadap refresh browser",
            "Manajemen kredensial aman menggunakan st.secrets",
            "Fitur satu-klik salin teks jawaban (Copy Response)"
        ]
    },

    {
        id: 2,
        title: "AI Agent App",
        slug: "ai-agent-app",
        category: "AI Agent",
        description: "Sistem agen AI otonom berbasis LangGraph ReAct dengan live web search dan sandbox eksekusi kode Python.",
        longDescription:
            "Nexus AI Agent adalah sistem asisten virtual tingkat lanjut yang diarsiteki dengan konsep ReAct (Reasoning and Acting) menggunakan framework LangGraph dan didukung oleh performa super cepat dari model Groq LLaMA 3.3 70B Versatile.\n\nBerbeda dengan chatbot statis, Nexus bertindak sebagai 'Agen' yang mampu berpikir langkah-demi-langkah (multi-step reasoning) dan secara otonom memanggil tools eksternal untuk menyelesaikan instruksi kompleks. Fitur utamanya mencakup integrasi Tavily API untuk pencarian web secara real-time dan lingkungan Python REPL (Read-Eval-Print Loop) sebagai sandbox eksekusi kode matematis maupun analisis data di latar belakang.\n\nDari sisi infrastruktur, sistem ini menggunakan arsitektur modular yang memisahkan logika agen, antarmuka Streamlit, dan manajemen data. Dilengkapi dengan SQLite untuk penyimpanan memori multi-sesi (Persistent Chat History) yang tahan terhadap refresh browser, serta manajemen jendela konteks cerdas menggunakan LangChain 'trim_messages' guna menghindari limit token LLM secara otomatis.",
        image: "/images/ai-agent-app.png",
        technologies: [
            "Python",
            "LangGraph",
            "LangChain",
            "Groq LLaMA 3.3 70B",
            "Tavily Search API",
            "Python REPL",
            "SQLite3",
            "Streamlit",
        ],
        github: "https://github.com/Mfirmansyah28/ai-agent-app",
        demo: "https://ai-agent-app-aitagwnfamxrc9sqxhriec.streamlit.app/",
        featured: true,
        status: "Completed",
        features: [
            {
                title: "Arsitektur LangGraph ReAct Loop",
                description: "Loop penalaran mandiri (Thought -> Action -> Observation) untuk merencanakan dan menyelesaikan masalah multi-langkah."
            },
            {
                title: "Groq LLaMA 3.3 70B Ultra-Fast",
                description: "Inference berkecepatan tinggi dengan streaming token real-time didukung model bahasa 70B tercanggih."
            },
            {
                title: "Live Web Search (Tavily API)",
                description: "Kemampuan mencari data real-time dan berita terkini dari internet saat informasi tidak ada di training data."
            },
            {
                title: "Python REPL Code Sandbox",
                description: "Eksekusi kode Python secara aman di background untuk perhitungan matematika rumit dan analisis data."
            },
            {
                title: "Persistent Memory SQLite",
                description: "Penyimpanan obrolan multi-sesi berbasis database lokal SQLite yang tidak hilang saat browser di-refresh."
            },
            {
                title: "Smart Context Window Trimming",
                description: "Pemangkasan histori otomatis dengan trim_messages untuk menjaga efisiensi token tanpa kehilangan konteks inti."
            },
            {
                title: "Visual Tool Execution Cards",
                description: "Menampilkan kartu status transparan saat agen sedang memanggil tool di latar belakang."
            }
        ],
        architecture: [
            {
                step: "01",
                title: "Query Analysis & State Initialization",
                description: "Memuat pesan baru dan riwayat obrolan dari SQLite, lalu menyiapkan state graf LangGraph."
            },
            {
                step: "02",
                title: "Agent Reasoning Step",
                description: "Model mengevaluasi apakah membutuhkan bantuan tool eksternal atau dapat langsung menjawab."
            },
            {
                step: "03",
                title: "Tool Execution & Observation",
                description: "Node tool mengeksekusi pencarian web (Tavily) atau Python sandbox dan memasukkan hasilnya kembali ke state."
            },
            {
                step: "04",
                title: "Final Response Synthesis",
                description: "Agent merangkum observasi alat menjadi jawaban komprehensif dan mengirimkan streaming ke UI."
            }
        ],
        highlights: [
            "Pemisahan kode modular yang rapi antara agent/, ui/, dan data/",
            "Penggunaan arsitektur graf stateful dengan LangGraph 0.6.5",
            "Kecepatan inferensi tinggi dengan Groq Cloud LPU",
            "Manajemen percakapan multi-sesi dengan SQLite"
        ]
    },

    {
        id: 3,
        title: "Enterprise RAG Agent",
        slug: "enterprise-rag-agent",
        category: "RAG",
        description: "Platform RAG multi-format untuk pencarian dokumen perusahaan cerdas dengan sitasi sumber dan tingkat keyakinan.",
        longDescription:
            "Sistem tanya-jawab tingkat Enterprise ini mengimplementasikan arsitektur Retrieval-Augmented Generation (RAG) secara penuh untuk memastikan setiap jawaban di-grounding pada data internal perusahaan tanpa halusinasi model. Aplikasi ini memproses dan menelan (ingest) dokumen multi-format termasuk PDF, TXT, CSV, DOCX, dan XLSX secara otomatis.\n\nPipeline RAG mencakup chunking dokumen, pembuatan representasi vektor (embeddings) menggunakan Sentence-Transformers (all-MiniLM-L6-v2), dan penyimpanan indeks semantik. Ketika pengguna bertanya, model Groq LLaMA 3.3 70B akan mengekstrak informasi hanya dari konteks dokumen yang relevan. Sistem ini dibekali dengan fitur kelas enterprise, seperti Indikator Keyakinan (Confidence Indicator) untuk mengukur reliabilitas jawaban, fitur Source Documents Viewer untuk melihat skor kemiripan, dan kewajiban mengutip nama file serta halaman (Source Citation) dalam setiap respons.\n\nSeluruh proses—mulai dari LLM hingga retriever—di-cache di level sesi untuk memastikan latensi yang sangat rendah. Selain itu, fitur Conversation Memory memastikan alur percakapan tanya-jawab (Q&A) yang berkelanjutan dan alami.",
        image: "/images/rag-system.png",
        technologies: [
            "Python",
            "LangChain",
            "RAG Architecture",
            "Sentence-Transformers",
            "Vector Database",
            "Groq LLaMA 3.3 70B",
            "Streamlit",
        ],
        github: "https://github.com/Mfirmansyah28/enterprise_rag_agent",
        demo: "https://enterpriseragagent-nyeclrndfwz7cvo5y3a43w.streamlit.app/",
        featured: true,
        status: "In Progress",
        features: [
            {
                title: "Upload Multi-Format Batch",
                description: "Mendukung pengunggahan berkas .pdf, .txt, .csv, .docx, dan .xlsx secara bersamaan."
            },
            {
                title: "Pemrosesan & Chunking Otomatis",
                description: "Memecah dokumen menjadi potongan 500 karakter dengan 50 karakter overlap dan langsung diindeks ke vector store."
            },
            {
                title: "Pencarian Semantik Presisi",
                description: "Menggunakan model embedding all-MiniLM-L6-v2 untuk mencocokkan kemiripan makna pertanyaan dengan dokumen."
            },
            {
                title: "Jawaban Berbasis Sitasi Sumber",
                description: "Model Groq LLaMA 3.3 wajib mencantumkan nama berkas dan nomor halaman sebagai bukti sumber jawaban."
            },
            {
                title: "Indikator Keyakinan (Confidence)",
                description: "Menampilkan tingkat keyakinan (🟢 High / 🟡 Medium / 🔴 Low) berdasarkan jumlah chunk relevan yang ditemukan."
            },
            {
                title: "Source Documents Viewer",
                description: "Inspeksi transparansi yang menampilkan similarity score, preview, dan konten lengkap dari dokumen rujukan."
            },
            {
                title: "Filter Dokumen & Export Chat",
                description: "Pilihan untuk membatasi pencarian ke dokumen tertentu dan fitur unduh riwayat obrolan dalam .txt atau .json."
            }
        ],
        architecture: [
            {
                step: "01",
                title: "Document Ingestion & Chunking",
                description: "Mengekstrak teks dari berbagai format file dan membaginya ke dalam ukuran chunk yang optimal."
            },
            {
                step: "02",
                title: "Vector Embedding & Indexing",
                description: "Mengubah potongan teks menjadi representasi vektor numerik menggunakan sentence-transformers."
            },
            {
                step: "03",
                title: "Similarity Search & Context Retrieval",
                description: "Mengambil chunk paling relevan berdasarkan cosine similarity terhadap pertanyaan pengguna."
            },
            {
                step: "04",
                title: "Grounded Answer with Page Citations",
                description: "Groq LLM merumuskan jawaban eksklusif dari konteks dokumen disertai nomor halaman rujukan."
            }
        ],
        highlights: [
            "Sistem Caching Resource (@st.cache_resource) untuk embeddings dan retriever guna performa maksimal",
            "Mekanisme mitigasi halusinasi AI dengan kewajiban sitasi berkas dan nomor halaman",
            "Dukungan multi-format lengkap untuk berbagai kebutuhan dokumen kantor/enterprise",
            "Manajemen percakapan tanya-jawab (Q&A) yang mendukung pertanyaan lanjutan"
        ]
    },
];

export default projectsData;