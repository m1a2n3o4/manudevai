import Link from "next/link";

const abilities = [
  {
    title: "Design a Complete Project Architecture",
    desc: "Given any requirement, you'll draw the full diagram — React frontend, Python backend, SQL database, AI layer, deployment. Like a real senior developer.",
  },
  {
    title: "Build Full Stack Apps with React + Python",
    desc: "From a blank screen to a live deployed app. React UI → FastAPI backend → PostgreSQL database → Azure cloud. You'll know every connection.",
  },
  {
    title: "Integrate AI into Any Application",
    desc: "Add OpenAI or Claude to any app — streaming chat, content generation, code review, smart search. AI features that real companies pay for.",
  },
  {
    title: "Deploy to Production via CI/CD",
    desc: "Push code → Azure DevOps pipeline runs → app is live. No manual steps. This is how real companies ship software every day.",
  },
  {
    title: "Talk Tech in Any Interview — Confidently",
    desc: 'When asked "explain REST APIs" or "design this architecture" — you\'ll answer from experience, not memorization. Because you actually built it.',
  },
];

const tangibles = [
  { title: "GitHub Profile with 6+ Real Projects", desc: "Six real, deployed, working applications. Clean code, proper READMEs, and commit history showing YOUR work." },
  { title: "Live Deployed Applications", desc: 'Real URLs to share. Instead of "I know React" you\'ll say "here, open this link."' },
  { title: "Professional LinkedIn Profile", desc: "Rebuilt together — headline, about section, projects, skills, and content strategy so recruiters come to YOU." },
  { title: "Complete Interview Preparation Kit", desc: "50+ questions with answers you understand, system design basics, mock interviews, and salary negotiation." },
  { title: "Resume That Actually Works", desc: "Passes ATS, highlights impact, frames gaps as advantages. Tailored for the Indian job market." },
  { title: "Course Completion Certificate", desc: "Verified certificate for LinkedIn — paired with your GitHub and deployed apps, it completes your profile." },
];

const timeline = [
  { step: "Step 1", milestone: '"Oh, I can actually understand code!"' },
  { step: "Step 2", milestone: '"I just built my first app with AI!"' },
  { step: "Step 3", milestone: '"Wait — I built this full stack app by myself?"' },
  { step: "Step 4", milestone: '"I\'m building an AI chatbot... me?!"' },
  { step: "Step 5", milestone: '"My GitHub looks like a real developer\'s!"' },
  { step: "Step 6", milestone: '"I just deployed my own product. Resume ready. Let\'s go."' },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-pattern py-8 sm:py-12" style={{ backgroundColor: "#10044a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            What Will You Have After This Course?
          </h2>
          <p className="text-sm italic mb-4" style={{ color: "#ff9202" }}>(Not just knowledge — Proof. Portfolio. Confidence.)</p>
          <span className="block w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Everything you need to <span className="text-white font-semibold">get hired or start earning.</span>
          </p>
        </div>

        {/* What You'll Be Able To Do */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: "#ff9202" }}>
            What You&apos;ll Be ABLE To Do
            <span className="block w-16 h-[3px] mx-auto mt-2 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          </h3>
          <div className="space-y-4">
            {abilities.map((a, i) => (
              <div key={i} className="flex gap-4 rounded-xl p-5 border transition-colors hover:border-[#ff9202]/30" style={{ backgroundColor: "#1a0f52", borderColor: "#2d1e80" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ backgroundColor: "rgba(255, 146, 2, 0.15)", color: "#ff9202" }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{a.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Have */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: "#ff9202" }}>
            What You&apos;ll HAVE In Your Hands
            <span className="block w-16 h-[3px] mx-auto mt-2 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tangibles.map((t) => (
              <div key={t.title} className="rounded-xl p-5 border transition-colors hover:border-[#ff9202]/30" style={{ backgroundColor: "#1a0f52", borderColor: "#2d1e80" }}>
                <h4 className="text-white font-semibold text-sm mb-2">{t.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255, 0, 0, 0.05)", border: "1px solid rgba(255, 0, 0, 0.15)" }}>
              <div className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">BEFORE (Day 0)</div>
              <ul className="space-y-3">
                {[
                  "Scared of coding",
                  "Empty GitHub — no projects",
                  '"Looking for opportunities" on LinkedIn',
                  "No idea how apps actually work",
                  "Can't explain any tech in an interview",
                  "Confused about career direction",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(37, 211, 102, 0.05)", border: "1px solid rgba(37, 211, 102, 0.15)" }}>
              <div className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">AFTER (This Course)</div>
              <ul className="space-y-3">
                {[
                  "Build full apps independently with AI",
                  "GitHub with 6 real, deployed projects",
                  "LinkedIn attracts recruiters",
                  "Understands complete app architecture",
                  "Confidently explains tech in interviews",
                  "Clear path — job, freelancing, or own product",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Student Journey Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: "#ff9202" }}>
            Your Journey
            <span className="block w-16 h-[3px] mx-auto mt-2 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5" style={{ backgroundColor: "#2d1e80" }} />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {timeline.map((t, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10 font-bold text-xs" style={{ backgroundColor: "rgba(255, 146, 2, 0.15)", color: "#ff9202", border: "2px solid #10044a" }}>
                    {t.step.replace("Step ", "")}
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed italic">{t.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="rounded-2xl p-6 sm:p-8 text-center border" style={{ backgroundColor: "#1a0f52", borderColor: "#ff920230" }}>
          <p className="text-white/80 leading-relaxed mb-2">
            <strong className="text-white">
              &ldquo;Just with this course — your GitHub, LinkedIn, Resume, and Portfolio will all be ready. When the interview call comes — you&apos;ll be ready. That&apos;s my commitment.&rdquo;
            </strong>
          </p>
          <p className="text-sm italic mt-2" style={{ color: "#ff9202" }}>
            — Manohar Lotlapalli
          </p>
        </div>

        <div className="mt-10 text-center">
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
