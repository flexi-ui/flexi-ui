'use client'

import { DropZone } from '@flexi-ui/drop-zone'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <DropZone key={size} size={size}>
          <p className="text-sm text-muted-foreground">
            {size.toUpperCase()} drop zone
          </p>
        </DropZone>
      ))}
    </div>
  )
}
