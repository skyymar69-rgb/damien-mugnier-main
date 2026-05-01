"use client";

import { useEffect, useState } from "react";
import { ALargeSmall, Contrast, Pause, RotateCcw } from "lucide-react";

export function AccessibilityToolbar() {
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);
  const [size, setSize] = useState<"normal" | "large" | "xl">("normal");

  useEffect(() => {
    document.documentElement.classList.toggle("a11y-contrast", contrast);
    document.documentElement.classList.toggle("a11y-reduced-motion", motion);
    document.documentElement.dataset.fontSize = size;
  }, [contrast, motion, size]);

  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex gap-2 rounded-full border border-concrete/50 bg-ivory/95 p-2 shadow-xl backdrop-blur-xl"
      aria-label="Options d’accessibilité"
    >
      <button
        type="button"
        className="icon-button"
        onClick={() => setContrast((v) => !v)}
        aria-label="Activer le contraste renforcé"
      >
        <Contrast className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="icon-button"
        onClick={() => setSize((v) => (v === "normal" ? "large" : v === "large" ? "xl" : "normal"))}
        aria-label="Changer la taille du texte"
      >
        <ALargeSmall className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="icon-button"
        onClick={() => setMotion((v) => !v)}
        aria-label="Réduire les animations"
      >
        <Pause className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="icon-button"
        onClick={() => {
          setContrast(false);
          setMotion(false);
          setSize("normal");
        }}
        aria-label="Réinitialiser les préférences"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
    </div>
  );
}
