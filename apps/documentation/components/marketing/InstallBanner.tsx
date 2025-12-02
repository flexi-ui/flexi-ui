'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { Check, Copy, ArrowRight, Terminal } from 'lucide-react'

export const InstallBanner = () => {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npm install @flexi-ui/theme @flexi-ui/system'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider bg-content1/80 backdrop-blur-sm"
            >
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground-600">Quick Start</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-foreground-600 max-w-3xl mx-auto leading-relaxed">
              Install FlexiUI and start building beautiful user interfaces in minutes. No
              configuration needed.
            </p>
          </div>

          {/* Install Command with enhanced design */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />

              <div className="relative flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 rounded-2xl bg-content1 border border-divider/50 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 flex-1 w-full">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <code className="flex-1 text-left font-mono text-sm md:text-base text-foreground overflow-x-auto pl-4">
                    {installCommand}
                  </code>
                </div>
                <Button
                  isIconOnly
                  size="lg"
                  variant="flat"
                  color={copied ? 'success' : 'primary'}
                  onPress={handleCopy}
                  aria-label="Copy install command"
                  className="shrink-0"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              as={NextLink}
              href="/docs/guide/installation"
              color="primary"
              size="lg"
              endContent={<ArrowRight className="h-5 w-5" />}
              className="font-semibold text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Installation Guide
            </Button>
          </motion.div>

          {/* Additional Info with better design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8"
          >
            {['TypeScript support', 'Tree-shakeable', 'Zero config', 'Production ready'].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-content1 border border-divider/50"
                >
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium text-foreground-600">{item}</span>
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
