import type { StorybookConfig } from '@storybook/react-vite'

import { resolve } from 'node:path'

const root = resolve(__dirname, '..')

const config: StorybookConfig = {
  stories: [
    '../packages/components/*/stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import('@tailwindcss/vite')

    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@flexi-ui/styles': resolve(root, 'packages/styles/src/index.ts'),
        '@flexi-ui/button': resolve(root, 'packages/components/button/src/main.ts'),
        '@flexi-ui/spinner': resolve(root, 'packages/components/spinner/src/main.ts'),
        '@flexi-ui/link': resolve(root, 'packages/components/link/src/main.ts'),
        '@flexi-ui/ripple': resolve(root, 'packages/components/ripple/src/main.ts'),
        '@flexi-ui/avatar': resolve(root, 'packages/components/avatar/src/main.ts'),
        '@flexi-ui/input': resolve(root, 'packages/components/input/src/main.ts'),
        '@flexi-ui/form': resolve(root, 'packages/components/form/src/main.ts'),
      },
    }

    return config
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
}

export default config
