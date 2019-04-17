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
import Toolkits from './pages/workspace/Toolkits'
import Settings from './pages/workspace/Settings'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const createClient = url => new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: url,
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
})

const clients = process.env.NODE_ENV === 'development'
  ? {
    auth: createClient('http://localhost:3000/auth'),
    user: createClient('http://localhost:5000')
  } : {
    auth: createClient('https://api.productcube.io/auth'),
    user: createClient('https://user.api.productcube.io')
  }

const apolloProvider = new VueApollo({
  clients: {
    auth: clients.auth,
    user: clients.user
  },
  defaultClient: clients.user
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
        path: 'toolkits',
        component: Toolkits,
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
  routes, // short for `routes: routes`
})

// event bus for communication of unrelated components
Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  apolloProvider,
  router,
  render: h => h(App),
})
