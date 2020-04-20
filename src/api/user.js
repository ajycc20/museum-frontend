import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/museum-user/api/user/list',
    method: 'get',
    params
  })
}
