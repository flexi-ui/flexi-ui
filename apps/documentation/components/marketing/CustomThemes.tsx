'use client'

import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { Palette, ArrowRight } from 'lucide-react'

export const CustomThemes = () => {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Primary Color Card */}
              <div className="p-6 rounded-2xl border border-divider bg-content1 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Primary</p>
                  <p className="text-xs text-foreground-600">#0070F3</p>
                </div>
              </div>

              {/* Secondary Color Card */}
              <div className="p-6 rounded-2xl border border-divider bg-content1 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-xs text-foreground-600">#7928CA</p>
                </div>
              </div>

              {/* Success Color Card */}
              <div className="p-6 rounded-2xl border border-divider bg-content1 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Success</p>
                  <p className="text-xs text-foreground-600">#17C964</p>
                </div>
              </div>

              {/* Warning Color Card */}
              <div className="p-6 rounded-2xl border border-divider bg-content1 space-y-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Warning</p>
                  <p className="text-xs text-foreground-600">#F5A524</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl border border-divider bg-background shadow-xl"
            >
              <Palette className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Customize your theme
              <br />
              <span className="text-foreground-600">with ease</span>
            </h2>
            <p className="text-lg text-foreground-600">
              FlexiUI&apos;s powerful theming system is built on Tailwind CSS, making it easy to
              customize colors, spacing, and component styles to match your brand.
            </p>
            <ul className="space-y-3 text-foreground-600">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Define your brand colors with CSS variables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Customize component variants and sizes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Create multiple themes for different contexts</span>
              </li>
            </ul>
            <Button
              as={NextLink}
              href="/docs/customization/theme"
              color="primary"
              variant="flat"
              endContent={<ArrowRight className="h-4 w-4" />}
            >
              Learn about theming
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
