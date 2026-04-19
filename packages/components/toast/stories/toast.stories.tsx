import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'react-aria-components'

import { Toast, ToastQueue, ToastRegion } from '../src/main'

interface ToastContent {
  title: string
  description?: string
  tone?: 'info' | 'success' | 'warning' | 'danger'
}

const queue = new ToastQueue<ToastContent>({
  maxVisibleToasts: 5,
})

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => (
    <div>
      <div className="flex gap-2">
        <Button
          className="rounded border px-3 py-1"
          onPress={() => queue.add({ title: 'Heads up', description: 'You have a new message.' })}
        >
          Show toast
        </Button>
        <Button
          className="rounded border px-3 py-1"
          onPress={() => queue.add({ title: 'Saved', tone: 'success' })}
        >
          Success
        </Button>
        <Button
          className="rounded border px-3 py-1"
          onPress={() => queue.add({ title: 'Error', tone: 'danger', description: 'Something broke.' })}
        >
          Danger
        </Button>
      </div>
      <ToastRegion queue={queue}>
        {({ toast }) => (
          <Toast toast={toast} tone={toast.content.tone}>
            <Toast.Content>
              <div className="toast__title">{toast.content.title}</div>
              {toast.content.description ? (
                <div className="toast__description">{toast.content.description}</div>
              ) : null}
            </Toast.Content>
          </Toast>
        )}
      </ToastRegion>
    </div>
  ),
}
