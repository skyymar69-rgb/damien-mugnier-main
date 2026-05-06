import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Contact, Download, MapPin, Star, Globe, X, Phone, Mail, QrCode } from "lucide-react";
import logo from "@/assets/logo.webp";
import { business } from "@/lib/site";

const QRCodeSVG = lazy(() =>
  import("qrcode.react").then((m) => ({ default: m.QRCodeSVG })),
);

const SITE_URL = "https://damienmugnier.fr";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=387+route+de+Givors+69700+Beauvallon";
const REVIEWS_URL = "https://search.google.com/local/writereview?placeid=ChIJ_____DamienMugnier";
const VCF_URL = "/damien-mugnier.vcf";

type Tab = "site" | "maps" | "avis";

const tabs: { key: Tab; label: string; icon: typeof Globe; url: string; hint: string }[] = [
  { key: "site", label: "Site web", icon: Globe, url: SITE_URL, hint: "Scannez pour visiter le site" },
  { key: "maps", label: "Itinéraire", icon: MapPin, url: MAPS_URL, hint: "Ouvrir dans Google Maps" },
  { key: "avis", label: "Laisser un avis", icon: Star, url: REVIEWS_URL, hint: "Notez notre travail sur Google" },
];

function QrFallback() {
  return (
    <div
      aria-hidden
      className="grid h-[180px] w-[180px] animate-pulse place-items-center rounded-md bg-muted text-muted-foreground"
    >
      <QrCode className="h-10 w-10 opacity-40" />
    </div>
  );
}

export function DigitalCard() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("site");
  const active = tabs.find((t) => t.key === tab)!;
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Body scroll-lock + ESC + focus management when modal opens
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    // initial focus
    queueMicrotask(() => dialogRef.current?.focus());
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Ouvrir la carte de contact numérique avec QR code"
        className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-2 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-gold)] focus-visible:bg-accent focus-visible:text-accent-foreground sm:px-3"
      >
        <QrCode className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Carte</span>
        <Contact className="hidden h-3.5 w-3.5 lg:inline" aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-primary/40 p-4 backdrop-blur-md animate-fade-in sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="digital-card-title"
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="relative my-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)] outline-none animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="bg-[var(--gradient-navy)] p-6 text-primary-foreground">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl bg-background/95 p-1.5"
                />
                <div>
                  <p id="digital-card-title" className="font-display text-2xl leading-tight">
                    {business.name}
                  </p>
                  <p className="text-xs text-primary-foreground/75">{business.baseline}</p>
                </div>
              </div>
            </div>

            <div
              role="tablist"
              aria-label="Choisir le contenu du QR code"
              className="grid grid-cols-3 gap-1 border-b border-border bg-secondary/40 p-1"
            >
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = t.key === tab;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setTab(t.key)}
                    className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-card text-primary shadow-sm"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-3 px-6 py-6">
              <div className="rounded-2xl border border-accent/30 bg-white p-3 shadow-[var(--shadow-gold)]">
                <Suspense fallback={<QrFallback />}>
                  <QRCodeSVG
                    value={active.url}
                    size={180}
                    level="H"
                    marginSize={2}
                    bgColor="#ffffff"
                    fgColor="#1a2745"
                    className="block h-[180px] w-[180px]"
                  />
                </Suspense>
              </div>
              <p className="text-center text-xs text-muted-foreground">{active.hint}</p>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-primary underline-offset-4 hover:text-accent hover:underline"
              >
                {active.url.replace(/^https?:\/\//, "")}
              </a>
            </div>

            <div className="grid gap-2 border-t border-border bg-secondary/30 p-4">
              <a
                href={VCF_URL}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-[var(--shadow-elegant)]"
              >
                <Download className="h-4 w-4" /> Ajouter à mes contacts (.vcf)
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground"
                >
                  <Phone className="h-3.5 w-3.5" /> Appeler
                </a>
                <a
                  href={business.emailHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground hover:border-accent"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
