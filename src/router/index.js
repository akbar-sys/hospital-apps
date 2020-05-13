import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "page" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "page" */ '../views/ContactUs.vue')
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: () => import(/* webpackChunkName: "page" */ '../views/Disclaimer.vue')
  },
  {
    path: '/termnconditions',
    name: 'TermnConditions',
    component: () => import(/* webpackChunkName: "page" */ '../views/TermnConditions.vue')
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "page" */ '../views/PrivacyPolicy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
      return { x: 0, y: 0 }
  }
  
})

export default router
