import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push

// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export const constantMenus = []

export const constantRoutes = [
  {
    path: '/table',
    component: () => import('@/views/table/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export const asyncRoutes = []
const createRouter = () => {
  const newRouter = new Router({
    mode: 'hash', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })
  return newRouter
}

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
