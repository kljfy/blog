import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../views/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
      },
      {
        path: 'foreEnd',
        name: 'foreEnd',
        component: () => import(/* webpackChunkName: "foreend" */ '../views/ForeEnd/index.vue')
      },
      {
        path: 'nodejs',
        name: 'nodejs',
        component: () => import(/* webpackChunkName: "nodejs" */ '../views/Nodejs/index.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
