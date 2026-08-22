"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "Tell me about yourself",
  "What AI projects have you built?",
  "What technologies do you specialize in?",
  "What services do you offer?",
  "Can I hire you for freelance work?",
  "How can I contact you?",
];

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      if (!response.ok) throw new Error("Failed to fetch AI response.");
      if (!response.body) throw new Error("No response body.");

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

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
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <section id="assistant" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          title="AI Assistant"
          subtitle="Ask anything about my work, skills, or experience."
        />

        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
                <Bot size={15} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">AI Assistant</p>
                <p className="text-xs text-muted-foreground">Knows everything about M. Firmansyah</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Messages area */}
            <div className="h-100 overflow-y-auto p-6">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                    <Sparkles size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Start a conversation</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ask anything about my AI projects, skills, or experience.
                    </p>
                  </div>
                  <div className="grid w-full max-w-sm gap-2 sm:grid-cols-2">
                    {quickQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        disabled={loading}
                        className="rounded-xl border border-border bg-background px-3 py-2.5 text-left text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground disabled:opacity-50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background ${
                          msg.role === "user" ? "mt-0.5" : "mt-0.5"
                        }`}
                      >
                        {msg.role === "assistant" ? (
                          <Bot size={13} className="text-muted-foreground" />
                        ) : (
                          <User size={13} className="text-muted-foreground" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-foreground text-background"
                            : "border border-border bg-background text-foreground"
                        }`}
                      >
                        {msg.role === "assistant" ? (
                          <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {loading && (
                    <div className="flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background mt-0.5">
                        <Bot size={13} className="text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-1 rounded-2xl border border-border bg-background px-4 py-3">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(question); }}
                className="flex gap-2"
              >
                <Input
                  ref={inputRef}
                  placeholder="Ask me anything..."
                  value={question}
                  disabled={loading}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="h-10 flex-1 rounded-xl text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={loading || !question.trim()}
                  className="h-10 w-10 shrink-0 rounded-xl"
                >
                  <Send size={15} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
