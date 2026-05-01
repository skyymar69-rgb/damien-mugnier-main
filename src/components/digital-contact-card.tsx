import { Download, MapPin, MessageSquareText, QrCode, Star } from "lucide-react";

export function DigitalContactCard() {
  return (
    <div className="rounded-2xl border border-accent/30 bg-primary p-5 text-primary-foreground shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Carte numerique
          </p>
          <h2 className="mt-1 font-display text-2xl">Damien Mugnier</h2>
          <p className="mt-1 text-sm text-primary-foreground/75">
            Carreleur · macon · piscine · renovation
          </p>
        </div>
        <QrCode className="h-6 w-6 text-accent" aria-hidden />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <a
          href="https://www.google.com/maps/search/?api=1&query=387%20route%20de%20Givors%2069700%20Beauvallon"
          aria-label="Ouvrir Google Maps"
        >
          <img
            src="/qr/maps.svg"
            alt="QR code Google Maps Damien Mugnier"
            className="rounded-lg bg-white p-1"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.google.com/search?q=Damien+Mugnier+Beauvallon+avis"
          aria-label="Voir les avis Google"
        >
          <img
            src="/qr/avis.svg"
            alt="QR code avis Google Damien Mugnier"
            className="rounded-lg bg-white p-1"
            loading="lazy"
          />
        </a>
        <a href="/" aria-label="Ouvrir le site internet">
          <img
            src="/qr/site.svg"
            alt="QR code du site Damien Mugnier"
            className="rounded-lg bg-white p-1"
            loading="lazy"
          />
        </a>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-primary-foreground/80">
        <a href="tel:+33628453288" className="inline-flex items-center gap-2 hover:text-accent">
          <MessageSquareText className="h-4 w-4" aria-hidden /> 06 28 45 32 88
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=387%20route%20de%20Givors%2069700%20Beauvallon"
          className="inline-flex items-center gap-2 hover:text-accent"
        >
          <MapPin className="h-4 w-4" aria-hidden /> 387 route de Givors, Beauvallon
        </a>
        <a
          href="https://www.google.com/search?q=Damien+Mugnier+Beauvallon+avis"
          className="inline-flex items-center gap-2 hover:text-accent"
        >
          <Star className="h-4 w-4" aria-hidden /> Laisser un avis
        </a>
      </div>

      <a
        href="/vcard.vcf"
        download
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:shadow-lg"
      >
        <Download className="h-4 w-4" aria-hidden />
        Ajouter aux contacts
      </a>
    </div>
  );
}
