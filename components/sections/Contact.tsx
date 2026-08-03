"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send, Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";

import profile from "@/data/profile";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof formSchema>;

const contactInfo = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
  { label: "GitHub", value: "github.com/Mfirmansyah28", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/mfirmansyah28", href: profile.linkedin, icon: Linkedin },
  { label: "Availability", value: profile.availability, href: null, icon: Briefcase },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      toast.success("Message sent!", {
        description: "I'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Let's build something intelligent together."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I'm open to AI Engineering projects, freelance work, enterprise solutions,
                and long-term collaborations. Feel free to reach out.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Status banner */}
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">Available for work</p>
                <p className="text-xs text-muted-foreground">
                  Open to freelance, consulting, and full-time roles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 font-semibold">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      autoComplete="name"
                      disabled={isSubmitting}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      disabled={isSubmitting}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="AI Chatbot Development"
                    autoComplete="off"
                    disabled={isSubmitting}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Hi, I'd like to discuss an AI project..."
                    autoComplete="off"
                    disabled={isSubmitting}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
