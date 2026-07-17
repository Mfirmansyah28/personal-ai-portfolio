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

            <SectionHeading
                title="My Skills"
                subtitle="Technologies I use to build AI-powered applications."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {skillsData.map((skill, index) => {

                    const Icon =
                        iconMap[
                            skill.icon as keyof typeof iconMap
                        ];

                    return (

                        <motion.div
                            key={skill.name}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                        >

                            <Card className="h-full transition-all hover:shadow-xl">

                                <CardContent className="space-y-6 p-6">

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-3">

                                            <Icon
                                                size={30}
                                            />

                                            <div>

                                                <h3 className="font-semibold">

                                                    {skill.name}

                                                </h3>

                                                <p className="text-sm text-muted-foreground">

                                                    {skill.category}

                                                </p>

                                            </div>

                                        </div>

                                        <span className="text-sm font-medium">

                                            {skill.level}

                                        </span>

                                    </div>

                                    <Progress
                                        value={skill.percentage}
                                    />

                                    <div className="flex justify-between text-sm">

                                        <span>

                                            {skill.percentage}%

                                        </span>

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