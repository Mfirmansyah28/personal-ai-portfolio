"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(form);

    alert("Message submitted successfully! (Dummy)");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading
        title="Contact Me"
        subtitle="Let's build intelligent AI applications together."
      />

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Contact Information */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>

            <CardContent className="space-y-8 p-8">

              <div>

                <h3 className="text-3xl font-bold">
                  Get In Touch
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Whether you want to discuss AI Chatbots,
                  AI Agents, Enterprise RAG Systems,
                  or collaboration opportunities,
                  feel free to contact me.
                </p>

              </div>

              <div className="space-y-6">

                {/* Email */}

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-xl text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <a
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {profile.email}
                    </a>

                  </div>

                </div>

                {/* Location */}

                <div className="flex items-center gap-4">

                  <FaMapMarkerAlt className="text-xl text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Location
                    </h4>

                    <p className="text-muted-foreground">
                      {profile.location}
                    </p>

                  </div>

                </div>

                {/* Github */}

                <div className="flex items-center gap-4">

                  <FaGithub className="text-xl text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Github
                    </h4>

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

                {/* LinkedIn */}

                <div className="flex items-center gap-4">

                  <FaLinkedin className="text-xl text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      LinkedIn
                    </h4>

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

                {/* Availability */}

                <div className="flex items-center gap-4">

                  <FaBriefcase className="text-xl text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Availability
                    </h4>

                    <p className="text-muted-foreground">
                      {profile.availability}
                    </p>

                  </div>

                </div>

              </div>

            </CardContent>

          </Card>
        </motion.div>

        {/* Contact Form */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>

            <CardContent className="p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />

                <Textarea
                  rows={6}
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  className="w-full"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </Button>

              </form>

            </CardContent>

          </Card>
        </motion.div>

      </div>
    </SectionContainer>
  );
}