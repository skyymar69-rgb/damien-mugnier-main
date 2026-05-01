import { useEffect, useState } from "react";
import { ALargeSmall, Contrast, Pause, RotateCcw } from "lucide-react";

type FontSize = "normal" | "large" | "xl";

export function AccessibilityToolbar() {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    document.documentElement.classList.toggle("a11y-contrast", highContrast);
    document.documentElement.classList.toggle("a11y-reduced-motion", reducedMotion);
    document.documentElement.dataset.fontSize = fontSize;
  }, [highContrast, reducedMotion, fontSize]);

  const increaseFontSize = () => {
    setFontSize((current) =>
      current === "normal" ? "large" : current === "large" ? "xl" : "normal",
    );
  };

  const reset = () => {
    setHighContrast(false);
    setReducedMotion(false);
    setFontSize("normal");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-border bg-background/95 p-2 shadow-xl backdrop-blur-md">
      <button
        type="button"
        onClick={() => setHighContrast((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={highContrast ? "Desactiver le contraste eleve" : "Activer le contraste eleve"}
        title="Contraste eleve"
      >
        <Contrast className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={increaseFontSize}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Changer la taille du texte"
        title="Taille du texte"
      >
        <ALargeSmall className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setReducedMotion((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={reducedMotion ? "Reactiver les animations" : "Reduire les animations"}
        title="Reduire les animations"
      >
        <Pause className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={reset}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Reinitialiser les preferences d'accessibilite"
        title="Reinitialiser"
      >
        <RotateCcw className="h-5 w-5" />
      </button>
    </div>
  );
}
