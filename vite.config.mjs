import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/dc-simple-feature-section/",
  // server: {
  //   open: true,
  // },
  plugins: [tailwindcss()],
});
