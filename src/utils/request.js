import axios from 'axios'
import { getTokenAuth } from './auth'

const baseURL = '/api/list'

function myAxios (axiosConfig) {
  const service = axios.create({
    baseURL,
    timeout: 10000 // 设置统一的超时时长
  })

  service.interceptors.request.use(
    config => {
      // 自动携带token
      if (getTokenAuth()) {
        config.headers.Authorization = getTokenAuth()
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  return service(axiosConfig) // 返回 promise 对象
}

export default myAxios
