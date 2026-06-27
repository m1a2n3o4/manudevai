export default function WhyDevAI() {
  const highlights = [
    {
      icon: "🤖",
      teluguTitle: "AI-First Learning",
      teluguSub: "Day 1 నుండే AI వాడతాం",
      desc: "AI is not saved for the end. From day one, you build with Claude, Cursor, and Copilot — just like a real developer does.",
    },
    {
      icon: "💼",
      teluguTitle: "Real Corporate Workflow",
      teluguSub: "Real Company Style లో నేర్చుకోండి",
      desc: "SDLC, Git commits, code reviews, cloud deployment — the exact workflow used inside top tech companies.",
    },
    {
      icon: "🏗️",
      teluguTitle: "Real Apps, Not Tutorials",
      teluguSub: "Tutorials కాదు — Real Products Build చేస్తాం",
      desc: "6 AI-powered projects — Chat App, Resume Builder, Code Assistant, Support Bot, Content Generator, Search App. All deployed, all real.",
    },
    {
      icon: "🙌",
      teluguTitle: "Non-IT అయినా పర్వాలేదు",
      teluguSub: "Zero Background? No Problem.",
      desc: "Beginners, career switchers, non-IT background — all welcome. We start from HTTP & DNS and go all the way to AI apps in production.",
    },
    {
      icon: "🧑‍💻",
      teluguTitle: "Active Developer నేర్పిస్తాడు",
      teluguSub: "18+ Years Experience, Still Codes Daily",
      desc: "Your trainer isn't a presenter — he's a working developer who ships React + Python + AI code every day and teaches what actually matters.",
    },
    {
      icon: "🚀",
      teluguTitle: "3 Months లో Job-Ready",
      teluguSub: "Resume + Portfolio + GitHub + Azure CI/CD",
      desc: "By the end: 12 live projects, GitHub full of commits, Azure deployments, and a portfolio that proves you can build real AI apps.",
    },
  ];

  return (
    <section
      id="why-devai"
      className="bg-pattern relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#0a0230" }}
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,146,2,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(255,146,2,0.12)",
              color: "#ff9202",
              border: "1px solid rgba(255,146,2,0.3)",
            }}
          >
            ఈ Course లో ఏముంది?
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            ఈ Course{" "}
            <span style={{ color: "#ff9202" }}>ఎందుకు Different?</span>
          </h2>
        </div>

        {/* Sub-heading */}
        <p
          className="text-center text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ fontFamily: "var(--font-telugu), var(--font-figtree), sans-serif" }}
        >
          Regular courses చదవడం నేర్పిస్తాయి.{" "}
          <span className="text-white/90 font-medium">
            మనం real software ఎలా build చేయాలో నేర్పిస్తాం.
          </span>
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,146,2,0.15)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,146,2,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Icon */}
              <div className="text-3xl mb-4">{item.icon}</div>

              {/* Telugu title */}
              <h3
                className="text-lg font-bold text-white mb-1 leading-snug"
                style={{ fontFamily: "var(--font-telugu), var(--font-figtree), sans-serif" }}
              >
                {item.teluguTitle}
              </h3>

              {/* Telugu sub */}
              <p
                className="text-sm font-medium mb-3"
                style={{
                  color: "#ff9202",
                  fontFamily: "var(--font-telugu), var(--font-figtree), sans-serif",
                }}
              >
                {item.teluguSub}
              </p>

              {/* English desc */}
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 rounded-2xl px-6 py-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,146,2,0.1) 0%, rgba(45,30,128,0.4) 100%)",
            border: "1px solid rgba(255,146,2,0.25)",
          }}
        >
          <p
            className="text-white text-xl sm:text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-telugu), var(--font-figtree), sans-serif" }}
          >
            AI + Full Stack Skills = Future-Ready Developer 🚀
          </p>
          <p className="text-white/55 text-sm sm:text-base mb-6">
            మన course తో మీరు just coding కాదు — real products build చేయడం నేర్చుకుంటారు.
          </p>
          <a
            href="#register"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "#ff9202",
              color: "#10044a",
            }}
          >
            Free Demo Book చేయండి →
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }}
      />
    </section>
  );
}
