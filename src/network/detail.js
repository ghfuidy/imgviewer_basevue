import {request} from './request'

export function getfullimg(id){
  // console.log(id);
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}

