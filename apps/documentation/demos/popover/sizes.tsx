'use client'

import { Button } from '@flexi-ui/button'
import { Popover } from '@flexi-ui/popover'

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Popover>
        <Button variant="bordered">Small</Button>
        <Popover.Content size="sm">
          <div className="p-3 text-xs">Small popover content.</div>
        </Popover.Content>
      </Popover>
      <Popover>
        <Button variant="bordered">Medium</Button>
        <Popover.Content size="md">
          <div className="p-4 text-sm">Medium popover content.</div>
        </Popover.Content>
      </Popover>
      <Popover>
        <Button variant="bordered">Large</Button>
        <Popover.Content size="lg">
          <div className="p-6 text-base">Large popover content.</div>
        </Popover.Content>
      </Popover>
    </div>
  )
}
