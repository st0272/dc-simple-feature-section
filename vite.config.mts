import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  server: {
    open: true,
  },
  plugins: [tailwindcss()],
});
