import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '欢迎'
    },
    component: () => import('../views/HelloView.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户中心'
    },
    component: () => import('@/views/UserView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '用户登录'
    },
    component: () => import('@/views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/',
  routes
})

export default router
