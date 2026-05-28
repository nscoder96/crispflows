"use client";

import AnimateIn from "@/components/AnimateIn";

const reviews = [
  {
    initials: "JH",
    name: "Jan Hoekstra",
    bedrijf: "Hoekstra Hoveniers, Groningen",
    quote:
      "Ik was sceptisch over wat een website kan doen, maar nu snap ik het. Elke week komen er nieuwe aanvragen binnen via mijn site. Fantastisch resultaat.",
    result: "+210% aanvragen",
  },
  {
    initials: "SV",
    name: "Sandra van Dijk",
    bedrijf: "Tuindesign By Sandra, Amsterdam",
    quote:
      "De AI chatbot alleen al heeft me zeker 5 uur per week bespaard. Klanten krijgen direct antwoord en ik word niet meer gebeld voor kleine vragen.",
    result: "5u/week bespaard",
  },
  {
    initials: "RP",
    name: "Rob Peters",
    bedrijf: "Peters Tuinaanleg, Eindhoven",
    quote:
      "Mijn Google reviews zijn van 12 naar 47 gegaan in 4 maanden. Nu staan we bovenaan bij lokaal zoeken en de telefoon gaat non-stop.",
    result: "47 Google reviews",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: "var(--dark-card)" }} id="reviews">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn>
          <SectionTag>Ervaringen</SectionTag>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Wat klanten zeggen
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r, i) => (
            <AnimateIn key={r.name} delay={i * 100}>
              <div
                className="hover-card p-8 rounded-2xl flex flex-col h-full cursor-default"
                style={{
                  background: "var(--dark)",
                  border: "1px solid var(--dark-border)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5" aria-label="5 sterren">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="text-base leading-relaxed italic mb-6 flex-1"
                  style={{ color: "#cbd5e1" }}
                >
                  &ldquo;{r.quote}&rdquo;
                </p>

                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5 self-start"
                  style={{ background: "var(--green-dim)", color: "var(--green)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="22 7 13 16 9 12 2 18" />
                  </svg>
                  {r.result}
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{
                      background: "var(--green-dim)",
                      border: "2px solid var(--green)",
                      color: "var(--green)",
                    }}
                    aria-hidden="true"
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
            </AnimateIn>
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
