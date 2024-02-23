import { LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
  }),
  mutations: {
    /**
     * 修改侧边栏的折叠状态
     * @param {*} state
     */
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    /**
     * 设置语言
     * @param {*} state
     */
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
  },
  actions: {},
}
