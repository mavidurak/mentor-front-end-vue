import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',

    component: () => import('../views/Signup.vue')
  },
  {
    path: '/multiselect',
    name: 'multiselect',
    component: () => import('../views/Multiselect.vue')
  },
  {
    path: '/axios_demo',
    name: 'AxiosDemo',
    component: () => import('../views/AxiosDemo.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '/changeNick',
    name: 'ChangeNick',
    component: () => import('../views/ChangeNick.vue')
  },
  {
    path: '/changeEmail',
    name: 'ChangeEmail',
    component: () => import('../views/ChangeEmail.vue')
  },
  {
    path: '/forgot_password',
    name: 'forgotPassword',
    component: () => import('../views/ForgotPassword.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.replace('/login')

export default router
