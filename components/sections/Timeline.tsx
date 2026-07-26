"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import experienceData from "@/data/experienceData";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import { Badge } from "../ui/badge";
import { Card, CardContent} from "@/components/ui/card";

export default function Timeline() {
    return (
        <SectionContainer id="timeline">

            {/* ================= Aurora Background ================= */}
             <div className="absolute inset-0 -z-10 overflow-hidden">

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
                top-24
                h-90
                w-90
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
                h-85
                w-85
                rounded-full
                bg-fuchsia-500/15
                blur-[120px]
            "
        />

    </div>

            <SectionHeading
                title="AI Learning Journey"
                subtitle="My Learning journey and AI development milestone."
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* ================= Floating Glow ================= */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                        opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -left-32
                        top-32
                        h-44
                        w-44
                        rounded-full
                        bg-cyan-500/20
                        blur-[100px]
                    "
                    />

                    <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1.05, 1, 1.05],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -right-32
                        bottom-20
                        h-52
                        w-52
                        rounded-full
                        bg-fuchsia-500/20
                        blur-[110px]
                    "
                    />
                { /* Vertical Line */}
                <div className="
                        absolute
                        left-5
                        top-0
                        h-full
                        w-2px
                        bg-linear-to-b
                        from-cyan-500
                        via-fuchsia-500
                        to-cyan-500
                        opacity-70
                    "/>
                <div className="absolute left-18px top-0 h-full w-2 blur-md bg-cyan-400/30">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0}}
                            whileHover={{ x: 8, scale: 1.01}}
                            viewport={{ once: true}}
                            transition={{ duration: .5, delay: index * 0.12, ease:"easeOut"}}
                            className="relative flex gap-6 md:gap-8"
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                    whileHover={{
                                        scale: 1.15,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="
                                        relative
                                        z-20
                                        mt-2
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-cyan-500/40
                                        bg-background
                                        shadow-[0_0_25px_rgba(34,211,238,.45)]
                                    "
                                    >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [1, 0.7, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            h-4
                                            w-4
                                            rounded-full
                                            bg-cyan-400
                                            shadow-[0_0_20px_rgba(34,211,238,.8)]
                                        "
                                        />
                                </motion.div>
                                    <div
                                        className="
                                            absolute
                                            left-16
                                            -top-1
                                        "
                                        >
                                        <Badge
                                            className="
                                            border
                                            border-cyan-500/30
                                            bg-cyan-500/15
                                            text-cyan-300
                                            backdrop-blur-xl
                                            "
                                        >
                                            {item.year}
                                        </Badge>
                                    </div>

                            {/* Card */}
                            <Card
                                className="
                                    group
                                    flex-1
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-cyan-500/30
                                    hover:shadow-[0_35px_90px_rgba(34, 211, 238, 0.30)]
                                "
                                >
                                <CardContent className="space-y-6 p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                                                {item.title}
                                            </h3>

                                            <p className="text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                                                {item.organization}
                                            </p>
                                        </div>

                                        <Badge
                                            variant={
                                                item.status === "Completed"
                                                ? "default"
                                                : "secondary"
                                            }
                                            className="transition-all duration-300 group-hover:scale-105"
                                        >       
                                            {item.status}
                                        </Badge>
                                    </div>

                                    <p className="leading-7 text-muted-foreground">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech) => (
                                            <motion.div
                                                 key={tech}
                                                 whileHover={{ y: -3, scale: 1.05}}
                                                 transition={{ duration: 0.2}}
                                            >
                                            <Badge
                                                variant="outline"
                                                className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                                            >
                                                {tech}
                                            </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="border-t border-white/10" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
              {/* ================= Timeline Summary ================= */}

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
                mt-20
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(34,211,238,0.15)]
                transition-all
                duration-500
                hover:border-cyan-500/30
                hover:shadow-[0_30px_90px_rgba(34,211,238,0.25)]"
            >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="text-center">
                    <motion.h3
                        whileHover={{
                            scale: 1.08,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="text-4xl font-bold text-cyan-400"
                    >
                        3+
                    </motion.h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        AI Projects
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-fuchsia-400">
                        25+
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Technologies
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-cyan-400">
                        10+
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        AI Models
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-fuchsia-400">
                        ∞
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Learning Never Stops
                    </p>
                </div>
            </div>
            </motion.div>
            {/* ================= CTA ================= */}

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16 text-center"
                >
                <h2 className="text-3xl font-bold">
                    The Journey Continues 🚀
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
                    Every project represents a new challenge and an opportunity to learn.
                    Im continuously exploring AI, Large Language Models, AI Agents, and
                    Enterprise RAG to build intelligent software that solves real-world
                    problems.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/projects">
                    <Button
                    size="lg"
                    className="
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-lg
                        hover:shadow-cyan-500/20
                    "
                    >
                    View My Projects
                    </Button>
                    </Link>

                    <Link href="/contact">
                    <Button
                    size="lg"
                    variant="outline"
                    className="
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-cyan-500/40
                    "
                    >
                    Contact Me
                    </Button>
                    </Link>
                </div>
            </motion.div>
        </SectionContainer>
    );
}