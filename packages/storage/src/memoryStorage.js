export class MemoryStorage {
    constructor() {
        this.store = new Map();
    }
    get(key) {
        const value = this.store.get(key);
        return value ? JSON.parse(value) : null;
    }
    set(key, value) {
        this.store.set(key, JSON.stringify(value));
    }
    remove(key) {
        this.store.delete(key);
    }
    clear() {
        this.store.clear();
    }
}
//# sourceMappingURL=memoryStorage.js.map