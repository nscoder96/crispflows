"use client";

import { useState } from "react";
import { TrendingUp, Star, Zap, Clock } from "lucide-react";

const cases = [
  {
    bg: "https://images.unsplash.com/photo-1668120089662-42642838cfef?q=80&w=2070",
    Icon: TrendingUp,
    title: "Hoveniersbedrijf Utrecht",
    sub: "+340% meer offerteaanvragen in de eerste 90 dagen",
  },
  {
    bg: "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?q=80&w=2070",
    Icon: Star,
    title: "Tuinaanleg Amsterdam",
    sub: "Van 8 naar 47 Google reviews in 4 maanden",
  },
  {
    bg: "https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=2070",
    Icon: Zap,
    title: "Stratenmaker Eindhoven",
    sub: "€52.000 extra omzet gerealiseerd in jaar 1",
  },
  {
    bg: "https://images.unsplash.com/photo-1621272156568-7306716648df?q=80&w=2070",
    Icon: Clock,
    title: "Groenonderhoud Rotterdam",
    sub: "Website live in 18 dagen — direct nieuwe klanten",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-28"
      style={{ background: "var(--dark)" }}
      id="cases"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionTag>Klantcases</SectionTag>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2
            className="font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Resultaten die
            <br />
            voor zich spreken.
          </h2>
          <p
            className="text-base sm:text-right max-w-[260px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Klik op een case om meer te zien.
          </p>
        </div>

        {/* Expanding slider */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            height: "560px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          {cases.map((c, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minWidth: "60px",
                  flex: isActive ? 6 : 1,
                  backgroundImage: `url(${c.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "flex 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 75%)"
                      : "rgba(0,0,0,0.55)",
                    transition: "background 0.5s",
                  }}
                />

                {/* Label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: isActive ? "row" : "column",
                    alignItems: isActive ? "flex-end" : "center",
                    justifyContent: "flex-end",
                    gap: isActive ? "16px" : "10px",
                    transition: "all 0.4s",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#000",
                    }}
                  >
                    <c.Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Text — only visible when active */}
                  <div
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.4s 0.2s, transform 0.4s 0.2s",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.875rem",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        marginBottom: "8px",
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.45,
                        maxWidth: "420px",
                      }}
                    >
                      {c.sub}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
