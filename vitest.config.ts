import { loadEnvConfig } from "@next/env"
import { defineConfig } from "vitest/config"

import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ plugins: [["@lingui/swc-plugin", {}]] }), tsconfigPaths()],
  test: {
    dir: "./",
    globals: true,
    setupFiles: "./test/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
