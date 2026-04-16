'use client'

import type { TextareaVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { textareaVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Textarea Root
 * -----------------------------------------------------------------------------------------------*/
interface TextareaRootProps extends Omit<ComponentPropsWithRef<'textarea'>, 'size'>, TextareaVariants {
  label?: string
  description?: string
  errorMessage?: string
  isInvalid?: boolean
}

const TextareaRoot = ({
  className,
  description,
  errorMessage,
  isInvalid,
  label,
  size,
  ...rest
}: TextareaRootProps) => {
  const styles = textareaVariants({ size })

  return (
    <div className={`${styles}${className ? ` ${className}` : ''}`} data-slot="textarea">
      {label && <label className="textarea__label">{label}</label>}
      <textarea
        className="textarea__input"
        data-invalid={isInvalid || undefined}
        aria-invalid={isInvalid || undefined}
        {...rest}
      />
      {description && !errorMessage && <p className="textarea__description">{description}</p>}
      {errorMessage && <p className="textarea__error">{errorMessage}</p>}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TextareaRoot }
export type { TextareaRootProps }
