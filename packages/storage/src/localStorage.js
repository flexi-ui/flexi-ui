const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;
export class LocalStorage {
    constructor(prefixKey = "", storage = localStorage) {
        this.storage = storage;
        this.prefixKey = prefixKey;
    }
    getKey(key) {
        return `${this.prefixKey}${key}`.toUpperCase();
    }
    set(key, value, expire = DEFAULT_CACHE_TIME) {
        const stringData = JSON.stringify({
            value,
            expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
        });
        this.storage.setItem(this.getKey(key), stringData);
    }
    get(key, def = null) {
        const item = this.storage.getItem(this.getKey(key));
        if (item) {
            try {
                const data = JSON.parse(item);
                const { value, expire } = data;
                if (expire !== null && expire < Date.now()) {
                    this.remove(key);
                    return def;
                }
                return value;
            }
            catch (e) {
                return def;
            }
        }
        return def;
    }
    remove(key) {
        this.storage.removeItem(this.getKey(key));
    }
    clear() {
        this.storage.clear();
    }
}
//# sourceMappingURL=localStorage.js.map