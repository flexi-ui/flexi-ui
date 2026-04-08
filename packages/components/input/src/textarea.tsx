'use client'

import type { InputVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { inputVariants } from '@flexi-ui/styles'
import { TextField, TextArea as AriaTextArea, Label, Text, FieldError } from 'react-aria-components'

import { composeTwRenderProps } from '@flexi-ui/react-utils'

/* -------------------------------------------------------------------------------------------------
 * TextArea Root
 * -----------------------------------------------------------------------------------------------*/
interface TextAreaRootProps
  extends Omit<ComponentPropsWithRef<typeof TextField>, 'className'>,
    InputVariants {
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  rows?: number
  className?: string
}

const TextAreaRoot = ({
  className,
  fullWidth,
  isDisabled,
  isInvalid,
  label,
  description,
  errorMessage,
  placeholder,
  rows = 3,
  size,
  variant,
  ...rest
}: TextAreaRootProps) => {
  const styles = inputVariants({ fullWidth, isDisabled, isInvalid, size, variant })

  return (
    <TextField
      className={composeTwRenderProps(className, styles)}
      data-slot="textarea"
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      {...rest}
    >
      {label && <Label className="input__label">{label}</Label>}
      <AriaTextArea className="input__field input__field--textarea" placeholder={placeholder} rows={rows} />
      {description && <Text className="input__description" slot="description">{description}</Text>}
      {errorMessage ? (
        <Text className="input__error-message" slot="errorMessage">{errorMessage}</Text>
      ) : (
        <FieldError className="input__error-message" />
      )}
    </TextField>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TextAreaRoot }
export type { TextAreaRootProps }
