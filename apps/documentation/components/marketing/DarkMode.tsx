'use client'

import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const DarkMode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="px-6 py-20 md:py-28 bg-content1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Dark mode support
              <br />
              <span className="text-foreground-600">out of the box</span>
            </h2>
            <p className="text-lg text-foreground-600">
              Every component is designed with dark mode in mind. Switch between light and dark
              themes seamlessly with our built-in theme system powered by next-themes.
            </p>
            <ul className="space-y-3 text-foreground-600">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Automatic dark mode detection based on system preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Easy theme customization with CSS variables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Support for multiple custom themes</span>
              </li>
            </ul>
            {mounted && (
              <Button
                color="primary"
                variant="flat"
                startContent={
                  theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                }
                onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                Try switching to {theme === 'dark' ? 'light' : 'dark'} mode
              </Button>
            )}
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-divider bg-background p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-32 rounded-lg bg-content2" />
                  <div className="h-8 w-8 rounded-lg bg-primary" />
                </div>
                <div className="h-32 rounded-xl bg-content2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-xl bg-content2" />
                  <div className="h-24 rounded-xl bg-content2" />
                  <div className="h-24 rounded-xl bg-content2" />
                </div>
                <div className="flex gap-2">
                  <div className="h-10 flex-1 rounded-lg bg-primary" />
                  <div className="h-10 w-20 rounded-lg border-2 border-divider" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
