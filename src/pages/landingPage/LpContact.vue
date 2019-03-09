<template>
  <div class="lp-contact">
    <!-- <p>
      Hello
    </p> -->
    <Header type="primary">
      Want more successful projects?
    </Header>
    <EmailSignup></EmailSignup>
  </div>
</template>

<script>
  import Header from '../../components/atomic/Header.vue';
  import EmailSignup from '../../components/molecular/EmailSignup.vue'

  const LpContact = {
    name: "LpContact",
    components: {
      Header,
      EmailSignup
    }
  }
  export default LpContact
</script>

<style lang="scss" scoped>
  @import "../../components/sharedStyles/colors.scss";

  .lp-contact {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    background-color: $c-primary-intense;
    padding: 3em;
    text-align: center;

    .header-primary {
      color: white;
    }

  }
</style>
