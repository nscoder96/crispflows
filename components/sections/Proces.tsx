const stappen = [
  {
    num: "01",
    title: "Gratis strategiegesprek",
    desc: "We analyseren jouw situatie, concurrentie en kansen in jouw regio. Geen verplichtingen, wel direct waardevolle inzichten.",
  },
  {
    num: "02",
    title: "Systeem bouwen & instellen",
    desc: "We bouwen je website, zetten de marketing op en richten CRM + AI in. Jij hoeft niets te doen — wij regelen het.",
  },
  {
    num: "03",
    title: "Live en nieuwe klanten",
    desc: "Binnen 3 weken sta je live. Daarna optimaliseren we doorlopend zodat de aanvragen blijven groeien.",
  },
];

export default function Proces() {
  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="proces">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionTag>Werkwijze</SectionTag>
        <h2
          className="font-black leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
        >
          Van gesprek tot
          <br />
          groeiende klantenstroom
        </h2>

        <div className="relative mt-16">
          {/* Connecting line — center of col 1 to center of col 3 */}
          <div
            className="hidden md:block absolute h-px"
            style={{
              top: "40px",
              left: "16.666%",
              right: "16.666%",
              background:
                "linear-gradient(to right, transparent, var(--green), transparent)",
              opacity: 0.35,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stappen.map((stap) => (
              <div key={stap.num} className="flex flex-col items-center md:items-center text-center">
                {/* Circle — centered, sits on the line */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-6 flex-shrink-0"
                  style={{
                    border: "1.5px solid var(--dark-border)",
                    color: "var(--green)",
                    background: "var(--dark)",
                  }}
                >
                  {stap.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{stap.title}</h3>
                <p
                  className="text-base leading-relaxed max-w-[260px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5"
      style={{ color: "var(--green)" }}
    >
      <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
      {children}
    </div>
  );
}
