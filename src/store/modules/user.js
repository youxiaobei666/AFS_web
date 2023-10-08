import { login, register,getUserInfo, getAllUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { PERMISSION_NAME_LIST, TOKEN, USER_NAME } from '@/constant' // 取得常量
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
import store from '@/store'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},

  }),
  mutations: {
    setToken(state, token) {
      state.token = token // vuex
      setItem(TOKEN, token) // 本地
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setAllUserInfo(state, userAllInfo) {
      state.userAllInfo = userAllInfo
    },
    setUserInfoTotal(state, total) {
      state.userTotal =  total
    },

  },
  actions: {
    login(context, userInfo) {
      //  解构出用户名和密码
      const { username, password } = userInfo

      //  创建一个 promise
      return new Promise((resolve, reject) => {
         login({
          username,
          password,
        })
          .then ((data) => {
            // 储存 token
            this.commit('user/setToken', data.token)
            setItem(PERMISSION_NAME_LIST, data.permissionsNameList)
            store.dispatch('permission/filterRoutes', getItem(PERMISSION_NAME_LIST)) // 发起更新路由的操作
            // 保存登陆时间
            setTimeStamp()

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register(context, userInfo) {
      //  解构出用户名和密码
      const { username, password } = userInfo
      //  创建一个 promise
      return new Promise((resolve, reject) => {
        register({
          username,
          password,
        })
          .then((data) => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo(context, payload) {
      const res = await getUserInfo({ username: payload })
      setItem('avator', res.userInfo.img)
      this.commit('user/setUserInfo', res.userInfo)
      return res
    },

    async getAllUserInfo(context) {
      const res = await getAllUserInfo()
      this.commit('user/setAllUserInfo', res.userInfo)
      this.commit('user/setUserInfoTotal', res.total)
      return res
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    },
  },
}
