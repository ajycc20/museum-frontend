import request from '@/utils/request'

export function getImg(url) {
  return request({
    url: `/museum-antique/res${url}`,
    method: 'get'
  })
}

export function getAudio(url) {
  return request({
    url: `/museum-antique/res${url}`,
    method: 'get'
  })
}

export function getModel(url) {
  return request({
    url: `/museum-antique/res${url}`,
    method: 'get'
  })
}
