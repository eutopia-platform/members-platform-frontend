import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import LandingPage from './pages/LandingPage'
import Home from './pages/landingPage/Home'
import { default as LpToolkits } from './pages/landingPage/Toolkits'
import Workflow from './pages/landingPage/Workflow'
import Privacy from './pages/Privacy'
import ShadowDemo from './pages/demo/Shadow'
import TypographyDemo from './pages/demo/Typography'
import ComponentsDemo from './pages/demo/Components'
import NotFound from './pages/NotFound'
import WorkspaceGuard from './pages/workspace/WorkspaceGuard'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Dashboard from './pages/workspace/Dashboard'
import Analytics from './pages/workspace/Analytics'
import Toolkits from './pages/workspace/Toolkits'
import Processes from './pages/workspace/Processes'
import Settings from './pages/workspace/Settings'
import CanvasTest from './pages/workspace/CanvasTest'
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
  {
    path: '/',
    component: LandingPage,
    children: [
      { path: '/', component: Home },
      { path: 'workflow', component: Workflow },
      { path: 'toolkits', component: LpToolkits },
    ],
  },
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
      {
        path: 'canvas',
        component: CanvasTest,
      },
    ],
  },
  {
    path: '/demo/shadow',
    component: ShadowDemo,
  },
  {
    path: '/demo/typography',
    component: TypographyDemo,
  },
  {
    path: '/demo/components',
    component: ComponentsDemo,
  },
  { path: '/privacy', component: Privacy },
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
