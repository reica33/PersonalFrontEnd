import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/memberlist',
    name: 'memberlist',
    component: () => import('../views/MemberListView.vue')
  },
  {
    path: '/aboutyrr',
    name: 'aboutyrr',
    // 함수로 import하면 페이지 로딩 후 나중에 실행됨. 웹페이지 부하가 있을 경우 아래와 같이 함수로 나눠쓰면 덜함.
    component: () => import('../views/AboutYrrView.vue')
  },
  {
    path: '/joinus',
    name: 'joinus',
    component: () => import('../views/JoinusView.vue')
  },
  {
    path: '/asktome',
    name: 'asktome',
    component: () => import('../views/AsktomeView.vue')
  },
  {
    path: '/audition',
    name: 'audition',
    component: () => import('../views/AuditionView.vue')
  },
  { // 카트1
    path: '/goodscart1',
    name: 'goodscart1',
    component: () => import('../views/GoodsCartOneView.vue')
  },
  { // 카트2
    path: '/goodscart2',
    name: 'goodscart2',
    component: () => import('../views/GoodsCartTwoView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  // 아래는 에러페이지
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
