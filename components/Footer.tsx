export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid var(--dark-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="text-lg font-black tracking-tight text-white no-underline">
              Crisp<span style={{ color: "var(--green)" }}>Flows</span>
            </a>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Het complete groeisysteem voor hoveniers,
              aannemers en stratenmakers.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
              Navigatie
            </p>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {[
                { label: "Diensten", href: "#diensten" },
                { label: "Resultaten", href: "#resultaten" },
                { label: "Werkwijze", href: "#proces" },
                { label: "Pakketten", href: "#pakket" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm no-underline transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
              Contact
            </p>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>
                <a
                  href="mailto:info@crispflows.nl"
                  className="no-underline hover:text-white transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  info@crispflows.nl
                </a>
              </li>
              <li style={{ color: "var(--text-muted)" }}>Ma–Vr · 09:00–18:00</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs"
          style={{
            borderTop: "1px solid var(--dark-border)",
            color: "var(--text-muted)",
          }}
        >
          <p>© {new Date().getFullYear()} CrispFlows. Alle rechten voorbehouden.</p>
          <div className="flex gap-5">
            <a href="#" className="no-underline hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
              Privacybeleid
            </a>
            <a href="#" className="no-underline hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
