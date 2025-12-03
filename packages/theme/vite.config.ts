import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
      include: ['src/'],
      exclude: ['src/**/*.test.ts'],
    }),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
        colors: resolve(__dirname, 'src/colors/index.ts'),
        presets: resolve(__dirname, 'src/presets/index.ts'),
        'test-utils': resolve(__dirname, 'src/test-utils/index.ts'),
      },
      name: '@flexi-ui/theme',
      fileName: (format, entryName) => {
        if (format === 'umd') {
          return `${entryName === 'main' ? 'lib' : entryName}.umd.cjs`
        }
        return `${entryName === 'main' ? 'lib' : entryName}.js`
      },
    },
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      // Externalize dependencies
      external: [
        'tailwindcss',
        'tailwindcss/plugin.js',
        '@flexi-ui/shared-utils',
        'clsx',
        'color2k',
        'deepmerge',
        'flat',
        'tailwind-merge',
        'tailwind-variants',
      ],
      output: {
        // Ensure workspace deps are not bundled
        globals: {
          'tailwindcss/plugin.js': 'plugin',
          tailwindcss: 'tailwindcss',
          '@flexi-ui/shared-utils': 'FlexiUISharedUtils',
          color2k: 'color2k',
          deepmerge: 'deepmerge',
          clsx: 'clsx',
          flat: 'flat',
          'tailwind-merge': 'tailwindMerge',
          'tailwind-variants': 'tailwindVariants',
        },
        // Preserve modules for better tree-shaking
        preserveModules: false,
        // Manual chunks for optimization
        manualChunks: undefined,
      },
    },
  },
})
