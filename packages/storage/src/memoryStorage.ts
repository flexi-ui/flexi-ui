/**
 * An in-memory key-value storage implementation using Map.
 * Useful for temporary storage during runtime (non-persistent).
 */
export class MemoryStorage {
  private store: Map<string, string>

  /**
   * Creates a new instance of MemoryStorage.
   * Initializes an empty in-memory store.
   */
  constructor() {
    this.store = new Map()
  }

  /**
   * Retrieves a value from memory storage by key.
   *
   * @template T - The expected return type.
   * @param {string} key - The key to retrieve the value for.
   * @returns {T | null} - The stored value, or `null` if the key does not exist.
   */
  public get<T>(key: string): T | null {
    const value = this.store.get(key)
    return value ? (JSON.parse(value) as T) : null
  }

  /**
   * Stores a value in memory under the specified key.
   *
   * @template T - The type of the value to store.
   * @param {string} key - The key under which the value will be stored.
   * @param {T} value - The value to store.
   * @returns {void}
   */
  public set<T>(key: string, value: T): void {
    this.store.set(key, JSON.stringify(value))
  }

  /**
   * Removes a value from memory storage by key.
   *
   * @param {string} key - The key to remove.
   * @returns {void}
   */
  public remove(key: string): void {
    this.store.delete(key)
  }

  /**
   * Clears all key-value pairs from memory storage.
   *
   * @returns {void}
   */
  public clear(): void {
    this.store.clear()
  }
}
