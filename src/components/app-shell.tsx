import { Link } from "@tanstack/react-router";
import { BarChart3, Bot, CalendarDays, Newspaper, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const items = [
  { label: "AI Agent", to: "/" as const, icon: Bot },
  { label: "News", to: "/news" as const, icon: Newspaper },
  { label: "Content Planner", to: "/planner" as const, icon: CalendarDays },
  { label: "Analytics", to: "/analytics" as const, icon: BarChart3 },
];

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background">
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4">
      <div className="flex w-full max-w-5xl items-center gap-2 rounded-full border border-border bg-background/90 p-1.5 shadow-[0_12px_40px_color-mix(in_oklab,var(--foreground)_9%,transparent)] backdrop-blur-xl">
        <Link to="/" className="ml-2 mr-auto flex items-center gap-2 font-display text-sm font-bold"><span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="size-4" /></span><span className="hidden sm:inline">Mira</span></Link>
        <nav aria-label="Primary" className="flex min-w-0 items-center gap-1">
          {items.map(({ label, to, icon: Icon }) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}><Icon /><span className="hidden md:inline">{label}</span></Link>)}
        </nav>
      </div>
    </header>
    {children}
  </div>;
}