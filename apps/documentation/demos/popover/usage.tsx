'use client'

import { Button } from '@flexi-ui/button'
import { Popover } from '@flexi-ui/popover'

export default function Demo() {
  return (
    <Popover>
      <Button>Open popover</Button>
      <Popover.Content>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm font-semibold">Quick settings</p>
          <p className="text-xs text-muted-foreground">
            Adjust visibility and notifications for this workspace.
          </p>
        </div>
      </Popover.Content>
    </Popover>
  )
}
