"use client";

import { useState, useEffect } from "react";

const slidingTexts = [
  "Build and ship real AI apps",
  "Build apps 10x faster",
  "Understand flow and architecture of applications",
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
    <section className="bg-pattern relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: "#10044a" }}>
      <style>{`
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes counter-spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg); } }
      `}</style>

      {/* ONE BIG CIRCLE — covers full hero */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "120vmin",
          height: "120vmin",
          animation: "spin-slow 60s linear infinite",
        }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          {/* Main thick filled ring band */}
          <circle cx="500" cy="500" r="480" fill="none" stroke="#1a0f52" strokeWidth="60" />
          {/* Bright inner edge */}
          <circle cx="500" cy="500" r="451" fill="none" stroke="#2a1f72" strokeWidth="2" />
          {/* Bright outer edge */}
          <circle cx="500" cy="500" r="499" fill="none" stroke="#2a1f72" strokeWidth="1.5" />
          {/* Dashed decorative ring inside */}
          <circle cx="500" cy="500" r="465" fill="none" stroke="#2d1e80" strokeWidth="1.5" strokeDasharray="20 15" />
          {/* Dashed decorative ring outside */}
          <circle cx="500" cy="500" r="490" fill="none" stroke="#2d1e80" strokeWidth="1.5" strokeDasharray="12 20 6 20" />
          {/* Yellow dashed road-style lines between logos */}
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
              <path
                key={`dash-${startAngle}`}
                d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                fill="none"
                stroke="#ff9202"
                strokeWidth="1.5"
                strokeDasharray="12 8"
                strokeLinecap="round"
                opacity="0.6"
              />
            );
          })}
          {/* Logo background circles on the ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 500 + 480 * Math.cos(rad);
            const y = 500 + 480 * Math.sin(rad);
            return (
              <g key={angle}>
                <circle cx={x} cy={y} r="32" fill="#10044a" stroke="#2d1e80" strokeWidth="2" />
                <circle cx={x} cy={y} r="28" fill="#1a0f52" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Logo images orbiting on the circle - counter-rotate to stay upright */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: "120vmin",
          height: "120vmin",
          animation: "spin-slow 60s linear infinite",
        }}
      >
        {[
          { angle: 0, src: "/logos/python.svg", name: "Python" },
          { angle: 45, src: "/logos/react.svg", name: "React" },
          { angle: 90, src: "/logos/postgresql.svg", name: "SQL" },
          { angle: 135, src: "/logos/bootstrap.svg", name: "Bootstrap" },
          { angle: 180, src: "/logos/typescript.svg", name: "TypeScript" },
          { angle: 225, src: "/logos/openai.svg", name: "OpenAI" },
          { angle: 270, src: "/logos/claude.svg", name: "Claude" },
          { angle: 315, src: "/logos/azure.svg", name: "Azure" },
        ].map((tech) => {
          const rad = (tech.angle * Math.PI) / 180;
          // 48% of container = on the ring (480/1000 of SVG)
          const x = 50 + 48 * Math.cos(rad);
          const y = 50 + 48 * Math.sin(rad);
          return (
            <div
              key={tech.angle}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "clamp(36px, 5vmin, 56px)",
                height: "clamp(36px, 5vmin, 56px)",
                animation: "counter-spin 60s linear infinite",
              }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Orange accent line at top */}
      <div className="absolute top-16 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-5 py-1.5 rounded-full text-sm font-semibold border"
          style={{ borderColor: "#ff9202", color: "#ff9202", backgroundColor: "rgba(255, 146, 2, 0.08)" }}
        >
          New Batch Starting Soon
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #b0b0b0 100%)" }}>
            AI-First Full Stack Development
          </span>
          <span className="block text-transparent bg-clip-text mt-1" style={{ backgroundImage: "linear-gradient(90deg, #a8b4ff 0%, #d4b8ff 50%, #ffb8c6 100%)" }}>
            From Planning to Production
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-8" style={{ color: "#ff9202" }}>
          Build Real Products. Not Just Projects.
        </p>

        {/* Sliding Text */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            <span className="text-white/60 font-medium">Learn AI-First Full Stack to</span>
            <span
              className={`font-bold transition-all duration-400 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
              style={{ color: "#ff9202" }}
            >
              {slidingTexts[currentIndex]}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#register"
            className="px-8 py-3.5 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff9202]/20"
            style={{ backgroundColor: "#ff9202", color: "#10044a" }}
          >
            Book a Free Demo Session
          </a>
          <a
            href="/curriculum"
            className="border px-8 py-3.5 rounded-xl font-semibold text-lg transition-all hover:scale-105 border-white/30 text-white hover:border-[#ff9202] hover:text-[#ff9202]"
          >
            View Curriculum
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "3 Months", label: "Intensive Program" },
            { value: "6", label: "Real AI Projects" },
            { value: "15+", label: "Technologies Covered" },
            { value: "100%", label: "AI-First Curriculum" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#ff9202" }}>{stat.value}</div>
              <div className="text-sm mt-1 text-white/50">{stat.label}</div>
              <div className="w-8 h-[2px] mx-auto mt-2" style={{ backgroundColor: "rgba(255, 146, 2, 0.3)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom orange accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
    </section>
  );
}
