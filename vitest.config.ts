/// <reference types="vitest" />

import { configDefaults, defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  esbuild: {
    target: "es2022",
  },
  plugins: [tsconfigPaths()],
  test: {
    exclude: [...configDefaults.exclude, ".local/**", "./test/ch2/**"],
  },
});
