import { Link } from "@tanstack/react-router";
import { Phone, MessageSquare } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pt-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)" }}
    >
      <div className="flex gap-2">
        <a
          href="tel:+33628453288"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          aria-label="Appeler Damien Mugnier au 06 28 45 32 88"
        >
          <Phone className="h-4 w-4" /> Appeler
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
        >
          <MessageSquare className="h-4 w-4" /> Devis gratuit
        </Link>
      </div>
    </div>
  );
}
