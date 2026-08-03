"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experienceData";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

export default function Timeline() {
  return (
    <section id="timeline" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          title="Journey"
          subtitle="AI learning milestones and development highlights."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.75 top-2 h-[calc(100%-1rem)] w-px bg-border" />

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-8"
              >
                {/* Dot */}
                <div className="relative z-10 mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 ${
                      item.status === "In Progress"
                        ? "border-foreground bg-foreground"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.year}
                        </span>
                        <Badge
                          variant={item.status === "In Progress" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
