<template>
  <div>
    <Header>
      <div class="left">
        <Logo></Logo>
      </div>
      <div class="right">
        <Button>Sign in</Button>
      </div>
    </Header>
    <div>Other content goes here...</div>
  </div>
</template>

<script>
import Header from "./projectHub/Header";
import Logo from "./projectHub/Logo";

const ProjectHub = {
  name: "ProjectHub",
  components: {
    Header,
    Logo
  }
};

export default ProjectHub;
</script>
