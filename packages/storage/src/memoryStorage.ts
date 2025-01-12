export class MemoryStorage {
  private store: Map<string, string>

  constructor() {
    this.store = new Map()
  }

  public get<T>(key: string): T | null {
    const value = this.store.get(key)
    return value ? (JSON.parse(value) as T) : null
  }

  public set<T>(key: string, value: T): void {
    this.store.set(key, JSON.stringify(value))
  }

  public remove(key: string): void {
    this.store.delete(key)
  }
  public clear(): void {
    this.store.clear()
  }
}
