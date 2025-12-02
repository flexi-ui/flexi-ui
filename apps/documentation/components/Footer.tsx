import NextLink from 'next/link'
import { Github, Twitter } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { siteConfig } from '@/config/site'

const footerLinks = {
  docs: [
    { label: 'Introduction', href: '/docs/guide/introduction' },
    { label: 'Installation', href: '/docs/guide/installation' },
    { label: 'Routing', href: '/docs/guide/routing' },
    { label: 'Forms', href: '/docs/guide/forms' },
  ],
  components: [
    { label: 'Button', href: '/docs/components/button' },
    { label: 'Input', href: '/docs/components/input' },
    { label: 'Avatar', href: '/docs/components/avatar' },
    { label: 'Form', href: '/docs/components/form' },
  ],
  frameworks: [
    { label: 'Next.js', href: '/docs/frameworks/nextjs' },
    { label: 'Vite', href: '/docs/frameworks/vite' },
    { label: 'Remix', href: '/docs/frameworks/remix' },
    { label: 'Astro', href: '/docs/frameworks/astro' },
  ],
  community: [
    { label: 'GitHub', href: siteConfig.links.github, external: true },
    { label: 'Roadmap', href: '#' },
  ],
}

export const Footer = () => {
  return (
    <footer className="w-full border-t border-divider bg-background">
      <div className="mx-auto max-w-8xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <NextLink href="/" className="flex items-center gap-2 mb-4">
              <Logo />
            </NextLink>
            <p className="text-sm text-foreground-500 max-w-md">{siteConfig.description}</p>
            <div className="flex gap-4 mt-6">
              <NextLink
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </NextLink>
              <NextLink
                href={siteConfig.creator}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </NextLink>
            </div>
          </div>

          {/* Docs Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Docs</h3>
            <ul className="space-y-3">
              {footerLinks.docs.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Components Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Components</h3>
            <ul className="space-y-3">
              {footerLinks.components.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-foreground transition-colors"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-divider flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-500">
            © {new Date().getFullYear()} FlexiUI. Built with ❤️ by{' '}
            <NextLink href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.author}
            </NextLink>
          </p>
          <p className="text-sm text-foreground-500">Licensed under the MIT License</p>
        </div>
      </div>
    </footer>
  )
}
