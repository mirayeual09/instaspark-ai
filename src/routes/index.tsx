import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp, Check, Copy, Film, Images, MessageSquareText, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
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
  const [generated, setGenerated] = useState(false);
  const starters = [
    { label: "Reels script", text: "Write a 30-second Reels script for our new spring collection", icon: Film },
    { label: "Carousel idea", text: "Create a 6-slide educational carousel for first-time founders", icon: Images },
    { label: "Caption & hashtags", text: "Write a warm launch caption with focused hashtags", icon: MessageSquareText },
    { label: "Bio hook", text: "Rewrite our bio with a clear, memorable hook", icon: UserRound },
  ];

  return (
    <main className="page-wrap">
      <header className="page-heading">
        <div><p className="eyebrow">AI marketing workspace</p><h1>What are we creating today?</h1><p>Turn a rough idea into ready-to-publish Instagram content.</p></div>
        <div className="status-chip"><span /> Agent online</div>
      </header>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <div className="space-y-5">
          <div className="command-card">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Sparkles className="size-4 text-primary" /> Ask Mira</div>
            <Textarea aria-label="Marketing request" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Describe your campaign, audience, or idea..." className="min-h-36 resize-none border-0 bg-transparent p-0 text-lg shadow-none focus-visible:ring-0" />
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="hidden text-xs text-muted-foreground sm:block">Include your goal, audience, and tone for better results.</span>
              <Button aria-label="Generate content" size="icon" className="ml-auto size-11 rounded-full" disabled={!prompt.trim()} onClick={() => setGenerated(true)}><ArrowUp /></Button>
            </div>
          </div>

          <div><p className="section-label">Start with a template</p><div className="grid gap-3 sm:grid-cols-2">
            {starters.map(({ label, text, icon: Icon }) => <button key={label} className="starter" onClick={() => { setPrompt(text); setGenerated(false); }}><span className="starter-icon"><Icon /></span><span><strong>{label}</strong><small>{text}</small></span></button>)}
          </div></div>
        </div>

        <aside className="space-y-5">
          <div className="panel">
            <div className="panel-head"><div><p className="section-label mb-1">Live workflow</p><h2>Campaign builder</h2></div><span className="tiny-pill">4 steps</span></div>
            <div className="workflow">
              {[['Brief understood','Audience and campaign goal mapped','done'],['Content direction','Warm, useful, founder-led','done'],['Drafting variations','3 caption options in progress', generated ? 'active' : 'wait'],['Ready to review','Preview and refine your favorite','wait']].map(([title, sub, state], index) => <div className="flow-row" key={title}><div className={`flow-dot ${state}`}>{state === 'done' ? <Check /> : index + 1}</div><div><strong>{title}</strong><p>{sub}</p></div></div>)}
            </div>
          </div>

          <div className="preview-card">
            <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase text-muted-foreground">Output preview</span><Button variant="ghost" size="icon" aria-label="Copy output"><Copy /></Button></div>
            {generated ? <div className="mt-5"><p className="text-xs font-semibold text-primary">CAPTION · OPTION 1</p><p className="mt-3 text-sm leading-7">Your next big idea doesn’t need a bigger to-do list. It needs a clearer first step. Save this for the day you’re ready to turn “someday” into momentum. ✨</p><p className="mt-4 text-sm font-medium text-primary">#BuildInPublic #FounderLife #CreativeBusiness</p></div> : <div className="empty-preview"><Sparkles /><p>Your generated content will appear here.</p></div>}
          </div>
        </aside>
      </section>
    </main>
  );
}
