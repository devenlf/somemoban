require('es6-promise').polyfill()
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.YAPI_URL, // 动态指定
  timeout: 150000                  // 请求超时时间
})

// 请求响应拦截器
service.interceptors.response.use(
    function(response) {
      console.log(response)
      return response.data
    }, function(error) {
  console.log(error)
})
export default service
