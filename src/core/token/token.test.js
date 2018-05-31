import {setToken, getToken} from '.'

beforeEach(() => {
  global.sessionStorage.clear()
})

test('expect setToken set a token to sessionStorage', () => {
  const expected = 'token'
  setToken(expected)
  const actual = global.sessionStorage.getItem('token')
  expect(actual).toBe(expected)
})

test('expect getToken get a token from sessionStorage', () => {
  const expected = 'token'
  global.sessionStorage.setItem('token', expected)
  const actual = getToken()
  expect(actual).toBe(expected)
})
