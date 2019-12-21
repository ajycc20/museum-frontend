import request from '@/utils/request'

export function getFavourite(params) {
  return request({
    url: '/profile/favourite',
    method: 'get',
    params
  })
}

export function getComment(params) {
  return request({
    url: '/profile/comment',
    method: 'get',
    params
  })
}

export function getHistory(params) {
  return request({
    url: '/profile/history',
    method: 'get',
    params
  })
}
