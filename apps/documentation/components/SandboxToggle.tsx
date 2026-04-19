'use client'

import { useState } from 'react'
import { Code, Eye } from 'lucide-react'
import { CodeBlock } from './CodeBlock'

interface SandboxToggleProps {
  code: string
  language: string
}

export function SandboxToggle({ code, language }: SandboxToggleProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setShowCode(!showCode)}
        className="flex w-full items-center justify-between bg-muted/60 px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          {showCode ? (
            <>
              <Eye className="h-4 w-4" />
              Hide code
            </>
          ) : (
            <>
              <Code className="h-4 w-4" />
              Show code
            </>
          )}
        </span>
      </button>

      {showCode && (
        <div className="p-4">
          <CodeBlock code={code.trim()} language={language} />
        </div>
      )}
    </div>
  )
}
