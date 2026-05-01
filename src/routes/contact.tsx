import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Download, Mail, MapPin, Phone, Star } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et devis gratuit - Damien Mugnier, Beauvallon" },
      {
        name: "description",
        content:
          "Contactez Damien Mugnier pour un devis gratuit sous 48h. Carrelage, maconnerie, renovation, terrasse et piscine dans le Sud-Ouest lyonnais.",
      },
      { property: "og:title", content: "Contact - Devis gratuit sous 48h" },
      {
        property: "og:description",
        content: "Telephone, email, adresse et formulaire conforme RGPD.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-prose">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-balance md:text-6xl">
            Parlons de votre <em className="text-accent not-italic">projet</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Devis gratuit sous 48h. Visite sur site offerte dans le Sud-Ouest lyonnais.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <ContactTile
              href="tel:+33628453288"
              icon={Phone}
              label="Telephone"
              value="06 28 45 32 88"
            />
            <ContactTile
              href="mailto:damienmugnier@hotmail.fr"
              icon={Mail}
              label="Email"
              value="damienmugnier@hotmail.fr"
            />
            <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Adresse
                </p>
                <p className="mt-1 font-display text-2xl text-foreground">
                  387 route de Givors, 69700 Beauvallon
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-accent/40 bg-primary p-7 text-primary-foreground shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    Carte artisan
                  </p>
                  <h2 className="mt-2 font-display text-2xl">Damien Mugnier</h2>
                  <p className="mt-1 text-sm text-primary-foreground/75">
                    Carreleur, macon, piscine et renovation a Beauvallon.
                  </p>
                </div>
                <Star className="h-6 w-6 fill-accent text-accent" aria-hidden />
              </div>
              <div className="mt-6 grid gap-3 text-sm text-primary-foreground/80">
                <a href="tel:+33628453288" className="hover:text-accent">
                  06 28 45 32 88
                </a>
                <a href="mailto:damienmugnier@hotmail.fr" className="hover:text-accent">
                  damienmugnier@hotmail.fr
                </a>
                <p>387 route de Givors, 69700 Beauvallon</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <img
                  src="/qr/maps.svg"
                  alt="QR code Google Maps Damien Mugnier"
                  className="rounded-lg bg-white p-1"
                />
                <img
                  src="/qr/avis.svg"
                  alt="QR code avis Google Damien Mugnier"
                  className="rounded-lg bg-white p-1"
                />
                <img
                  src="/qr/site.svg"
                  alt="QR code site Damien Mugnier"
                  className="rounded-lg bg-white p-1"
                />
              </div>
              <a
                href="/vcard.vcf"
                download
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:shadow-lg"
              >
                <Download className="h-4 w-4" aria-hidden />
                Ajouter aux contacts
              </a>
            </div>
            <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Horaires
                </p>
                <p className="mt-1 font-display text-2xl text-foreground">Lun - Sam · 8h - 19h</p>
              </div>
            </div>
          </div>

          <form
            action="mailto:damienmugnier@hotmail.fr"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-border bg-card p-8 shadow-lg"
          >
            <h2 className="font-display text-2xl text-foreground">Demande de devis</h2>
            <p className="mt-1 text-sm text-muted-foreground">Reponse sous 48h.</p>

            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Nom complet</span>
                <input required name="nom" type="text" autoComplete="name" className="form-field" />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Telephone</span>
                  <input
                    required
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    className="form-field"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="form-field"
                  />
                </label>
              </div>
              <label className="hidden" aria-hidden="true">
                <span>Ne pas remplir ce champ</span>
                <input
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Type de projet</span>
                <select name="projet" className="form-field">
                  <option>Carrelage grand format</option>
                  <option>Marbre / pierre naturelle</option>
                  <option>Maconnerie / mur en pierre</option>
                  <option>Terrasse / piscine</option>
                  <option>Salle de bains</option>
                  <option>Renovation complete</option>
                  <option>Autre</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Commune du chantier</span>
                <input
                  name="commune"
                  type="text"
                  autoComplete="address-level2"
                  className="form-field"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Budget indicatif</span>
                <select name="budget" className="form-field">
                  <option>10 000 a 20 000 EUR</option>
                  <option>20 000 a 35 000 EUR</option>
                  <option>35 000 a 50 000 EUR</option>
                  <option>Plus de 50 000 EUR</option>
                  <option>A definir</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Decrivez votre projet</span>
                <textarea name="message" rows={5} className="form-field" />
              </label>
              <label className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4 text-sm text-muted-foreground">
                <input
                  required
                  name="consentement_rgpd"
                  type="checkbox"
                  value="oui"
                  className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-accent"
                />
                <span>
                  J'accepte que les informations transmises soient utilisees pour repondre a ma
                  demande de devis. Je peux exercer mes droits selon la{" "}
                  <Link
                    to="/politique-confidentialite"
                    className="font-medium text-primary hover:text-accent"
                  >
                    politique de confidentialite
                  </Link>
                  .
                </span>
              </label>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Les donnees du formulaire sont adressees a Damien Mugnier pour traiter votre
                demande. Elles ne sont pas vendues. Conservation maximale indicative : 3 ans si
                aucun contrat n'est conclu.
              </p>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:shadow-xl"
              >
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactTile({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 font-display text-2xl text-foreground group-hover:text-accent">
          {value}
        </p>
      </div>
    </a>
  );
}
