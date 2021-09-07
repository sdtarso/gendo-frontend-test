import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Auth from '../views/Auth/Auth.vue'
import Profile from '../views/Profile/Profile.vue'
import Repositories from '../views/Profile/Repositories.vue'
import Starred from '../views/Profile/Starred.vue'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: '/repositories',
        name: 'Repositories',
        component: Repositories
      },
      {
        path: '/starred',
        name: 'Starred',
        component: Starred
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
