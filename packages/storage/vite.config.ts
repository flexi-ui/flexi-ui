import {defineConfig} from "vite";
import {resolve} from "path";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
      include: ["src/"],
      exclude: ["src/**/*.text.ts"],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve(process.cwd(), "src") + "/",
      },
    ],
  },
  build: {
    lib: {
      name: "@flexi-ui/storage",
      entry: resolve(__dirname, "src/main.ts"),
      fileName: "lib",
    },
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts"),
      },
      output: {
        dir: "dist",
      },
    },
  },
});
