const stats = [
  { value: "12+", label: "Years in Software Development" },
  { value: "300+", label: "Students Taught" },
  { value: "Active", label: "Working Full Stack Developer" },
];

export default function MeetCoach() {
  return (
    <section id="coach" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#10044a" }}>
      {/* Yellow divider at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #ff9202, transparent)" }} />

      {/* === Background shades & effects (3X) === */}

      {/* Large orange glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.12]" style={{ background: "radial-gradient(circle, #ff9202 0%, transparent 65%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.10]" style={{ background: "radial-gradient(circle, #ff9202 0%, transparent 65%)", transform: "translate(-30%, 30%)" }} />
      <div className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.08]" style={{ background: "radial-gradient(circle, #ff9202 0%, transparent 70%)" }} />

      {/* Purple / blue shade blobs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.15]" style={{ background: "radial-gradient(circle, #2a1f72 0%, transparent 60%)" }} />
      <div className="absolute bottom-[15%] right-[20%] w-[350px] h-[350px] rounded-full pointer-events-none opacity-[0.12]" style={{ background: "radial-gradient(circle, #1a0f52 0%, transparent 55%)" }} />
      <div className="absolute top-[45%] left-[50%] w-[250px] h-[250px] rounded-full pointer-events-none opacity-[0.08]" style={{ background: "radial-gradient(circle, #a8b4ff 0%, transparent 70%)", transform: "translateX(-50%)" }} />

      {/* Soft light accent blobs */}
      <div className="absolute top-[10%] left-[60%] w-[200px] h-[200px] rounded-full pointer-events-none opacity-[0.06]" style={{ background: "radial-gradient(circle, #d4b8ff 0%, transparent 70%)" }} />
      <div className="absolute bottom-[5%] left-[40%] w-[180px] h-[180px] rounded-full pointer-events-none opacity-[0.05]" style={{ background: "radial-gradient(circle, #ffb8c6 0%, transparent 70%)" }} />

      {/* Diagonal lines pattern - stronger */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #ff9202 0px, #ff9202 1px, transparent 1px, transparent 35px)" }} />

      {/* Cross-hatch overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)" }} />

      {/* Corner accents - bigger */}
      <div className="absolute top-8 right-8 w-48 h-48 pointer-events-none opacity-[0.15]" style={{ borderRight: "2px solid #ff9202", borderTop: "2px solid #ff9202", borderRadius: "0 20px 0 0" }} />
      <div className="absolute bottom-8 left-8 w-48 h-48 pointer-events-none opacity-[0.15]" style={{ borderLeft: "2px solid #ff9202", borderBottom: "2px solid #ff9202", borderRadius: "0 0 0 20px" }} />
      <div className="absolute top-8 left-8 w-24 h-24 pointer-events-none opacity-[0.08]" style={{ borderLeft: "1px solid #ff9202", borderTop: "1px solid #ff9202", borderRadius: "12px 0 0 0" }} />
      <div className="absolute bottom-8 right-8 w-24 h-24 pointer-events-none opacity-[0.08]" style={{ borderRight: "1px solid #ff9202", borderBottom: "1px solid #ff9202", borderRadius: "0 0 12px 0" }} />

      {/* Floating dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#ff9202 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Gradient sweep across section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ background: "linear-gradient(160deg, transparent 0%, #1a0f52 25%, transparent 50%, #2a1f72 75%, transparent 100%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Meet Your Coach
          </h2>
          <p className="text-sm italic" style={{ color: "#ff9202" }}>(Your guide on this journey)</p>
        </div>

        {/* Coach Card */}
        <div className="rounded-2xl p-6 sm:p-8 mb-8 border backdrop-blur-sm" style={{ backgroundColor: "rgba(26, 15, 82, 0.85)", borderColor: "#2d1e80" }}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            {/* Coach Photo */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden flex-shrink-0 p-[2px]" style={{ background: "linear-gradient(135deg, #ff9202, #ff920240, #ff9202)" }}>
              <img
                src="/coach.jpg"
                alt="Manohar Lotlapalli"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Manohar Lotlapalli</h3>
              <p className="font-medium mb-1" style={{ color: "#ff9202" }}>Full Stack Developer & Coach</p>
              <p className="text-white/40 text-sm mb-4">Hyderabad, India</p>

              {/* About */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                A passionate full stack developer with over 18 years of hands-on experience building scalable web applications. Manohar doesn&apos;t just teach from slides — he codes every single day, shipping real products using the latest technologies including React, Next.js, Node.js, and AI integrations. He has trained 3,000+ students, helping freshers and career-switchers land their dream jobs in tech. His teaching style is practical, patient, and deeply rooted in real-world industry experience. When you learn from Manohar, you learn from someone who walks the talk.
              </p>

              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/manohar-lotlapalli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 border"
                  style={{ borderColor: "#0A66C230", color: "#0A66C2", backgroundColor: "rgba(10, 102, 194, 0.08)" }}
                >
                  <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@manudevai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 border"
                  style={{ borderColor: "#FF000030", color: "#FF0000", backgroundColor: "rgba(255, 0, 0, 0.08)" }}
                >
                  <svg className="w-4 h-4" fill="#FF0000" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <polygon fill="#fff" points="9.545,15.568 15.818,12 9.545,8.432" />
                  </svg>
                  YouTube
                </a>
                <a
                  href="https://wa.me/919553345235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105 border"
                  style={{ borderColor: "#25D36630", color: "#25D366", backgroundColor: "rgba(37, 211, 102, 0.08)" }}
                >
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#10044a" }}>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#ff9202" }}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-center border-t pt-6" style={{ borderColor: "#2d1e80" }}>
            <p className="text-white/70 leading-relaxed mb-2">
              &ldquo;నేను course sell చేసే coach ని కాదు — daily code రాసే developer ని.
              <br />
              నేను చేసే పని మీకు నేర్పిస్తాను.&rdquo;
            </p>
            <p className="text-white/30 text-sm italic">
              (I&apos;m not a coach who sells courses — I&apos;m a developer who writes code daily. I&apos;ll teach you what I actually do.)
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
