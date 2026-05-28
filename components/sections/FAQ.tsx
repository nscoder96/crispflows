"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const vragen = [
  {
    vraag: "Hoe snel zie ik de eerste resultaten?",
    antwoord:
      "De meeste klanten zien binnen 4–6 weken de eerste nieuwe aanvragen via hun eigen website. Google Ads-resultaten zijn vaak al binnen de eerste week zichtbaar.",
  },
  {
    vraag: "Hoe lang zit ik vast aan het contract?",
    antwoord:
      "Je bent maandelijks opzegbaar. Wij geloven niet in langdurige contracten — klanten blijven omdat het werkt, niet omdat ze vast zitten.",
  },
  {
    vraag: "Ik ben niet technisch. Kan ik dit aan?",
    antwoord:
      "Absoluut. Wij regelen alles. Jij levert je naam, adres en wat foto's van je werk aan. De rest doen wij — van website bouwen tot Google Ads instellen.",
  },
  {
    vraag: "Wat is het verschil met Werkspot of Trustoo?",
    antwoord:
      "Werkspot en Trustoo zijn platforms waarbij je per lead betaalt en de klantrelatie nooit van jou is. Met CrispFlows bouw je een eigen aanvraagstroom via Google — dat bezit jij.",
  },
  {
    vraag: "Kunnen jullie mijn bestaande website overnemen?",
    antwoord:
      "Ja, dat kan. We beginnen met een gratis analyse van wat je nu hebt en presenteren een concreet plan. Als je besluit te starten, regelen we de volledige overdracht.",
  },
  {
    vraag: "Wat als het niet de gewenste resultaten geeft?",
    antwoord:
      "Dan gaan we samen op zoek naar de oorzaak en passen we de aanpak aan. Je bent maandelijks opzegbaar — dus je zit nergens aan vast als het niet bevalt.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vragen.map((v) => ({
    "@type": "Question",
    name: v.vraag,
    acceptedAnswer: {
      "@type": "Answer",
      text: v.antwoord,
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28" style={{ background: "var(--dark)" }} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <AnimateIn className="lg:sticky lg:top-32 lg:self-start">
            <SectionTag>FAQ</SectionTag>
            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
            >
              Jouw vragen,
              <br />
              onze antwoorden.
            </h2>
            <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
              Staat jouw vraag er niet bij? Neem contact op — we reageren dezelfde dag.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black no-underline transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2"
              style={{ background: "var(--green)" }}
            >
              Stel jouw vraag →
            </a>
          </AnimateIn>

          {/* Right: accordion */}
          <AnimateIn delay={100}>
            <div className="divide-y" style={{ borderColor: "var(--dark-border)" }}>
              {vragen.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:text-[var(--green)]"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className="font-semibold text-base pr-4 transition-colors duration-200"
                      style={{ color: open === i ? "var(--green)" : "white" }}
                    >
                      {item.vraag}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: open === i ? "var(--green)" : "var(--dark-card)",
                        border: "1px solid var(--dark-border)",
                        color: open === i ? "#000" : "var(--text-secondary)",
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease, background 0.2s, color 0.2s",
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{
                      maxHeight: open === i ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <p
                      className="pb-6 text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.antwoord}
                    </p>
                  </div>
                </div>
              ))}
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
