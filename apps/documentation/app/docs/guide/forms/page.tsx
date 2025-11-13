import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Forms - FlexiUI',
  description: 'Learn how to build forms with FlexiUI.',
}

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Forms</h1>
        <p className="text-lg text-foreground-600">
          Build accessible, validated forms with FlexiUI and React Aria.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Components</h2>
        <p>
          FlexiUI provides form components that handle validation, accessibility, and user
          interactions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Input - Text inputs with various types</li>
          <li>Textarea - Multi-line text inputs</li>
          <li>Select - Dropdown selections</li>
          <li>Checkbox - Toggle options</li>
          <li>Radio - Single choice from options</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Form</h2>
        <CodeBlock
          code={`import { Form } from '@flexi-ui/form'
import { Input } from '@flexi-ui/input'
import { Button } from '@flexi-ui/button'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    console.log(Object.fromEntries(formData))
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Name"
        name="name"
        placeholder="Enter your name"
        isRequired
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        isRequired
      />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Validation</h2>
        <p>FlexiUI integrates with React Aria for powerful client-side validation:</p>
        <CodeBlock
          code={`<Form validationBehavior="native">
  <Input
    label="Email"
    name="email"
    type="email"
    isRequired
    validate={(value) => {
      if (!value.includes('@')) {
        return 'Please enter a valid email address'
      }
    }}
  />
  <Input
    label="Password"
    name="password"
    type="password"
    minLength={8}
    isRequired
    errorMessage="Password must be at least 8 characters"
  />
</Form>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Controlled Forms</h2>
        <p>For more control, use React state to manage form values:</p>
        <CodeBlock
          code={`import { useState } from 'react'

export default function ControlledForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <Input
        label="Email"
        value={email}
        onValueChange={setEmail}
        type="email"
      />
      <Input
        label="Password"
        value={password}
        onValueChange={setPassword}
        type="password"
      />
    </Form>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Libraries</h2>
        <p>FlexiUI components work great with popular form libraries:</p>

        <h3 className="text-xl font-semibold mt-4">React Hook Form</h3>
        <CodeBlock
          code={`import { useForm } from 'react-hook-form'
import { Input } from '@flexi-ui/input'
import { Button } from '@flexi-ui/button'

export default function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input
        {...register('email', { required: true })}
        label="Email"
        type="email"
        validationState={errors.email ? 'invalid' : undefined}
        errorMessage={errors.email?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Server Actions</h2>
        <p>In Next.js, use Server Actions for form submissions:</p>
        <CodeBlock
          code={`'use server'

export async function submitForm(formData: FormData) {
  const email = formData.get('email')
  // Process form data
  return { success: true }
}

// In your component:
<Form action={submitForm}>
  <Input name="email" label="Email" type="email" />
  <Button type="submit">Submit</Button>
</Form>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
