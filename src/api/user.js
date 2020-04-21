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

export function EditUser(id, data) {
  return request({
    url: `/museum-user/api/user?currentUserId=${id}`,
    method: 'put',
    data
  })
}

export function AddUser(id, data) {
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
