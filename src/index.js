import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import LandingPage from "./pages/LandingPage";
import ProjectHub from "./pages/ProjectHub";
import Privacy from "./pages/Privacy";
import Components from "./pages/Components";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

const routes = [
  { path: "/", component: LandingPage },
  { path: "/privacy", component: Privacy },
  { path: "/components", component: Components },
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
  router,
  render: h => h(App)
});
