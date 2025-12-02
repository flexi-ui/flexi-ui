'use client'

import { useState } from 'react'
import { Button } from '@flexi-ui/button'
import { Eye, Code as CodeIcon } from 'lucide-react'
import { CodeBlock } from './CodeBlock'

interface ComponentDemoProps {
  code: string
  children?: React.ReactNode
}

export const ComponentDemo = ({ code, children }: ComponentDemoProps) => {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="border border-divider rounded-lg overflow-hidden">
      {/* Preview/Code Toggle */}
      <div className="flex items-center justify-end gap-2 px-4 py-2 bg-content2 border-b border-divider">
        <Button
          size="sm"
          variant={!showCode ? 'flat' : 'light'}
          onPress={() => setShowCode(false)}
          startContent={<Eye className="h-3 w-3" />}
        >
          Preview
        </Button>
        <Button
          size="sm"
          variant={showCode ? 'flat' : 'light'}
          onPress={() => setShowCode(true)}
          startContent={<CodeIcon className="h-3 w-3" />}
        >
          Code
        </Button>
      </div>

      {/* Content */}
      {!showCode ? (
        <div className="p-8 bg-background flex items-center justify-center min-h-[200px]">
          {children || (
            <div className="text-center text-foreground-500">
              Component preview will be rendered here
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-content1">
          <CodeBlock code={code} language="tsx" />
        </div>
      )}
    </div>
  )
}
