<template>
  <form :class="getClass">
    <Input />
    <Button>Subscribe</Button>
  </form>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Input from '/components/atomic/Input'
import Button from '/components/atomic/Button'

export default new Molecular({
  name: 'EmailSignup',
  components: {
    Input,
    Button,
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';
@import '/components/sharedStyles/shadows';

.email-signup {
  display: block;
  width: 25rem;
  height: 2.5rem;
  text-align: left;
  border-radius: 1.25rem;
  box-shadow: $shadow-default;

  * {
    margin: 0;
    border-radius: 1.25rem !important;
    border: none;
  }

  .input {
    width: 80%;
    height: 100%;
    width: 100%;
    padding-left: 1.5rem;
    font-size: 1rem;
    @include colorScheme('neutral');
  }

  .button {
    margin-top: 0;
    height: 100%;
    position: relative;
    transform: translateX(-100%) translateY(-100%);
    left: 100%;
  }
}
</style>
