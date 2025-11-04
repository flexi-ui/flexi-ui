export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'FlexiUI - A modern open-source React UI library. Fully typed, easy to customize, and built for fast, accessible interfaces.',
  description:
    'A modern open-source React UI library. Fully typed, easy to customize, and built for fast, accessible interfaces.',
  ogImage: 'https://flexiui.com/flexiui.jpg',
  author: 'Muneeb Mughal',
  email: 'muneeb.it.dev@gmail.com',
  siteUrl: 'https://flexiui.com',
  creator: '@flexi-ui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flexiui.com',
    siteName: 'FlexiUI',
    description:
      'A modern open-source React UI library. Fully typed, easy to customize, and built for fast, accessible interfaces.',
    images: [
      {
        url: 'https://flexiui.com/flexiui.jpg',
        width: 1200,
        height: 630,
        alt: 'FlexiUI',
      },
    ],
  },
  links: {
    github: 'https://github.com/flexi-ui/flexi-ui',
    docs: 'https://flexiui.com',
  },
}
