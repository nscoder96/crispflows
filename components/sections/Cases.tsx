"use client";

import { useState } from "react";
import { TrendingUp, Star, Zap, Clock } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const cases = [
  {
    bg: "https://images.unsplash.com/photo-1668120089662-42642838cfef?q=80&w=2070",
    Icon: TrendingUp,
    title: "Hoveniersbedrijf - Utrecht-regio",
    sub: "Pilotfase gestart — resultaten worden bijgehouden",
  },
  {
    bg: "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?q=80&w=2070",
    Icon: Star,
    title: "Tuinaanleg - Noord-Holland",
    sub: "Pilotfase gestart — resultaten worden bijgehouden",
  },
  {
    bg: "https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=2070",
    Icon: Zap,
    title: "Stratenmaker - Brabant",
    sub: "Pilotfase gestart — resultaten worden bijgehouden",
  },
  {
    bg: "https://images.unsplash.com/photo-1621272156568-7306716648df?q=80&w=2070",
    Icon: Clock,
    title: "Groenonderhoud - Rotterdam-regio",
    sub: "Pilotfase gestart — resultaten worden bijgehouden",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="cases">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn>
          <SectionTag>Klantcases</SectionTag>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
            >
              Onze eerste pilots
            </h2>
            <p className="text-base max-w-[240px]" style={{ color: "var(--text-secondary)" }}>
              We zijn gestart. De eerste resultaten volgen binnenkort.
            </p>
          </div>
        </AnimateIn>

        {/* Mobile: tab buttons + full card */}
        <div className="md:hidden">
          {/* Tab row */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: active === i ? "var(--green)" : "var(--dark-card)",
                  color: active === i ? "#000" : "var(--text-secondary)",
                  border: active === i ? "none" : "1px solid var(--dark-border)",
                }}
                aria-pressed={active === i}
              >
                <c.Icon size={14} strokeWidth={2} aria-hidden="true" />
                {c.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "280px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${cases[active].bg})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, transparent 80%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--green)", color: "#000" }}
                aria-hidden="true"
              >
                {(() => { const Icon = cases[active].Icon; return <Icon size={18} strokeWidth={2} />; })()}
              </div>
              <div>
                <div className="text-lg font-black text-white leading-tight mb-1">
                  {cases[active].title}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {cases[active].sub}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: expanding slider */}
        <AnimateIn className="hidden md:block">
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
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Bekijk case: ${c.title}`}
                  aria-pressed={isActive}
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
                    border: "none",
                    padding: 0,
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
                    aria-hidden="true"
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
                      aria-hidden="true"
                    >
                      <c.Icon size={20} strokeWidth={2} />
                    </div>

                    <div
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 0.4s 0.2s, transform 0.4s 0.2s",
                        pointerEvents: "none",
                        textAlign: "left",
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
                </button>
              );
            })}
          </div>
        </AnimateIn>
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
