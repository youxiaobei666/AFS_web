import router from './router'
import store from './store'
import { isCheckTimeout } from './utils/auth'
import { getItem } from '@/utils/storage'
import { PERMISSION_NAME_LIST, USER_NAME } from '@/constant'

// 白名单
const whiteList = ['/login', '/register','/register_forgotPass', 'AFS','/401', '/404']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // 快捷访问
  if (store.getters.token) {

    // isCheckTimeout 函数处理 token 已经过期情况
    if (isCheckTimeout()) {
      // 发送 退出登陆的任务
      store.dispatch('user/logout')
      // 报错在 控制台
      return Promise.reject(new Error('token 失效了'))
    }
    if (to.path === '/login') { // 有 token 就去不了登录页。
      next('/')
    } else { // 不是去登录页就行
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        await store.dispatch('user/getUserInfo',getItem(USER_NAME))
        await store.dispatch('permission/filterRoutes', getItem(PERMISSION_NAME_LIST)) // 发起更新路由的操作
        return next(to.path)
      }
      next()
    }

  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      // 找到了 /login(indexOf查找某元素第一次出现的索引，没有返回 -1)
      next()
    } else {
      next('/login')
    }
  }
})
