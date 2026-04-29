import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { RootProvider } from 'fumadocs-ui/provider/next'
import { clsx } from '@flexi-ui/shared-utils'

import { siteConfig } from '@/config/site'
import { fonts } from '@/config/fonts'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    ...siteConfig.openGraph,
    emails: [siteConfig.email],
  },
  twitter: siteConfig.twitter,
  alternates: {
    canonical: siteConfig.siteUrl,
    types: {
      'application/rss+xml': [{ url: `${siteConfig.siteUrl}/feed.xml`, title: 'FlexiUI RSS Feed' }],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
          'min-h-screen bg-background font-sans text-foreground antialiased',
          fonts.sans.variable,
          fonts.mono.variable,
        )}
      >
        <StructuredData />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
