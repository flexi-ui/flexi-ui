'use client'

import { useState } from 'react'
import { Code as CodeIcon, Eye } from 'lucide-react'
import { CodeBlock } from './CodeBlock'

interface ComponentDemoProps {
  code: string
  children?: React.ReactNode
}

export const ComponentDemo = ({ code, children }: ComponentDemoProps) => {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-border">
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
          <Eye className="h-3 w-3" />
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
          <CodeIcon className="h-3 w-3" />
          Code
        </button>
      </div>

      {!showCode ? (
        <div className="flex min-h-[200px] items-center justify-center bg-background p-8">
          {children || (
            <div className="text-center text-muted-foreground">
              Component preview will be rendered here
            </div>
          )}
        </div>
      ) : (
        <div className="bg-surface p-4">
          <CodeBlock code={code} language="tsx" />
        </div>
      )}
    </div>
  )
}
