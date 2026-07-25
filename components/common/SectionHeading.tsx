"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
        {subtitle}
      </p>
    </motion.div>
  );
}