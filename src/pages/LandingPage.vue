<template>
  <div>
    <h1>Hello Landing Page!</h1>
    <p>Welcome to our super awesome project!</p>
    <router-link to="/project-hub">
      <Button>Go to project hub</Button>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/atomic/Button";

const LandingPage = {
  name: "LandingPage",
  components: {
    Button: Button
  }
};

export default LandingPage;
</script>
