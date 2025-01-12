const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

class LocalStorage {
  private storage: globalThis.Storage
  private prefixKey?: string

  constructor(prefixKey = '', storage = localStorage) {
    this.storage = storage
    this.prefixKey = prefixKey
  }

  private getKey(key: string) {
    return `${this.prefixKey}${key}`.toUpperCase()
  }

  public set<T>(key: string, value: T, expire: number | null = DEFAULT_CACHE_TIME): void {
    const stringData = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    })
    this.storage.setItem(this.getKey(key), stringData)
  }

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
      } catch (e) {
        return def
      }
    }
    return def
  }

  public remove(key: string): void {
    this.storage.removeItem(this.getKey(key))
  }

  public clear(): void {
    this.storage.clear()
  }
}

export const storage = new LocalStorage()
