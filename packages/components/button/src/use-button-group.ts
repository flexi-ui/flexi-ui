import type { ButtonProps } from './main'
import type { ReactRef } from '@flexi-ui/react-utils'
import type { ButtonGroupVariantProps } from '@flexi-ui/theme'

import { buttonGroup } from '@flexi-ui/theme'
import {
  HTMLFlexiUIProps,
  PropGetter,
  mapPropsVariants,
  useProviderContext,
} from '@flexi-ui/system'
import { useDOMRef } from '@flexi-ui/react-utils'
import { useMemo, useCallback } from 'react'
import { objectToDeps } from '@flexi-ui/shared-utils'
interface Props extends HTMLFlexiUIProps, ButtonGroupVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: ButtonProps['isDisabled']
}

export type ContextType = {
  size?: ButtonProps['size']
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  radius?: ButtonProps['radius']
  isDisabled?: ButtonProps['isDisabled']
  disableAnimation?: ButtonProps['disableAnimation']
  disableRipple?: ButtonProps['disableRipple']
  isIconOnly?: ButtonProps['isIconOnly']
  fullWidth?: boolean
}

export type UseButtonGroupProps = Props &
  Partial<
    Pick<
      ButtonProps,
      'size' | 'color' | 'radius' | 'variant' | 'isIconOnly' | 'disableAnimation' | 'disableRipple'
    >
  >

export function useButtonGroup(originalProps: UseButtonGroupProps) {
  const globalContext = useProviderContext()
  const [props, variantProps] = mapPropsVariants(originalProps, buttonGroup.variantKeys)

  const {
    ref,
    as,
    children,
    color = 'default',
    size = 'md',
    variant = 'solid',
    radius,
    isDisabled = false,
    isIconOnly = false,
    disableRipple = globalContext?.disableRipple ?? false,
    disableAnimation = globalContext?.disableAnimation ?? false,
    className,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const classNames = useMemo(
    () =>
      buttonGroup({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  )

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      variant,
      radius,
      isIconOnly,
      isDisabled,
      disableAnimation,
      disableRipple,
      fullWidth: !!originalProps?.fullWidth,
    }),
    [
      size,
      color,
      variant,
      radius,
      isDisabled,
      isIconOnly,
      disableAnimation,
      disableRipple,
      originalProps?.fullWidth,
    ],
  )

  const getButtonGroupProps: PropGetter = useCallback(
    () => ({
      role: 'group',
      ...otherProps,
    }),
    [otherProps],
  )

  return {
    Component,
    children,
    domRef,
    context,
    classNames,
    getButtonGroupProps,
  }
}

export type UseButtonGroupReturn = ReturnType<typeof useButtonGroup>
