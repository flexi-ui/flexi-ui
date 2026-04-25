'use client'

import { Spinner } from '@flexi-ui/spinner'

export default function Demo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  )
}
