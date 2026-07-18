"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";

export default function About () {
    return (
        <SectionContainer id="about">
            <SectionHeading
                title="About Me"
                subtitle="Get to know me better"
            />

            <motion.div
                initial={{ opacity: 0, y: 25}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: .6}}
                viewport={{ once: true}}
                className="grid gap-10 lg:grid-cols-2"
            >
                {/* LEft */}
                <div className="space-y-6">
                    <p className="text-shadow-muted-foreground leading-8">
                        {profile.description}
                    </p>

                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold">
                                Name
                            </span>

                            <p className="text-muted-foreground">
                                {profile.name}
                            </p>
                        </div>

                        <div>
                            <span className="font-semibold">
                                Role
                            </span>

                            <p className="text-muted-foreground">
                                {profile.role}
                            </p>
                        </div>

                        <div>
                            <span className="font-semibold">
                                Location
                            </span>

                            <p className="text-muted-foreground">
                                {profile.location}
                            </p>
                        </div>

                        <div>
                            <span className="font-semibold">
                                Email
                            </span>

                            <p className="text-muted-foreground">
                                {profile.email}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right */}
                <div className="space-y-6">
                    <div className="rounded-xl border p-6">
                        <h3 className="text-xl font-semibold">
                            Education
                        </h3>

                        <p className="mt-4 text-muted-foreground">
                            Bachelor of Informatics Engineering.
                        </p>
                    </div>

                    <div className="rounded-x border p-6">
                        <h3 className="text-xl font-semibold">
                            Focus
                        </h3>
                    

                    <ul className="mt-4 space-y-3 text-muted-foreground">
                        <li>AI Engineering</li>
                        <li>Large Language Models</li>
                        <li>AI Agent</li>
                        <li>Enterprise RAG</li>
                        <li>Backend Development</li>
                    </ul>
                </div>
            </div>
            </motion.div>
        </SectionContainer>
    );
}