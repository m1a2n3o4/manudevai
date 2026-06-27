"use client";

import { useState, useEffect } from "react";

const slidingTexts = [
  "Build and ship real AI apps",
  "Build apps 10x faster",
  "Design architecture of applications",
];

const highlightedTechs = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "AI", logo: "/logos/claude.svg" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slidingTexts.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-pattern relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#10044a" }}
    >
      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .shine-btn {
          position: relative;
          padding: 2px;
          border-radius: 12px;
          overflow: hidden;
          background: #10044a;
        }
        .shine-ring {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent 0%, #ff9202 20%, #fff8 25%, #ff9202 30%, transparent 50%);
          animation: border-spin 2.5s linear infinite;
        }
        .shine-inner {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Badge — anchored near top */}
      <div className="absolute top-[88px] left-0 right-0 flex justify-center z-10 pointer-events-none">
        <div
          className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-semibold border"
          style={{ borderColor: "#ff9202", color: "#ff9202", backgroundColor: "rgba(255,146,2,0.08)" }}
        >
          New Batch Starting Soon
        </div>
      </div>

      {/* Circle — desktop only */}
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 pointer-events-none"
        style={{ width: "120vmin", height: "120vmin", animation: "spin-slow 60s linear infinite" }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle cx="500" cy="500" r="480" fill="none" stroke="#1a0f52" strokeWidth="60" />
          <circle cx="500" cy="500" r="451" fill="none" stroke="#2a1f72" strokeWidth="2" />
          <circle cx="500" cy="500" r="499" fill="none" stroke="#2a1f72" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="465" fill="none" stroke="#2d1e80" strokeWidth="1.5" strokeDasharray="20 15" />
          <circle cx="500" cy="500" r="490" fill="none" stroke="#2d1e80" strokeWidth="1.5" strokeDasharray="12 20 6 20" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((startAngle) => {
            const gap = 8;
            const a1 = startAngle + gap;
            const a2 = startAngle + 45 - gap;
            const r = 480;
            const rad1 = (a1 * Math.PI) / 180;
            const rad2 = (a2 * Math.PI) / 180;
            const x1 = 500 + r * Math.cos(rad1);
            const y1 = 500 + r * Math.sin(rad1);
            const x2 = 500 + r * Math.cos(rad2);
            const y2 = 500 + r * Math.sin(rad2);
            return (
              <path key={`dash-${startAngle}`} d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                fill="none" stroke="#ff9202" strokeWidth="1.5" strokeDasharray="12 8" strokeLinecap="round" opacity="0.6" />
            );
          })}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 500 + 480 * Math.cos(rad);
            const y = 500 + 480 * Math.sin(rad);
            const isHighlighted = [0, 45, 90, 270].includes(angle);
            return (
              <g key={angle}>
                <circle cx={x} cy={y} r={isHighlighted ? 38 : 32} fill="#10044a"
                  stroke={isHighlighted ? "#ff9202" : "#2d1e80"} strokeWidth={isHighlighted ? 2.5 : 2} />
                <circle cx={x} cy={y} r={isHighlighted ? 34 : 28} fill="#1a0f52" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Logos — desktop only */}
      <div
        className="hidden sm:block absolute top-1/2 left-1/2 pointer-events-none"
        style={{ width: "120vmin", height: "120vmin", animation: "spin-slow 60s linear infinite" }}
      >
        {[
          { angle: 0,   src: "/logos/python.svg",     name: "Python",     highlight: true },
          { angle: 45,  src: "/logos/react.svg",       name: "React",      highlight: true },
          { angle: 90,  src: "/logos/postgresql.svg",  name: "PostgreSQL", highlight: true },
          { angle: 135, src: "/logos/bootstrap.svg",   name: "Bootstrap",  highlight: false },
          { angle: 180, src: "/logos/typescript.svg",  name: "TypeScript", highlight: false },
          { angle: 225, src: "/logos/openai.svg",      name: "OpenAI",     highlight: false },
          { angle: 270, src: "/logos/claude.svg",      name: "AI",         highlight: true },
          { angle: 315, src: "/logos/azure.svg",       name: "Azure",      highlight: false },
        ].map((tech) => {
          const rad = (tech.angle * Math.PI) / 180;
          const x = 50 + 48 * Math.cos(rad);
          const y = 50 + 48 * Math.sin(rad);
          return (
            <div
              key={tech.angle}
              className="absolute flex flex-col items-center gap-0.5"
              style={{ left: `${x}%`, top: `${y}%`, animation: "counter-spin 60s linear infinite" }}
            >
              <img src={tech.src} alt={tech.name}
                style={{ width: "clamp(26px, 3.8vmin, 42px)", height: "clamp(26px, 3.8vmin, 42px)" }}
                className="object-contain drop-shadow-lg"
              />
              <span className="font-bold whitespace-nowrap tracking-wide"
                style={{ fontSize: "clamp(7px, 1vmin, 10px)", color: tech.highlight ? "#ff9202" : "rgba(255,255,255,0.5)" }}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Orange accent line at top */}
      <div className="absolute top-20 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 text-center">

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-4 tracking-tight">
          <span className="block text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #b0b0b0 100%)" }}>
            AI-First Full Stack Development
          </span>
          <span className="block text-transparent bg-clip-text mt-1"
            style={{ backgroundImage: "linear-gradient(90deg, #a8b4ff 0%, #d4b8ff 50%, #ffb8c6 100%)" }}>
            From Planning to Production
          </span>
        </h1>

        <p className="text-base sm:text-2xl md:text-3xl font-medium mb-5" style={{ color: "#ff9202" }}>
          Build Real Products. Not Just Projects.
        </p>

        {/* Sliding Text */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-sm sm:text-xl md:text-2xl">
            <span className="text-white/60 font-medium">Learn AI-First Full Stack to</span>
            <span
              className={`font-bold transition-all duration-400 ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
              style={{ color: "#ff9202" }}
            >
              {slidingTexts[currentIndex]}
            </span>
          </div>
        </div>

        {/* CTA Buttons — always in one row */}
        <div className="flex flex-row gap-3 justify-center mb-6">
          <div className="shine-btn flex-1 sm:flex-none">
            <a
              href="https://chat.whatsapp.com/E7URSiG2XGq3f0MjnD3j8o"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-inner block px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-[10px] font-semibold text-xs sm:text-base text-center transition-all hover:scale-105"
              style={{ backgroundColor: "#ff9202", color: "#10044a" }}
            >
              Join Free Workshop
            </a>
          </div>
          <div className="shine-btn flex-1 sm:flex-none">
            <a
              href="/curriculum"
              className="shine-inner block px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-[10px] font-semibold text-xs sm:text-base text-center transition-all hover:scale-105 text-white"
              style={{ backgroundColor: "#10044a" }}
            >
              View Curriculum
            </a>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {highlightedTechs.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
              style={{ backgroundColor: "rgba(255,146,2,0.07)", borderColor: "rgba(255,146,2,0.3)" }}
            >
              <img src={tech.logo} alt={tech.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <span className="text-xs sm:text-sm font-bold" style={{ color: "#ff9202" }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[
            { value: "3 Months", label: "Intensive Program" },
            { value: "6", label: "Real AI Projects" },
            { value: "15+", label: "Technologies Covered" },
            { value: "100%", label: "AI-First Curriculum" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-3xl font-bold" style={{ color: "#ff9202" }}>{stat.value}</div>
              <div className="text-xs sm:text-sm mt-1 text-white/50">{stat.label}</div>
              <div className="w-6 h-[2px] mx-auto mt-2" style={{ backgroundColor: "rgba(255,146,2,0.3)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom orange accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
    </section>
  );
}
