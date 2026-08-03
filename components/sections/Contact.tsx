"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";

import { Loader2 } from "lucide-react";

import profile from "@/data/profile";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Message sent successfully!", {
        description:
          "Thank you for reaching out. I'll get back to you as soon as possible.",
      });

      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };

  return (
    <SectionContainer id="contact">
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
            top-20
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          title="Contact Me"
          subtitle="Let's build intelligent AI applications together."
        />
      </motion.div>
      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="group h-full rounded-3xl border border-white/10 g-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_35px_90px_rgba(34, 211, 238, 0.25">
            <CardContent className="space-y-8 p-8 lg:p-10">
              <div>
                <h3 className="text-3xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                  Get In Touch
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Im always open to discussing AI Engineering, LLM Applications,
                  Enterprise RAG, AI Agent Systems, freelance projects, or
                  collaboration opportunities.
                </p>

                <div className="border-t border-white/10" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                      Email
                    </h4>

                    <a
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-400">
                    <FaMapMarkerAlt size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                      Location
                    </h4>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FaGithub size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                      GitHub
                    </h4>

                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-all duration-300 hover:text-cyan-400"
                    >
                      {profile.github}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FaLinkedin size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                      LinkedIn
                    </h4>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-all duration-300 hover:text-cyan-400"
                    >
                      {profile.linkedin}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FaBriefcase size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                      Availability
                    </h4>

                    <p className="text-muted-foreground">
                      {profile.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= Social Card ================= */}

              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.20)]
                "
              >
                <h3 className="text-xl font-bold">Lets Connect</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Feel free to connect with me through GitHub or LinkedIn. Im
                  always excited to collaborate on AI, LLM, and software
                  engineering projects.
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-background/40
                      px-5
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10
                    "
                  >
                    <FaGithub size={22} className="text-cyan-400" />

                    <span className="font-medium">GitHub</span>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-background/40
                      px-5
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-fuchsia-500/40
                      hover:bg-fuchsia-500/10
                    "
                  >
                    <FaLinkedin size={22} className="text-fuchsia-400" />

                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
              {/* ================= Availability Banner ================= */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  mt-6
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-linear-to-r
                  from-cyan-500/10
                  to-fuchsia-500/10
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-cyan-400">
                      CURRENT STATUS
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Available for Collaboration
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      Im currently available for freelance projects, AI
                      consulting, enterprise solutions, and long-term
                      collaborations.
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                        hidden
                        h-4
                        w-4
                        rounded-full
                        bg-green-400
                        shadow-[0_0_20px_rgba(74,222,128,0.8)]
                        lg:block
                      "
                  />
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_35px_90px_rgba(34, 211, 238, 0.25">
            <CardContent className="p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold">Send Me a message</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Have an AI project, collaboration idea, or freelance
                  opportunity? Fill out the form below and I will get back to
                  you as soon as possible.
                </p>

                <div className="mt-6 border-t border-white/10" />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 transition-all duration-300"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold tracking-wide"
                  >
                    Name
                  </label>

                  <Input
                    id="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    {...register("name")}
                  />

                  {errors.name && (
                    <p className="text-sm font-medium text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    {...register("email")}
                  />

                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>

                  <Input
                    id="subject"
                    placeholder="AI Chatbot Development"
                    autoComplete="off"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    {...register("subject")}
                  />

                  {errors.subject && (
                    <p className="text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>

                  <Textarea
                    id="message"
                    rows={7}
                    placeholder="Hi, I'd like to discuss an AI project with you..."
                    autoComplete="off"
                    disabled={isSubmitting}
                    className="rounded-xl border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    {...register("message")}
                  />

                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group h-14 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34, 211, 238, 0.35)] hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaPaperPlane className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      {/* ================= Final CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01}}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
              mt-20
              rounded-3xl
              border
              border-white/10
              bg-linear-to-r
              from-cyan-500/10
              via-background
              to-fuchsia-500/10
              shadow-[0_30px_90px_rgba(34, 211, 238, 0.08)]
              p-10
              text-center
              backdrop-blur-xl
            "
      >
        <h2 className="text-3xl font-bold">
          Ready to Build Something Amazing?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
          Whether you need an AI Chatbot, Enterprise RAG System, AI Agent, or a
          custom AI-powered application, I will do be happy to discuss your
          ideas and help bring them to life.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`mailto:${profile.email}`}>
            <Button
              size="lg"
              className="
                    rounded-xl
                    bg-linear-to-r
                    from-cyan-500
                    to-blue-600
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_20px_60px_rgba(34,211,238,0.35)]
                  "
            >
              <FaEnvelope className="mr-2" />
              Email Me
            </Button>
          </a>

          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="
                    rounded-xl
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-cyan-500/30
                  "
            >
              <FaGithub className="mr-2" />
              View GitHub
            </Button>
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
