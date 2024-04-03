import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/queens',
      name: 'queens',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/queensview.vue')
    },
    {
      path: '/statenisland',
      name: 'statenisland',
      component: () => import('../views/statenislandview.vue')
    },
    {
      path: '/brooklyn',
      name: 'brooklyn',
      component: () => import('../views/brooklynview.vue')
    },
    {
      path: '/manhattan',
      name: 'manhattan',
      component: () => import('../views/manhattanview.vue')
    },
    {
      path: '/bronx',
      name: 'bronx',
      component: () => import('../views/bronxview.vue')
    },
  ]
})

export default router
