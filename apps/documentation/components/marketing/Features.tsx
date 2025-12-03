'use client'

import { motion } from 'framer-motion'
import { Palette, Zap, Shield, Code, Smartphone, Package, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

const features: Feature[] = [
  {
    icon: Palette,
    title: 'Themeable',
    description:
      'Customize every component with our powerful theme system built on Tailwind CSS. Support for light, dark, and custom themes out of the box.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Accessible',
    description:
      'Built on React Aria for world-class accessibility. Keyboard navigation, screen reader support, and ARIA attributes included.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description:
      'Fully typed with TypeScript. Comprehensive documentation, code examples, and IntelliSense support for a smooth development experience.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description:
      'Optimized bundle size with tree-shaking support. Built with Vite for lightning-fast builds and optimal performance.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description:
      'Mobile-first design with responsive variants. All components work seamlessly across desktop, tablet, and mobile devices.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Package,
    title: 'Modular',
    description:
      'Import only what you need. Every component is published as an individual package for maximum flexibility and minimal bundle size.',
    gradient: 'from-red-500 to-rose-500',
  },
]

export const Features = () => {
  return (
    <section className="px-6 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-divider bg-content1/50 backdrop-blur-sm"
          >
            <span className="text-xs font-medium text-foreground">Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-mono lg:text-5xl font-bold leading-[1.1]"
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              build modern apps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-3xl mx-auto leading-relaxed"
          >
            FlexiUI provides all the tools you need to create beautiful, accessible, and performant
            user interfaces with minimal setup.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl border overflow-hidden border-divider bg-content1 hover:bg-content2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}
                />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-small group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 pt-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Hover effect glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
