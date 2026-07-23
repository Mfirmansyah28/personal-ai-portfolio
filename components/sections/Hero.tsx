"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import profile from "@/data/profile";
import skills from "@/data/skillsData";
import socials from "@/data/socials";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-24"
    >
      {/* ================= Background Grid ================= */}

      <div className="absolute inset-0-z-30 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[70px_70px]" />

      {/* ================= Aurora Glow ================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute-left-56-top-56 h-520px w-520px rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute-right-44-bottom-44 h-500px w-500px rounded-full bg-fuchsia-500/20 blur-[170px]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge className="w-fit rounded-full px-4 py-1">{profile.role}</Badge>

          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              {profile.headline}
            </p>
          </div>

          <p className="max-w-xl text-lg leading-9 text-accent-foreground">
            {profile.description}
          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg">View Projects</Button>
            </Link>

            <Link href={profile.resume}>
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </Link>
          </div>

          {/* Social */}

          <div className="flex items-center gap-5 text-xl">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:text-cyan-400"
                >
                  <Icon size={22} />
                </Link>
              );
            })}
          </div>

          {/* Skills */}

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="rounded-ful px-4 py-2 text-sm"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={460}
            height={560}
            priority
            sizes="(max-width: 1024px) 100vw, 460px"
            className="rounded-[28px] object-cover select-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
