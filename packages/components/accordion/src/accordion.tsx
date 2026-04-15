'use client'

import type { AccordionVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { accordionVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Collection,
  Disclosure as DisclosurePrimitive,
  DisclosureGroup as DisclosureGroupPrimitive,
  DisclosurePanel as DisclosurePanelPrimitive,
  Heading as HeadingPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Accordion Root
 * -----------------------------------------------------------------------------------------------*/
interface AccordionRootProps extends ComponentPropsWithRef<typeof DisclosureGroupPrimitive>, AccordionVariants {}

const AccordionRoot = ({
  children,
  className,
  variant,
  ...rest
}: AccordionRootProps) => {
  const styles = accordionVariants({ variant })

  return (
    <DisclosureGroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="accordion"
      {...rest}
    >
      {children}
    </DisclosureGroupPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Accordion Item
 * -----------------------------------------------------------------------------------------------*/
interface AccordionItemProps extends ComponentPropsWithRef<typeof DisclosurePrimitive> {}

const AccordionItem = ({ className, ...rest }: AccordionItemProps) => {
  return (
    <DisclosurePrimitive
      className={(renderProps) =>
        cx('accordion__item', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="accordion-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Accordion Trigger
 * -----------------------------------------------------------------------------------------------*/
interface AccordionTriggerProps extends Omit<ComponentPropsWithRef<typeof ButtonPrimitive>, 'children'> {
  children?: React.ReactNode
}

const AccordionTrigger = ({ children, className, ...rest }: AccordionTriggerProps) => {
  return (
    <HeadingPrimitive>
      <ButtonPrimitive
        className={(renderProps) =>
          cx('accordion__trigger', typeof className === 'function' ? className(renderProps) : className) ?? ''
        }
        data-slot="accordion-trigger"
        slot="trigger"
        {...rest}
      >
        <>
          {children}
          <span className="accordion__indicator" aria-hidden="true">
            &#8250;
          </span>
        </>
      </ButtonPrimitive>
    </HeadingPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Accordion Panel
 * -----------------------------------------------------------------------------------------------*/
interface AccordionPanelProps extends Omit<ComponentPropsWithRef<typeof DisclosurePanelPrimitive>, 'children'> {
  children?: React.ReactNode
}

const AccordionPanel = ({ children, className, ...rest }: AccordionPanelProps) => {
  return (
    <DisclosurePanelPrimitive
      className={(renderProps) =>
        cx('accordion__panel', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="accordion-panel"
      {...rest}
    >
      <div className="accordion__body">{children}</div>
    </DisclosurePanelPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionPanel, Collection }
export type { AccordionRootProps, AccordionItemProps, AccordionTriggerProps, AccordionPanelProps }
