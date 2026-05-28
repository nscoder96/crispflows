const reviews = [
  {
    initials: "JH",
    name: "Jan Hoekstra",
    bedrijf: "Hoekstra Hoveniers, Groningen",
    quote:
      "Ik was sceptisch over wat een website kan doen, maar nu snap ik het. Elke week komen er nieuwe aanvragen binnen via mijn site. Fantastisch resultaat.",
  },
  {
    initials: "SV",
    name: "Sandra van Dijk",
    bedrijf: "Tuindesign By Sandra, Amsterdam",
    quote:
      "De AI chatbot alleen al heeft me zeker 5 uur per week bespaard. Klanten krijgen direct antwoord en ik word niet meer gebeld voor kleine vragen.",
  },
  {
    initials: "RP",
    name: "Rob Peters",
    bedrijf: "Peters Tuinaanleg, Eindhoven",
    quote:
      "Mijn Google reviews zijn van 12 naar 47 gegaan in 4 maanden. Nu staan we bovenaan bij lokaal zoeken en de telefoon gaat non-stop.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: "var(--dark-card)" }} id="reviews">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionTag>Ervaringen</SectionTag>
        <h2
          className="font-black leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
        >
          Wat klanten zeggen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-8 rounded-2xl flex flex-col"
              style={{
                background: "var(--dark)",
                border: "1px solid var(--dark-border)",
              }}
            >
              <div className="text-sm text-amber-400 tracking-widest mb-5">★★★★★</div>
              <p
                className="text-base leading-relaxed italic mb-6 flex-1"
                style={{ color: "#cbd5e1" }}
              >
                "{r.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{
                    background: "var(--green-dim)",
                    border: "2px solid var(--green)",
                    color: "var(--green)",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{r.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {r.bedrijf}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
