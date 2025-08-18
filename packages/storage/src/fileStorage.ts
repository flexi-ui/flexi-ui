import * as fs from 'node:fs'

/**
 * A simple JSON file-based key-value storage system.
 * Stores all data in a single file on the filesystem.
 */
export class FileStorage {
  private filePath: string

  /**
   * Creates an instance of FileStorage.
   * If the storage file doesn't exist, it will be created with an empty object.
   *
   * @param {string} [filePath='./storage.json'] - Path to the storage file.
   */
  constructor(filePath: string = './storage.json') {
    this.filePath = filePath

    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify({}))
    }
  }

  private readFile<T>(): Record<string, T> {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
  }

  private writeFile<T>(data: Record<string, T>): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2))
  }

  /**
   * Retrieves a value from the file storage by key.
   *
   * @template T - The expected return type.
   * @param {string} key - The key of the item to retrieve.
   * @returns {T | null} - The stored value, or `null` if the key doesn't exist.
   */
  public get<T>(key: string): T | null {
    const data = this.readFile()
    return (data[key] as T) || null
  }

  /**
   * Stores a key-value pair in the file storage.
   *
   * @template T - The type of the value to store.
   * @param {string} key - The key under which the value will be stored.
   * @param {T} value - The value to store.
   * @returns {void}
   */
  public set<T>(key: string, value: T): void {
    const data = this.readFile()
    data[key] = value
    this.writeFile(data)
  }

  /**
   * Removes an item from the file storage by key.
   *
   * @param {string} key - The key of the item to remove.
   * @returns {void}
   */
  public remove(key: string): void {
    const data = this.readFile()
    delete data[key]
    this.writeFile(data)
  }

  /**
   * Clears all key-value pairs from the file storage.
   *
   * @returns {void}
   */
  public clear(): void {
    this.writeFile({})
  }
}
