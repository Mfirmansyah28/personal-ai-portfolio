<div align="center">

# 🌟 Personal AI Portfolio — M. Firmansyah

<p align="center">
  <strong>Next-Generation Personal Portfolio powered by AI Assistant, Next.js 15, and Tailwind CSS v4.</strong>
</p>

[![Live Demo](https://img.shields.io/badge/Live_Demo-personal--ai--portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://personal-ai-portfolio-x8j4.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![OpenRouter](https://img.shields.io/badge/AI_Powered-OpenRouter-7928CA?style=for-the-badge&logo=openai&logoColor=white)](https://openrouter.ai/)

---

[🚀 **Explore Live Website**](https://personal-ai-portfolio-x8j4.vercel.app/) • [🤖 **Chat with AI Assistant**](https://personal-ai-portfolio-x8j4.vercel.app/#assistant) • [💼 **Featured Projects**](https://personal-ai-portfolio-x8j4.vercel.app/#projects) • [📬 **Contact Me**](https://personal-ai-portfolio-x8j4.vercel.app/#contact)

</div>

<br />

## 📖 Overview

**Personal AI Portfolio** adalah platform portofolio modern yang dirancang khusus untuk memamerkan karya dan rekayasa di bidang **Artificial Intelligence (AI), Machine Learning, LLMs, AI Agents, dan RAG Systems**. 

Website ini dilengkapi dengan **Asisten AI Interaktif** yang mampu menjawab pertanyaan pengunjung secara *real-time* mengenai latar belakang, keahlian teknis, riwayat pengalaman, dan detail proyek dari **M. Firmansyah**.

---

## ✨ Fitur Unggulan

- 🤖 **Interactive Portfolio AI Assistant** — Asisten virtual cerdas terintegrasi OpenRouter dengan *auto-routing* model gratis terbaik dan dukungan render *Markdown* (tabel, list, kode) secara *real-time*.
- 📂 **Detailed Project Showcase** — Halaman detail komprehensif untuk setiap proyek AI, lengkap dengan arsitektur alur kerja (*system workflow*), kapabilitas fitur, dan sorotan teknis.
- 🎨 **Modern Sleek Aesthetics** — Desain modern bertema gelap (*dark mode*) yang elegan, tipografi bersih, dan animasi halus ditenagai oleh **Framer Motion**. Termasuk desain lencana (*badge*) level kemahiran untuk bagian *Skills*.
- ⚡ **High Performance & Modern Stack** — Dibangun di atas **Next.js 15 (App Router)**, **React 19**, dan **Tailwind CSS v4** untuk kecepatan *load* instan dan responsivitas optimal.
- 🔍 **Real-Time Project Filtering** — Pencarian cepat dan filter kategori proyek (Chatbot, AI Agent, RAG).
- 📱 **Fully Responsive Layout** — Tampilan yang nyaman dan adaptif di semua perangkat (Desktop, Tablet, dan Mobile).
- 🛡️ **Form Kontak Terintegrasi** — Form kontak berbasis validasi skema modern dan notifikasi interaktif via **Sonner**.

---

## 💼 Featured AI Projects

| Proyek | Kategori | Ringkasan Teknologi | Demo / Repositori |
| :--- | :--- | :--- | :--- |
| **🛍️ StyleUp AI Chatbot** | `Chatbot` | Python, Streamlit, OpenRouter, Nvidia Nemotron, Intent Detection | [🚀 Demo](https://chatbot-xdpwmm2snbqlywrjzrpq2m.streamlit.app/) • [📦 GitHub](https://github.com/Mfirmansyah28/chatbot) |
| **🤖 Nexus AI Agent** | `AI Agent` | LangGraph ReAct, Groq LLaMA 3.3 70B, Tavily Search, Python REPL, SQLite | [🚀 Demo](https://ai-agent-app-aitagwnfamxrc9sqxhriec.streamlit.app/) • [📦 GitHub](https://github.com/Mfirmansyah28/ai-agent-app) |
| **📚 Enterprise RAG Agent** | `RAG` | LangChain, Groq LLaMA 3.3 70B, Sentence-Transformers, Vector DB | [🚀 Demo](https://enterpriseragagent-nyeclrndfwz7cvo5y3a43w.streamlit.app/) • [📦 GitHub](https://github.com/Mfirmansyah28/enterprise_rag_agent) |

---

## 🛠️ Tech Stack & Tools

### **Frontend & Framework**
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### **AI & Backend Integration**
- **LLM Gateway**: [OpenRouter API](https://openrouter.ai/)
- **Email Service**: [Resend](https://resend.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 📂 Struktur Proyek

```bash
personal-ai-portfolio/
├── app/
│   ├── (marketing)/
│   │   ├── about/              # Halaman Tentang Saya
│   │   ├── contact/            # Halaman Kontak
│   │   ├── projects/           # Halaman List & Detail Proyek ([slug])
│   │   ├── layout.tsx          # Layout Navigasi & Footer
│   │   └── page.tsx            # Landing Page Utama
│   ├── api/
│   │   ├── chat/               # API Route AI Assistant (Streaming OpenRouter)
│   │   └── contact/            # API Route Pengiriman Pesan
│   ├── globals.css             # Konfigurasi Tema & Tailwind CSS v4
│   └── layout.tsx              # Root Layout & Provider
├── components/
│   ├── common/                 # Komponen umum (SectionHeading, dll)
│   ├── layout/                 # Container, Navbar, Footer
│   ├── sections/               # Hero, About, Skills, Projects, Assistant, Contact
│   └── ui/                     # UI Primitives (Button, Badge, Input, dll)
├── data/
│   ├── experienceData.ts       # Riwayat Pengalaman & Edukasi
│   ├── profile.ts              # Informasi Biodata & Sosmed
│   ├── projectsData.ts          # Data Proyek & Dokumentasi Lengkap
│   └── skillsData.ts            # Data Keahlian Teknis
└── public/
    └── images/                 # Thumbnail & Aset Visual
```

---

## 🚀 Memulai (Local Development)

### 1. Clone Repositori
```bash
git clone https://github.com/Mfirmansyah28/personal-ai-portfolio.git
cd personal-ai-portfolio
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables  
Buat file `.env.local` di direktori *root* dan masukkan API key yang dibutuhkan:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Jalankan Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

---

## 📬 Hubungi Saya

- **Nama**: M. Firmansyah
- **Peran**: AI Engineer
- **Email**: [muhammadfirmansyah401@gmail.com](mailto:muhammadfirmansyah401@gmail.com)
- **LinkedIn**: [linkedin.com/in/mfirmansyah28](https://www.linkedin.com/in/mfirmansyah28/)
- **GitHub**: [github.com/Mfirmansyah28](https://github.com/Mfirmansyah28)

---

<div align="center">
  <sub>Dibuat oleh <a href="https://github.com/Mfirmansyah28">M. Firmansyah</a></sub>
</div>