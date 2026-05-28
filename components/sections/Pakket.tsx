import { Check, Lock } from "lucide-react";

const includes = [
  "Maatwerk website op jouw merk",
  "Lokale SEO optimalisatie",
  "Google Ads campagnebeheer",
  "CRM systeem + volledige inrichting",
  "AI chatbot op je website",
  "Automatische review uitnodigingen",
  "Maandelijkse rapportage & strategie call",
  "Priority support via WhatsApp",
];

export default function Pakket() {
  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="pakket">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center">
          <SectionTag centered>Pakket</SectionTag>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Alles-in-één.
            <br />
            Eerlijke prijs.
          </h2>
          <p
            className="text-lg mt-4 max-w-[420px] mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Geen verborgen kosten. Één pakket met alles wat je nodig hebt om te groeien.
          </p>
        </div>

        {/* Card */}
        <div
          className="max-w-3xl mx-auto mt-14 p-10 rounded-2xl relative overflow-hidden"
          style={{
            background: "var(--dark-card)",
            border: "1.5px solid var(--green)",
          }}
        >
          {/* Badge */}
          <span
            className="absolute top-6 right-6 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-black"
            style={{ background: "var(--green)" }}
          >
            Meest gekozen
          </span>

          <h3 className="text-2xl font-black text-white mb-1">CrispFlows Complete</h3>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Het complete groeisysteem voor hoveniers — van website tot klantbeheer
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-8">
            <span
              className="font-black leading-none"
              style={{ fontSize: "3.5rem", color: "var(--green)", letterSpacing: "-0.04em" }}
            >
              €997
            </span>
            <span className="text-base font-semibold" style={{ color: "var(--text-muted)" }}>
              / maand
            </span>
          </div>

          {/* Includes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="flex-shrink-0"
                  style={{ color: "var(--green)" }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-base font-bold text-black no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--green)" }}
            >
              Start vandaag nog →
            </a>
            <span
              className="text-xs flex items-center gap-1.5"
              style={{ color: "var(--text-muted)" }}
            >
              <Lock size={12} style={{ color: "var(--green)" }} />
              30 dagen niet tevreden = geld terug
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 ${
        centered ? "justify-center" : ""
      }`}
      style={{ color: "var(--green)" }}
    >
      <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
      {children}
    </div>
  );
}
