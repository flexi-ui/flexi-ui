/**
 * Splits a props object into `[rest, variantProps]` based on a list of
 * variant keys. Used at the top of compound components so that variant
 * props can be forwarded to `tv()` without leaking into the DOM.
 */
export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys?: K[],
  removeVariantProps = true,
): readonly [Omit<T, K> | T, Pick<T, K> | {}] => {
  if (!variantKeys) {
    return [props, {}]
  }

  const picked = variantKeys.reduce((acc, key) => {
    if (key in props) {
      return { ...acc, [key]: props[key] }
    }

    return acc
  }, {})

  if (removeVariantProps) {
    const omitted = Object.keys(props)
      .filter((key) => !variantKeys.includes(key as K))
      .reduce((acc, key) => ({ ...acc, [key]: props[key as keyof T] }), {})

    return [omitted, picked] as [Omit<T, K>, Pick<T, K>]
  }

  return [props, picked] as [T, Pick<T, K>]
}

/* -------------------------------------------------------------------------------------------------
 * BEM-style variant builders
 * -----------------------------------------------------------------------------------------------*/

export type VariantConfig<T extends Record<string, any>> = {
  base: string
  variants?: T
  modifiers?: Record<string, boolean | undefined>
}

/**
 * Creates a class-name builder for components that map variants directly
 * onto BEM modifier classes (e.g. `button button--lg button--primary`).
 */
export function createVariantBuilder<T extends Record<string, string>>(baseClass: string) {
  return (
    config: {
      variants?: Partial<T>
      modifiers?: Record<string, boolean | undefined>
    } = {},
  ) => {
    const classes = [baseClass]

    if (config.variants) {
      Object.values(config.variants).forEach((value) => {
        if (value) {
          classes.push(`${baseClass}--${value}`)
        }
      })
    }

    if (config.modifiers) {
      Object.entries(config.modifiers).forEach(([modifier, enabled]) => {
        if (enabled) {
          classes.push(`${baseClass}--${modifier}`)
        }
      })
    }

    return classes.join(' ')
  }
}

export interface VariantDefinition<V extends Record<string, readonly string[]>> {
  base: string
  variants: V
  defaults?: Partial<{ [K in keyof V]: V[K][number] }>
}

/**
 * Declarative variant builder with default values and modifier support.
 *
 * @example
 *   const buttonVariants = createVariants({
 *     base: 'button',
 *     variants: {
 *       size: ['sm', 'md', 'lg'] as const,
 *       variant: ['primary', 'secondary'] as const,
 *     },
 *     defaults: { size: 'md', variant: 'primary' },
 *   })
 */
export function createVariants<V extends Record<string, readonly string[]>>(
  definition: VariantDefinition<V>,
) {
  type VariantProps = {
    [K in keyof V]?: V[K][number]
  } & {
    modifiers?: Record<string, boolean | undefined>
  }

  return (props: VariantProps = {}) => {
    const classes = [definition.base]
    const mergedProps: Record<string, any> = {}

    if (definition.defaults) {
      Object.entries(definition.defaults).forEach(([key, value]) => {
        mergedProps[key] = value
      })
    }

    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined) {
        mergedProps[key] = value
      }
    })

    Object.entries(mergedProps).forEach(([key, value]) => {
      if (key !== 'modifiers' && value) {
        classes.push(`${definition.base}--${value}`)
      }
    })

    if (props.modifiers) {
      Object.entries(props.modifiers).forEach(([modifier, enabled]) => {
        if (enabled) {
          classes.push(`${definition.base}--${modifier}`)
        }
      })
    }

    return classes.join(' ')
  }
}

export type VariantPropsOf<T extends ReturnType<typeof createVariants>> = T extends (
  props: infer P,
) => string
  ? P
  : never
