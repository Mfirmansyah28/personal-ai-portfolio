"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skillsData";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import {
  FaPython, FaDocker, FaGitAlt, FaGithub, FaReact, FaRobot,
} from "react-icons/fa";
import {
  SiFastapi, SiLangchain, SiNextdotjs, SiPostgresql,
  SiTailwindcss, SiTypescript, SiSqlite,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
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

const categories = ["Frontend", "Backend", "Artificial Intelligence", "Database", "DevOps"];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies I use to build AI-powered applications."
        />

        <div className="space-y-14">
          {categories.map((cat) => {
            const items = skillsData.filter((s) => s.category === cat);
            if (!items.length) return null;

            return (
              <div key={cat}>
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {cat}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((skill, i) => {
                    const Icon = iconMap[skill.icon] ?? FaRobot;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">{skill.name}</p>
                          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.06 + 0.2, ease: "easeOut" }}
                              className="h-full rounded-full bg-foreground"
                            />
                          </div>
                        </div>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {skill.percentage}%
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
