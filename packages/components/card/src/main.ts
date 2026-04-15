import type { ComponentProps } from 'react'

import { CardBody, CardFooter, CardHeader, CardRoot } from './card'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})

export type Card = {
  Props: ComponentProps<typeof CardRoot>
  RootProps: ComponentProps<typeof CardRoot>
  HeaderProps: ComponentProps<typeof CardHeader>
  BodyProps: ComponentProps<typeof CardBody>
  FooterProps: ComponentProps<typeof CardFooter>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { CardRoot, CardHeader, CardBody, CardFooter, CardContext } from './card'
export type {
  CardRootProps,
  CardRootProps as CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './card'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { cardVariants } from '@flexi-ui/styles'
export type { CardVariants } from '@flexi-ui/styles'
