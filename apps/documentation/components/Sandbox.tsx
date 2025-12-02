'use client'

import { useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { Eye, Code } from 'lucide-react'

interface SandboxProps {
  children: React.ReactNode
  code: string
  language?: string
}

export function Sandbox({ children, code, language = 'tsx' }: SandboxProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="not-prose my-6 rounded-lg border border-default-200 dark:border-default-100 overflow-hidden">
      {/* Preview Section */}
      <div className="relative bg-content1 p-6 md:p-8">
        <div className="flex items-center justify-center min-h-[120px]">
          {children}
        </div>
      </div>

      {/* Toggle and Code Section */}
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
    </div>
  )
}
