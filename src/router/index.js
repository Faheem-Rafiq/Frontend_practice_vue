import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'About',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
