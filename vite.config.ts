// The shared TanStack config already includes these plugins; do not add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Additional Vite settings can be passed via defineConfig({ vite: { ... } }).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/carlao-bau-e-caminhoes/" : "/",
  },
  nitro: isGitHubPages ? false : undefined,
  tanstackStart: {
    prerender: { enabled: isGitHubPages },
    server: { entry: "server" },
  },
});
