'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
}

export const CodeBlock = ({ code, language = 'tsx' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-0 backdrop-blur transition-all group-hover:opacity-100 hover:bg-muted hover:text-foreground"
      >
        <Icon
          className="h-3.5 w-3.5"
          icon={copied ? 'gravity-ui:check' : 'gravity-ui:copy'}
        />
      </button>
      <pre className="overflow-x-auto rounded-md border border-border bg-muted p-4">
        <code className={`language-${language} font-mono text-sm`}>{code}</code>
      </pre>
    </div>
  )
}
