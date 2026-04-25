'use client'

import { Spinner } from '@flexi-ui/spinner'

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
      <Spinner color="current" />
      <div className="rounded bg-foreground p-2">
        <Spinner color="white" />
      </div>
    </div>
  )
}
