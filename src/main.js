// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueSocketio from 'vue-socket.io'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueSocketio, 'http://localhost:4500/some-resource', store)
// Vue.use(VueSocketio, 'http://localhost:4500/some-more-resource', store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
