import Vue from "vue";
import VueRouter from "vue-router";
import VueApollo from "vue-apollo";
import createVueRouter from "./index/vueRouter";
import createApolloProvider from "./index/apolloProvider";
import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(VueApollo);

const router = createVueRouter();
const apolloProvider = createApolloProvider();

new Vue({
  el: "#app",
  router,
  apolloProvider,
  render: h => h(App)
});
