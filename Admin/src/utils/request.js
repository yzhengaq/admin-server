import axios from 'axios'
import { message } from 'ant-design-vue'

const request = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'http://localhost:7001',
  withCredentials: true,
  timeout: 6000,
})

// response interceptor
request.interceptors.response.use((response) => response.data, (error) => {
  const { data } = error.response
  if (error.response.status !== 200) {
    message.error(`status code: ${error.response.status}, ${data.message}`)
  }
  // code in response's data
  if (data.code !== 0) {
    message.error(`error code: ${data.code}, ${data.msg}`)
  }
  return Promise.reject(error)
})

export default request
