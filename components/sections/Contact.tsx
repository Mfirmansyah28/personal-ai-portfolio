"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import profile from "@/data/profile";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";

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
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);

    alert("Message sent successfully!");

    reset();
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading
        title="Contact Me"
        subtitle="Let's build intelligent AI applications together."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="space-y-8 p-8">
              <div>
                <h3 className="text-3xl font-bold">Get In Touch</h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Im always open to discussing AI Engineering, LLM Applications,
                  Enterprise RAG, AI Agent Systems, or collaboration
                  opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-primary" />

                  <div>
                    <h4 className="font-semibold">Email</h4>

                    <a
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-xl text-primary" />

                  <div>
                    <h4 className="font-semibold">Location</h4>

                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaGithub className="text-xl text-primary" />

                  <div>
                    <h4 className="font-semibold">GitHub</h4>

                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {profile.github}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-xl text-primary" />

                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {profile.linkedin}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaBriefcase className="text-xl text-primary" />

                  <div>
                    <h4 className="font-semibold">Availability</h4>

                    <p className="text-muted-foreground">
                      {profile.availability}
                    </p>
                  </div>
                </div>
              </div>
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
          <Card>
            <CardContent className="p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              ></form>
              {/* Name */}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>

                <Input
                  id="name"
                  placeholder="Your Name"
                  {...register("name")}
                />

                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
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
                  placeholder="your@email.com"
                  {...register("email")}
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
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
                  placeholder="Tell me about your project..."
                  {...register("message")}
                />

                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                <FaPaperPlane className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
