import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    // Add these for better production builds
    minify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 3005,
  },
});
