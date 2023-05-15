import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue'),
  },
  {
    path: '/detail',
    name: 'ShopDetail',
    component:()=>import("@/views/ShopDetail.vue")
  },
  {
    path: "/car",
    name: 'car',
    component:()=>import('@/views/CarView.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component:()=>import('@/views/MineView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
