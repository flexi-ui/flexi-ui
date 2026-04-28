'use client'

import { Button } from '@flexi-ui/button'
import { Group } from '@flexi-ui/group'

export default function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <Group aria-label="Horizontal" orientation="horizontal">
        <Button variant="bordered">Cut</Button>
        <Button variant="bordered">Copy</Button>
        <Button variant="bordered">Paste</Button>
      </Group>
      <Group aria-label="Vertical" orientation="vertical">
        <Button variant="bordered">Cut</Button>
        <Button variant="bordered">Copy</Button>
        <Button variant="bordered">Paste</Button>
      </Group>
    </div>
  )
}
