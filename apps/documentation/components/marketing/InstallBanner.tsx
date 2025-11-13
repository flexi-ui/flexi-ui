'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import { Check, Copy } from 'lucide-react'

export const InstallBanner = () => {
  const [copied, setCopied] = useState(false)
  const installCommand = 'npm install @flexi-ui/react'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="px-6 py-20 md:py-28 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to get started?</h2>
            <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
              Install FlexiUI and start building beautiful user interfaces in minutes.
            </p>
          </div>

          {/* Install Command */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative flex items-center gap-2 p-4 md:p-6 rounded-xl bg-background border border-divider">
                <code className="flex-1 text-left font-mono text-sm md:text-base text-foreground overflow-x-auto">
                  {installCommand}
                </code>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  color={copied ? 'success' : 'default'}
                  onPress={handleCopy}
                  aria-label="Copy install command"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>TypeScript support included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>Tree-shakeable imports</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>No configuration required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
