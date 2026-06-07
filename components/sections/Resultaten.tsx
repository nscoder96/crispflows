const stats = [
  { num: "3 wkn", label: "Gemiddeld live" },
  { num: "<60 sec", label: "Reactie op nieuwe lead" },
  { num: "24/7", label: "Bereikbaar via AI-chat" },
  { num: "Maandelijks", label: "Opzegbaar, geen contract" },
];

export default function Resultaten() {
  return (
    <section
      className="py-28"
      style={{ background: "var(--green)" }}
      id="resultaten"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: tag + heading + stats */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 opacity-60">
              <span className="w-6 h-px inline-block bg-black/40" />
              Wat je kunt verwachten
            </div>
            <h2
              className="font-black leading-tight text-black mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.025em" }}
            >
              Wat CrispFlows
              <br />
              voor je doet
            </h2>
            <p className="text-lg mb-10 text-black/70">
              CrispFlows is in opbouw. Hieronder zie je wat het systeem voor je
              inricht — geen beloftes over cijfers, maar concrete bouwstenen die
              vanaf dag één staan.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.08)" }}
                >
                  <div
                    className="text-4xl font-black leading-none text-black mb-1"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm font-semibold text-black/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: honest scenario card (no fabricated results) */}
          <div>
            <div
              className="p-7 rounded-2xl mb-6"
              style={{ background: "rgba(0,0,0,0.1)" }}
            >
              <p className="text-sm font-bold text-black mb-3">
                Zo kan het eruitzien
              </p>
              <p className="text-base text-black/75 leading-relaxed mb-5">
                Een hovenier of stratenmaker die nu telefonisch en via
                mond-tot-mond werkt, krijgt een vindbare website, een
                geoptimaliseerd Google Bedrijfsprofiel en automatische
                review-uitnodigingen. Aanvragen die nu blijven liggen, worden
                automatisch opgevolgd.
              </p>
              <p className="text-xs text-black/50 leading-relaxed">
                Scenario op basis van branchekennis, geen eigen resultaten.
                Resultaten variëren per bedrijf, regio en seizoen. De eerste
                pilotklanten boeken nu hun resultaten — echte cases volgen hier
                zodra ze er zijn.
              </p>
            </div>

            <blockquote
              className="text-xl font-bold text-black leading-snug"
              style={{ letterSpacing: "-0.01em" }}
            >
              Ik ben Niek — zelf stratenmaker en oud-hovenier. Ik bouw dit
              systeem voor het vak dat ik van binnenuit ken.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
