import layout from '@/layout/index.vue'

/**
 * meta 是必须的属性
 * children: [] 是必须写的
 */

export const animalManageRoutes = {
  path: '/animal',
  redirect: '/animal/manage', // 默认第一个
  name: 'animalManage',
  component: layout,
  meta: {
    title: "animal",
    icon: "animal",
  },
  props: {
    default: false,
  },
  children: [
    {
      path: '/animal/manage',
      component: () => import('@/views/animal-manage'),
      meta: {
        title: 'animalManage',
        icon: 'animal'
      },
      children: []
    }]
}