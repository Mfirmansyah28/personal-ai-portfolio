"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profile from "@/data/profile";
import skills from "@/data/skills";
import socials from "@/data/socials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero () {
    return (
        <section className="min-h-screen flex items-center">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    animate={{ opacity: 1, y:0 }}
                    transition={{ duration: .7}}
                    className="space-y-8"
                >
                    <Badge>
                        {profile.role}
                    </Badge>
                    <div>
                        <h1 className="text-5xl font-bold">
                            {profile.name}
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground">
                            {profile.headline}
                        </p>
                    </div>

                    <p className="max-w-xl leading-8 text-muted-foreground">
                        {profile.description}
                    </p>

                    <div className="flex gap-4">
                        <Link href="/projects">
                            <Button>
                                View Projects
                            </Button>
                        </Link>

                        <Link href={profile.resume}>
                            <Button variant="outline">
                                Download CV
                            </Button>
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        {socials.map((item, index) => {
                            const Icon = item.icon;
                            return(
                                <Link
                                    key={index}
                                    href={item.href}
                                >
                                    <Icon size={22} />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) =>(
                            <Badge
                                key={skill}
                                variant="secondary"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </motion.div>

                { /* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, scale: .9}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: .8}}
                    className="flex justify-center"
                >
                    <Image
                        src={profile.avatar}
                        alt={profile.name}
                        width={420}
                        height={420}
                        className="rounded-full border object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}