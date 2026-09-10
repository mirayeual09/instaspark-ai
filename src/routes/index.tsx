import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AI Agent — Mira" },
    { name: "description", content: "Create Instagram campaigns, captions, reels, and carousels with Mira." },
    { property: "og:title", content: "AI Agent — Mira" },
    { property: "og:description", content: "Create high-performing Instagram content with an AI marketing agent." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "agent"; text: string }[]>([]);

  function handleSend() {
    const text = prompt.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "agent", text: "Got it! Here’s a first draft based on your brief: “Your next big idea doesn’t need a bigger to-do list. It needs a clearer first step. Save this for the day you’re ready to turn ‘someday’ into momentum. ✨ #BuildInPublic #FounderLife”" },
    ]);
    setPrompt("");
  }

  return (
    <main className="page-wrap flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
      <div className="agent-hero relative w-full max-w-2xl pb-10">
        <div className="agent-glow" aria-hidden="true" />
        <p className="eyebrow">AI marketing workspace</p>
        <h1>What are we creating today?</h1>
        <p>Turn a rough idea into ready-to-publish Instagram content.</p>
      </div>

      <div className="compact-chat">
        {messages.length > 0 && (
          <div className="mb-3 max-h-60 space-y-3 overflow-y-auto rounded-xl bg-muted/50 p-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span className={m.role === "user" ? "inline-block max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-left text-sm text-primary-foreground" : "inline-block max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background px-3.5 py-2 text-sm leading-6"}>{m.text}</span>
              </div>
            ))}
          </div>
        )}

        <Textarea
          aria-label="Marketing request"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); handleSend(); } }}
          placeholder="Describe your campaign, audience, or tone..."
          className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center justify-end border-t border-border pt-3">
          <Button aria-label="Send request" size="icon" className="size-9 rounded-full" disabled={!prompt.trim()} onClick={handleSend}><ArrowUp className="size-4" /></Button>
        </div>
      </div>
    </main>
  );
}
