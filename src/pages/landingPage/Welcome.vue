<template>
  <div class="lp-welcome">
    <Header primary>
      A workspace to turn ideas into startups
    </Header>
    <Tagline
      >Cube is the easiest way for teams to develop products people
      want.</Tagline
    >
    <EmailSignup></EmailSignup>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import Tagline from '../../components/atomic/Tagline.vue'
import EmailSignup from '/components/molecular/EmailSignup'

export default {
  name: 'Welcome',
  components: {
    Header,
    Tagline,
    EmailSignup,
  },
  methods: {
    scrollToSignup: function() {
      this.$eventBus.$emit('scroll-to-email')
    },
    signup: () => window.open('/onboarding', '_self'),
  },
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

  * {
    margin-bottom: 2rem;
  }
}

.email-signup {
  width: 25rem;
}
</style>
