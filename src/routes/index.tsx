import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
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
    <main className="page-wrap">
      <header className="page-heading">
        <div><p className="eyebrow">AI marketing workspace</p><h1>What are we creating today?</h1><p>Turn a rough idea into ready-to-publish Instagram content.</p></div>
      </header>

      <div className="command-card">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Sparkles className="size-4 text-primary" /> Ask Mira</div>

        {messages.length > 0 && (
          <div className="mb-4 max-h-80 space-y-3 overflow-y-auto rounded-2xl bg-muted/50 p-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span className={m.role === "user" ? "inline-block max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-left text-sm text-primary-foreground" : "inline-block max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-2.5 text-sm leading-6"}>{m.text}</span>
              </div>
            ))}
          </div>
        )}

        <Textarea
          aria-label="Marketing request"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); handleSend(); } }}
          placeholder="Describe your campaign, audience, or idea..."
          className="min-h-36 resize-none border-0 bg-transparent p-0 text-lg shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="hidden text-xs text-muted-foreground sm:block">Include your goal, audience, and tone for better results.</span>
          <Button aria-label="Send request" size="icon" className="ml-auto size-11 rounded-full" disabled={!prompt.trim()} onClick={handleSend}><ArrowUp /></Button>
        </div>
      </div>
    </main>
  );
}
