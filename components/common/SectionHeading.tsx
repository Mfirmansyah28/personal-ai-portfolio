"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      {subtitle && (
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {subtitle}
        </h2>
      )}
    </motion.div>
  );
}
