import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Vercel дээр зөв ажиллахын тулд
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
