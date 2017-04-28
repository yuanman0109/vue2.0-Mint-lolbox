// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import store from './store'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(MintUI)
import routes from './router/router'
const router =new Router({
  mode: 'history',
  routes:routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
