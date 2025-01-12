const warningStack: { [key: string]: boolean } = {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function warn(message: string, component?: string, ...args: any[]) {
  const tag = component ? ` [${component}]` : ' '
  const log = `[Next UI]${tag}: ${message}`

  if (typeof console === 'undefined') return
  if (warningStack[log]) return
  warningStack[log] = true

  if (process?.env?.NODE_ENV !== 'production') {
    return console.warn(log, args)
  }
}
