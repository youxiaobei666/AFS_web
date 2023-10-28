import axios from 'axios'
import store from '@/store'
import apis from '@/config'
import { ElMessage } from 'element-plus'
const serve = axios.create({
  baseURL: apis.baseUrl,
  timeout: 5000,
})

// 请求拦截器
serve.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
serve.interceptors.response.use(
  (response) => {
    // 解构出响应的数据和提示信息
    const { success, data } = response.data
    //   要根据success的成功与否决定下面的操作和对应的提示
    if (success) {
      ElMessage.success(data.message)
      return data
    } else {
      // 业务错误
      ElMessage.error(data.message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (error.response && error.response.data && error.response.data === 401) {
      // token 超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.data.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default serve
