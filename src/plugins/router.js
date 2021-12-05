import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*
  {
    path: '/insuranceOffers',
    name: 'InsuranceOffers',
    component: '',
    children: [
      {
        path: 'summary/:index/:lang?',
        name: 'summary',
        component: '',
        props: true,
        meta: {
          breadcrumb: ''
        }
      },
      {
        path: '',
        component: '',
        meta: {
          breadcrumb: ''
        }
      }
    ]
  },
  {
    path: '/',
    name: 'landingPage',
    component: '',
  }
  */
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
