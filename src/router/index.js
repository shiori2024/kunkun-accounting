import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

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
  base: process.env.BASE_URL || '/',
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 检查用户是否已登录
  const isLoggedIn = store.getters.isLoggedIn
  // 如果用户尝试访问 '/home' 且未登录，则重定向到 '/login'
  if (to.name === 'home' && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
