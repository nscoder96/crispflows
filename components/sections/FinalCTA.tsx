"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

type FormState = "idle" | "loading" | "success" | "error";

export default function FinalCTA() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ naam: "", telefoon: "", bericht: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((res) => setTimeout(res, 1200));
    setFormState("success");
  };

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--dark)" }}
      id="contact"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: copy */}
          <AnimateIn>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6"
              style={{ color: "var(--green)" }}
            >
              <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
              Klaar om te groeien?
              <span className="w-6 h-px inline-block" style={{ background: "var(--green)" }} />
            </div>

            <h2
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Plan je gratis
              <br />
              <span style={{ color: "var(--green)" }}>strategiegesprek</span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-10 max-w-[420px]"
              style={{ color: "var(--text-secondary)" }}
            >
              In 30 minuten laten we zien hoeveel groei er voor jou mogelijk is
              in jouw regio. Geen verplichtingen, wel directe waarde.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Gratis en vrijblijvend",
                "Reactie binnen 2 uur op werkdagen",
                "30 dagen niet tevreden = geld terug",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: "var(--green-dim)", color: "var(--green)" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={150}>
            <div
              className="p-8 sm:p-10 rounded-2xl"
              style={{
                background: "var(--dark-card)",
                border: "1px solid var(--dark-border)",
              }}
            >
              {formState === "success" ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "var(--green-dim)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Aanvraag ontvangen!</h3>
                  <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                    We nemen binnen 2 uur contact met je op om een gesprek in te plannen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-lg font-black text-white mb-1">Stuur een bericht</h3>
                  <p className="text-sm mb-7" style={{ color: "var(--text-muted)" }}>
                    Of stuur ons een WhatsApp — reactie binnen 2 uur.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-semibold text-white mb-1.5">
                        Naam <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="naam"
                        name="naam"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.naam}
                        onChange={handleChange}
                        placeholder="Jan de Hovenier"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 transition-colors duration-200 focus:outline-none"
                        style={{
                          background: "var(--dark)",
                          border: "1px solid var(--dark-border)",
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--green)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--dark-border)"; }}
                      />
                    </div>

                    <div>
                      <label htmlFor="telefoon" className="block text-sm font-semibold text-white mb-1.5">
                        Telefoonnummer <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.telefoon}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 transition-colors duration-200 focus:outline-none"
                        style={{
                          background: "var(--dark)",
                          border: "1px solid var(--dark-border)",
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--green)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--dark-border)"; }}
                      />
                    </div>

                    <div>
                      <label htmlFor="bericht" className="block text-sm font-semibold text-white mb-1.5">
                        Bericht
                      </label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        rows={4}
                        value={form.bericht}
                        onChange={handleChange}
                        placeholder="Vertel kort over je bedrijf en wat je zoekt..."
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none transition-colors duration-200 focus:outline-none"
                        style={{
                          background: "var(--dark)",
                          border: "1px solid var(--dark-border)",
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--green)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--dark-border)"; }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="w-full py-4 rounded-xl font-bold text-sm text-black transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2"
                      style={{ background: "var(--green)" }}
                    >
                      {formState === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                          </svg>
                          Versturen...
                        </span>
                      ) : (
                        "Verstuur aanvraag →"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
