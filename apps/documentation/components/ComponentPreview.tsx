'use client'

import { Icon } from '@iconify/react'
import { Suspense, useState } from 'react'
import { getDemo } from '@/demos/registry'
import { CodeBlock } from './CodeBlock'

interface ComponentPreviewProps {
  name: string
  align?: 'center' | 'start' | 'end'
  minHeight?: string
}

const alignment = {
  center: 'items-center justify-center',
  start: 'items-start justify-start',
  end: 'items-end justify-end',
}

export function ComponentPreview({
  name,
  align = 'center',
  minHeight = '160px',
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const demo = getDemo(name)

  if (!demo) {
    return (
      <div className="not-prose my-6 rounded-lg border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
        Missing demo: <code className="font-mono">{name}</code>. Register it in{' '}
        <code className="font-mono">demos/registry.ts</code>.
      </div>
    )
  }

  const Demo = demo.component

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-end gap-1 border-b border-border bg-muted/60 px-2 py-1.5">
        <button
          type="button"
          onClick={() => setShowCode(false)}
          className={`inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors ${
            !showCode
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon className="h-3 w-3" icon="gravity-ui:eye" />
          Preview
        </button>
        <button
          type="button"
          onClick={() => setShowCode(true)}
          className={`inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors ${
            showCode
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon className="h-3 w-3" icon="gravity-ui:code" />
          Code
        </button>
      </div>

      {showCode ? (
        <div className="bg-surface p-4">
          <CodeBlock code={demo.source.trim()} language="tsx" />
        </div>
      ) : (
        <div
          className={`flex w-full bg-surface p-6 md:p-8 ${alignment[align]}`}
          style={{ minHeight }}
        >
          <Suspense
            fallback={<div className="h-6 animate-pulse text-sm text-muted-foreground">Loading…</div>}
          >
            <Demo />
          </Suspense>
        </div>
      )}
    </div>
  )
}
