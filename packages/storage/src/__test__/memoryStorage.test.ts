import { MemoryStorage } from "../memoryStorage";

describe("MemoryStorage", () => {
  let storage: MemoryStorage;

  beforeEach(() => {
    storage = new MemoryStorage();
  });

  test("should set and get a value", () => {
    storage.set("key1", "value1");
    expect(storage.get("key1")).toBe("value1");
  });

  test("should remove a value", () => {
    storage.set("key2", "value2");
    storage.remove("key2");
    expect(storage.get("key2")).toBeNull();
  });

  test("should clear all values", () => {
    storage.set("key3", "value3");
    storage.clear();
    expect(storage.get("key3")).toBeNull();
  });
});
