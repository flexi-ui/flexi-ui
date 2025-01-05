export declare class LocalStorage {
    private storage;
    private prefixKey?;
    constructor(prefixKey?: string, storage?: Storage);
    private getKey;
    set<T>(key: string, value: T, expire?: number | null): void;
    get<T>(key: string, def?: T): T;
    remove(key: string): void;
    clear(): void;
}
