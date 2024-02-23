import { MAIN_COLOR } from '@/constant'
import { generateColors } from '@/utils/theme'
import { getItem } from '@/utils/storage'

const getters = {
  token: (state) => state.user.token,
  /**
   * 判断是否存在用户信息（返回 true 表示存在用户信息）
   * @param {*} state
   * @returns
   */
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
  userAllInfo: (state) => state.user.userAllInfo,
  userTotal: (state) => state.user.userTotal,
  cssVar: (state) => ({
    ...state.theme.variables,
    ...generateColors(getItem(MAIN_COLOR)),
  }),
  language: (state) => state.app.language,
  sidebarOpened: (state) => state.app.sidebarOpened,
  mainColor: (state) => state.theme.mainColor,
  routerList: (state) => state.permission.routs,
  getFriendsList: (state) => state.user.friendList,
}
export default getters
