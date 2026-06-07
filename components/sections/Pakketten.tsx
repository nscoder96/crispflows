import AnimateIn from "@/components/AnimateIn";

const pakketten = [
  {
    naam: "Pilot",
    prijs: "297",
    beschrijving:
      "Voor de eerste 3 klanten. Bewijs dat het werkt — daarna beslis je zelf of je wilt opschalen.",
    featured: false,
    features: [
      "Google Bedrijfsprofiel optimalisatie",
      "Website-analyse + verbeterpunten",
      "Automatische review-uitnodigingen",
      "WhatsApp Business instellen",
      "Maandelijkse rapportage",
    ],
    cta: "Start als pilotklant",
  },
  {
    naam: "Starter",
    prijs: "750",
    beschrijving: "De basis om gevonden te worden en de eerste aanvragen te krijgen.",
    featured: false,
    features: [
      "Converterende website op maat",
      "Google Bedrijfsprofiel optimalisatie",
      "Lokale SEO strategie",
      "Maandelijkse rapportage",
      "WhatsApp support",
    ],
    cta: "Start met Starter",
  },
  {
    naam: "Groei",
    prijs: "1.000",
    beschrijving: "Het complete groeipakket voor meer klanten en minder handwerk.",
    featured: true,
    features: [
      "Alles uit Starter",
      "Google Ads campagnebeheer",
      "CRM + offerte-automatisering",
      "Automatische betalingsherinneringen",
      "WhatsApp Business integratie",
      "Prioriteit support",
    ],
    cta: "Start met Groei",
  },
  {
    naam: "Volledig",
    prijs: "1.500",
    beschrijving: "Jouw bedrijf op de automatische piloot — 24/7 klanten werven.",
    featured: false,
    features: [
      "Alles uit Groei",
      "AI chatbot (24/7 beschikbaar)",
      "Automatische review-uitnodigingen",
      "Social media management",
      "Maandelijks strategiegesprek",
      "Dedicated account manager",
    ],
    cta: "Start met Volledig",
  },
];

export default function Pakketten() {
  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="pakket">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn>
          <SectionTag>Pakketten</SectionTag>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
            >
              Geen verborgen kosten.
              <br />
              Geen lange contracten.
            </h2>
            <p className="text-base max-w-sm" style={{ color: "var(--text-secondary)" }}>
              Maandelijks opzegbaar. Jij blijft omdat het werkt — niet omdat je vast zit.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pakketten.map((p, i) => (
            <AnimateIn key={p.naam} delay={i * 80}>
              <div
                className="relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full"
                style={{
                  background: "var(--dark-card)",
                  border: p.featured ? "1.5px solid var(--green)" : "1px solid var(--dark-border)",
                  boxShadow: p.featured ? "0 0 40px rgba(34,197,94,0.08)" : "none",
                }}
              >
                {p.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black text-black tracking-wide whitespace-nowrap"
                    style={{ background: "var(--green)" }}
                  >
                    MEEST GEKOZEN
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className="text-sm font-bold tracking-widest uppercase mb-4"
                    style={{ color: p.featured ? "var(--green)" : "var(--text-muted)" }}
                  >
                    {p.naam}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                      €
                    </span>
                    <span
                      className="font-black leading-none"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                        letterSpacing: "-0.04em",
                        color: p.featured ? "var(--green)" : "#ffffff",
                      }}
                    >
                      {p.prijs}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      /mnd
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {p.beschrijving}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
                  {p.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 text-xs font-bold flex-shrink-0"
                        style={{ color: "var(--green)" }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 no-underline cursor-pointer focus:outline-none focus-visible:ring-2"
                  style={
                    p.featured
                      ? { background: "var(--green)", color: "#000000" }
                      : {
                          background: "transparent",
                          color: "#ffffff",
                          border: "1px solid var(--dark-border)",
                        }
                  }
                >
                  {p.cta} →
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8"
          style={{ color: "var(--text-muted)" }}
        >
          Niet zeker welk pakket past? Vraag een gratis strategiegesprek aan — we kijken samen wat jij nodig hebt.
        </p>
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
