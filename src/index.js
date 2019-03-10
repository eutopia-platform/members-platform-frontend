import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import LandingPage from "./pages/LandingPage";
import ProjectHub from "./pages/ProjectHub";
import NotFound from "./pages/NotFound";
import initPageScroll from './pageScroll.js'

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
  render: h => h(App),
  // mounted: initPageScroll
});
