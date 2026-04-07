import baseConfig from './base.mjs'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
]

export default config
