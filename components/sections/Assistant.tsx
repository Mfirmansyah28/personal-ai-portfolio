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

  const quickQuestions = [
    "Tell me about yourself",
    "What AI projects have you built?",
    "What technologies do you specialize in?",
    "What services do you offer?",
    "Can I hire you for freelance work?",
    "How can I contact you?",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const history = messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response.");
      }

      if (!response.body) {
        throw new Error("No response body.");
      }

      // Add empty assistant message to stream into
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "" },
      ]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while contacting the AI.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function askAI() {
    sendMessage(question);
  }

  function handleQuickQuestion(text: string) {
    sendMessage(text);
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
          disabled={loading}
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
          <>
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

            {/* Quick Questions */}
            <div className="grid gap-3 md:grid-cols-2">
              {quickQuestions.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    disabled={loading}
                    onClick={() =>
                      handleQuickQuestion(item)
                    }
                    className="
                      h-auto
                      w-full
                      justify-start
                      rounded-xl
                      border-white/10
                      bg-white/5
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10
                    "
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Chat History */}
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
          ${isAI ? "" : "flex-row-reverse"}
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
          {isAI ? <FaRobot /> : <FaUserCircle />}
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
            {isAI ? "AI Assistant" : "You"}
          </p>

          <p className="whitespace-pre-wrap leading-8">
            {message.content}

            {loading &&
              isAI &&
              index === messages.length - 1 && (
                <motion.span
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 inline-block font-bold text-cyan-400"
                >
                  ▌
                </motion.span>
              )}
          </p>
        </div>
      </div>
    </motion.div>
  );
})}

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