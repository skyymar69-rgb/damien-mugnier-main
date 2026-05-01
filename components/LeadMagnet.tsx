import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export function LeadMagnet() {
  return (
    <section className="bg-white py-20">
      <div className="container-wide rounded-3xl border border-concrete/60 bg-ivory p-8 shadow-premium md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-gold">
              <ClipboardCheck className="h-4 w-4" aria-hidden /> Diagnostic chantier
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
              La checklist avant devis pour éviter les mauvaises surprises.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-navy/70">
              Une ressource courte pour préparer vos photos, vos mesures, vos contraintes de support
              et vos questions avant d’appeler Damien. Elle qualifie mieux la demande et accélère le
              premier échange.
            </p>
          </div>
          <Link href="/guide-devis-carrelage" className="btn-primary">
            Voir la checklist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
