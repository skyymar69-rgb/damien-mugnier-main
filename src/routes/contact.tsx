import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis gratuit — Damien Mugnier · Beauvallon" },
      {
        name: "description",
        content:
          "Contactez Damien Mugnier pour un devis gratuit sous 48h. Formulaire conforme RGPD. Carrelage, maçonnerie, rénovation premium dans le Sud-Ouest Lyonnais.",
      },
      { property: "og:title", content: "Contact — Devis gratuit sous 48h" },
      { property: "og:description", content: "Téléphone, email, adresse. Réponse rapide et personnalisée." },
    ],
    links: [{ rel: "canonical", href: "https://damienmugnier.fr/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(100, "Nom trop long"),
  telephone: z
    .string()
    .trim()
    .min(8, "Téléphone invalide")
    .max(20, "Téléphone invalide")
    .regex(/^[0-9 +().-]+$/, "Caractères invalides"),
  email: z.string().trim().email("Email invalide").max(255),
  commune: z.string().trim().max(80).optional().or(z.literal("")),
  projet: z.string().min(1).max(80),
  message: z.string().trim().min(10, "Message trop court (10 caractères min.)").max(2000, "Message trop long"),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Honeypot — anti-spam silencieux
    if ((fd.get("website") as string)?.length) {
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    const data = {
      nom: fd.get("nom") as string,
      telephone: fd.get("telephone") as string,
      email: fd.get("email") as string,
      commune: (fd.get("commune") as string) || "",
      projet: fd.get("projet") as string,
      message: fd.get("message") as string,
      consent: fd.get("consent") === "on",
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const map: Record<string, string> = {};
      result.error.issues.forEach((i) => (map[i.path[0] as string] = i.message));
      setErrors(map);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent(`Demande de devis — ${result.data.projet}`);
    const body = encodeURIComponent(
      `Nom : ${result.data.nom}\nTéléphone : ${result.data.telephone}\nEmail : ${result.data.email}\nCommune : ${result.data.commune}\nProjet : ${result.data.projet}\n\n${result.data.message}\n\n— Consentement RGPD donné le ${new Date().toLocaleString("fr-FR")}`
    );
    window.location.href = `mailto:damienmugnier@hotmail.fr?subject=${subject}&body=${body}`;
    setStatus("success");
    e.currentTarget.reset();
  };

  const fieldErr = (k: string) =>
    errors[k] ? (
      <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
        <AlertCircle className="h-3 w-3" /> {errors[k]}
      </p>
    ) : null;

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
            <a href="tel:+33628453288" className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Téléphone</p>
                <p className="mt-1 font-display text-2xl text-foreground group-hover:text-accent">06 28 45 32 88</p>
              </div>
            </a>
            <a href="mailto:damienmugnier@hotmail.fr" className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="mt-1 font-display text-2xl text-foreground group-hover:text-accent break-all">damienmugnier@hotmail.fr</p>
              </div>
            </a>
            <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Adresse</p>
                <p className="mt-1 font-display text-2xl text-foreground">387 route de Givors, 69700 Beauvallon</p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Horaires</p>
                <p className="mt-1 font-display text-2xl text-foreground">Lun – Sam · 8h – 19h</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-8" aria-labelledby="form-title">
            <h2 id="form-title" className="font-display text-2xl text-foreground">Demande de devis</h2>
            <p className="mt-1 text-sm text-muted-foreground">Réponse personnalisée sous 48h.</p>

            {status === "success" && (
              <div role="status" className="mt-5 flex items-start gap-2 rounded-lg border border-accent/40 bg-accent/10 p-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                <span>Merci, votre demande a été préparée. Votre messagerie va s'ouvrir pour finaliser l'envoi.</span>
              </div>
            )}

            <div className="mt-6 grid gap-4">
              {/* Honeypot — caché aux humains, visible aux bots */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label>
                  Ne pas remplir
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Nom complet <span className="text-destructive" aria-hidden="true">*</span></span>
                <input required name="nom" type="text" autoComplete="name" maxLength={100} aria-invalid={!!errors.nom} aria-describedby={errors.nom ? "err-nom" : undefined} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
                <span id="err-nom">{fieldErr("nom")}</span>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Téléphone <span className="text-destructive" aria-hidden="true">*</span></span>
                  <input required name="telephone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} aria-invalid={!!errors.telephone} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  {fieldErr("telephone")}
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Email <span className="text-destructive" aria-hidden="true">*</span></span>
                  <input required name="email" type="email" inputMode="email" autoComplete="email" maxLength={255} aria-invalid={!!errors.email} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  {fieldErr("email")}
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Commune du chantier</span>
                <input name="commune" type="text" autoComplete="address-level2" maxLength={80} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Type de projet</span>
                <select name="projet" defaultValue="Carrelage grand format" className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option>Carrelage grand format</option>
                  <option>Marbre / pierre naturelle</option>
                  <option>Maçonnerie / mur en pierre</option>
                  <option>Terrasse / piscine</option>
                  <option>Salle de bains</option>
                  <option>Rénovation complète</option>
                  <option>Autre</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Décrivez votre projet <span className="text-destructive" aria-hidden="true">*</span></span>
                <textarea required name="message" rows={5} maxLength={2000} aria-invalid={!!errors.message} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
                {fieldErr("message")}
              </label>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-primary" />
                <span>
                  J'accepte que mes données soient traitées par Damien Mugnier pour répondre à ma demande de devis.
                  Conformément au RGPD, je dispose de droits d'accès, de rectification, d'effacement et d'opposition
                  décrits dans la{" "}
                  <Link to="/politique-confidentialite" className="font-medium text-primary underline-offset-2 hover:underline">
                    politique de confidentialité
                  </Link>
                  . <span className="text-destructive" aria-hidden="true">*</span>
                </span>
              </label>
              {fieldErr("consent")}

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-elegant)] focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                Envoyer ma demande
              </button>
              <p className="text-[11px] text-muted-foreground">
                Champs marqués <span className="text-destructive">*</span> obligatoires. Aucune donnée n'est cédée à des tiers.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
