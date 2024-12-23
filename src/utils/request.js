// 对于axios进行二次封装
import axios from 'axios'
import 'nprogress/nprogress.css'

// 1、利用axios对象的方法create,去创建一个axios实例
// 2、request就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径,发请求时，路径会出现api
  baseURL: process.env.VUE_APP_BASE_API,
  // 代表请求时间
  timeout: 6000
})
// 请求拦截器：在请求之前，请求拦截器可以检测到，在发出去之前做一些事
requests.interceptors.request.use((config) => {
  // 进度条开始动

  return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
  // 进度条结束

  return res.data
}, (error) => {
  // 失败的回调函数
  return Promise.reject(new Error('faile'))
})
// 暴露
export default requests
