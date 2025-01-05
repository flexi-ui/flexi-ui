import * as fs from "node:fs";
export class FileStorage {
    constructor(filePath = "./theme-storage.json") {
        this.filePath = filePath;
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify({}));
        }
    }
    readFile() {
        return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    }
    writeFile(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
    get(key) {
        const data = this.readFile();
        return data[key] || null;
    }
    set(key, value) {
        const data = this.readFile();
        data[key] = value;
        this.writeFile(data);
    }
    remove(key) {
        const data = this.readFile();
        delete data[key];
        this.writeFile(data);
    }
    clear() {
        this.writeFile({});
    }
}
//# sourceMappingURL=fileStorage.js.map