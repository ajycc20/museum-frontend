import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/museum-user/api/user/list',
    method: 'get',
    params
  })
}

export function getUserDetails(params) {
  return request({
    url: '/museum-user/api/user/',
    method: 'get',
    params
  })
}

/**
 * @description
 * @export
 * @param {string} id
 * @param {Object} data 是作为请求主体被发送的数据
 * @returns
 */
export function editUser(id, data) {
  return request({
    url: `/museum-user/api/user?currentUserId=${id}`,
    method: 'put',
    data
  })
}

/**
 * @description
 * @export
 * @param {string} id
 * @param {Object} data 是作为请求主体被发送的数据
 * @returns
 */
export function addUser(id, data) {
  return request({
    url: `/museum-user/api/user?currentUserId=${id}`,
    method: 'post',
    data
  })
}

export function deleteUser(params) {
  return request({
    url: '/museum-user/api/user',
    method: 'delete',
    params
  })
}
