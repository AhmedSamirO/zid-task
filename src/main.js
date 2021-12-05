import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import PortalVue from 'portal-vue'
import { BootstrapVue, LayoutPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import './app.scss'

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
