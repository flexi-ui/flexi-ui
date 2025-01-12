import * as fs from 'node:fs'
import { FileStorage } from '../fileStorage'

describe('FileStorage', () => {
  const testFilePath = './test-storage.json'
  let storage: FileStorage

  beforeAll(() => {
    storage = new FileStorage(testFilePath)
  })

  afterAll(() => {
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath)
    }
  })

  test('should set and get a value', () => {
    storage.set('key1', 'value1')
    expect(storage.get('key1')).toBe('value1')
  })

  test('should remove a value', () => {
    storage.set('key2', 'value2')
    storage.remove('key2')
    expect(storage.get('key2')).toBeNull()
  })

  test('should clear all values', () => {
    storage.set('key3', 'value3')
    storage.clear()
    expect(storage.get('key3')).toBeNull()
  })
})
