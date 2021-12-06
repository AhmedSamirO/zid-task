import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import PortalVue from 'portal-vue'
import { BootstrapVue, LayoutPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import './app.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faHandHoldingUsd, faComments, faColumns } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(BootstrapVueIcons)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add([faChevronLeft, faHandHoldingUsd, faComments, faColumns])

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
