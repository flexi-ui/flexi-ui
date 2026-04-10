'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export interface UseOverlayStateProps {
  /** Whether the overlay is currently open (controlled). */
  isOpen?: boolean
  /** Whether the overlay is open by default (uncontrolled). */
  defaultOpen?: boolean
  /** Handler called when the overlay's open state changes. */
  onOpenChange?: (isOpen: boolean) => void
}

export interface UseOverlayStateReturn {
  /** Whether the overlay is currently open. */
  readonly isOpen: boolean
  /** Sets the overlay's open state. */
  setOpen(isOpen: boolean): void
  /** Opens the overlay. */
  open(): void
  /** Closes the overlay. */
  close(): void
  /** Toggles the overlay's open state. */
  toggle(): void
}

/**
 * Manages controlled / uncontrolled open state for overlay components like
 * Modal, AlertDialog, Popover, and Drawer.
 *
 * @example
 *   const state = useOverlayState()
 *   <Button onPress={state.open}>Open</Button>
 *   <Modal isOpen={state.isOpen} onOpenChange={state.setOpen}>...</Modal>
 */
export const useOverlayState = (props: UseOverlayStateProps = {}): UseOverlayStateReturn => {
  const { defaultOpen = false, isOpen: controlledIsOpen, onOpenChange } = props

  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState<boolean>(defaultOpen)

  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen

  const onOpenChangeRef = useRef(onOpenChange)

  useEffect(() => {
    onOpenChangeRef.current = onOpenChange
  }, [onOpenChange])

  const setOpen = useCallback(
    (nextIsOpen: boolean) => {
      onOpenChangeRef.current?.(nextIsOpen)

      if (!isControlled) {
        setUncontrolledIsOpen(nextIsOpen)
      }
    },
    [isControlled],
  )

  const open = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const close = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const toggle = useCallback(() => {
    setOpen(!isOpen)
  }, [setOpen, isOpen])

  return {
    close,
    isOpen,
    open,
    setOpen,
    toggle,
  }
}
