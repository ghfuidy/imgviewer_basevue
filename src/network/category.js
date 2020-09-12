import {request} from './request'

export function getclass(){
  // console.log(id);
  return request({
    url: '/category/fulldata',
  })
}

export function gettarget(modelcls,start,num){
  // console.log(id);
  return request({
    url: '/category',
    params: {
      modelcls,
      start,
      num
    }
  })
}

export function deleteitem(title,id){
  return request({
    url: 'deldir',
    params: {
      title,
      id
    }
  })
}