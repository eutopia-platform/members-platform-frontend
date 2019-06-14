import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import clients from './connections'
import router from '/router'

import '/master.scss'

const apolloProvider = new VueApollo({
  clients,
  defaultClient: clients.user,
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueApollo)
Vue.http.options.emulateJSON = true

const atomic = require('./components/atomic/*.vue')
Object.keys(atomic).forEach(name =>
  Vue.component(name, atomic[name].default || atomic[name])
)

new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(App),
})
