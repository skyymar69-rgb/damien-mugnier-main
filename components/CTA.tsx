import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function CTA({
  title = "Un chantier sérieux mérite un échange précis.",
}: {
  title?: string;
}) {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-wide flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-3xl font-display text-4xl md:text-5xl">{title}</h2>
        <p className="max-w-2xl text-white/72">
          Envoyez quelques photos, une adresse et votre objectif. Damien vous dira rapidement si le
          projet est techniquement cohérent et comment le cadrer.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-gold">
            Demander un devis <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={business.phoneHref} className="btn-outline-light">
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
