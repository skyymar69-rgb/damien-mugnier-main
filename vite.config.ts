// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      // The SPA shell used to be prerendered at "/" (maskPath default), which
      // prevented the real homepage from being prerendered: production served
      // an empty-main shell as index.html, causing CLS 0.7 and a slow LCP.
      // Masking the shell on "/?shell" (same route, distinct prerender key)
      // lets "/" be prerendered with its full content while _shell.html
      // remains the SPA fallback for non-prerendered URLs.
      maskPath: "/?shell",
      prerender: {
        enabled: true,
        crawlLinks: true,
        retryCount: 2,
      },
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
    },
  },
});
