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
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'

import '/master.scss'

const createClient = (url, sendToken = false) =>
  new ApolloClient({
    link: ApolloLink.from([
      ...(sendToken
        ? [
            setContext(() => ({
              headers: {
                'session-token': localStorage.getItem('sessionToken'),
              },
            })),
          ]
        : []),
      createHttpLink({
        uri: url,
        credentials: 'same-origin',
      }),
    ]),
    cache: new InMemoryCache(),
  })

const clients =
  process.env.NODE_ENV === 'development'
    ? {
        auth: createClient('http://localhost:4000'),
        user: createClient('http://localhost:5000', true),
        tool: createClient('http://localhost:7000'),
        mail: createClient('http://localhost:9000'),
      }
    : {
        auth: createClient('https://auth.api.productcube.io/'),
        user: createClient('https://user.api.productcube.io', true),
        tool: createClient('https://tool.api.productcube.io'),
        mail: createClient('https://mail.api.productcube.io'),
      }

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
  { path: '/login', component: Login },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// event bus for communication of unrelated components
Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(App),
})
