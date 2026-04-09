'use client'

import { useState } from 'react'
import { Eye, Code } from 'lucide-react'
import { CodeBlock } from './CodeBlock'

interface SandboxToggleProps {
  code: string
  language: string
}

export function SandboxToggle({ code, language }: SandboxToggleProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="border-t border-default-200 dark:border-default-100">
      <button
        onClick={() => setShowCode(!showCode)}
        className="w-full px-4 py-2 flex items-center justify-between bg-content2 hover:bg-content3 transition-colors"
      >
        <span className="text-sm font-medium flex items-center gap-2">
          {showCode ? (
            <>
              <Eye className="w-4 h-4" />
              Hide Code
            </>
          ) : (
            <>
              <Code className="w-4 h-4" />
              Show Code
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
