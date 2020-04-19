import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/museum-user/api/login',
    method: 'post',
    data
  })
}

export function getInfo(userId) {
  return request({
    url: '/museum-user/api/user/',
    method: 'get',
    params: { userId }
  })
}

export function logout() {
  return request({
    url: '/museum-user/api/logout',
    method: 'post'
  })
}
