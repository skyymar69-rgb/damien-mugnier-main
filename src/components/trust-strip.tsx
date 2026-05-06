import { ShieldCheck, Award, Star, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Garantie décennale" },
  { icon: Award, label: "12 ans d'expérience" },
  { icon: Star, label: "4,9 / 5 — clients" },
  { icon: Clock, label: "Devis sous 48h" },
];

export function TrustStrip() {
  return (
    <section aria-label="Garanties" className="border-y border-border bg-secondary/40">
      <div className="container-prose grid grid-cols-2 gap-y-4 py-6 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-2.5 text-sm font-medium text-foreground/80">
            <it.icon className="h-4 w-4 text-accent" /> {it.label}
          </div>
        ))}
      </div>
    </section>
  );
}
