import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    VitePWA({
      manifest,
      includeAssets: [
        'aseets/icon/favicon.ico',
        'aseets/icon/apple-touch-icon.png',
        'aseets/icon/favicon.png'
      ],
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    })
  ],
  build: {
    outDir: "build"
  }
});