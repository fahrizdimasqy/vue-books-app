import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  VueAxios,
  axios,
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
