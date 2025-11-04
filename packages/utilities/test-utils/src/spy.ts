/* eslint-disable @typescript-eslint/no-explicit-any */

type MockInstance = {
  mock: {
    calls: any[][]
  }
  mockImplementation: (fn: (...args: any[]) => any) => MockInstance
}

export function shouldIgnoreReactWarning(spy: MockInstance): boolean {
  if (spy.mock.calls.length > 0) {
    const msg = spy.mock.calls[0][0]

    if (msg && typeof msg === 'string' && msg.includes('Warning: `ReactDOMTestUtils.act`')) {
      return true
    }
  }

  return false
}

// These will be initialized at runtime when used in a Jest environment
let errorSpy: MockInstance | undefined
let warnSpy: MockInstance | undefined
let spy: MockInstance | undefined

// Initialize spies if in Jest environment
if (typeof globalThis !== 'undefined' && (globalThis as any).jest) {
  const jestGlobal = (globalThis as any).jest
  errorSpy = jestGlobal.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = jestGlobal.spyOn(console, 'warn').mockImplementation(() => {})
  spy = errorSpy
}

export { spy, errorSpy, warnSpy }
