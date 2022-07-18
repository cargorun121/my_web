import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

//将token存储在cookie  从而防止单一存储在vuex中丢失
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
