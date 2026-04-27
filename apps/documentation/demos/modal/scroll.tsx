'use client'

import { Button } from '@flexi-ui/button'
import { Modal } from '@flexi-ui/modal'
import { useState } from 'react'

export default function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="bordered" onPress={() => setOpen(true)}>
        Open long modal
      </Button>
      <Modal.Overlay isOpen={open} onOpenChange={setOpen}>
        <Modal scrollBehavior="inside">
          <Modal.Dialog>
            <Modal.Header>
              <h2 className="text-lg font-semibold">Terms of service</h2>
            </Modal.Header>
            <Modal.Body>
              {Array.from({ length: 24 }).map((_, i) => (
                <p key={i} className="mb-3 text-sm text-muted-foreground">
                  Section {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Praesent vehicula lectus quis lacus blandit, ut tristique elit
                  cursus.
                </p>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => setOpen(false)}>Accept</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}
