import request from '@/utils/request'

export function getAntiqueList(params) {
  return request({
    url: '/museum-antique/api/antique/list',
    method: 'get',
    params
  })
}
