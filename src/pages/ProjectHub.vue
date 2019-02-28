<template>
  <div>
    <h1>Hello Project Hub!</h1>
    <p>This page was created with Vue!</p>
    <router-link to="/">
      <Button>Go to landing page</Button>
    </router-link>
    <LoginProvider></LoginProvider>
  </div>
</template>

<script>
import Button from "../components/atomic/Button";
import LoginProvider from "./projectHub/LoginProvider";

const ProjectHub = {
  name: "ProjectHub",
  components: {
    Button,
    Login
  },
  methods: {
    onLogin(data) {
      console.log(data);
    }
  }
};

export default ProjectHub;
</script>
