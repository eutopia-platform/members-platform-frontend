import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import LandingPage from './pages/LandingPage'
import Privacy from './pages/Privacy'
import Components from './pages/Components'
import NotFound from './pages/NotFound'
import WorkspaceGuard from './pages/workspace/WorkspaceGuard'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Dashboard from './pages/workspace/Dashboard'
import Analytics from './pages/workspace/Analytics'
import Toolkits from './pages/workspace/Toolkits'
import Processes from './pages/workspace/Processes'
import Settings from './pages/workspace/Settings'
import Invite from './pages/Invite'
import clients from './connections'

import '/master.scss'

const apolloProvider = new VueApollo({
  clients,
  defaultClient: clients.user,
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueApollo)
Vue.http.options.emulateJSON = true

const routes = [
  { path: '/', component: LandingPage },
  {
    path: '/space/:workspace?',
    component: WorkspaceGuard,
    children: [
      {
        path: '/',
        component: Dashboard,
      },
      {
        path: 'analytics',
        component: Analytics,
      },
      {
        path: 'toolkits',
        component: Toolkits,
      },
      {
        path: 'processes',
        component: Processes,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },
  { path: '/privacy', component: Privacy },
  { path: '/components', component: Components },
  { path: '/onboarding', component: Onboarding },
  { path: '/login', component: Login, name: 'login', props: true },
  { path: '/invite/:code', component: Invite },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

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
