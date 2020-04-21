import request from '@/utils/request'

export function getCategoryList(params) {
  return request({
    url: '/museum-exhibition/explore/category-list',
    method: 'get',
    params
  })
}

export function getThisWeekTheme(params) {
  return request({
    url: '/museum-exhibition/explore/this-week-theme',
    method: 'get',
    params
  })
}

export function getPopularTopic(params) {
  return request({
    url: '/museum-exhibition/explore/popular-topic',
    method: 'get',
    params
  })
}
