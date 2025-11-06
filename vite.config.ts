import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import fs from 'fs'
import path from 'node:path'

/**
 * Generate a Vite configuration, dynamically setting the library name from the consuming package's package.json.
 */

export function createViteConfig() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

  const hasReact = ['react', 'react-dom', 'framer-motion'].some(
    (dep) => packageJson.dependencies?.[dep] || packageJson.peerDependencies?.[dep],
  )

  // Collect all dependencies and peerDependencies to externalize
  const allDependencies = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ]

  // Filter out workspace:* dependencies as they should be bundled
  const externalDeps = allDependencies.filter((dep) => {
    const depValue =
      packageJson.dependencies?.[dep] || packageJson.peerDependencies?.[dep]
    return !depValue?.startsWith('workspace:')
  })

  // Add specific externals for deep imports
  const external = [
    ...externalDeps,
    /^tailwindcss\/.*/,
    /^@flexi-ui\/.*/,
  ]

  return defineConfig({
    plugins: [
      dts({
        tsconfigPath: path.resolve(process.cwd(), 'tsconfig.json'),
        include: ['src/'],
        exclude: ['src/**/*.test.ts', 'stories/**/*.stories.tsx'],
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: path.resolve(process.cwd(), 'src') + '/',
        },
      ],
    },
    build: {
      lib: {
        name: packageJson.name,
        entry: resolve(process.cwd(), 'src/main.ts'),
        fileName: 'lib',
      },
      sourcemap: true,
      minify: 'esbuild',
      rollupOptions: {
        external,
        input: {
          main: resolve(process.cwd(), 'src/main.ts'),
        },
        output: {
          dir: 'dist',
          globals: {
            ...(hasReact
              ? {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                  'framer-motion': 'FramerMotion',
                }
              : {}),
            // Common externals
            'tailwindcss/plugin.js': 'plugin',
            tailwindcss: 'tailwindcss',
            color2k: 'color2k',
            deepmerge: 'deepmerge',
            clsx: 'clsx',
            flat: 'flat',
            'tailwind-merge': 'tailwindMerge',
            'tailwind-variants': 'tailwindVariants',
          },
        },
      },
    },
  })
}
