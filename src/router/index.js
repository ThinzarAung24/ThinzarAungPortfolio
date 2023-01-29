import ContactView from '@/views/ContactView.vue'
import Portfolio from '@/views/Portfolio.vue'
import RestaurantProject from '@/views/RestaurantProject.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebApplicationVulnerabiltiy from '@/views/WebApplicationVulnerabiltiy.vue'
import MainScreen from '@/views/MainScreen.vue'
import SingleStorey from '@/views/SingleStorey.vue'
import KoYinLayVillage from '@/views/KoYinLayVillage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'main',
    component: MainScreen
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/restaurantProject',
    name: 'restaurantProject',
    component: RestaurantProject
  },

  {
    path: '/webApplicationVulnerabiltiyTesting',
    name: 'webApplicationVulnerabiltiyTesting',
    component: WebApplicationVulnerabiltiy
  },
  {
    path: '/singleStorey',
    name: 'singleStorey',
    component: SingleStorey
  },
  {
    path: '/koyinlayvillage',
    name: 'koyinlayvillage',
    component: KoYinLayVillage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
