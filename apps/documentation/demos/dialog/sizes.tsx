'use client'

import { Button } from '@flexi-ui/button'
import { Dialog } from '@flexi-ui/dialog'
import { Modal } from '@flexi-ui/modal'
import { useState } from 'react'

const sizes = ['sm', 'md', 'lg'] as const

export default function Demo() {
  const [size, setSize] = useState<(typeof sizes)[number] | null>(null)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((s) => (
          <Button key={s} variant="bordered" onPress={() => setSize(s)}>
            {s.toUpperCase()}
          </Button>
        ))}
      </div>
      <Modal.Overlay isOpen={size !== null} onOpenChange={() => setSize(null)}>
        <Modal>
          <Dialog size={size ?? 'md'}>
            <Dialog.Title>{size?.toUpperCase()} dialog</Dialog.Title>
            <Dialog.Description>
              Different dialog widths for different content densities.
            </Dialog.Description>
            <div className="mt-4 flex justify-end">
              <Button onPress={() => setSize(null)}>Close</Button>
            </div>
          </Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}
