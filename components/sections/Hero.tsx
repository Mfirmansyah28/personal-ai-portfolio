"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "@/data/profile";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] border-b border-border"
    >
      <Container>
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-16 py-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
                {profile.role}
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              {profile.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-6 cursor-pointer">
                  View Projects
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href={profile.resume} target="_blank">
                <Button size="lg" variant="outline" className="rounded-full px-6 cursor-pointer">
                  <Download size={16} className="mr-2" />
                  Download CV
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={440}
                  height={550}
                  priority
                  sizes="(max-width:1024px) 80vw, 440px"
                  className="w-72 object-cover sm:w-80 lg:w-110"
                  style={{ height: "auto" }}
                />
              </div>

              {/* Role tag */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-background px-4 py-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="mt-0.5 text-sm font-semibold">{profile.role}</p>
              </div>

              {/* Location tag */}
              <div className="absolute -right-4 -top-4 rounded-xl border border-border bg-background px-4 py-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="mt-0.5 text-sm font-semibold">{profile.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
