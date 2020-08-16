import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      icon: 'appstore',
      title: '首页',
    },
    component: () => import('@/pages/index'),
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      icon: 'user',
      title: '用户',
    },
    component: () => import('@/pages/users'),
    // 嵌套子菜单示例
    // children: [
    //   {
    //     path: 'subusers',
    //     name: 'subusers',
    //     meta: {
    //       title: '用户111'
    //     },
    //   }
    // ]
  },
  {
    path: '*',
    name: '404',
    hidden: true,
    component: () => import('@/pages/404'),
  },
]

const router = new VueRouter({
  routes,
})

export { routes }
export default router
