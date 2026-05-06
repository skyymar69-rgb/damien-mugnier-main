const stats = [
  { v: "12", l: "ans d'expérience" },
  { v: "250+", l: "chantiers livrés" },
  { v: "4,9★", l: "satisfaction client" },
  { v: "48h", l: "pour votre devis" },
];

export function StatsBand() {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="container-prose grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="flex flex-col items-center text-center">
            <span className="font-display text-5xl text-accent md:text-6xl">{s.v}</span>
            <span className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/75">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
