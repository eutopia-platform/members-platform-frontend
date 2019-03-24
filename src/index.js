import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import LandingPage from "./pages/LandingPage";
import ProjectHub from "./pages/ProjectHub";
import Privacy from "./pages/Privacy";
import Components from "./pages/Components";
import NotFound from "./pages/NotFound";
import Workspace from "./pages/Workspace";
import Onboarding from "./pages/Onboarding";
import VueApollo from "vue-apollo"

import ApolloClient from "apollo-boost"

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "http://192.168.8.107:5000/auth"
})

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueApollo)
Vue.http.options.emulateJSON = true;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


const routes = [
  { path: "/", component: LandingPage },
  { path: "/workspace", component: Workspace },
  { path: "/privacy", component: Privacy },
  { path: "/components", component: Components },
  { path: "/onboarding", component: Onboarding },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

// event bus for communication of unrelated components
Vue.prototype.$eventBus = new Vue()

new Vue({
  el: "#app",
  apolloProvider,
  router,
  render: h => h(App),
});
