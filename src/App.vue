<template>
  <div>
    <h1>Hello Eutopia!</h1>
    <p>This page was created with Vue!</p>
    <button @click="showLandingPage">
      Landing Page
    </button>
    <button @click="showProjectHub">
      Project Hub
    </button>
    <LandingPage v-if="landingPageIsShown"></LandingPage>
    <ProjectHub v-if="projectHubIsShown"></ProjectHub>
  </div>
</template>

<script>
import LandingPage from "./app/LandingPage";
import ProjectHub from "./app/ProjectHub";

const App = {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App!",
      landingPageIsShown: true,
      projectHubIsShown: false
    };
  },
  components: {
    LandingPage,
    ProjectHub
  },
  methods: {
    showLandingPage() {
      this.$data.landingPageIsShown = true;
      this.$data.projectHubIsShown = false;
    },
    showProjectHub() {
      this.$data.landingPageIsShown = false;
      this.$data.projectHubIsShown = true;
    }
  }
};

export default App;
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
