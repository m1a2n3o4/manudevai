import Link from "next/link";

const codingTools = [
  { tool: "Claude (Anthropic)", usage: "Primary AI coding partner — write code, debug, design architecture" },
  { tool: "Claude Code (Terminal)", usage: "Build full apps from your terminal using AI commands" },
  { tool: "GitHub Copilot", usage: "AI autocomplete inside VS Code — speeds up coding 3–5x" },
];

const smartFeatures = [
  { tech: "OpenAI API", build: "Add ChatGPT-like chat to your own Python + React apps" },
  { tech: "Anthropic Claude API", build: "Build AI assistants, content generators, code reviewers" },
  { tech: "Azure OpenAI", build: "Enterprise-grade AI integration using Microsoft Azure" },
  { tech: "Streaming AI Responses", build: "Stream AI output token-by-token in real-time to React UI" },
];

export default function AIInCourse() {
  return (
    <section id="curriculum" className="bg-pattern py-8 sm:py-12" style={{ backgroundColor: "#10044a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            &ldquo;AI ఈ Course లో ఎలా Use చేస్తాం?&rdquo;
          </h2>
          <p className="text-sm italic mb-3" style={{ color: "#ff9202" }}>(How do we use AI in this course? — See it for real)</p>
          <p className="text-base font-semibold max-w-2xl mx-auto" style={{ color: "#ff9202" }}>
            This is NOT a course where we just talk about AI. You&apos;ll BUILD with AI from Day 1.
          </p>
        </div>

        {/* Core Message */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {[
            { verb: "Think", desc: "like a developer" },
            { verb: "Build", desc: "with AI as your pair programmer" },
            { verb: "Ship", desc: "real products 10x faster" },
          ].map((item) => (
            <div key={item.verb} className="rounded-full px-4 py-1.5 border" style={{ backgroundColor: "#1a0f52", borderColor: "#2d1e80" }}>
              <span className="font-bold" style={{ color: "#ff9202" }}>{item.verb}</span>{" "}
              <span className="text-white/50 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* Side-by-side tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* AI Coding Tools */}
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#2d1e80" }}>
            <div className="px-4 py-3 text-center font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: "#1a0f52", color: "#ff9202" }}>
              AI Coding &amp; Development Tools
            </div>
            <div className="divide-y divide-[#2d1e80]">
              {codingTools.map((item) => (
                <div key={item.tool} className="flex flex-col gap-0.5 px-4 py-3" style={{ backgroundColor: "#10044a", borderTop: "1px solid #2d1e80" }}>
                  <span className="text-white font-semibold text-sm">{item.tool}</span>
                  <span className="text-white/50 text-xs">{item.usage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Smart Features */}
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#2d1e80" }}>
            <div className="px-4 py-3 text-center font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: "#1a0f52", color: "#ff9202" }}>
              AI for Building Smart Features
            </div>
            <div>
              {smartFeatures.map((item) => (
                <div key={item.tech} className="flex flex-col gap-0.5 px-4 py-3" style={{ backgroundColor: "#10044a", borderTop: "1px solid #2d1e80" }}>
                  <span className="text-white font-semibold text-sm">{item.tech}</span>
                  <span className="text-white/50 text-xs">{item.build}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#10044a] transition-all hover:scale-105"
            style={{ backgroundColor: "#ff9202" }}
          >
            View Full Curriculum
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
