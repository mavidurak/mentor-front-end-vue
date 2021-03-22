import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { layout: 'none' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Guests/About.vue')
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
    path: '/multi-select',
    name: 'multiselect',
    meta: { layout: 'none' },
    component: () => import('../views/Home/Multiselect.vue')
  },
  {
    path: '/axios-demo',
    name: 'AxiosDemo',
    meta: { layout: 'none' },
    component: () => import('../views/Home/AxiosDemo.vue')
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
    component: () => import('../views/Home/Datasets/Add.vue')
  },
  {
    path: '/data-sets/list',
    name: 'ListDatasets',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Datasets/List.vue')
  },
  {
    path: '/data-sets/update',
    name: 'UpdateDataSets',
    meta: { layout: 'home-nav' },
    component: () => import('../views/APIDashboardVMC/AddOrUpdate.vue')
  },
  {
    path: '/datas/add',
    name: 'AddData',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Datas/Add.vue')
  },
  {
    path: '/datas/list',
    name: 'ListDatas',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Datas/List.vue')
  },
  {
    path: '/applications/add',
    name: 'AddApplication',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Applications/Add.vue')
  },
  {
    path: '/applications/list',
    name: 'ListApplications',
    meta: { layout: 'home-nav' },
    component: () => import('../views/Home/Applications/List.vue')
  },
  {
    path: '/api-dashboard-vmc',
    name: 'ApiDashboardVMC',
    meta: { layout: 'home-nav' },
    component: () => import('../views/APIDashboardVMC/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
