import * as fs from "node:fs";

export class FileStorage {
  private filePath: string;

  constructor(filePath = "./theme-storage.json") {
    this.filePath = filePath;

    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify({}));
    }
  }

  private readFile<T>(): Record<string, T> {
    return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
  }

  private writeFile<T>(data: Record<string, T>): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  public get<T>(key: string): T | null {
    const data = this.readFile();
    return (data[key] as T) || null;
  }

  public set<T>(key: string, value: T): void {
    const data = this.readFile();
    data[key] = value;
    this.writeFile(data);
  }

  public remove(key: string): void {
    const data = this.readFile();
    delete data[key];
    this.writeFile(data);
  }

  public clear(): void {
    this.writeFile({});
  }
}
