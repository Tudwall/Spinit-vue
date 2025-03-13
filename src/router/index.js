import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '@/views/HomeView.vue'
import DetailsView from '@/views/DetailsView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
