'use client'

import { Button } from '@flexi-ui/button'
import { Disclosure } from '@flexi-ui/disclosure'
import { useState } from 'react'

export default function Demo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Button variant="bordered" onPress={() => setOpen((prev) => !prev)}>
        {open ? 'Close details' : 'Show details'}
      </Button>
      <Disclosure isExpanded={open} onExpandedChange={setOpen}>
        <Disclosure.Trigger>Disclosure title (also a trigger)</Disclosure.Trigger>
        <Disclosure.Panel>
          The disclosure stays in sync with whatever opens it — header, button, link, or shortcut.
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}
