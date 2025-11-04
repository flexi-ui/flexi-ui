import { flatten } from 'flat'

export function swapColorValues<T extends object>(colors: T) {
  const swappedColors: Record<string, unknown> = {}
  const keys = Object.keys(colors)
  const length = keys.length

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i]
    const key2 = keys[length - 1 - i]
    swappedColors[key1] = (colors as Record<string, unknown>)[key2]

    swappedColors[key2] = (colors as Record<string, unknown>)[key1]
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)]

    swappedColors[middleKey] = (colors as Record<string, unknown>)[middleKey]
  }

  return swappedColors
}

export function removeDefaultKeys<T extends object>(obj: T) {
  const newObj: Record<string, unknown> = {}

  for (const key in obj as object) {
    if (key.endsWith('-DEFAULT')) {
      newObj[key.replace('-DEFAULT', '')] = (obj as Record<string, unknown>)[key]
      continue
    }

    newObj[key] = (obj as Record<string, unknown>)[key]
  }

  return newObj
}

/**
 *
 * Flatten theme object and remove default keys
 *
 * @param obj theme object
 * @returns object with flattened keys
 */

export const flattenThemeObject = <TTarget>(obj: TTarget) =>
  removeDefaultKeys(
    flatten(obj, {
      safe: true,
      delimiter: '-',
    }) as object,
  )
