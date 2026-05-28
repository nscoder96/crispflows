const stats = [
  { num: "47+", label: "Hoveniers geholpen" },
  { num: "€2.4M", label: "Extra omzet gegenereerd" },
  { num: "4.9★", label: "Gemiddelde beoordeling" },
  { num: "3 wkn", label: "Gemiddeld live in" },
  { num: "94%", label: "Klanttevredenheid" },
];

export default function TrustBar() {
  return (
    <div
      className="w-full py-10"
      style={{
        background: "var(--dark-card)",
        borderTop: "1px solid var(--dark-border)",
        borderBottom: "1px solid var(--dark-border)",
      }}
    >
      <h2 className="sr-only">CrispFlows in cijfers — resultaten voor hoveniersbedrijven</h2>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-0 lg:gap-0">
              <div className="flex flex-col items-center text-center w-full">
                <div
                  className="text-3xl sm:text-4xl font-black leading-none tracking-tight"
                  style={{ color: "var(--green)", letterSpacing: "-0.03em" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-medium mt-1.5" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block w-px h-12 flex-shrink-0 mx-auto"
                  style={{ background: "var(--dark-border)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
