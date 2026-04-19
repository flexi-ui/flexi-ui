import type { ReactNode } from 'react'
import { SandboxToggle } from './SandboxToggle'

interface SandboxProps {
  children: ReactNode
  code: string
  language?: string
}

export function Sandbox({ children, code, language = 'tsx' }: SandboxProps) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-border">
      <div className="relative bg-surface p-6 md:p-8">
        <div className="flex min-h-[120px] items-center justify-center">{children}</div>
      </div>
      <SandboxToggle code={code} language={language} />
    </div>
  )
}
