"use client";

const stats = [
  {
    proof: "Full Stack Developer jobs in India right now",
    number: "9,000+",
    source: "LinkedIn (March 2026)",
    link: "https://in.linkedin.com/jobs/full-stack-developer-jobs",
  },
  {
    proof: "AI-related job openings in India",
    number: "79,500+",
    source: "Naukri (March 2026)",
    link: "https://www.naukri.com/ai-jobs",
  },
  {
    proof: "IT sector job growth in the past year",
    number: "6%",
    source: "Naukri JobSpeak Index",
    link: "https://www.bizzbuzz.news/Industry/Infotech/AI/ai-reshapes-it-hiring-traditional-tech-roles-remain-in-demand-1386898",
  },
  {
    proof: "Fresher recruitment growth",
    number: "8% rise in Feb 2026",
    source: "Naukri JobSpeak",
    link: "https://www.bizzbuzz.news/Industry/Infotech/AI/ai-reshapes-it-hiring-traditional-tech-roles-remain-in-demand-1386898",
  },
  {
    proof: "Fresher Full Stack salary",
    number: "₹4–6 LPA",
    source: "AlmaBetter",
    link: "https://www.almabetter.com/bytes/articles/full-stack-developer-salary",
  },
  {
    proof: "Mid-level (3-5 yrs) salary",
    number: "₹10–18 LPA",
    source: "Full-Stack",
    link: "https://www.thefullstack.co.in/indian-full-stack-developer-salary-2026/",
  },
  {
    proof: "Senior (5+ yrs) salary",
    number: "Up to ₹19 LPA",
    source: "Glassdoor (March 2026)",
    link: "https://www.glassdoor.co.in/Salaries/full-stack-developer-salary-SRCH_KO0,20.htm",
  },
];

const arguments3 = [
  {
    titleTe: "AI ను use చేసే Developer కి demand పెరుగుతోంది",
    titleEn: "Demand is growing for developers who USE AI",
    content:
      "Companies aren't removing developer roles — they're upgrading them. Full stack developers are expected to architect scalable systems, integrate AI-driven features, and ship production-grade products at startup speed.",
  },
  {
    titleTe: "AI tools వచ్చాయి — కానీ వాటిని operate చేయడానికి developers కావాలి",
    titleEn: "AI tools are here — but you need developers to operate them",
    content:
      "Think of it like this: Tractors replaced manual farming, but farmers didn't disappear — they became more productive. AI is the tractor. You're the farmer.",
  },
  {
    titleTe: '"AI + Full Stack" combination — 2026 లో most powerful skill',
    titleEn: "AI + Full Stack is the most powerful skill combo in 2026",
    content:
      "AI jobs for freshers in India saw a 22% hiring increase, with freshers earning ₹6-10 LPA in AI-related roles. Full Stack + AI knowledge = double the opportunities.",
  },
];

export default function WhyLearnCoding() {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "#10044a" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 text-center">
          &ldquo;AI వచ్చేసింది — ఇంకా Coding నేర్చుకోవాలా?&rdquo;
        </h2>
        <p className="text-center text-sm italic mb-8" style={{ color: "#ff9202" }}>
          (AI is here — Do I still need to learn coding?)
        </p>

        {/* Fear & Reality — plain text */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-white/50 mb-3">
            <span className="text-white/70 font-medium">The fear:</span>{" "}
            &ldquo;AI will replace developers. Why should I learn coding now?&rdquo;
          </p>
          <p className="text-lg" style={{ color: "#ff9202" }}>
            <span className="font-semibold">Short answer: Yes. But not the old way.</span>
          </p>
          <p className="text-white/60 mt-3">
            AI is replacing developers who <span className="text-white font-semibold">don&apos;t use AI</span>. Developers who{" "}
            <span style={{ color: "#ff9202" }} className="font-semibold">USE AI</span> are getting hired faster, paid more, and building 10x faster.
          </p>
        </div>

        {/* Stats — compact grid with gradient shining borders */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Let the numbers speak:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <a
                key={i}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-lg p-[1.5px] transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #ff9202, #ff920240, #ff9202)" }}
              >
                <div className="rounded-lg px-4 py-4 h-full" style={{ backgroundColor: "#10044a" }}>
                  <p className="font-bold text-lg sm:text-xl mb-1.5" style={{ color: "#ff9202" }}>{stat.number}</p>
                  <p className="text-white/50 text-sm leading-snug">{stat.proof}</p>
                  <p className="text-white/25 text-xs mt-1.5 group-hover:text-[#ff9202] transition-colors">{stat.source} ↗</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Industry Quote */}
        <div className="mb-10 border-l-2 pl-4" style={{ borderColor: "#ff9202" }}>
          <p className="text-white/50 text-sm leading-relaxed italic">
            &ldquo;AI will augment work rather than replace it — almost every software engineer today uses AI assistants like Copilot, which enhances productivity, but AI still needs engineers to provide domain knowledge and design direction.&rdquo;
          </p>
          <p className="text-white/30 text-xs mt-1">— IT Staffing CEO, BizzBuzz Report</p>
        </div>

        {/* 3 Point Argument */}
        <div className="space-y-5">
          {arguments3.map((arg, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#ff9202" }}>{i + 1}.</span>
              <div>
                <h4 className="text-white font-semibold">{arg.titleTe}</h4>
                <p className="text-white/30 text-xs italic mb-1">({arg.titleEn})</p>
                <p className="text-white/50 text-sm leading-relaxed">{arg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
