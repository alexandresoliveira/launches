import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";
import type { UserConfigFn, UserConfig } from "vite";

const defineConfig: UserConfigFn = () => {
  const config: UserConfig = {
    plugins: [
      react(),
      tsconfigPaths(),
      legacy(),
      viteEslint(),
      viteStylelint({
        exclude: "/windicss|node_modules/",
      }),
      svgr(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
