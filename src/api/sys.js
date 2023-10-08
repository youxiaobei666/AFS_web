import request from '@/utils/request'

/**
 * 登陆
 */

export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data,
  })
}

export const register = (data) => {
  return request({
    url: '/register',
    method: 'POST',
    data,
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = (data) => {
  return request({
    url: '/profile',
    method: 'POST',
    data
  })
}

/**
 * 获取所有用户列表
 */
export const getAllUserInfo = () => {
  return request({
    url: '/userinfo',
  })
}

// 删除用户接口
export const editUserInfo = (data) => {
  return request({
    url: '/userinfo/save',
    method: 'POST',
    data,
  })
}

export const editAnimal = (data) => {
  return request({
    url: '/animal/save',
    method: 'POST',
    data,
  })
}

export const deleteUser = (params) => {
  return request({
    url: `/userinfo/delete/${params}`,
    method: 'DELETE'
  })
}
export const deleteAnimal = (params) => {
  return request({
    url: `/animal/delete/${params}`,
    method: 'DELETE'
  })
}

export  const queryAnimalList = () => {
  return request({
    url: '/animal/query-list',
    method: 'GET'
  })
}
