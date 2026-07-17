"use client";

import { useState } from "react";
import  { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/common/SectionHeading";

export default function Assistant() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    function askAI() {
        if (!question) return;
            setAnswer(
                "This is a dummy response. In Sprint 8 this will be connected to an AI model."
            );
    }
    return (
        <section className="py-24">
            <div className="mt-10 rounded-xl border p-8 space-y-6">
                <Input
                    placeholder="Ask Anything about me..."
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                />

                <Button onClick={askAI}>
                    Ask
                </Button>

                {answer && (
                    <div className="rounded-lg bg-muted p-5">
                        {answer}
                    </div>
                )}
            </div>
        </section>
    );
}