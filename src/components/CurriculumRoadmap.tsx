"use client";

import { useState } from "react";
import Link from "next/link";

const modules = [
  {
    week: 1,
    title: "Web Fundamentals",
    phase: 1,
    topics: [
      "HTTP vs HTTPS — how data travels securely",
      "Client & Server — what happens when you open a website",
      "DNS — how domain names resolve to servers",
      "How websites actually work (request → response → render)",
      "Browser DevTools — inspect, debug, network tab",
      "CLI & Basic CMD Prompts — terminal confidence",
    ],
    aiTools: ["Claude — explain any concept instantly", "Cursor AI — setup your first project"],
    manualSkill: "You manually trace a browser request all the way from URL → DNS → Server → HTML render. No shortcuts.",
    project: "Visual Web Explainer — a simple page that shows how the web works with diagrams",
  },
  {
    week: 2,
    title: "Developer Setup, TypeScript & SDLC",
    phase: 1,
    topics: [
      "VS Code setup — extensions, shortcuts, workspace",
      "Git basics — init, add, commit, push, pull",
      "Azure DevOps — repos, pipelines intro",
      "TypeScript fundamentals — types, interfaces, type safety",
      "SDLC — how software is built in real companies",
      "FE + BE folder structure — how real projects are organised",
    ],
    aiTools: ["Claude Code — scaffold project structure from scratch", "Cursor AI — TypeScript type suggestions"],
    manualSkill: "You manually create a Git repo, set up folder structure (frontend + backend), and push your first commit to Azure DevOps.",
    project: "Project Blueprint — designed folder structure for a full-stack app, committed to Git, documented with README",
  },
  {
    week: 3,
    title: "React Foundations",
    phase: 1,
    topics: [
      "React components, JSX & props",
      "useState & useEffect hooks",
      "Bootstrap integration — responsive layouts fast",
      "Forms, validation & user input handling",
      "API calls from React using fetch()",
      "Rendering dynamic data from an API",
    ],
    aiTools: ["Cursor AI — generate React components", "v0 by Vercel — UI from text description", "Claude — debug React errors"],
    manualSkill: "You hand-write component logic, manage state yourself, and wire the fetch(). Cursor suggests — you decide what stays.",
    project: "React Dashboard UI — responsive Bootstrap layout with live API data and dynamic components",
  },
  {
    week: 4,
    title: "Python & FastAPI Backend",
    phase: 1,
    topics: [
      "Python fundamentals — syntax, functions, lists, dicts",
      "FastAPI basics — routes, request/response models",
      "REST API design — GET, POST, PUT, DELETE",
      "Pydantic models — data validation",
      "Testing APIs with Postman",
      "Connecting React frontend to Python backend (CORS setup)",
    ],
    aiTools: ["Claude Code — scaffold FastAPI routes", "Claude — debug Python errors", "Cursor AI — Pydantic model generation"],
    manualSkill: "You write every route handler manually. HTTP request → FastAPI route → Python logic → JSON response.",
    project: "Task Manager API — full REST API in Python/FastAPI, tested in Postman, consumed by React",
  },
  {
    week: 5,
    title: "SQL & PostgreSQL",
    phase: 1,
    topics: [
      "SQL fundamentals — SELECT, INSERT, UPDATE, DELETE",
      "Joins — INNER, LEFT, RIGHT",
      "PostgreSQL setup & pgAdmin",
      "Connecting Python (FastAPI) to PostgreSQL",
      "Schema design — tables, relationships, foreign keys",
      "CRUD operations end-to-end",
    ],
    aiTools: ["Claude — write and explain SQL queries", "Claude Code — generate database schema from requirements"],
    manualSkill: "You write raw SQL queries first. Then you connect them to Python. Every query must run in pgAdmin before you add it to code.",
    project: "Student Records System — full CRUD app with PostgreSQL + FastAPI + React frontend",
  },
  {
    week: 6,
    title: "Full Stack Integration + First Deployment",
    phase: 1,
    topics: [
      "React ↔ Python API ↔ PostgreSQL — wiring all three",
      "JWT Authentication — signup, login, protected routes",
      "Application architecture diagrams — FE + BE + DB design",
      "Environment variables & secrets management",
      "First CI/CD pipeline on Azure DevOps",
      "Live deployment to production server",
    ],
    aiTools: ["Claude Code — debug full-stack connection issues", "Claude — generate architecture diagrams from description", "Azure DevOps — automated deploy on push"],
    manualSkill: "You draw the full architecture diagram by hand first. Then you build it. Form → React → FastAPI → PostgreSQL → JWT → protected page.",
    project: "Full Stack Notes App — complete auth, CRUD, deployed live via Azure DevOps CI/CD pipeline",
    milestone: "By Week 6, you can build this without AI: React form → fetch() → FastAPI route → PostgreSQL → JWT → protected page. This is the core loop every full stack developer must own.",
  },
  {
    week: 7,
    title: "AI Fundamentals for Developers",
    phase: 2,
    topics: [
      "What is AI / ML / LLM — no math, just concepts",
      "How LLMs work — tokens, context windows, temperature",
      "Model types — GPT-4o, Claude, open-source (Llama)",
      "Prompt engineering basics — role, instruction, examples",
      "System prompts vs user prompts",
      "Common AI mistakes developers make",
    ],
    aiTools: ["OpenAI API — first direct API call", "Claude API — compare responses", "Ollama — run Llama 3 locally for free"],
    manualSkill: "",
    project: "AI Model Comparison Tool — app that sends same prompt to GPT, Claude & Llama, shows all 3 responses side by side",
  },
  {
    week: 8,
    title: "Working with AI APIs",
    phase: 2,
    topics: [
      "OpenAI / Azure OpenAI — Chat Completions API",
      "Claude API — Messages API, JSON output mode",
      "Sending prompts from Python backend",
      "Streaming AI responses to React UI (Server-Sent Events)",
      "Handling AI errors, retries & rate limits",
      "Cost tracking & token management",
    ],
    aiTools: ["OpenAI API — GPT-4o streaming integration", "Claude API — Anthropic Messages API", "Azure OpenAI — enterprise deployment"],
    manualSkill: "",
    project: "AI Chat Interface — real-time streaming chat, typing indicators, conversation history, model switching",
  },
  {
    week: 9,
    title: "Prompt Engineering Deep Dive",
    phase: 2,
    topics: [
      "Prompt structure — role, instruction, context, format",
      "Few-shot prompting with examples",
      "Chain-of-thought — make AI reason step by step",
      "Prompt debugging — why AI gave wrong output",
      "System prompt design for real apps",
      "Exercises: 'Improve this bad prompt'",
    ],
    aiTools: ["Claude — iterate and test prompts live", "OpenAI Playground — visual prompt testing", "Cursor AI — AI-assisted prompt iteration"],
    manualSkill: "",
    project: "AI Content Generator — blog writer, translator, tone adjuster. Switch between GPT / Claude / Llama with different prompts",
  },
  {
    week: 10,
    title: "Full AI App Architecture",
    phase: 2,
    topics: [
      "Designing a complete AI app — diagram first",
      "Frontend (React chat interface) + Backend (Python API) + AI layer",
      "Database design for AI apps (SQL for users + conversations)",
      "Async processing — background tasks for slow AI calls",
      "Caching AI responses — save cost, improve speed",
      "Security — input sanitisation, prompt injection prevention",
    ],
    aiTools: ["Claude — review architecture for weaknesses", "Claude Code — scaffold complete AI app structure", "Azure — deploy AI backend to cloud"],
    manualSkill: "",
    project: "AI Customer Support Bot — full architecture, React UI + Python backend + OpenAI + PostgreSQL, deployed live",
  },
  {
    week: 11,
    title: "Real AI Projects Sprint",
    phase: 2,
    topics: [
      "AI Resume Builder — paste JD → AI builds tailored resume",
      "AI Code Assistant — paste code → AI reviews + improves",
      "AI-powered Search — semantic search with meaning",
      "Git workflow: daily commits, pull requests, code reviews",
      "Weekly goals, task tracking & homework submission",
      "Feedback sessions — coach reviews your GitHub code",
    ],
    aiTools: ["Claude API — resume & code generation", "OpenAI API — semantic understanding", "GitHub — daily commit discipline"],
    manualSkill: "",
    project: "Choose & Build: AI Resume Builder OR AI Code Assistant — full stack, deployed, with proper Git history",
  },
  {
    week: 12,
    title: "Career Preparation & Final Project Launch",
    phase: 2,
    topics: [
      "Resume building — AI-generated bullets for your own projects",
      "Portfolio website — all 6 projects with live demo links",
      "LinkedIn profile for AI Full Stack Developer roles",
      "Interview prep — common questions, system design basics",
      "Freelancing guide — pricing AI projects, finding clients",
      "SDLC in action — present your project like a real developer",
    ],
    aiTools: ["Claude — write resume bullets", "Claude Code — final project polish", "v0 — portfolio UI generation"],
    manualSkill: "",
    project: "AI-Powered Search App — final capstone. Semantic search with React + Python + PostgreSQL + OpenAI. Deployed via Azure DevOps CI/CD. Portfolio-ready.",
  },
];

const projects = [
  { num: "01", name: "Web Explainer Page", week: 1, tools: "HTML + CSS + Claude", phase: 1 },
  { num: "02", name: "Project Blueprint + Git Setup", week: 2, tools: "Git + Azure DevOps", phase: 1 },
  { num: "03", name: "React Dashboard UI", week: 3, tools: "React + Bootstrap + v0", phase: 1 },
  { num: "04", name: "Task Manager API", week: 4, tools: "Python + FastAPI + Postman", phase: 1 },
  { num: "05", name: "Student Records System", week: 5, tools: "PostgreSQL + FastAPI + React", phase: 1 },
  { num: "06", name: "Full Stack Notes App + Auth", week: 6, tools: "JWT + Azure CI/CD", phase: 1 },
  { num: "07", name: "AI Model Comparison Tool", week: 7, tools: "GPT + Claude + Llama", phase: 2 },
  { num: "08", name: "AI Chat Interface (Streaming)", week: 8, tools: "OpenAI API + Claude API", phase: 2 },
  { num: "09", name: "AI Content Generator", week: 9, tools: "Prompt Engineering + Multi-model", phase: 2 },
  { num: "10", name: "AI Customer Support Bot", week: 10, tools: "React + Python + OpenAI + SQL", phase: 2 },
  { num: "11", name: "AI Resume Builder / Code Assistant", week: 11, tools: "Claude API + FastAPI", phase: 2 },
  { num: "12", name: "AI-Powered Search App (Capstone)", week: 12, tools: "Full Stack + Azure DevOps", phase: 2 },
];

export default function CurriculumRoadmap() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#030712" }}>
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ backgroundColor: "#10044a" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ff9202, transparent 65%)" }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #a8b4ff, transparent 65%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border" style={{ backgroundColor: "rgba(255, 146, 2, 0.1)", borderColor: "rgba(255, 146, 2, 0.3)", color: "#ff9202" }}>
            React + Python + SQL + AI &bull; Telugu లో Live &bull; 3 Months &bull; 12 Projects
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            AI Full Stack Developer{" "}
            <span style={{ color: "#ff9202" }}>Roadmap</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            12 weeks. 12 deployed projects. From web fundamentals to full AI-powered apps. Every week builds on the last — here&apos;s exactly what you&apos;ll learn.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { label: "Duration", value: "3 Months" },
              { label: "Daily", value: "2 Hrs/Day" },
              { label: "Total Hours", value: "~120 Hrs" },
              { label: "Projects", value: "12 Live" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-3 border" style={{ backgroundColor: "rgba(26, 15, 82, 0.6)", borderColor: "#2d1e80" }}>
                <div className="text-lg sm:text-xl font-bold" style={{ color: "#ff9202" }}>{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 1 Header */}
      <section className="relative py-10" style={{ backgroundColor: "#0a0230" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm" style={{ background: "linear-gradient(135deg, #2a1f72, #10044a)" }}>
              P1
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Phase 1 — Foundation</h2>
              <p className="text-white/40 text-sm">Weeks 1–6 &bull; Fundamentals first. You write and understand every line.</p>
            </div>
          </div>
          <p className="text-white/30 text-sm ml-16">
            AI tools speed up the work — they don&apos;t write it for you. If you can&apos;t explain your code without AI, you haven&apos;t learned it yet.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-6" style={{ backgroundColor: "#0a0230" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {modules.map((week, idx) => {
            const isOpen = openWeek === week.week;
            const isPhase2Start = week.week === 7;

            return (
              <div key={week.week}>
                {isPhase2Start && (
                  <div className="mb-8 mt-4">
                    <div className="rounded-xl p-4 mb-8 border text-center" style={{ backgroundColor: "rgba(255, 146, 2, 0.05)", borderColor: "rgba(255, 146, 2, 0.2)" }}>
                      <p className="text-sm font-semibold" style={{ color: "#ff9202" }}>
                        ✦ FOUNDATION COMPLETE ✦
                      </p>
                      <p className="text-white/50 text-xs mt-1">
                        You can now build: React form → fetch() → FastAPI route → PostgreSQL → JWT → deployed on Azure. This is your foundation.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-[#10044a] text-sm" style={{ background: "linear-gradient(135deg, #ff9202, #ffb84d)" }}>
                        P2
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Phase 2 — AI Features</h2>
                        <p className="text-white/40 text-sm">Weeks 7–12 &bull; Build real AI-powered applications. Skills most developers don&apos;t have.</p>
                      </div>
                    </div>
                    <p className="text-white/30 text-sm ml-16 mb-6">
                      Your foundation is solid — time to add the AI superpowers.
                    </p>
                  </div>
                )}

                <div className="relative flex gap-4 sm:gap-6 mb-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 flex-shrink-0"
                      style={{
                        backgroundColor: isOpen ? (week.phase === 2 ? "#ff9202" : "#2a1f72") : "#0a0230",
                        borderColor: week.phase === 2 ? "#ff9202" : "#2a1f72",
                        color: isOpen && week.phase === 2 ? "#10044a" : "#fff",
                      }}
                    >
                      {week.week}
                    </div>
                    {idx < modules.length - 1 && (
                      <div className="w-[2px] flex-1 min-h-[20px]" style={{ backgroundColor: week.phase === 2 ? "rgba(255, 146, 2, 0.2)" : "#2d1e80" }} />
                    )}
                  </div>

                  <div className="flex-1 pb-4">
                    <button
                      onClick={() => setOpenWeek(isOpen ? null : week.week)}
                      className="w-full text-left rounded-xl p-4 sm:p-5 border transition-all duration-300 hover:border-[#ff9202]/30"
                      style={{
                        backgroundColor: isOpen ? "rgba(26, 15, 82, 0.9)" : "rgba(26, 15, 82, 0.5)",
                        borderColor: isOpen ? (week.phase === 2 ? "rgba(255, 146, 2, 0.3)" : "#2a1f72") : "#1a0f52",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-white font-semibold text-sm sm:text-base">{week.title}</h3>
                            {week.phase === 2 && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "rgba(255, 146, 2, 0.15)", color: "#ff9202" }}>
                                AI-HEAVY
                              </span>
                            )}
                          </div>
                          <p className="text-white/30 text-xs line-clamp-1">{week.project}</p>
                        </div>
                        <svg
                          className={`w-5 h-5 text-white/30 transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {isOpen && (
                        <div className="mt-4 space-y-4" onClick={(e) => e.stopPropagation()}>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Topics Covered</div>
                            <div className="grid gap-1.5">
                              {week.topics.map((topic) => (
                                <div key={topic} className="flex items-start gap-2 text-sm text-white/70">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: week.phase === 2 ? "#ff9202" : "#2a1f72" }} />
                                  {topic}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#ff9202" }}>AI Tools Used</div>
                            <div className="flex flex-wrap gap-2">
                              {week.aiTools.map((tool) => (
                                <span key={tool} className="text-xs px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "rgba(255, 146, 2, 0.05)", borderColor: "rgba(255, 146, 2, 0.15)", color: "rgba(255, 255, 255, 0.6)" }}>
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {week.manualSkill && (
                            <div className="rounded-lg p-3 border" style={{ backgroundColor: "rgba(42, 31, 114, 0.4)", borderColor: "rgba(42, 31, 114, 0.6)" }}>
                              <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Manual Skill Focus</div>
                              <p className="text-white/60 text-sm">{week.manualSkill}</p>
                            </div>
                          )}

                          <div className="rounded-lg p-3 border" style={{ backgroundColor: "rgba(255, 146, 2, 0.05)", borderColor: "rgba(255, 146, 2, 0.15)" }}>
                            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#ff9202" }}>Week Project</div>
                            <p className="text-white/80 text-sm font-medium">{week.project}</p>
                          </div>

                          {week.milestone && (
                            <div className="rounded-lg p-3 border" style={{ backgroundColor: "rgba(37, 211, 102, 0.05)", borderColor: "rgba(37, 211, 102, 0.15)" }}>
                              <p className="text-green-400/80 text-sm">{week.milestone}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 12 Projects Grid */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#10044a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">12 Projects You&apos;ll Build & Deploy</h2>
            <span className="block w-16 h-[3px] mx-auto mb-3 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
            <p className="text-white/40 text-sm max-w-lg mx-auto">Every project is deployed live. Recruiters see real links, not just code.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div
                key={p.num}
                className="rounded-xl p-4 border transition-all hover:border-[#ff9202]/30 group"
                style={{ backgroundColor: "#1a0f52", borderColor: "#2d1e80" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: p.phase === 2 ? "rgba(255, 146, 2, 0.15)" : "rgba(42, 31, 114, 0.8)",
                      color: p.phase === 2 ? "#ff9202" : "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{p.name}</h4>
                    <p className="text-xs" style={{ color: "#ff9202" }}>Week {p.week} &bull; {p.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Notes */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#0a0230" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">How This Course Works</h2>
            <span className="block w-16 h-[3px] mx-auto mb-3 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📅", title: "Weekly Goals", desc: "Every Monday we plan the week's goal together — no confusion about what to do." },
              { icon: "💻", title: "Daily Code to Git", desc: "Every day you push code to Git. Anyone can see your progress. Builds discipline fast." },
              { icon: "✅", title: "Daily Tasks + Solutions", desc: "Every task has a solution with code + explanation — you never get stuck without help." },
              { icon: "🏗️", title: "Weekend Mini Projects", desc: "Weekends are for building. Mini projects that apply everything from the week." },
              { icon: "👀", title: "Code Review & Feedback", desc: "Submit homework to Git. Coach reviews your code and gives personal feedback." },
              { icon: "🗂️", title: "Student Tracking Portal", desc: "Separate portal to track all your tasks, projects, and progress in one place." },
            ].map((note) => (
              <div key={note.title} className="rounded-xl p-5 border" style={{ backgroundColor: "rgba(26, 15, 82, 0.6)", borderColor: "#2d1e80" }}>
                <div className="text-2xl mb-3">{note.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{note.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{note.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#10044a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Skills on Your Resume After 3 Months</h2>
            <span className="block w-16 h-[3px] mx-auto mb-3 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-5 sm:p-6 border" style={{ backgroundColor: "rgba(26, 15, 82, 0.6)", borderColor: "#2d1e80" }}>
              <h3 className="font-bold mb-4" style={{ color: "#ff9202" }}>AI Development Skills</h3>
              <div className="space-y-2">
                {[
                  "Prompt Engineering (system, few-shot, chain-of-thought)",
                  "OpenAI API — GPT-4o, Chat Completions, streaming",
                  "Anthropic Claude API — Messages, JSON output mode",
                  "Azure OpenAI — enterprise AI integration",
                  "Real-time AI streaming with Server-Sent Events",
                  "Model switching — GPT vs Claude vs Llama",
                  "AI cost tracking & optimisation",
                ].map((skill) => (
                  <div key={skill} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#ff9202" }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-5 sm:p-6 border" style={{ backgroundColor: "rgba(26, 15, 82, 0.6)", borderColor: "#2d1e80" }}>
              <h3 className="font-bold mb-4 text-white">Full Stack Foundation Skills</h3>
              <div className="space-y-2">
                {[
                  "React — hooks, components, API calls, Bootstrap",
                  "Python & FastAPI — REST APIs, Pydantic models",
                  "SQL & PostgreSQL — queries, joins, schema design",
                  "JWT Authentication — signup, login, protected routes",
                  "TypeScript — typed components and APIs",
                  "Git & Azure DevOps — daily commits, CI/CD pipelines",
                  "Azure deployment — production-grade live apps",
                ].map((skill) => (
                  <div key={skill} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#2a1f72" }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center" style={{ backgroundColor: "#0a0230" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            3 months from now, you&apos;ll have 12 deployed projects, a job-ready portfolio, and AI skills most developers don&apos;t have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#register"
              className="inline-block px-8 py-3 rounded-full font-semibold text-[#10044a] transition-all hover:scale-105"
              style={{ backgroundColor: "#ff9202" }}
            >
              Register Free
            </Link>
            <a
              href="https://wa.me/919515456891?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20DevAI%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-semibold border transition-all hover:bg-[#ff9202] hover:text-[#10044a] hover:border-[#ff9202]"
              style={{ borderColor: "#ff9202", color: "#ff9202" }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
