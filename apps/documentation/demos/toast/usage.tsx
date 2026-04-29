'use client'

import { Button } from '@flexi-ui/button'
import { Toast, ToastQueue, ToastRegion } from '@flexi-ui/toast'
import { useState } from 'react'

interface ToastPayload {
  title: string
  tone?: 'info' | 'success' | 'warning' | 'danger'
}

export default function Demo() {
  const [queue] = useState(() => new ToastQueue<ToastPayload>())

  return (
    <div className="flex flex-col gap-3">
      <Button onPress={() => queue.add({ title: 'File uploaded', tone: 'success' })}>
        Trigger toast
      </Button>
      <ToastRegion queue={queue}>
        <ToastRegion.List>
          {({ toast }) => (
            <Toast key={toast.key} toast={toast} tone={toast.content.tone}>
              <Toast.Content>{toast.content.title}</Toast.Content>
            </Toast>
          )}
        </ToastRegion.List>
      </ToastRegion>
    </div>
  )
}
