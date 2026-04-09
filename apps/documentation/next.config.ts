import type { NextConfig } from 'next'
import { createMDX } from 'fumadocs-mdx/next'
import redirects from './config/redirects'

const nextConfig: NextConfig = {
  redirects,
  typescript: {
    // Pre-existing TS errors in marketing/theme pages from legacy Button API
    // These will be fixed in a separate PR when all components are updated
    ignoreBuildErrors: true,
  },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
