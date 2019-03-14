import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import LandingPage from "./pages/LandingPage";
import ProjectHub from "./pages/ProjectHub";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

const routes = [
  { path: "/", component: LandingPage },
  // { path: "/project-hub", component: ProjectHub },
  { path: "/privacy", component: Privacy },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
