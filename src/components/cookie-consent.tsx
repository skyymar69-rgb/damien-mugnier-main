import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "dm-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(STORAGE_KEY));
  }, []);

  const saveChoice = (choice: "accepted" | "rejected" | "essential") => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        choice,
        date: new Date().toISOString(),
        version: "2026-05-01",
      }),
    );
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <section
      className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 p-5 text-foreground shadow-2xl backdrop-blur-xl md:bottom-6 md:p-6"
      aria-label="Gestion du consentement aux cookies"
      role="dialog"
      aria-modal="false"
    >
      <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Cookie className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-xl">Confidentialite et cookies</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Ce site utilise uniquement des cookies techniques necessaires a son fonctionnement et,
            si vous l'acceptez, des traceurs de mesure d'audience ou d'amelioration. Vous pouvez
            accepter, refuser ou continuer avec les cookies essentiels. Le refus est aussi simple
            que l'acceptation.
          </p>
          <a
            href="/politique-confidentialite"
            className="mt-3 inline-flex text-sm font-medium text-primary hover:text-accent"
          >
            Lire la politique de confidentialite
          </a>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:shadow-lg"
          >
            Tout accepter
          </button>
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={() => saveChoice("essential")}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Essentiels seuls
          </button>
        </div>
      </div>
    </section>
  );
}
