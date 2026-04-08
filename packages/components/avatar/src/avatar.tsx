'use client'

import type { AvatarVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { avatarVariants } from '@flexi-ui/styles'
import { useCallback, useState } from 'react'

/* -------------------------------------------------------------------------------------------------
 * Avatar Root
 * -----------------------------------------------------------------------------------------------*/
interface AvatarRootProps
  extends Omit<ComponentPropsWithRef<'span'>, 'size'>,
    AvatarVariants {
  src?: string
  alt?: string
  name?: string
  fallback?: React.ReactNode
}

const AvatarRoot = ({
  className,
  isBordered,
  size,
  src,
  alt,
  name,
  fallback,
  ...rest
}: AvatarRootProps) => {
  const [hasError, setHasError] = useState(false)
  const styles = avatarVariants({ className, isBordered, size })

  const handleError = useCallback(() => setHasError(true), [])

  const getInitials = (name: string) => {
    const parts = name.split(' ')
    return parts
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  }

  const showImage = src && !hasError
  const showFallback = !showImage && fallback
  const showInitials = !showImage && !showFallback && name

  return (
    <span className={styles} data-slot="avatar" {...rest}>
      {showImage && (
        <img
          alt={alt ?? name}
          className="avatar__image"
          data-slot="avatar-image"
          src={src}
          onError={handleError}
        />
      )}
      {showFallback && fallback}
      {showInitials && (
        <span className="avatar__initials" data-slot="avatar-initials">
          {getInitials(name)}
        </span>
      )}
    </span>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { AvatarRoot }
export type { AvatarRootProps }
