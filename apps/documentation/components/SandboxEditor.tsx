'use client'

interface SandboxEditorProps {
  children: React.ReactNode
}

export function SandboxEditor({ children }: SandboxEditorProps) {
  // SandboxEditor is a wrapper component that just renders its children
  // It's used in MDX files to wrap code blocks inside Sandbox components
  return <>{children}</>
}
