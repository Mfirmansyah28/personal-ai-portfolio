"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skillsData";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaRobot,
} from "react-icons/fa";

import {
  SiFastapi,
  SiLangchain,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiSqlite,
} from "react-icons/si";

const iconMap = {
  python: FaPython,
  docker: FaDocker,
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  fastapi: SiFastapi,
  openai: FaRobot,
  openrouter: FaRobot,
  langchain: SiLangchain,
  rag: SiLangchain,
  agent: SiLangchain,
  prompt: FaRobot,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  git: FaGitAlt,
  github: FaGithub,
};

export default function Skills() {
  return (
    <SectionContainer id="skills">

      {/* ================= Aurora Background ================= */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Left Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
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
                h-[320px]
                w-[320px]
                rounded-full
                bg-cyan-500/15
                blur-[120px]"
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
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
                h-[320px]
                w-[320px]
                rounded-full
                bg-fuchsia-500/15
                blur-[120px]"
        />
      </div>
      <SectionHeading
        title="My Skills"
        subtitle="Technologies I use to build AI-powered applications."
      />
      <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((skill, index) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
            >
              <Card
                className="
                    group
                    h-full
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-500/40
                    hover:shadow-[0_20px_60px_rgba(6, 182, 212, 0.25)]"
              >
                <CardContent
                  className="
                    space-y-6
                    p-6
                    transition-all
                    duration-300
                    group-hover:scale-[1.01]
                    "
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            text-cyan-400
                            duration-300
                            group-hover:scale-110
                            group-hover:border-cyan-400/40"
                      >
                        <Icon size={30} 
                              className="
                                transition-all
                                duration-300
                                group-hover:scale-110
                                group-hover:text-cyan-400"
                        />
                      </div>

                      <div>
                        <h3 className="
                              font-semibold
                              transition-colors
                              duration-300
                              group-hover:text-cyan-400
                        ">
                            {skill.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        rounded-full
                        bg-cyan-500/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-cyan-400"
                      >
                      {skill.level}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Progress
                      value={skill.percentage}
                      className="h-2"
                    />
                      <div className="flex justify-between text-xs text-shadow-muted-foreground">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advance</span>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
