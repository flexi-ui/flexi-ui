import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.es2025,
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['.*.js', '.*.cjs', '.*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: [
      '**/.nx/**',
      '**/.next/**',
      '**/.swc/**',
      '**/.cache/**',
      '**/.vercel/**',
      '**/.DS_Store',
      '**/dist/**',
      '**/build/**',
      '**/public/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/.contentlayer/',
      '**/__snapshots__/**',
      '**/pnpm-lock.yaml',
      '**/next-env.d.ts',
    ],
  },
]

export default config
