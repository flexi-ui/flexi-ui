'use client'

import { VisuallyHidden } from '@flexi-ui/visually-hidden'

export default function Demo() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Tab into this preview — a "Skip to content" link appears as the first focusable element.
      </p>
      <a
        className="inline-block rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        href="#main"
      >
        <VisuallyHidden>Skip to main content (visible on focus)</VisuallyHidden>
        Skip to content
      </a>
      <p className="text-sm text-muted-foreground" id="main">
        Main content starts here.
      </p>
    </div>
  )
}
