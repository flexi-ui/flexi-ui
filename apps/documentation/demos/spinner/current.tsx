'use client'

import { Spinner } from '@flexi-ui/spinner'

export default function Demo() {
  return (
    <div className="flex items-center gap-3 text-danger">
      <Spinner color="current" />
      <span className="text-sm">Retrying…</span>
    </div>
  )
}
