"use client";

import { useEffect, useState } from "react";

const KEY = "dm-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(KEY));
  }, []);

  function save(choice: "accepté" | "refusé" | "essentiel") {
    localStorage.setItem(KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <section
      className="fixed inset-x-4 bottom-5 z-50 mx-auto max-w-4xl rounded-2xl border border-concrete/50 bg-ivory/96 p-5 text-navy shadow-2xl backdrop-blur-xl"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-2xl">Cookies et confidentialité</h2>
          <p className="mt-2 text-sm leading-7 text-navy/70">
            Le site utilise des cookies techniques nécessaires. Les traceurs non essentiels ne sont
            activés qu’avec votre accord. Vous pouvez accepter, refuser ou conserver les essentiels.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => save("accepté")} className="btn-primary" type="button">
            Accepter
          </button>
          <button onClick={() => save("refusé")} className="btn-secondary" type="button">
            Refuser
          </button>
          <button onClick={() => save("essentiel")} className="btn-ghost" type="button">
            Essentiels
          </button>
        </div>
      </div>
    </section>
  );
}
