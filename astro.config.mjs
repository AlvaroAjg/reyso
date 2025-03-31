import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Asegúrate de que `@astrojs/tailwind` NO esté aquí
  integrations: [],

  vite: {
    plugins: [tailwindcss()]
  }
});