/**
 * Performance Optimization Utilities
 * Caching and memoization for theme resolution and CSS generation
 * Based on HeroUI v3 performance patterns
 */

import type { FlexiUIPluginConfig, ConfigTheme } from '../types'

/**
 * Resolved config structure (internal)
 */
interface ResolvedConfig {
  variants: Array<{ name: string; definition: string[] }>
  utilities: Record<string, Record<string, string | number>>
  colors: Record<string, string>
  baseStyles: Record<string, Record<string, string | number>>
  warnings: Array<{ theme: string; message: string; type: string }>
}

/**
 * Cache key generator for theme configs
 */
function generateCacheKey(config: FlexiUIPluginConfig): string {
  try {
    // Create a stable cache key from config
    const key = JSON.stringify({
      themes: Object.keys(config.themes || {}).sort(),
      defaultTheme: config.defaultTheme,
      prefix: config.prefix,
      defaultExtendTheme: config.defaultExtendTheme,
      addCommonColors: config.addCommonColors,
    })
    return `flexi-ui-theme-${Buffer.from(key).toString('base64')}`
  } catch {
    // Fallback to simple key if JSON.stringify fails
    return `flexi-ui-theme-${Date.now()}`
  }
}

/**
 * Cache entry interface
 */
interface CacheEntry<T> {
  value: T
  timestamp: number
  key: string
}

/**
 * Simple in-memory cache with TTL support
 */
class ThemeCache<T> {
  private cache: Map<string, CacheEntry<T>> = new Map()
  private maxSize: number
  private ttl: number // Time to live in milliseconds

  constructor(maxSize = 100, ttl = 5 * 60 * 1000) {
    // Default: 100 entries, 5 minutes TTL
    this.maxSize = maxSize
    this.ttl = ttl
  }

  /**
   * Get value from cache
   */
  get(key: string): T | null {
    const entry = this.cache.get(key)

    if (!entry) {
      return null
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.value
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T): void {
    // Evict oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value
      if (firstKey) {
        this.cache.delete(firstKey)
      }
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      key,
    })
  }

  /**
   * Clear cache
   */
  clear(): void {
    this.cache.clear()
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size
  }

  /**
   * Remove expired entries
   */
  cleanup(): void {
    const now = Date.now()
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key)
      }
    }
  }
}

/**
 * Global cache instances
 */
const configCache = new ThemeCache<ResolvedConfig>(50, 10 * 60 * 1000) // 10 minutes
const themeCache = new ThemeCache<ConfigTheme>(100, 5 * 60 * 1000) // 5 minutes

/**
 * Cache for resolved theme configs
 */
export function getCachedResolvedConfig(
  config: FlexiUIPluginConfig,
): ResolvedConfig | null {
  const key = generateCacheKey(config)
  return configCache.get(key)
}

/**
 * Cache resolved theme config
 */
export function setCachedResolvedConfig(
  config: FlexiUIPluginConfig,
  resolved: ResolvedConfig,
): void {
  const key = generateCacheKey(config)
  configCache.set(key, resolved)
}

/**
 * Cache for processed themes
 */
export function getCachedTheme(themeName: string, theme: ConfigTheme): ConfigTheme | null {
  const key = `${themeName}-${JSON.stringify(theme)}`
  return themeCache.get(key)
}

/**
 * Cache processed theme
 */
export function setCachedTheme(themeName: string, theme: ConfigTheme, processed: ConfigTheme): void {
  const key = `${themeName}-${JSON.stringify(theme)}`
  themeCache.set(key, processed)
}

/**
 * Clear all caches
 */
export function clearThemeCache(): void {
  configCache.clear()
  themeCache.clear()
}

/**
 * Get cache statistics
 */
export function getCacheStats(): {
  configCacheSize: number
  themeCacheSize: number
} {
  return {
    configCacheSize: configCache.size(),
    themeCacheSize: themeCache.size(),
  }
}

/**
 * Cleanup expired cache entries
 */
export function cleanupCache(): void {
  configCache.cleanup()
  themeCache.cleanup()
}

/**
 * Memoization helper for expensive computations
 */
export function memoize<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
  keyGenerator?: (...args: Args) => string,
): (...args: Args) => Return {
  const cache = new Map<string, Return>()

  return (...args: Args): Return => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = fn(...args)
    cache.set(key, result)

    return result
  }
}

/**
 * Lazy load helper for component themes
 */
export function lazyLoad<T>(loader: () => T): () => T {
  let cached: T | null = null
  let loading = false
  let promise: Promise<T> | null = null

  return (): T => {
    if (cached !== null) {
      return cached
    }

    if (loading && promise) {
      // Return cached promise if already loading
      throw promise
    }

    loading = true
    promise = Promise.resolve(loader()).then((result) => {
      cached = result
      loading = false
      return result
    })

    // For synchronous lazy loading, execute immediately
    try {
      cached = loader()
      loading = false
      return cached
    } catch {
      throw promise
    }
  }
}

