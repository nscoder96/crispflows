export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-24 overflow-hidden"
      id="home"
      aria-label="Introductie"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(6,6,16,0.3) 0%, rgba(6,6,16,0.15) 35%, rgba(6,6,16,0.75) 70%, #060610 100%), url('https://images.unsplash.com/photo-1668120089662-42642838cfef?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase mb-6"
          style={{
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          <span
            className="w-8 h-0.5 inline-block rounded-full flex-shrink-0"
            style={{ background: "var(--green)" }}
            aria-hidden="true"
          />
          <span style={{ color: "var(--green)" }}>CrispFlows</span>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>—</span>
          Groei voor vakmensen
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.03em" }}
        >
          Meer klanten.
          <br />
          Minder gedoe.
          <br />
          <span style={{ color: "var(--green)" }}>Meer omzet.</span>
        </h1>

        <p
          className="text-lg leading-relaxed mb-4 max-w-[520px]"
          style={{ color: "var(--text-secondary)" }}
        >
          Het complete groeisysteem voor hoveniers: een converterende website,
          lokale Google-advertenties, slim CRM en AI-tools — alles in één pakket.
        </p>

        <p
          className="text-base font-semibold mb-10 max-w-[520px]"
          style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
        >
          Van vakman tot AI-consultant — ik ken de sector van binnenuit.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-base font-bold text-black no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: "var(--green)" }}
          >
            Start gratis gesprek →
          </a>
          <a
            href="#resultaten"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-base font-bold text-white no-underline transition-all duration-200 hover:text-[var(--green)] hover:border-[var(--green)] focus:outline-none focus-visible:ring-2"
            style={{ border: "1.5px solid var(--dark-border)" }}
          >
            Bekijk resultaten
          </a>
        </div>

        <p className="mt-5 text-xs flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <span className="font-bold" style={{ color: "var(--green)" }} aria-hidden="true">✓</span>
          Geen contract. Opzegbaar per maand.
        </p>
      </div>
    </section>
  );
}
