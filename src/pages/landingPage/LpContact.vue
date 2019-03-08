<template>
  <div class="lp-contact">
    <!-- <p>
      Hello
    </p> -->
    <Header type="primary">
      Let's talk about your project
    </Header>
    <ContactForm>
    </ContactForm>
  </div>
</template>

<script>
  import Header from '../../components/atomic/Header.vue';
  import ContactForm from '../../components/molecular/ContactForm.vue'

  const LpContact = {
    name: "LpContact",
    components: {
      Header,
      ContactForm
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
    margin: 0;
    background-color: $c-primary-intense;
    text-align: center;
    padding: 3em;

    .header-primary {
      color: white;
    }
  }
</style>
