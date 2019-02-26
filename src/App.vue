<template>
  <div>
    <h1>Hello Eutopia!</h1>
    <p>This page was created with Vue!</p>
    <router-link to="/">
      Show Landing Page
    </router-link>
    |
    <router-link to="/project-hub">
      Show Project Hub
    </router-link>
    <router-view />
  </div>
</template>

<script>
const App = {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App!"
    };
  }
};

export default App;
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
