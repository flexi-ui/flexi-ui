import NextLink from 'next/link'
import { Github } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { siteConfig } from '@/config/site'

const footerLinks = [
  { label: 'Docs', href: '/docs/guide/introduction' },
  { label: 'Components', href: '/docs/components/button' },
  { label: 'GitHub', href: siteConfig.links.github, external: true },
]

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <NextLink href="/" aria-label="FlexiUI">
            <Logo />
          </NextLink>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlexiUI · MIT
          </p>
        </div>

        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label === 'GitHub' && <Github className="h-4 w-4" />}
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
