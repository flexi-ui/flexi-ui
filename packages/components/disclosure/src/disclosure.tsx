'use client'

import type { DisclosureGroupVariants, DisclosureVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { disclosureGroupVariants, disclosureVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Disclosure as DisclosurePrimitive,
  DisclosureGroup as DisclosureGroupPrimitive,
  DisclosurePanel as DisclosurePanelPrimitive,
  Heading as HeadingPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Disclosure Group (Root for multiple disclosures)
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureGroupRootProps
  extends ComponentPropsWithRef<typeof DisclosureGroupPrimitive>,
    DisclosureGroupVariants {}

const DisclosureGroupRoot = ({
  children,
  className,
  size,
  ...rest
}: DisclosureGroupRootProps) => {
  const styles = disclosureGroupVariants({ size })

  return (
    <DisclosureGroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="disclosure-group"
      {...rest}
    >
      {children}
    </DisclosureGroupPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Disclosure Root
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureRootProps
  extends ComponentPropsWithRef<typeof DisclosurePrimitive>,
    DisclosureVariants {}

const DisclosureRoot = ({ className, ...rest }: DisclosureRootProps) => {
  const styles = disclosureVariants()

  return (
    <DisclosurePrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="disclosure"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Disclosure Trigger (Heading + Button)
 * -----------------------------------------------------------------------------------------------*/
interface DisclosureTriggerProps
  extends Omit<ComponentPropsWithRef<typeof ButtonPrimitive>, 'children'> {
  children?: React.ReactNode
}

const DisclosureTrigger = ({ children, className, ...rest }: DisclosureTriggerProps) => {
  return (
    <HeadingPrimitive className="disclosure__heading">
      <ButtonPrimitive
        className={(renderProps) =>
          cx(
            'disclosure__button',
            typeof className === 'function' ? className(renderProps) : className,
          ) ?? ''
        }
        data-slot="disclosure-trigger"
        slot="trigger"
        {...rest}
      >
        <>
          {children}
          <span className="disclosure__indicator" aria-hidden="true">
            &#8250;
          </span>
        </>
      </ButtonPrimitive>
    </HeadingPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Disclosure Panel
 * -----------------------------------------------------------------------------------------------*/
interface DisclosurePanelProps extends ComponentPropsWithRef<typeof DisclosurePanelPrimitive> {}

const DisclosurePanel = ({ className, ...rest }: DisclosurePanelProps) => {
  return (
    <DisclosurePanelPrimitive
      className={(renderProps) =>
        cx(
          'disclosure__panel',
          typeof className === 'function' ? className(renderProps) : className,
        ) ?? ''
      }
      data-slot="disclosure-panel"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DisclosureGroupRoot, DisclosureRoot, DisclosureTrigger, DisclosurePanel }
export type {
  DisclosureGroupRootProps,
  DisclosureRootProps,
  DisclosureTriggerProps,
  DisclosurePanelProps,
}
