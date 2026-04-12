import baseConfig from '@flexi-ui/standard/eslint/base'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['apps/documentation/.source/'] },
  ...baseConfig,
]
