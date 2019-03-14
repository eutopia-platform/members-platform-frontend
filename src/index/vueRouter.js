import VueRouter from "vue-router";
import LandingPage from "../pages/LandingPage";
import ProjectHub from "../pages/ProjectHub";
import NotFound from "../pages/NotFound";

function createVueRouter() {
  const routes = [
    { path: "/", component: LandingPage },
    { path: "/project-hub", component: ProjectHub },
    { path: "*", component: NotFound }
  ];

  const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  });

  return router;
}

export default createVueRouter;
