<template>
  <div class="lp-welcome">
    <Header type="primary">
      Build. Measure. Learn.<br />
      Lean startups made easy.
    </Header>
    <Button @click="signup">
      Setup workspace
    </Button>
  </div>
</template>

<script>
import Header from "../../components/atomic/Header.vue";
import Button from "../../components/atomic/Button.vue";

export default {
  name: "Welcome",
  components: {
    Header,
    Button
  },
  methods: {
    scrollToSignup: function() {
      this.$eventBus.$emit("scroll-to-email");
    },
    signup: () => window.open("/onboarding", "_self")
  }
};
</script>

<style lang="scss" scoped>
.lp-welcome {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  padding-left: 4em;
  padding-right: 4em;
  top: 50vh;
  transform: translateY(-50%);
  position: relative;
  margin-bottom: 5em;

  // text-align: center;
}

.button {
  margin-top: 2rem;
}
</style>
