import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserIdKey = 'userId_key'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUserId(userid) {
  return Cookies.set(UserIdKey, userid)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function removeUserId() {
  return Cookies.remove(UserIdKey)
}
