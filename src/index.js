import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import LandingPage from './pages/LandingPage'
import Privacy from './pages/Privacy'
import Components from './pages/Components'
import NotFound from './pages/NotFound'
import Workspace from './pages/Workspace'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Dashboard from './pages/workspace/Dashboard'
import Analytics from './pages/workspace/Analytics'
import Toolkits from './pages/workspace/Toolkits'
import Processes from './pages/workspace/Processes'
import Settings from './pages/workspace/Settings'
import clients from './connections'

import Signup from './pages/Signup'
import SignupEmail from './pages/signup/Email'
import SignupName from './pages/signup/Name'
import SignupMilestone from './pages/signup/Milestone'
import SignupMembers from './pages/signup/Members'
import SignupDone from './pages/signup/Done'

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
    path: '/workspace/',
    component: Workspace,
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
  {
    path: '/signup',
    component: Signup,
    children: [
      {
        path: '/',
        component: SignupEmail,
      },
      {
        path: 'name',
        component: SignupName,
      },
      {
        path: 'milestone',
        component: SignupMilestone,
      },
      {
        path: 'members',
        component: SignupMembers,
      },
      {
        path: 'done',
        component: SignupDone,
      },
    ],
  },
  { path: '/login', component: Login },
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
