import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: '/login',
    meta: { layout: 'none' }
  },
  {
    path: '/home',
    name: 'Home',
    meta: { layout: 'home-nav' },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'none' },
    component: () => import('../views/Guests/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { layout: 'none' },
    component: () => import('../views/Guests/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Profile.vue')
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/ChangePassword.vue')
  },
  {
    path: '/change-username',
    name: 'ChangeUsername',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/ChangeUsername.vue')
  },
  {
    path: '/change-email',
    name: 'ChangeEmail',
    meta: { layout: 'none' },
    component: () => import('../views/Home/ChangeEmail.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: { layout: 'none' },
    component: () => import('../views/Guests/ForgotPassword.vue')
  },
  {
    path: '/data-sets/add',
    name: 'AddDataset',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/DataSets/Add.vue')
  },
  {
    path: '/data-sets/',
    name: 'ListDataSets',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/DataSets/List.vue')
  },
  {
    path: '/datas/',
    name: 'ListDatas',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Datas/List.vue')
  },
  {
    path: '/datas/add',
    name: 'AddData',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Datas/Add.vue')
  },

  {
    path: '/applications/add',
    name: 'AddApplication',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Applications/Add.vue')
  },
  {
    path: '/applications/',
    name: 'ListApplications',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Applications/List.vue')
  },
  {
    path: '/appdatasets/add',
    name: 'AddAppDatasets',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/AppDatasets/Add.vue')
  },
  {
    path: '/appdatasets/',
    name: 'ListAppDatasets',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/AppDatasets/List.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
