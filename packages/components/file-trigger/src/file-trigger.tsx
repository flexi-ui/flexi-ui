'use client'

import type { FileTriggerVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { fileTriggerVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  FileTrigger as FileTriggerPrimitive,
} from 'react-aria-components'


/* -------------------------------------------------------------------------------------------------
 * FileTrigger Root
 * -----------------------------------------------------------------------------------------------*/
interface FileTriggerRootProps extends ComponentPropsWithRef<typeof FileTriggerPrimitive>, FileTriggerVariants {
  children?: React.ReactNode
}

const FileTriggerRoot = ({
  children,
  size,
  ...rest
}: FileTriggerRootProps) => {
  const styles = fileTriggerVariants({ size })

  return (
    <FileTriggerPrimitive
      data-slot="file-trigger"
      {...rest}
    >
      <ButtonPrimitive className={styles}>
        {children ?? 'Browse...'}
      </ButtonPrimitive>
    </FileTriggerPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { FileTriggerRoot }
export type { FileTriggerRootProps }
