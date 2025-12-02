'use client'

import { motion } from 'framer-motion'
import { Button } from '@flexi-ui/button'
import NextLink from 'next/link'
import { Github, Star, GitFork, Users, Heart, Code2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

const stats = [
  {
    icon: Star,
    label: 'Star on GitHub',
    value: 'Open Source',
    color: 'from-yellow-500 to-orange-500',
    description: 'Show your support',
  },
  {
    icon: GitFork,
    label: 'MIT Licensed',
    value: 'Free Forever',
    color: 'from-blue-500 to-cyan-500',
    description: 'Use anywhere',
  },
  {
    icon: Users,
    label: 'Community',
    value: 'Built Together',
    color: 'from-green-500 to-emerald-500',
    description: 'Join developers',
  },
]

export const Community = () => {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider bg-content1/50 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="text-xs font-medium text-foreground-600">Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Join our{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                community
              </span>
            </h2>
            <p className="text-xl text-foreground-600 max-w-3xl mx-auto leading-relaxed">
              FlexiUI is open source and built by a community of developers. Contribute, report
              issues, or just give us a star on GitHub!
            </p>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl border border-divider bg-content1 hover:bg-content2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  {/* Gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}
                  />

                  <div className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                      <p className="text-sm font-medium text-foreground-600">{stat.label}</p>
                      <p className="text-xs text-foreground-500 mt-2">{stat.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              as={NextLink}
              href={siteConfig.links.github}
              color="primary"
              size="lg"
              startContent={<Github className="h-5 w-5" />}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View on GitHub
            </Button>
            <Button
              as={NextLink}
              href="/docs/guide/introduction"
              variant="bordered"
              size="lg"
              startContent={<Code2 className="h-5 w-5" />}
              className="font-semibold text-base px-8 py-6 h-auto hover:bg-content2 transition-all duration-300"
            >
              Read Documentation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
