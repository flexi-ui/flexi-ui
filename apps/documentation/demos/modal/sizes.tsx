'use client'

import { Button } from '@flexi-ui/button'
import { Modal } from '@flexi-ui/modal'
import { useState } from 'react'

const sizes = ['sm', 'md', 'lg', 'xl'] as const

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
        <Modal size={size ?? 'md'}>
          <Modal.Dialog>
            <Modal.Header>
              <h2 className="text-lg font-semibold capitalize">{size} modal</h2>
            </Modal.Header>
            <Modal.Body>
              <p className="text-sm">Demonstrating the {size} size variant.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => setSize(null)}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}
