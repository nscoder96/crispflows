import { Search, MonitorSmartphone, Users } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const pijnpunten = [
  {
    Icon: Search,
    title: "Gevonden worden? Bijna onmogelijk",
    desc: "Concurrenten met mindere kwaliteit staan bovenaan Google. Jij verdient beter.",
  },
  {
    Icon: MonitorSmartphone,
    title: "Website converteert niet",
    desc: "Bezoekers komen, kijken even, en verdwijnen. Geen offerte-aanvragen, geen telefoontjes.",
  },
  {
    Icon: Users,
    title: "Leads komen niet terug",
    desc: "Geen opvolgsysteem, geen reviews, geen terugkerende klanten. Alles gaat op mond-tot-mond.",
  },
];

export default function Probleem() {
  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="probleem">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content left */}
          <AnimateIn>
            <SectionTag>Het probleem</SectionTag>
            <h2
              className="font-black leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
            >
              Goed in je vak,
              <br />
              maar onzichtbaar online?
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
              De meeste hoveniers lopen omzet mis — niet omdat ze slecht werk leveren,
              maar omdat hun online aanwezigheid niet overeenkomt met hun vakmanschap.
            </p>
            <div className="flex flex-col gap-4">
              {pijnpunten.map((p) => (
                <div
                  key={p.title}
                  className="hover-card-subtle flex gap-4 items-start p-5 rounded-xl"
                  style={{
                    background: "var(--dark-card)",
                    border: "1px solid var(--dark-border)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--green-dim)", color: "var(--green)" }}
                    aria-hidden="true"
                  >
                    <p.Icon size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Image right */}
          <AnimateIn delay={150} className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800"
                alt="Hovenier aan het werk in een tuin"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(15%)" }}
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            {/* Badge overlay */}
            <div
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
              style={{ background: "var(--green)" }}
            >
              <div className="text-3xl font-black leading-none text-black" aria-label="Gemiddeld 3x meer aanvragen">3×</div>
              <div className="text-xs font-bold text-black/70 mt-1" aria-hidden="true">meer aanvragen gemiddeld</div>
            </div>
          </AnimateIn>
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
