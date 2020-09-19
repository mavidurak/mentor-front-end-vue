import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Guests/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Guests/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',

    component: () => import('../views/Guests/Signup.vue')
  },
  {
    path: '/multi-select',
    name: 'multiselect',
    component: () => import('../views/Home/Multiselect.vue')
  },
  {
    path: '/axios-demo',
    name: 'AxiosDemo',
    component: () => import('../views/Home/AxiosDemo.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Home/Profile.vue')
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../views/Home/ChangePassword.vue')
  },
  {
    path: '/change-nick',
    name: 'ChangeNick',
    component: () => import('../views/Home/ChangeNick.vue')
  },
  {
    path: '/change-email',
    name: 'ChangeEmail',
    component: () => import('../views/Home/ChangeEmail.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/Guests/ForgotPassword.vue')
  },
  {
    path: '/api-dashboard-vmc',
    name: 'ApiDashboardVMC',
    component: () => import('../views/APIDashboardVMC/Index.vue')
  },
  {
    path: '/api-dashboard-vmc/add-or-update',
    name: 'ApiAddOrUpdateMC',
    component: () => import('../views/APIDashboardVMC/AddOrUpdate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
