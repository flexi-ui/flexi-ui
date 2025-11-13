import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Custom Variants - FlexiUI',
  description: 'Create custom component variants.',
}

export default function CustomVariantsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Custom Variants</h1>
        <p className="text-lg text-foreground-600">
          Create custom variants for FlexiUI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Extend Component Variants</h2>
        <p>Create custom variants using tailwind-variants:</p>
        <CodeBlock
          code={`import { tv } from 'tailwind-variants'
import { button } from '@flexi-ui/theme'

const customButton = tv({
  extend: button,
  variants: {
    variant: {
      gradient: 'bg-gradient-to-r from-primary to-secondary text-white',
    },
    isAnimated: {
      true: 'transition-transform hover:scale-105',
    },
  },
})`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Use Custom Variants</h2>
        <CodeBlock
          code={`<Button className={customButton({ variant: 'gradient', isAnimated: true })}>
  Gradient Button
</Button>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Create Wrapper Component</h2>
        <CodeBlock
          code={`import { Button, ButtonProps } from '@flexi-ui/button'

interface GradientButtonProps extends ButtonProps {
  gradient?: 'blue' | 'purple' | 'green'
}

export function GradientButton({ gradient = 'blue', ...props }: GradientButtonProps) {
  const gradients = {
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
  }

  return (
    <Button
      {...props}
      className={cn(gradients[gradient], props.className)}
    />
  )
}`}
          language="tsx"
        />
      </div>
    </div>
  )
}
