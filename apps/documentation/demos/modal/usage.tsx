'use client'

import { Button } from '@flexi-ui/button'
import { Modal } from '@flexi-ui/modal'
import { useState } from 'react'

export default function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open modal</Button>
      <Modal.Overlay isOpen={open} onOpenChange={setOpen}>
        <Modal>
          <Modal.Dialog>
            <Modal.Header>
              <h2 className="text-lg font-semibold">Confirm changes</h2>
              <p className="text-sm text-muted-foreground">
                Saving will overwrite the current draft.
              </p>
            </Modal.Header>
            <Modal.Body>
              <p className="text-sm">
                Anyone viewing the document will see the latest version once you save.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="bordered" onPress={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onPress={() => setOpen(false)}>Save</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}
