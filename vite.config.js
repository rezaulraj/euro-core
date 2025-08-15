import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    historyApiFallback: true,
    port: 3005,
  },
  build: {
    outDir: "dist",
  },
});
