export declare class MemoryStorage {
    private store;
    constructor();
    get<T>(key: string): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
