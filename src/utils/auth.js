const TOKEN_KEY = '__TOKEN'
export function getTokenAuth () {
  return localStorage.getItem(TOKEN_KEY)
}
