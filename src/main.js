import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(Router)
Vue.use(MintUI)

import routes from '../src/router/router'
const router =new Router({
  mode: 'history',
  routes:routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
