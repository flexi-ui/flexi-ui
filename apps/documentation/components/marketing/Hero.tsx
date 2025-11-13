'use client'

import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/20 via-background to-background dark:from-primary-900/10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-divider bg-content2/50 backdrop-blur-sm">
            <span className="text-xs font-medium text-foreground-600">
              🎉 Open source and free to use
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Make beautiful websites
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              regardless of your design experience
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-600 max-w-2xl mx-auto">
            Beautiful, fast and modern React UI library. Fully typed, easy to customize, and built
            for fast, accessible interfaces.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            as={NextLink}
            href="/docs/guide/introduction"
            color="primary"
            size="lg"
            endContent={<ArrowRight className="h-4 w-4" />}
            className="font-semibold"
          >
            Get Started
          </Button>
          <Button
            as={NextLink}
            href={siteConfig.links.github}
            variant="bordered"
            size="lg"
            startContent={<Github className="h-4 w-4" />}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            View on GitHub
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-foreground-600"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">MIT Licensed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">React 19</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
