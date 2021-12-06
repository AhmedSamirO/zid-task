import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/landingPage/landingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
