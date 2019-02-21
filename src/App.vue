<template>
  <div>
    <h1>Hello Eutopia!</h1>
    <p>This page was created with Vue!</p>
    <LandingPage></LandingPage>
    <ProjectHub></ProjectHub>
  </div>
</template>

<script>
import LandingPage from "./app/LandingPage";
import ProjectHub from "./app/ProjectHub";

const App = {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App!"
    };
  },
  components: {
    LandingPage,
    ProjectHub
  }
};

export default App;
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
