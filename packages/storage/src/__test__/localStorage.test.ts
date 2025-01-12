import { LocalStorage } from '../localStorage'

describe('LocalStorage', () => {
  let storage: LocalStorage

  beforeEach(() => {
    const mockStorage: Record<string, string> = {}
    global.localStorage = {
      getItem: jest.fn((key) => mockStorage[key] || null),
      setItem: jest.fn((key, value) => {
        mockStorage[key] = value
      }),
      removeItem: jest.fn((key) => {
        delete mockStorage[key]
      }),
      clear: jest.fn(() => {
        Object.keys(mockStorage).forEach((key) => delete mockStorage[key])
      }),
    } as unknown as Storage

    storage = new LocalStorage('TEST_')
  })

  test('should set and get a value', () => {
    storage.set('key1', 'value1')
    expect(storage.get('key1')).toBe('value1')
  })

  test('should return default for expired keys', () => {
    const pastTime = -1000 // Set expiration in the past
    storage.set('expiredKey', 'value', pastTime)
    expect(storage.get('expiredKey')).toBeNull()
  })

  test('should handle invalid JSON data gracefully', () => {
    const key = 'invalidJSON'
    global.localStorage.setItem('TEST_INVALIDJSON', '{invalid: JSON}')
    expect(storage.get(key)).toBeNull()
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
