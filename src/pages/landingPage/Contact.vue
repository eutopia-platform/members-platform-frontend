<template>
  <div class="lp-contact">
    <div class="mail-wrap">
      <Header type="primary">
        Want more successful projects?
      </Header>
      <Header type="secondary">
        Get access as soon as we release our product.
      </Header>
      <EmailSignupProvider></EmailSignupProvider>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/atomic/Header.vue';
  import EmailSignupProvider from './Contact/EmailSignupProvider.vue';

  const Contact = {
    name: "Contact",
    components: {
      Header,
      EmailSignupProvider
    }
  }
  export default Contact
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

      .header {
        color: white;
        margin-bottom: 1em;
      }

      .header-secondary {
        margin-bottom: 2em;
      }
    }

  }
</style>
