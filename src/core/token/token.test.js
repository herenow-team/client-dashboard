import {setToken, getToken} from '.'

beforeEach(() => {
  class LocalStorageMock {
    constructor() {
      this.store = {}
    }

    clear() {
      this.store = {}
    }

    getItem(key) {
      return this.store[key] || null
    }

    setItem(key, value) {
      this.store[key] = value.toString()
    }

    removeItem(key) {
      delete this.store[key]
    }
  }

  global.sessionStorage = new LocalStorageMock()
})

test('expect setToken set a token to sessionStorage', () => {
  const token = 'token'
  setToken(token)
  const stored = global.sessionStorage.getItem('token')
  expect(stored).toBe(token)
})

test('expect getToken get a token from sessionStorage', () => {
  const token = 'token'
  global.sessionStorage.setItem('token', token)
  const stored = getToken(token)
  expect(stored).toBe(token)
})
