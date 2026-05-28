import { Globe, MapPin, Settings2, Sparkles } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const diensten = [
  {
    num: "01",
    Icon: Globe,
    title: "Converterende Website",
    desc: "Niet alleen mooi, maar gebouwd om bezoekers te veranderen in betalende klanten.",
    items: [
      "Maatwerk design op jouw merk",
      "Snel en mobiel geoptimaliseerd",
      "Duidelijke CTA's & offerteformulier",
      "Binnen 3 weken live",
    ],
  },
  {
    num: "02",
    Icon: MapPin,
    title: "Lokale SEO & Google Ads",
    desc: "Word gevonden door klanten in jouw regio op het moment dat ze zoeken naar een hovenier.",
    items: [
      "Google Bedrijfsprofiel optimalisatie",
      "Lokale zoekwoorden strategie",
      "Google Ads campagnes",
      "Maandelijkse rapportage",
    ],
  },
  {
    num: "03",
    Icon: Settings2,
    title: "CRM & Opvolging",
    desc: "Nooit meer een lead laten schieten. Automatisch opvolgen, offertes sturen en klanten bijhouden.",
    items: [
      "Eenvoudig CRM systeem",
      "Automatische e-mail opvolging",
      "Offerte pipeline",
      "Klanthistorie & notities",
    ],
  },
  {
    num: "04",
    Icon: Sparkles,
    title: "AI Tools",
    desc: "Chatbot, review automatisering en slimme tools die voor je werken — ook als jij in de tuin bezig bent.",
    items: [
      "AI chatbot op je website",
      "Automatische review uitnodigingen",
      "Slimme offerte suggesties",
      "24/7 beschikbaar voor leads",
    ],
  },
];

export default function Diensten() {
  return (
    <section
      className="py-28"
      style={{ background: "var(--dark-card)" }}
      id="diensten"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn>
          <SectionTag>Wat we doen</SectionTag>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Eén systeem.
            <br />
            Alles erin.
          </h2>
          <p className="mt-4 text-base max-w-[500px]" style={{ color: "var(--text-secondary)" }}>
            Alles wat je hovenierbedrijf nodig heeft om online te groeien: website, lokale SEO,
            Google Ads en klantbeheer in één compleet pakket.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-14">
          {diensten.map((d, i) => (
            <AnimateIn key={d.num} delay={i * 80}>
              <div
                className="hover-card group relative p-8 rounded-2xl overflow-hidden h-full cursor-default"
                style={{
                  background: "var(--dark)",
                  border: "1px solid var(--dark-border)",
                }}
              >
                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--green)" }}
                  aria-hidden="true"
                />

                <div
                  className="text-5xl font-black leading-none mb-4"
                  style={{ color: "rgba(34,197,94,0.12)", letterSpacing: "-0.04em" }}
                  aria-hidden="true"
                >
                  {d.num}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--green-dim)", color: "var(--green)" }}
                  aria-hidden="true"
                >
                  <d.Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-bold mb-3 text-white">{d.title}</h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {d.desc}
                </p>

                <ul className="flex flex-col gap-1.5 mt-auto" role="list">
                  {d.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm pl-5 relative"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="absolute left-0 text-xs font-bold"
                        style={{ color: "var(--green)" }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
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
