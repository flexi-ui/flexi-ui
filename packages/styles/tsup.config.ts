import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/components/*/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  treeshake: true,
  splitting: false,
  outDir: 'dist',
})
