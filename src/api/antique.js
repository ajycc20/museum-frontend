import request from '@/utils/request'

export function getAntiqueList(params) {
  return request({
    url: '/museum-antique/api/antique/list',
    method: 'get',
    params
  })
}

export function getAntiqueDetails(params) {
  return request({
    url: '/museum-antique/api/antique',
    method: 'get',
    params
  })
}

export function editAntique(id, data) {
  return request({
    url: `/museum-antique/api/antique?currentUserId=${id}`,
    method: 'put',
    data
  })
}

export function addAntique(id, data) {
  return request({
    url: `/museum-antique/api/antique?currentUserId=${id}`,
    method: 'post',
    data
  })
}

export function deleteAntique(params) {
  return request({
    url: '/museum-antique/api/antique',
    method: 'delete',
    params
  })
}
