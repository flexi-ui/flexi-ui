import { defineConfig, type Options } from 'tsup'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Creates a shared tsup configuration for FlexiUI packages.
 * Used by all packages in the monorepo for consistent builds.
 *
 * @param options - Override options for specific packages
 */
export function createTsupConfig(options: Partial<Options> = {}): ReturnType<typeof defineConfig> {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

  // Collect all dependencies and peerDependencies to externalize
  const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
    // Always externalize these
    /^react/,
    /^react-dom/,
    /^@flexi-ui\//,
    /^@react-aria\//,
    /^@react-stately\//,
    /^@react-types\//,
    /^@internationalized\//,
    /^tailwindcss/,
    /^framer-motion/,
  ]

  return defineConfig({
    entry: ['src/main.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    splitting: false,
    external,
    outDir: 'dist',
    esbuildOptions(opts) {
      opts.jsx = 'automatic'
    },
    ...options,
  })
}
