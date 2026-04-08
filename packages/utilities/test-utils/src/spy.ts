import { vi, type MockInstance } from 'vitest'

export function shouldIgnoreReactWarning(spy: MockInstance): boolean {
  if (spy.mock.calls.length > 0) {
    const msg = spy.mock.calls[0][0]

    if (msg && typeof msg === 'string' && msg.includes('Warning: `ReactDOMTestUtils.act`')) {
      return true
    }
  }

  return false
}

export const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
export const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
export const spy = errorSpy
