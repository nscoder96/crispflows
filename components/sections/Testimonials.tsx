"use client";

import AnimateIn from "@/components/AnimateIn";

const reviews = [
  {
    naam: "Pilotklant",
    bedrijf: "Hoveniersbedrijf, Utrecht-regio",
    quote: "Pilotklant — resultaten worden gemeten",
    result: "Resultaten volgen",
  },
  {
    naam: "Pilotklant",
    bedrijf: "Tuinaanleg, Noord-Holland",
    quote: "Pilotklant — resultaten worden gemeten",
    result: "Resultaten volgen",
  },
  {
    naam: "Pilotklant",
    bedrijf: "Stratenmaker, Brabant",
    quote: "Pilotklant — resultaten worden gemeten",
    result: "Resultaten volgen",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: "var(--dark-card)" }} id="reviews">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn>
          <SectionTag>In de opstartfase</SectionTag>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            In de opstartfase
          </h2>
          <p className="text-lg mt-5 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            CrispFlows werkt met de eerste pilotklanten aan meetbare resultaten. De
            eerste casestudies volgen binnenkort.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r, i) => (
            <AnimateIn key={r.bedrijf} delay={i * 100}>
              <div
                className="hover-card p-8 rounded-2xl flex flex-col h-full cursor-default"
                style={{
                  background: "var(--dark)",
                  border: "1px solid var(--dark-border)",
                }}
              >
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

                <div>
                  <div className="font-bold text-sm text-white">{r.naam}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {r.bedrijf}
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
