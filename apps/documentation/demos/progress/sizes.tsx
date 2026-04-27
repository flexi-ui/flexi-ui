'use client'

import { Progress } from '@flexi-ui/progress'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Progress label="Small" size="sm" value={40} />
      <Progress label="Medium" size="md" value={60} />
      <Progress label="Large" size="lg" value={80} />
    </div>
  )
}
