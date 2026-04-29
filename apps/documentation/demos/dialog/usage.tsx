'use client'

import { Button } from '@flexi-ui/button'
import { Dialog } from '@flexi-ui/dialog'
import { Modal } from '@flexi-ui/modal'
import { useState } from 'react'

export default function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open dialog</Button>
      <Modal.Overlay isOpen={open} onOpenChange={setOpen}>
        <Modal>
          <Dialog>
            <Dialog.Title>Move project</Dialog.Title>
            <Dialog.Description>
              Pick a workspace to move "FlexiUI Docs" into.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="bordered" onPress={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onPress={() => setOpen(false)}>Move</Button>
            </div>
          </Dialog>
        </Modal>
      </Modal.Overlay>
    </>
  )
}
