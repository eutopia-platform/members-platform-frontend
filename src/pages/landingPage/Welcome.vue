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

  @media screen and (max-width: 800px) {
    margin-top: 4rem;
    transform: none;
    position: initial;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .email-signup {
      max-width: 100%;
    }
  }

  * {
    margin-bottom: 2rem;
  }
}

.email-signup {
  width: 25rem;
}
</style>
