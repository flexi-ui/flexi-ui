import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/components/*/vitest.config.ts',
  'packages/hooks/*/vitest.config.ts',
  'packages/utilities/*/vitest.config.ts',
])
