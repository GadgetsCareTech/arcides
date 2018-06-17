import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'

Vue.use(Vuetify, { theme: {
  primary: '#33691e',
  secondary: '#64DD17',
  accent: '#004D40',
  error: '#DD2C00',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50'
}})

Vue.config.productionTip = false

 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
