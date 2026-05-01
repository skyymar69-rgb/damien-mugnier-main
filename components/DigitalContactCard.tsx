import Image from "next/image";
import { Download, MapPin, Star } from "lucide-react";
import { business } from "@/lib/site";

export function DigitalContactCard() {
  return (
    <div className="rounded-2xl border border-gold/35 bg-navy p-5 text-white shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        Carte de contact numérique
      </p>
      <h2 className="mt-2 font-display text-2xl">{business.name}</h2>
      <p className="text-sm text-white/72">{business.baseline}</p>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          ["/qr/maps.svg", "QR code Google Maps"],
          ["/qr/avis.svg", "QR code avis Google"],
          ["/qr/site.svg", "QR code du site"],
        ].map(([src, alt]) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={140}
            height={140}
            className="rounded-lg bg-white p-1"
          />
        ))}
      </div>
      <div className="mt-4 grid gap-2 text-sm text-white/78">
        <a href={business.phoneHref} className="hover:text-gold">
          {business.phone}
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=387%20route%20de%20Givors%2069700%20Beauvallon"
          className="inline-flex items-center gap-2 hover:text-gold"
        >
          <MapPin className="h-4 w-4" aria-hidden /> Beauvallon
        </a>
        <a
          href="https://www.google.com/search?q=Damien+Mugnier+Beauvallon+avis"
          className="inline-flex items-center gap-2 hover:text-gold"
        >
          <Star className="h-4 w-4" aria-hidden /> Avis Google
        </a>
      </div>
      <a
        href="/vcard.vcf"
        download
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy"
      >
        <Download className="h-4 w-4" aria-hidden /> Ajouter au contact
      </a>
    </div>
  );
}
