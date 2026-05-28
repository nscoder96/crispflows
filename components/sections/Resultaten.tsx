const stats = [
  { num: "3×", label: "Meer offerteaanvragen" },
  { num: "€52K", label: "Gemiddeld extra omzet jaar 1" },
  { num: "87%", label: "Snellere klantopvolging" },
  { num: "60 dgn", label: "Gemiddeld break-even" },
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
              Bewezen resultaten
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
              Onze klanten zien gemiddeld binnen 60 dagen significante groei
              in aanvragen en omzet.
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

          {/* Right: quote + case */}
          <div>
            <blockquote
              className="text-2xl font-bold text-black leading-snug mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              "Binnen 6 weken had ik al meer aanvragen dan in het hele kwartaal
              daarvoor. CrispFlows heeft mijn bedrijf echt op de kaart gezet."
            </blockquote>
            <p className="text-base font-semibold text-black/70 mb-8">
              — Martijn de Groot, De Groene Tuin (Utrecht)
            </p>

            <div
              className="p-6 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.1)" }}
            >
              <p className="text-sm font-bold text-black mb-4">
                Case study: Hoveniersbedrijf Utrecht
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-black text-black leading-none">+180%</div>
                  <div className="text-xs font-semibold text-black/60 mt-1">Website bezoekers</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-black leading-none">+340%</div>
                  <div className="text-xs font-semibold text-black/60 mt-1">Offerte aanvragen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
