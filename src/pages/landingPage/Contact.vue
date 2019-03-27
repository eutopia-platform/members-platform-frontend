<template>
  <div class="lp-contact">
    <div class="signup-wrap">
      <Header type="primary" color="secondary">
        Try productcube with your team for free
      </Header><br />
      <Button @click="signup">Sign me up</Button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/atomic/Header.vue';
  import Button from '../../components/atomic/Button.vue';
  import EmailSignupProvider from './Contact/EmailSignupProvider.vue';

  export default {
    name: "Contact",
    components: {
      Header,
      Button
    },
    methods: {
      signup: () => window.open('/onboarding', '_self')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";

  .lp-contact {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: $c-primary;
    padding: 3em;
    text-align: center;

    .signup-wrap {
      position: relative;
      display: block;
      top: 50%;
      transform: translateY(-50%);

      .header {
        margin-bottom: 3rem;
      }
    }

  }
</style>
