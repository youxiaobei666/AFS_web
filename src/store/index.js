import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'
import theme from './modules/theme.js'
import permission from '@/store/modules/permission'

export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user, // 用户相关
    app, // 程序页面相关
    theme, // 主题
    permission, // 权限、路由
  },
})
