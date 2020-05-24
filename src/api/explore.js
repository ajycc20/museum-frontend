import request from '@/utils/request'

export function getCategoryList(params) {
  return request({
    url: '/museum-exhibition/api/explore/category-list',
    method: 'get',
    params
  })
}

export function getThisWeekTheme(params) {
  return request({
    url: '/museum-exhibition/api/explore/this-week-theme',
    method: 'get',
    params
  })
}

export function getPopularTopic(params) {
  return request({
    url: '/museum-exhibition/api/explore/popular-topic',
    method: 'get',
    params
  })
}
