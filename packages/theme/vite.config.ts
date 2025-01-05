import {defineConfig} from "vite";
import {resolve} from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
      include: ["src/"],
      exclude: ["src/**/*.text.ts", "node_modukes"],
    }),
  ],
  build: {
    lib: {
      name: "@flexi-ui/theme",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "lib",
    },
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.ts"),
      },
      output: {
        dir: "dist",
      },
    },
  },
});
