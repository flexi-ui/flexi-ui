import type { ReactNode } from 'react'
import { SandboxToggle } from './SandboxToggle'

interface SandboxProps {
  children: ReactNode
  code: string
  language?: string
}

export function Sandbox({ children, code, language = 'tsx' }: SandboxProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-default-200 dark:border-default-100 overflow-hidden">
      {/* Preview Section */}
      <div className="relative bg-content1 p-6 md:p-8">
        <div className="flex items-center justify-center min-h-[120px]">
          {children}
        </div>
      </div>

      {/* Toggle and Code Section */}
      <SandboxToggle code={code} language={language} />
    </div>
  )
}
