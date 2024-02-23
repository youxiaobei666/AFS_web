import { login, register, getUserInfo, getAllUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { AVATAR, ID, PERMISSION_NAME_LIST, TOKEN } from '@/constant' // 取得常量
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
import store from '@/store'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
    friendList: [],
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
      state.userTotal = total
    },
    setFriendList(state, list) {
      state.friendList = list
    },
  },
  actions: {
    login(_, userInfo) {
      //  解构出用户名和密码
      const { username, password } = userInfo
      //  创建一个 promise
      return new Promise((resolve, reject) => {
        login({
          username,
          password,
        })
          .then((data) => {
            // 储存 token
            this.commit('user/setToken', data.token)
            setItem(PERMISSION_NAME_LIST, data.permissionsNameList)
            store.dispatch(
              'permission/filterRoutes',
              getItem(PERMISSION_NAME_LIST)
            ) // 发起更新路由的操作
            // 保存登陆时间
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register(_, userInfo) {
      //  解构出用户名和密码
      const { username, password } = userInfo
      //  创建一个 promise
      return new Promise((resolve, reject) => {
        register({
          username,
          password,
        })
          .then(() => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     *
     * @param {*} _
     * @param {*} payload 用户名
     * @returns
     */
    async getUserInfo(_, payload) {
      const res = await getUserInfo({ username: payload })
      setItem(AVATAR, res.userInfo.img)
      setItem(ID, res.userInfo.id)
      this.commit('user/setFriendList', res.userInfo.userFriendsList)
      this.commit('user/setUserInfo', res.userInfo)
      return res
    },
    /**
     * 获取所有的用户
     * @returns
     */
    async getAllUserInfo() {
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
