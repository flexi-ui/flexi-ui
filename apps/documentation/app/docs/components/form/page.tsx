import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Form - FlexiUI',
  description: 'Form handling with React Aria.',
}

export default function FormPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Form</h1>
        <p className="text-lg text-foreground-600">
          Form components for building accessible forms with validation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Form } from '@flexi-ui/form'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`<Form onSubmit={(e) => {
  e.preventDefault()
  // Handle form submission
}}>
  <Input label="Email" type="email" name="email" isRequired />
  <Input label="Password" type="password" name="password" isRequired />
  <Button type="submit" color="primary">
    Sign In
  </Button>
</Form>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Validation</h2>
        <p>FlexiUI Form components integrate with React Aria for built-in validation:</p>
        <CodeBlock
          code={`<Form validationBehavior="native">
  <Input
    label="Email"
    type="email"
    name="email"
    isRequired
    validate={(value) => {
      if (!value.includes('@')) {
        return 'Please enter a valid email'
      }
    }}
  />
</Form>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Learn More</h2>
        <p>
          For detailed information about form handling and validation, see the{' '}
          <a href="/docs/guide/forms" className="text-primary hover:underline">
            Forms Guide
          </a>
          .
        </p>
      </div>
    </div>
  )
}
