import { Globe, Search, UserCheck, Sparkles } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const diensten = [
  {
    num: "01",
    Icon: Globe,
    title: "Converterende website",
    desc: "Een website die voor je werkt. Bezoekers die binnenkomen, vragen een offerte aan — niet weggaan.",
    items: [
      "Gebouwd op jouw merk en werkgebied",
      "Laadt snel op elke telefoon",
      "Duidelijke knop: 'Vraag offerte aan'",
      "Binnen 2 weken live",
    ],
  },
  {
    num: "02",
    Icon: Search,
    title: "Vindbaar in Google én ChatGPT",
    desc: "Als iemand in jouw regio zoekt naar een hovenier — online of via AI — staat jij bovenaan.",
    items: [
      "Google Bedrijfsprofiel op orde",
      "Gevonden in jouw gemeente en omgeving",
      "Ook zichtbaar in ChatGPT en AI-zoekopdrachten",
      "Google Ads voor directe aanvragen",
    ],
  },
  {
    num: "03",
    Icon: UserCheck,
    title: "Verhoog klantwaarde door perfecte opvolging",
    desc: "Elke lead krijgt op het juiste moment een bericht. Geen vergeten offerte, geen gemiste klant.",
    items: [
      "Automatische bevestiging na aanvraag",
      "Herinnering als klant niet reageert",
      "Offerte pipeline overzichtelijk bijhouden",
      "Vraag reviews op het juiste moment",
    ],
  },
  {
    num: "04",
    Icon: Sparkles,
    title: "AI Tools",
    desc: "Een chatbot op je site beantwoordt vragen 24/7. Ook als jij met de handen in de aarde zit.",
    items: [
      "AI chatbot vangt leads op buiten kantooruren",
      "Automatische review-uitnodigingen",
      "Slimme suggesties voor offertes",
      "Minder handwerk, meer rust",
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
            Alles wat je hovenierbedrijf nodig heeft om online te groeien — zonder dat jij er dag en nacht mee bezig hoeft te zijn.
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
