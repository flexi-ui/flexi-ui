'use client'

import { motion } from 'framer-motion'
import { Palette, Zap, Shield, Code, Smartphone, Package, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Palette,
    title: 'Themeable',
    description:
      'Customize every component with our powerful theme system built on Tailwind CSS. Support for light, dark, and custom themes out of the box.',
  },
  {
    icon: Shield,
    title: 'Accessible',
    description:
      'Built on React Aria for world-class accessibility. Keyboard navigation, screen reader support, and ARIA attributes included.',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description:
      'Fully typed with TypeScript. Comprehensive documentation, code examples, and IntelliSense support for a smooth development experience.',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description:
      'Optimized bundle size with tree-shaking support. Built with Vite for lightning-fast builds and optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description:
      'Mobile-first design with responsive variants. All components work seamlessly across desktop, tablet, and mobile devices.',
  },
  {
    icon: Package,
    title: 'Modular',
    description:
      'Import only what you need. Every component is published as an individual package for maximum flexibility and minimal bundle size.',
  },
]

export const Features = () => {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Everything you need to build modern apps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-600 max-w-2xl mx-auto"
          >
            FlexiUI provides all the tools you need to create beautiful, accessible, and performant
            user interfaces.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-divider bg-content1 hover:bg-content2 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
