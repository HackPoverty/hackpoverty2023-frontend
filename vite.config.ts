/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: "build",
  },
  resolve: {
    // this fixes ESM in a CJS package error (e.g. @ionic/react)
    // comment this out to see what happens
    mainFields: ["module"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "html"],
      exclude: ["node_modules/", "src/setupTests.ts"],
    },
  },
})
