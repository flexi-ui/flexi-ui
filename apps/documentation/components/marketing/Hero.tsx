'use client'

import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { ArrowRight, Github, Sparkles, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-10 relative z-10">
        {/* Badge with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-flex"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-divider/50 bg-content1/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Open source • MIT Licensed</span>
          </div>
        </motion.div>

        {/* Main heading with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight leading-[1.1]">
            Build beautiful {` `}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                interfaces
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-sm"
              />
            </span>
            <br />
            <span>faster than ever</span>
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            FlexiUI is the modern React UI library built with{' '}
            <span className="font-semibold text-primary">TypeScript</span>,{' '}
            <span className="font-semibold text-primary">accessibility</span>, and{' '}
            <span className="font-semibold text-primary">customization</span> at its core.
          </p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            as={NextLink}
            radius="full"
            href="/docs/guide/introduction"
            endContent={<ArrowRight className="h-5 w-5" />}
          >
            Get Started
          </Button>
          <Button
            as={NextLink}
            href={siteConfig.links.github}
            radius="full"
            variant="flat"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<Github className="h-5 w-5" />}
          >
            View on GitHub
          </Button>
        </motion.div>

        {/* Enhanced stats with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-12"
        >
          {[
            { icon: Shield, label: 'MIT Licensed', color: 'text-success' },
            { icon: Zap, label: 'TypeScript', color: 'text-primary' },
            { icon: Sparkles, label: 'React 19', color: 'text-secondary' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div
                className={`p-2 rounded-lg bg-content1 border border-divider group-hover:border-primary/50 transition-colors ${stat.color}`}
              >
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
