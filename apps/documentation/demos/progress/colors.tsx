'use client'

import { Progress } from '@flexi-ui/progress'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Progress color="accent" label="Accent" value={65} />
      <Progress color="success" label="Success" value={100} />
      <Progress color="warning" label="Warning" value={45} />
      <Progress color="danger" label="Danger" value={20} />
    </div>
  )
}
