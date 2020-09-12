import {request} from './request'

export function getHomedata(start, num, order) {
  return request({
    url: '/search',
    params: {
      start,
      num,
      order
    }
  })
}