'use client'

import { Button } from '@flexi-ui/button'
import { Group } from '@flexi-ui/group'

export default function Demo() {
  return (
    <Group aria-label="Filters">
      <Button variant="bordered">Status</Button>
      <Button variant="bordered">Owner</Button>
      <Button variant="bordered">Tag</Button>
    </Group>
  )
}
