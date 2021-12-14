import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../views/Layout.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: { name: 'articleIntroduction' },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue'),
        children: [
          {
            path: 'articleIntroduction',
            name: 'articleIntroduction',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home/components/article-introduction/index.vue')
          },
          {
            path: 'articleInfo',
            name: 'articleInfo',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home/components/article-info/index.vue')
          },
          {
            path: 'articleList',
            name: 'articleList',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home/components/article-list/index.vue')
          }
        ]
      },
      // {
      //   path: 'articleList',
      //   name: 'articleList',
      //   component: () => import(/* webpackChunkName: "article" */ '../views/Article/index.vue')
      // },
      {
        path: 'foreEnd',
        name: 'foreEnd',
        component: () => import(/* webpackChunkName: "home" */ '../views/ForeEnd/index.vue')
      },
      {
        path: 'nodejs',
        name: 'nodejs',
        component: () => import(/* webpackChunkName: "home" */ '../views/Nodejs/index.vue')
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
