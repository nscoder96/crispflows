export default function Contact() {
  return (
    <section
      className="py-28"
      style={{ background: "var(--dark-card)", borderTop: "1px solid var(--dark-border)" }}
      id="contact"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: "var(--green)" }}
          >
            <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
            Klaar om te groeien?
          </div>

          <h2
            className="font-black leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.025em" }}
          >
            Vraag een gratis
            <br />
            strategiegesprek aan.
          </h2>

          <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
            Wij analyseren jouw situatie, concurrentie en kansen in jouw regio.
            Geen verplichtingen — wel direct waardevolle inzichten.
          </p>

          <a
            href="mailto:info@crispflows.nl"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-xl font-bold text-lg text-black no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{ background: "var(--green)" }}
          >
            Start gratis gesprek →
          </a>

          <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
            Of mail ons direct:{" "}
            <a
              href="mailto:info@crispflows.nl"
              className="no-underline hover:underline"
              style={{ color: "var(--green)" }}
            >
              info@crispflows.nl
            </a>
          </p>

          {/* Trust row */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10"
            style={{ borderTop: "1px solid var(--dark-border)" }}
          >
            {[
              "Geen langlopend contract",
              "Resultaat of geen betaling",
              "Binnen 3 weken live",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="text-xs font-bold" style={{ color: "var(--green)" }}>
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
