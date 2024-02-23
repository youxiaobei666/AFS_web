import { privateRoutes, publicRoutes } from '@/router'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    routs: [],
  }),
  mutations: {
    /**
     * 添加对应权限的路由规则
     * @param {*} state
     * @param {*} newRoutes
     */
    setRoutes: (state, newRoutes) => {
      state.routs = [...publicRoutes, ...newRoutes]
      // 添加对应权限的路由规则
      newRoutes.forEach((route) => {
        router.addRoute(route)
      })
      // 至此路由存在了。否则还是空数组
      console.log(router.getRoutes())
    },
  },
  actions: {
    filterRoutes: (context, permissionNameList) => {
      const routes = []
      console.log(permissionNameList)
      // 路由权限匹配
      permissionNameList.forEach((key) => {
        // 权限名 与 路由的 name 匹配
        routes.push(
          ...privateRoutes.filter(
            (item) =>
              item.name === key ||
              // 以下的两个（或者多个）路由是固定的无权限路由
              // 上面的 permissionNameList 则是后端传的具备权限的路由数组
              item.name === 'AFS' ||
              item.name === 'profile'
          )
        )
      })
      // 404
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404',
      })

      // 设置最新的路由
      context.commit('setRoutes', routes)
      return routes
    },
  },
}
