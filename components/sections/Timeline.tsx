"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experienceData";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import { Badge } from "../ui/badge";
import { Card, CardContent} from "@/components/ui/card";

export default function Timeline() {
    return (
        <SectionContainer id="timeline">
            <SectionHeading
                title="AI Learning Journey"
                subtitle="My Learning journey and AI development milestone."
            />

            <div className="relative mx-auto max-w-5xl">
                { /* Vertical Line */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-border"/>
                <div className="space-y-10">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40}}
                            whileInView={{ opacity: 1, x: 0}}
                            viewport={{ once: true}}
                            transition={{ duration: .5, delay: index * .1}}
                            className="relative flex gap-6"
                        >
                            {/* Timeline Dot */}
                            <div className="relative z-10 mt-2 flex h-10 w-10 items-center">
                                {item.year}
                            </div>

                            {/* Card */}
                            <Card className="flex-l transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <CardContent className="space-y-5 p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="text-muted-foreground">
                                                {item.organization}
                                            </p>
                                        </div>

                                        <Badge
                                            variant={
                                                item.status === "Completed"
                                                ? "default"
                                                : "secondary"
                                            }
                                        >
                                            {item.status}
                                        </Badge>
                                    </div>

                                    <p className="leading-7 text-muted-foregorund">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}