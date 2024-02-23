// token 常量，暂定值为 'token'
export const TOKEN = 'token'
// token 时间戳
export const TIME_STAMP = 'timeStamp'
// 超时时长(毫秒) 两小时
export const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000
// 国际化
export const LANG = 'language'
// 主题色保存的 key
export const MAIN_COLOR = 'mainColor'
// 默认色值
export const DEFAULT_COLOR = '#f36f2b'
// 个人爱好的枚举
export const hobbyMap = [
  {
    label: '唱',
    value: 1,
    id: 1,
  },
  {
    label: '跳',
    value: 2,
    id: 2,
  },
  {
    label: 'rap',
    value: 3,
    id: 3,
  },
  {
    label: '篮球',
    value: 4,
    id: 4,
  },
]

export const authChangeMap = [
  {
    label: '用户管理',
    value: 'userManage',
    id: 1,
  },
  {
    label: '权限管理',
    value: 'authManage',
    id: 2,
  },
  {
    label: '动物管理',
    value: 'animalManage',
    id: 3,
  },
]

export const commonMap = [
  {
    label: '否',
    value: 0,
    id: 1,
  },
  {
    label: '是',
    value: 1,
    id: 2,
  },
]

export const messageType = [
  {
    label: '用户消息',
    value: 1,
    id: 1,
  },
  {
    label: '系统通知',
    value: 2,
    id: 2,
  },
]

export const PERMISSION_NAME_LIST = 'PERMISSION_NAME_LIST'
export const USER_NAME = 'USER_NAME'
export const AVATAR = 'AVATAR'
export const ID = 'ID'
// userManage,authManage,animalManage,message
export const authMap = {
  userManage: {
    id: 1,
    name: 'userManage',
    label: '用户管理',
  },
  authManage: {
    id: 2,
    name: 'authManage',
    label: '权限管理',
  },
  animalManage: {
    id: 3,
    name: 'animalManage',
    label: '动物管理',
  },
}
