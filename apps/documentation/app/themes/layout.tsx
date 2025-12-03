import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Theme Generator',
  description:
    'Create custom themes for your FlexiUI application with our interactive theme generator. Generate light and dark themes from any color palette with real-time preview.',
  keywords: [
    'theme generator',
    'custom themes',
    'color palette',
    'dark mode',
    'light mode',
    'theme customization',
    ...siteConfig.keywords,
  ],
  openGraph: {
    title: 'Theme Generator | FlexiUI',
    description:
      'Create custom themes for your FlexiUI application with our interactive theme generator. Generate light and dark themes from any color palette.',
    url: `${siteConfig.siteUrl}/themes`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.siteUrl}/og-themes.jpg`,
        width: 1200,
        height: 630,
        alt: 'FlexiUI Theme Generator',
      },
    ],
  },
  twitter: {
    ...siteConfig.twitter,
    title: 'Theme Generator | FlexiUI',
    description:
      'Create custom themes for your FlexiUI application with our interactive theme generator.',
  },
  alternates: {
    canonical: `${siteConfig.siteUrl}/themes`,
  },
}

export default function ThemesLayout({ children }: { children: React.ReactNode }) {
  return children
}
