import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact et devis gratuit - Damien Mugnier",
  description:
    "Demandez un devis à Damien Mugnier pour carrelage, terrasse, piscine, maçonnerie et rénovation à Beauvallon.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Contact</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
            Décrire votre chantier, recevoir un cadrage clair.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Envoyez la commune, quelques photos si possible, le type de projet et votre budget
            indicatif. Une réponse utile vaut mieux qu’une promesse floue.
          </p>
        </div>
      </section>
      <section className="container-wide grid gap-10 py-20 md:grid-cols-2">
        <div className="space-y-5">
          <a
            href={business.phoneHref}
            className="flex gap-4 rounded-2xl border border-concrete/60 bg-white p-6 shadow-sm hover:shadow-premium"
          >
            <Phone className="h-6 w-6 text-gold" /> <span>{business.phone}</span>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="flex gap-4 rounded-2xl border border-concrete/60 bg-white p-6 shadow-sm hover:shadow-premium"
          >
            <Mail className="h-6 w-6 text-gold" /> <span>{business.email}</span>
          </a>
          <div className="flex gap-4 rounded-2xl border border-concrete/60 bg-white p-6 shadow-sm">
            <MapPin className="h-6 w-6 text-gold" /> <span>{business.address}</span>
          </div>
          <div className="rounded-2xl bg-navy p-6 text-white">
            <h2 className="font-display text-2xl">QR codes et vCard</h2>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["maps", "avis", "site"].map((item) => (
                <Image
                  key={item}
                  src={`/qr/${item}.svg`}
                  alt={`QR code ${item}`}
                  width={180}
                  height={180}
                  className="rounded-lg bg-white p-1"
                />
              ))}
            </div>
            <a href="/vcard.vcf" download className="btn-gold mt-5 w-full">
              <Download className="h-4 w-4" /> Télécharger la vCard
            </a>
          </div>
        </div>
        <form
          action={`mailto:${business.email}`}
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-concrete/60 bg-white p-7 shadow-premium"
        >
          <h2 className="font-display text-3xl">Demande de devis</h2>
          <div className="mt-6 grid gap-4">
            <label>
              Nom complet
              <input required name="nom" className="form-field mt-1" autoComplete="name" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                Téléphone
                <input required name="telephone" className="form-field mt-1" autoComplete="tel" />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="form-field mt-1"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="hidden" aria-hidden="true">
              Site web
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              Type de projet
              <select name="projet" className="form-field mt-1">
                <option>Carrelage intérieur</option>
                <option>Terrasse / extérieur</option>
                <option>Piscine / spa</option>
                <option>Maçonnerie</option>
                <option>Rénovation complète</option>
              </select>
            </label>
            <label>
              Commune
              <input name="commune" className="form-field mt-1" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} className="form-field mt-1" />
            </label>
            <label className="flex gap-3 rounded-xl bg-ivory p-4 text-sm text-navy/70">
              <input
                required
                type="checkbox"
                name="consentement_rgpd"
                value="oui"
                className="mt-1"
              />
              <span>
                J’accepte l’utilisation de mes données pour répondre à ma demande, selon la{" "}
                <Link href="/politique-confidentialite" className="font-bold text-navy underline">
                  politique de confidentialité
                </Link>
                .
              </span>
            </label>
            <button type="submit" className="btn-primary">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
