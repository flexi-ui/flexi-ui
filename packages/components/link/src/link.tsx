'use client'

import type { LinkVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { linkVariants } from '@flexi-ui/styles'
import { Link as LinkPrimitive } from 'react-aria-components'

import { composeTwRenderProps } from '@flexi-ui/react-utils'

/* -------------------------------------------------------------------------------------------------
 * Link Icon
 * -----------------------------------------------------------------------------------------------*/
const LinkIcon = () => (
  <svg
    aria-hidden="true"
    className="link__icon"
    fill="none"
    height="1em"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
)

/* -------------------------------------------------------------------------------------------------
 * Link Root
 * -----------------------------------------------------------------------------------------------*/
interface LinkRootProps
  extends Omit<ComponentPropsWithRef<typeof LinkPrimitive>, 'color'>,
    LinkVariants {
  isExternal?: boolean
  showAnchorIcon?: boolean
  anchorIcon?: React.ReactNode
}

const LinkRoot = ({
  children,
  className,
  color,
  isBlock,
  isDisabled,
  isExternal,
  showAnchorIcon,
  anchorIcon,
  size,
  underline,
  ...rest
}: LinkRootProps) => {
  const styles = linkVariants({ className: undefined, color, isBlock, size, underline })

  const externalProps = isExternal
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <LinkPrimitive
      className={composeTwRenderProps(className, styles)}
      data-slot="link"
      isDisabled={isDisabled}
      {...externalProps}
      {...rest}
    >
      {(renderProps) => (
        <>
          {typeof children === 'function' ? children(renderProps) : children}
          {showAnchorIcon && (anchorIcon ?? <LinkIcon />)}
        </>
      )}
    </LinkPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { LinkRoot, LinkIcon }
export type { LinkRootProps }
