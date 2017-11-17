import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router.js'
import VueResource from 'vue-resource'
import "../font-awesome/css/font-awesome.css"
import './assets/css/cssreset.css'
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
