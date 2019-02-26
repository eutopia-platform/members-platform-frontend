import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import LandingPage from "./app/LandingPage";
import ProjectHub from "./app/ProjectHub";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LandingPage },
  { path: "/project-hub", component: ProjectHub },
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
