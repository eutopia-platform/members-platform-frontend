<template>
  <div class="lp-welcome">
    <Header type="primary">
      Proven frameworks to scale your projects.
    </Header>
    <p>
      Tools for you and your teams, so you achieve the right goals, over and
      over again.
    </p>
    <div class="bt-wrap">
      <Button type="request" @click="scrollToSignup">
        Request Access
      </Button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import Button from '../../components/atomic/Button.vue'

export default {
  name: "Welcome",
  components: {
    Header,
    Button
  },
  methods: {
    scrollToSignup: function() {
      this.$eventBus.$emit('scroll-to-email')
    },
  }
}
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

    p {
      font-size: 1.2rem;
      margin-top: 2em;
      margin-bottom: 2em;
    }

    .bt-wrap {
      display: inline-block;
      margin-top: 1.5em;
      padding: 0;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

  }
</style>
