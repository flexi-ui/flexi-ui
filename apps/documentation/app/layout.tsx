import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { clsx } from '@flexi-ui/shared-utils'

import { Providers } from '@/app/providers'

import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
import { fonts } from '@/config/fonts'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'FlexiUI',
    'React Aria',
    'Server Components',
    'React Components',
    'UI Components',
    'UI Kit',
    'UI Library',
    'UI Framework',
    'UI Design System',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: 'flexi_ui',
    },
  ],
  creator: 'flexi-ui',
  alternates: {
    canonical: 'https://flexiui.com',
    types: {
      'application/rss+xml': [{ url: 'https://flexiui.com/feed.xml', title: 'FlexiUI RSS Feed' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { color: '#f4f4f5', media: '(prefers-color-scheme: light)' },
    { color: '#111111', media: '(prefers-color-scheme: dark)' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fonts.sans.variable,
          fonts.mono.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col" id="app-container">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
