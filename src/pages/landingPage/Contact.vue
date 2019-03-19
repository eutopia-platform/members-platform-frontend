<template>
  <div class="lp-contact">
    <div class="mail-wrap">
      <Header type="primary" color="secondary">
        Want more successful projects?
      </Header>
      <Header type="secondary" color="secondary">
        Get access as soon as we release our product.
      </Header>
      <EmailSignupProvider></EmailSignupProvider>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/atomic/Header.vue';
  import EmailSignupProvider from './Contact/EmailSignupProvider.vue';

  export default {
    name: "Contact",
    components: {
      Header,
      EmailSignupProvider
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";

  .lp-contact {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: $c-primary;
    padding: 3em;
    text-align: center;

    .mail-wrap {
      position: relative;
      display: block;
      top: 50%;
      transform: translateY(-50%);

      .header-secondary {
        margin-bottom: 2em;
      }
    }

  }
</style>
