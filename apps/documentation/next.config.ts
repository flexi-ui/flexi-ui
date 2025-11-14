import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'
import redirects from './config/redirects.mjs'

const nextConfig: NextConfig = {
  redirects,
}

export default withContentlayer(nextConfig)
