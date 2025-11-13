'use client'

import { useState } from 'react'
import { Button } from '@flexi-ui/button'
import { Check, Copy } from 'lucide-react'

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
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10">
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          color={copied ? 'success' : 'default'}
          onPress={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 rounded-lg bg-content2 border border-divider">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  )
}
