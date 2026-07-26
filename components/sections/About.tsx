"use client";

import { easeInOut, motion } from "framer-motion";
import profile from "@/data/profile";
import Image from "next/image";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

export default function About() {
  return (
    <SectionContainer id="about">
      {/* ================= Aurora Background ================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-87.5
            w-87.5
            rounded-full
            bg-cyan-500/15
            blur-[120px]
          "
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-20
            h-80
            w-[320px]
            rounded-full
            bg-fuchsia-500/15
            blur-[120px]
          "
        />
        <div
          className="
                absolute
                -left-40
                top-20
                h-87.5
                w-87.5
                rounded-full
                bg-cyan-500/15
                blur-[120px]"
        />
        <div
          className="
                absolute
                -right-40
                bottom-20
                h-80
                w-[320px]
                rounded-full
                bg-fuchsia-500/15
                blur-[120px]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SectionHeading 
            title="About Me" 
            subtitle="Get to know me better" 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-10 lg:grid-cols-2"
      >
        {/* LEft */}
        <div className="space-y-4">
          {[
            {
              label: "Name",
              value: profile.name,
              icon: "👤",
            },
            {
              label: "Role",
              value: profile.role,
              icon: "💼",
            },
            {
              label: "Location",
              value: profile.location,
              icon: "📍",
            },
            {
              label: "Email",
              value: profile.email,
              icon: "✉️",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                x: 8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>

                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>

                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
              y:[0, -8,0]
            }}
            whileHover={{
              scale: 1.04,
              rotate: -2,
              y: -6,
            }}
            transition={{
                duration: 5,
                ease: easeInOut,
            }}
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={360}
              height={460}
              priority
              className="rounded-[28px] object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                value: "3",
                label: "Projects",
                color: "text-cyan-400",
                border: "hover:border-cyan-500/30",
              },
              {
                value: "10+",
                label: "AI Models",
                color: "text-fuchsia-400",
                border: "hover:border-fuchsia-500/30",
              },
              {
                value: "25+",
                label: "Technologies",
                color: "text-cyan-400",
                border: "hover:border-cyan-500/30",
              },
              {
                value: "0",
                label: "Years Experience",
                color: "text-fuchsia-400",
                border: "hover:border-fuchsia-500/30",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-500/30
                    hover:shadow-2xl
                    ${item.border}
                `}
              >
                <h3 className={`text-3xl font-bold ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div
            className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/30
                hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold">
              <motion.div 
                whileHover={{ y: -5 }} 
                transition={{ duration: 0.3 }}
              >
                Education
              </motion.div>
            </h3>

            <p className="mt-4 text-muted-foreground">
              Bachelor of Informatics Engineering.
            </p>
          </div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/30
                hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-cyan-400 font-medium">
                    2025 - Present
                  </p>

                  <h4 className="mt-1 font-semibold">AI Engineer</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Building intelligent applications powered by Large Language
                    Models, AI Agents and Enterprise Retrieval-Augmented
                    Generation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>🤖 AI Chatbot</span>
                  <span>🧠 LLM Apps</span>
                  <span>⚡ AI Agent</span>
                  <span>📚 Enterprise RAG</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div
            className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-fuchsia-500/30
                hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                Focus
              </motion.div>
            </h3>

            <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                    AI Engineering
                </li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                    Large Language Models
                </li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                    AI Agent
                </li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                    Enterprise RAG
                </li>
                <li className="transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                    Backend Development
                </li>
            </ul>
          </div>

          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/30
                hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Python",
                  "FastAPI",
                  "LangChain",
                  "LangGraph",
                  "OpenAI",
                  "Next.js",
                  "Docker",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                        rounded-full
                        border
                        border-white/10
                        bg-background/50
                        px-4
                        py-2
                        text-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-500/40
                        hover:bg-cyan-500/10
                        hover:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
