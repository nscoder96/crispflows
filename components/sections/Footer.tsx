"use client";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#pakket", label: "Pakket" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/31612345678",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.999 2.002C6.476 2.002 2 6.479 2 12.001c0 1.762.463 3.418 1.27 4.855L2 22l5.293-1.247C8.638 21.556 10.284 22 12 22c5.522 0 10-4.477 10-10S17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16"
      style={{
        background: "var(--dark-card)",
        borderTop: "1px solid var(--dark-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "var(--dark-border)" }}>
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-black tracking-tight text-white no-underline inline-block mb-3">
              Crisp<span style={{ color: "var(--green)" }}>Flows</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "var(--text-muted)" }}>
              Het complete groeisysteem voor hoveniers, aannemers en stratenmakers.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigatie">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
              Navigatie
            </p>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm no-underline transition-colors duration-200 hover:text-white focus:text-white focus:outline-none"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + socials */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
              Contact
            </p>
            <a
              href="mailto:niek96spekreijse@gmail.com"
              className="text-sm no-underline hover:text-white transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
            >
              niek96spekreijse@gmail.com
            </a>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-social w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2"
                  style={{
                    background: "var(--dark)",
                    border: "1px solid var(--dark-border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} CrispFlows. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs no-underline hover:text-white transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
              Privacybeleid
            </a>
            <a href="#" className="text-xs no-underline hover:text-white transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
