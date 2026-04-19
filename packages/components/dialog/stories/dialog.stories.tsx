import type { Meta, StoryObj } from '@storybook/react'

import { Button, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components'

import { Dialog } from '../src/main'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <DialogTrigger>
      <Button className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-white">
        Open Dialog
      </Button>
      <ModalOverlay className="fixed inset-0 grid place-items-center bg-black/40">
        <Modal>
          <Dialog>
            <Dialog.Title>Confirm action</Dialog.Title>
            <Dialog.Description>
              Are you sure you want to proceed? This operation cannot be undone.
            </Dialog.Description>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}

export const Small: Story = {
  render: () => (
    <DialogTrigger>
      <Button className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-white">Open</Button>
      <ModalOverlay className="fixed inset-0 grid place-items-center bg-black/40">
        <Modal>
          <Dialog size="sm">
            <Dialog.Title>Info</Dialog.Title>
            <Dialog.Description>A compact dialog.</Dialog.Description>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}
