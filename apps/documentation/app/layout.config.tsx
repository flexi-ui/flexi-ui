import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Logo } from '@/components/Logo'
import { siteConfig } from '@/config/site'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
    url: '/',
  },
  githubUrl: siteConfig.links.github,
  links: [
    { text: 'Docs', url: '/docs/guide/introduction', active: 'nested-url' },
    { text: 'Components', url: '/docs/components/button', active: 'nested-url' },
  ],
}
