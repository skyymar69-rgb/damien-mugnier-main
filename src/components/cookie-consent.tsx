import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "dm-cookie-consent-v1";

type Choice = "accepted" | "rejected" | "custom";

interface Consent {
  choice: Choice;
  analytics: boolean;
  date: string;
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    setOpen(false);
  };

  const acceptAll = () =>
    save({ choice: "accepted", analytics: true, date: new Date().toISOString() });
  const rejectAll = () =>
    save({ choice: "rejected", analytics: false, date: new Date().toISOString() });
  const saveCustom = () =>
    save({ choice: "custom", analytics, date: new Date().toISOString() });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 md:bottom-4 md:left-auto md:right-4 md:max-w-md md:px-0 md:pb-0"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Cookie className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <h2 id="cookie-title" className="font-display text-lg text-foreground">
              Vos préférences cookies
            </h2>
            <p id="cookie-desc" className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement.
              Avec votre consentement, des cookies de mesure d'audience anonymisée peuvent être déposés.
              Vous pouvez accepter, refuser ou personnaliser. Plus d'infos dans notre{" "}
              <Link to="/politique-confidentialite" className="font-medium text-primary underline-offset-2 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>

            {showSettings && (
              <div className="mt-4 space-y-2 rounded-lg border border-border bg-secondary/50 p-3">
                <label className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">Cookies essentiels</span>
                  <span className="rounded bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    Toujours actif
                  </span>
                </label>
                <label className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">Mesure d'audience anonyme</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
              >
                Tout accepter
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-accent"
              >
                Tout refuser
              </button>
              {showSettings ? (
                <button
                  type="button"
                  onClick={saveCustom}
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground"
                >
                  Enregistrer mes choix
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="inline-flex w-full items-center justify-center rounded-full px-4 py-1.5 text-[11px] font-medium text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
                >
                  Personnaliser
                </button>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={rejectAll}
            aria-label="Fermer (équivaut à un refus)"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
