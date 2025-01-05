export declare class FileStorage {
    private filePath;
    constructor(filePath?: string);
    private readFile;
    private writeFile;
    get<T>(key: string): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
