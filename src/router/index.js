import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'
import EachApp from '../pages/EachApp.vue'
import UsersVue from '../pages/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardPage
    },
    {
      path: '/apps/:id',
      name: 'EachAPp',
      component: EachApp
    },
    {
      path: '/users',
      name: 'User',
      component: UsersVue
    },
  ]
})

export default router
