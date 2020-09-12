import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://192.168.1.107:8877',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log('err',err);
  })

  return instance(config)
}