const FIELD_NAME = 'token'

export function setToken(token) {
  window.sessionStorage.setItem(FIELD_NAME, token)
  return token
}

export function getToken() {
  return window.sessionStorage.getItem(FIELD_NAME)
}
