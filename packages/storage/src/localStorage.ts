const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

/**
 * Default cache duration in seconds (7 days).
 * Used as the default expiration time for stored items.
 */
export class LocalStorage {
  private storage: globalThis.Storage
  private prefixKey?: string

  constructor(prefixKey = '', storage = localStorage) {
    this.storage = storage
    this.prefixKey = prefixKey
  }

  private getKey(key: string) {
    return `${this.prefixKey}${key}`.toUpperCase()
  }

  /**
   * Stores a value in local storage with an optional expiration time.
   *
   * @template T - The type of the value to be stored.
   * @param {string} key - The key under which the value will be stored.
   * @param {T} value - The value to store.
   * @param {number | null} [expire=DEFAULT_CACHE_TIME] - Expiration time in seconds. If `null`, the item does not expire.
   * @returns {void}
   */
  public set<T>(key: string, value: T, expire: number | null = DEFAULT_CACHE_TIME): void {
    const stringData = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    })
    this.storage.setItem(this.getKey(key), stringData)
  }

  /**
   * Retrieves a value from local storage. If the value is expired or does not exist, returns the default value.
   *
   * @template T - The expected return type of the value.
   * @param {string} key - The key of the stored item.
   * @param {T} [def=null as T] - The default value to return if the item does not exist or is expired.
   * @returns {T} - The stored value or the default value.
   */
  public get<T>(key: string, def: T = null as T): T {
    const item = this.storage.getItem(this.getKey(key))
    if (item) {
      try {
        const data = JSON.parse(item)
        const { value, expire } = data

        if (expire !== null && expire < Date.now()) {
          this.remove(key)
          return def
        }

        return value as T
      } catch (_) {
        return def
      }
    }
    return def
  }

  /**
   * Removes an item from local storage.
   *
   * @param {string} key - The key of the item to remove.
   * @returns {void}
   */
  public remove(key: string): void {
    this.storage.removeItem(this.getKey(key))
  }

  /**
   * Clears all items from the local storage.
   *
   * @returns {void}
   */
  public clear(): void {
    this.storage.clear()
  }
}
