<template>
  <div class="contact">
    <div class="signup-wrap">
      <Header primary>Try productcube with your team for free</Header>
      <br />
      <Button big @click="signup">Sign me up</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    signup: () => window.open('/onboarding', '_self'),
  },
}
</script>

<style lang="scss" scoped>
@import '../../../components/sharedStyles/colors.scss';

.contact {
  @include colorScheme('tertiary');

  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 3em;
  text-align: center;

  @media screen and (max-width: 520px) {
    text-align: left;
  }

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
