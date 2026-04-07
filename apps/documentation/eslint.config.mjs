import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import nextConfig from '@flexi-ui/standard/eslint/next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...nextConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
