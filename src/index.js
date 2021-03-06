import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import Vue from 'vue'

if (process.env.NODE_ENV === 'production')
  Sentry.init({
    dsn: 'https://2fc83a3cc17e49a2a00d88d8bc6478e8@sentry.io/1482895',
    integrations: [new Integrations.Vue({ Vue, attachProps: true })],
  })

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueApollo from 'vue-apollo'
import App from '~/App.vue'
import clients from '~/connections'
import router from '~/router'
import store from '~/store'

import '~/styles/master.scss'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueApollo)
Vue.http.options.emulateJSON = true

const atomic = require('./components/atomic/*.vue')
Object.keys(atomic).forEach(name =>
  Vue.component(name, atomic[name].default || atomic[name])
)

const apolloProvider = new VueApollo({
  clients,
  defaultClient: clients.user,
})

new Vue({
  el: '#app',
  apolloProvider,
  router,
  store,
  render: h => h(App),
})
