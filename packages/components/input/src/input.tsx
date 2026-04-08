'use client'

import type { InputVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { inputVariants } from '@flexi-ui/styles'
import { TextField, Input as AriaInput, Label, Text, FieldError } from 'react-aria-components'

import { composeTwRenderProps } from '@flexi-ui/react-utils'

/* -------------------------------------------------------------------------------------------------
 * Input Root
 * -----------------------------------------------------------------------------------------------*/
interface InputRootProps
  extends Omit<ComponentPropsWithRef<typeof TextField>, 'className'>,
    InputVariants {
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  className?: string
}

const InputRoot = ({
  className,
  fullWidth,
  isDisabled,
  isInvalid,
  label,
  description,
  errorMessage,
  placeholder,
  size,
  startContent,
  endContent,
  variant,
  ...rest
}: InputRootProps) => {
  const styles = inputVariants({ fullWidth, isDisabled, isInvalid, size, variant })

  return (
    <TextField
      className={composeTwRenderProps(className, styles)}
      data-slot="input"
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      {...rest}
    >
      {label && <Label className="input__label">{label}</Label>}
      <div className="input__wrapper">
        {startContent && <span className="input__start-content">{startContent}</span>}
        <AriaInput className="input__field" placeholder={placeholder} />
        {endContent && <span className="input__end-content">{endContent}</span>}
      </div>
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
export { InputRoot }
export type { InputRootProps }
