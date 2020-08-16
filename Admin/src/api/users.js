import request from '@/utils/request'

export function getUserInfo (data) {
  return request({
    url: '/users/getUserInfo',
    data,
  })
}
