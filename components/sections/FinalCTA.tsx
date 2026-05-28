export default function FinalCTA() {
  return (
    <section
      className="py-36 text-center relative overflow-hidden"
      style={{ background: "var(--dark)" }}
      id="contact"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 600px at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6"
          style={{ color: "var(--green)" }}
        >
          <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
          Klaar om te groeien?
          <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
        </div>

        <h2
          className="font-black leading-tight mx-auto mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            letterSpacing: "-0.03em",
            maxWidth: "720px",
          }}
        >
          Plan je gratis
          <br />
          strategiegesprek
        </h2>

        <p
          className="text-lg mx-auto mb-10 max-w-[460px]"
          style={{ color: "var(--text-secondary)" }}
        >
          In 30 minuten laten we zien hoeveel groei er voor jou mogelijk is
          in jouw regio. Geen verplichtingen, wel directe waarde.
        </p>

        <a
          href="mailto:niek96spekreijse@gmail.com?subject=Gratis strategiegesprek CrispFlows"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-bold text-black no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: "var(--green)" }}
        >
          Plan gratis gesprek →
        </a>

        <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
          Of stuur een app via WhatsApp — reactie binnen 2 uur op werkdagen
        </p>
      </div>
    </section>
  );
}
