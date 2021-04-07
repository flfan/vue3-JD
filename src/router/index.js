import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import Register from '../views/register/register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isRegisterOrLogin = (name === 'Register' || name === 'Login')
  if (isLogin || isRegisterOrLogin) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
