'use client'

import { TextArea } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <TextArea
        label="Release notes"
        placeholder="What changed in this release?"
        rows={5}
      />
    </div>
  )
}
