'use client'

import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { Github, Star, GitFork, Users } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const Community = () => {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Join our community</h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              FlexiUI is open source and built by a community of developers. Contribute, report
              issues, or just give us a star on GitHub!
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="p-6 rounded-2xl border border-divider bg-content1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                <span className="text-2xl font-bold">GitHub</span>
              </div>
              <p className="text-sm text-foreground-600">Star us on GitHub</p>
            </div>

            <div className="p-6 rounded-2xl border border-divider bg-content1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GitFork className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">Open Source</span>
              </div>
              <p className="text-sm text-foreground-600">MIT Licensed</p>
            </div>

            <div className="p-6 rounded-2xl border border-divider bg-content1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-success" />
                <span className="text-2xl font-bold">Community</span>
              </div>
              <p className="text-sm text-foreground-600">Built by developers</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              as={NextLink}
              href={siteConfig.links.github}
              color="primary"
              size="lg"
              startContent={<Github className="h-5 w-5" />}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              View on GitHub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
