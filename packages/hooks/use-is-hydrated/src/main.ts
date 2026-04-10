import * as React from 'react'

/**
 * Returns `true` once the component is mounted on the client (hydrated)
 * and `false` while rendering on the server.
 *
 * @example
 *   function Component() {
 *     const isHydrated = useIsHydrated()
 *     if (!isHydrated) return <div>Loading...</div>
 *     return <div>Client rendered content</div>
 *   }
 */
export function useIsHydrated(): boolean {
  const subscribe = () => () => {}

  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
