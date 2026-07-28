"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message: question,
  }),
});

const result = await response.json();

const aiMessage: Message = {
  role: "assistant",
  content: response.ok
    ? result.reply
    : result.message ?? "Something went wrong.",
};
    setMessages((prev) => [...prev, aiMessage]);
    setQuestion("");
    setLoading(false);
    inputRef.current?.focus();
  }

  return (
        <SectionContainer id="assistant">
      <SectionHeading
        title="AI Assistant"
        subtitle="Ask anything about my AI projects, experience, skills, or engineering journey."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card
          className="
            rounded-3xl
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <CardContent className="space-y-8 p-8">

            {/* Avatar */}

            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                "
              >
                <FaRobot className="text-4xl" />
              </div>
            </div>

            {/* Input */}

            <Input
              ref={inputRef}
              placeholder="Ask anything about me..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  askAI();
                }
              }}
              className="h-14 rounded-xl"
            />

            {/* Button */}

            <Button
              type="button"
              onClick={askAI}
              disabled={loading}
              className="w-full"
            >
              <FaPaperPlane className="mr-2" />

              {loading ? "Thinking..." : "Ask AI"}
            </Button>

            {/* Empty State */}

            {messages.length === 0 && (
              <Card>
                <CardContent className="py-10 text-center">
                  <h3 className="text-xl font-semibold">
                    Start chatting
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Ask anything about my AI projects,
                    skills, experience, or engineering
                    journey.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* ================= Chat History ================= */}

            <div className="space-y-6">
                              {messages.map((message, index) => {
                const isAI = message.role === "assistant";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      isAI ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`
                        flex
                        max-w-[85%]
                        items-start
                        gap-3
                        ${
                          isAI
                            ? ""
                            : "flex-row-reverse"
                        }
                      `}
                    >
                      {/* Avatar */}

                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          ${
                            isAI
                              ? "bg-cyan-500/15 text-cyan-400"
                              : "bg-violet-500/15 text-violet-400"
                          }
                        `}
                      >
                        {isAI ? (
                          <FaRobot />
                        ) : (
                          <FaUserCircle />
                        )}
                      </div>

                      {/* Bubble */}

                      <div
                        className={`
                          rounded-2xl
                          px-5
                          py-4
                          leading-8
                          ${
                            isAI
                              ? "border border-cyan-500/20 bg-cyan-500/10"
                              : "border border-violet-500/20 bg-violet-500/10"
                          }
                        `}
                      >
                        <p
                          className={`
                            mb-2
                            text-sm
                            font-semibold
                            ${
                              isAI
                                ? "text-cyan-400"
                                : "text-violet-400"
                            }
                          `}
                        >
                          {isAI
                            ? "AI Assistant"
                            : "You"}
                        </p>

                        <p>{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Auto Scroll */}

              <div ref={bottomRef} />
            </div>

            {/* Typing Indicator */}

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500/15
                      text-cyan-400
                    "
                  >
                    <FaRobot />
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-5
                      py-4
                    "
                  >
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"></span>

                      <span
                        className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"
                        style={{ animationDelay: ".15s" }}
                      ></span>

                      <span
                        className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"
                        style={{ animationDelay: ".3s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </CardContent>
        </Card>
      </motion.div>
    </SectionContainer>
  );
}