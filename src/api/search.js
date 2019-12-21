import request from '@/utils/request'

export function getSearch(params) {
  return request({
    url: '/search',
    method: 'get',
    params
  })
}
