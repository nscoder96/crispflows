"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#resultaten", label: "Resultaten" },
  { href: "#proces", label: "Werkwijze" },
  { href: "#pakket", label: "Pakket" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || menuOpen ? "rgba(6,6,16,0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--dark-border)" : "1px solid transparent",
        }}
        aria-label="Hoofdnavigatie"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-black tracking-tight text-white no-underline"
            aria-label="CrispFlows - terug naar boven"
          >
            Crisp<span style={{ color: "var(--green)" }}>Flows</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold no-underline transition-colors duration-200 hover:text-white focus:text-white focus:outline-none focus-visible:underline"
                  style={{
                    color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.92)",
                    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.55)",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold text-black no-underline transition-all duration-200 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: "var(--green)" }}
            >
              Gratis gesprek →
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2"
              style={{
                background: menuOpen ? "var(--green-dim)" : "transparent",
                border: "1px solid var(--dark-border)",
                color: "white",
              }}
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: "rgba(6,6,16,0.98)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.25s ease",
          paddingTop: "88px",
        }}
      >
        <nav className="flex flex-col gap-2 px-6 pt-6 pb-8 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-black text-white no-underline py-4 border-b transition-colors duration-200 hover:text-[var(--green)] focus:text-[var(--green)] focus:outline-none"
              style={{
                borderColor: "var(--dark-border)",
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.2s, transform 0.3s ease ${i * 40}ms, opacity 0.3s ease ${i * 40}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold text-black no-underline"
            style={{ background: "var(--green)" }}
          >
            Start gratis gesprek →
          </a>
          <p className="text-center text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            Geen contract. Opzegbaar per maand.
          </p>
        </div>
      </div>
    </>
  );
}
