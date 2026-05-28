"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,6,16,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--dark-border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight text-white no-underline">
          Crisp<span style={{ color: "var(--green)" }}>Flows</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["#diensten", "#resultaten", "#proces", "#pakket"].map((href, i) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium no-underline transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-secondary)" }}
              >
                {["Diensten", "Resultaten", "Werkwijze", "Pakket"][i]}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold text-black no-underline transition-all duration-200 hover:-translate-y-px"
          style={{ background: "var(--green)" }}
        >
          Gratis gesprek →
        </a>
      </div>
    </nav>
  );
}
