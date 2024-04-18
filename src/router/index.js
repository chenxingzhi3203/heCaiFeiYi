import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/homePage/homePage')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/goodsItem/goodsItem')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router