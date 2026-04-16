import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { Button } from 'react-aria-components'

import { Modal } from '../src/main'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const ModalExample = ({ size }: { size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Modal</Button>
      <Modal.Overlay isOpen={isOpen} onOpenChange={setOpen}>
        <Modal size={size}>
          <Modal.Dialog>
            <Modal.Header>
              <h2 className="text-lg font-semibold">Modal Title</h2>
              <p className="text-sm text-muted">Description text goes here.</p>
            </Modal.Header>
            <Modal.Body>
              <p>This is the modal body content. You can place any content here.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => setOpen(false)}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}

export const Default: Story = {
  render: (args) => <ModalExample size={args.size} />,
}

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const
    const SizeExample = () => {
      const [open, setOpen] = useState<string | null>(null)
      return (
        <div className="flex gap-4">
          {sizes.map((size) => (
            <div key={size}>
              <Button onPress={() => setOpen(size)}>{size} Modal</Button>
              <Modal.Overlay isOpen={open === size} onOpenChange={() => setOpen(null)}>
                <Modal size={size}>
                  <Modal.Dialog>
                    <Modal.Header>
                      <h2 className="text-lg font-semibold capitalize">{size} Modal</h2>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a {size} modal.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onPress={() => setOpen(null)}>Close</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal>
              </Modal.Overlay>
            </div>
          ))}
        </div>
      )
    }
    return <SizeExample />
  },
}
