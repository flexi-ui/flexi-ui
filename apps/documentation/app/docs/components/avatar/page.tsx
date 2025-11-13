import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Avatar - FlexiUI',
  description: 'Display user profile pictures with fallback support.',
}

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Avatar</h1>
        <p className="text-lg text-foreground-600">
          The Avatar component is used to represent a user, and displays the profile picture,
          initials or fallback icon.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Avatar } from '@flexi-ui/avatar'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`<Avatar
  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
  alt="User avatar"
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <CodeBlock
          code={`<div className="flex gap-4 items-end">
  <Avatar src="https://i.pravatar.cc/150?u=1" size="sm" />
  <Avatar src="https://i.pravatar.cc/150?u=2" size="md" />
  <Avatar src="https://i.pravatar.cc/150?u=3" size="lg" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Fallback</h2>
        <p>When no image is provided, Avatar will display initials or an icon:</p>
        <CodeBlock
          code={`<div className="flex gap-4">
  <Avatar name="John Doe" />
  <Avatar />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <CodeBlock
          code={`<div className="flex gap-4">
  <Avatar name="JD" color="default" />
  <Avatar name="JD" color="primary" />
  <Avatar name="JD" color="secondary" />
  <Avatar name="JD" color="success" />
  <Avatar name="JD" color="warning" />
  <Avatar name="JD" color="danger" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-divider">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">src</td>
                <td className="py-3 px-4 font-mono text-xs">string</td>
                <td className="py-3 px-4 font-mono text-xs">-</td>
                <td className="py-3 px-4">The source URL for the avatar image</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">name</td>
                <td className="py-3 px-4 font-mono text-xs">string</td>
                <td className="py-3 px-4 font-mono text-xs">-</td>
                <td className="py-3 px-4">The name to generate initials from</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">size</td>
                <td className="py-3 px-4 font-mono text-xs">sm | md | lg</td>
                <td className="py-3 px-4 font-mono text-xs">md</td>
                <td className="py-3 px-4">The size of the avatar</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">color</td>
                <td className="py-3 px-4 font-mono text-xs">
                  default | primary | secondary | success | warning | danger
                </td>
                <td className="py-3 px-4 font-mono text-xs">default</td>
                <td className="py-3 px-4">The color of the avatar fallback</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
