import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/dc-simple-feature-section/",
  build: {
    outDir: "docs",
  },
  server: {
    open: true,
  },
  plugins: [tailwindcss()],
});
