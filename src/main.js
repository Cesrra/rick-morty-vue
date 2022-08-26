import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import routes from '@/routes'
import EventBus from '@/plugins/event-bus'
import variablesToText from '@/filters/variables-to-text'

Vue.use(variablesToText)
Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
