'use client'

import { Button } from '@flexi-ui/button'
import { Switch } from '@flexi-ui/switch'
import { Badge } from '@flexi-ui/badge'

const codeLines = [
  ['import', ' { Button, Switch, Badge } ', 'from', ' ', "'@flexi-ui/*'"],
  [],
  ['export', ' ', 'function', ' ', 'Toolbar() {'],
  ['  ', 'return', ' ('],
  ['    <div className=', '"flex items-center gap-3"', '>'],
  ['      <Button variant=', '"solid"', '>Save changes</Button>'],
  ['      <Button variant=', '"bordered"', '>Cancel</Button>'],
  ['      <Switch defaultSelected>Notifications</Switch>'],
  ['      <Badge color=', '"success"', '>Live</Badge>'],
  ['    </div>'],
  ['  )'],
  ['}'],
] as const

const cls = ['text-violet-400', 'text-foreground', 'text-violet-400', '', 'text-emerald-400']

export const LivePreview = () => {
  return (
    <section
      aria-labelledby="preview-heading"
      className="mx-auto max-w-6xl border-t border-border px-6 py-20 md:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <h2
            className="text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            id="preview-heading"
          >
            One import. Composable from day one.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Every component is published as a separate package. Bring in only what you render and
            keep your bundle small. The API mirrors Radix UI&apos;s compound pattern on top of React
            Aria primitives.
          </p>

          <pre className="mt-8 overflow-x-auto rounded-lg border border-border bg-surface/60 p-5 font-mono text-[13px] leading-6 text-foreground">
            <code>
              {codeLines.map((line, i) => (
                <div className={line.length === 0 ? 'h-6' : ''} key={i}>
                  {line.map((segment, j) => (
                    <span className={cls[j] ?? 'text-muted-foreground'} key={j}>
                      {segment}
                    </span>
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface/40 p-8">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Rendered output
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="solid">Save changes</Button>
            <Button variant="bordered">Cancel</Button>
            <Switch defaultSelected>Notifications</Switch>
            <Badge color="success">Live</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Real components rendered from the same packages you&apos;ll install.
          </p>
        </div>
      </div>
    </section>
  )
}
