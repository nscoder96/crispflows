const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#pakket", label: "Pakket" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: "var(--dark-card)",
        borderTop: "1px solid var(--dark-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
          <a
            href="#"
            className="text-xl font-black tracking-tight text-white no-underline"
          >
            Crisp<span style={{ color: "var(--green)" }}>Flows</span>
          </a>

          <nav className="flex flex-wrap gap-8 justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm no-underline transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} CrispFlows. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
