import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#8D5DA7',
        secondary: '#45A787',
        gold: 'f8d270'
      }
    }
  },
  rtl: true,

})
