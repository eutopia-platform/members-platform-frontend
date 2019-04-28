<template>
  <form :class="getClass">
    <Input v-model="email" placeholder="email" />
    <Button @click="submit">Subscribe</Button>
  </form>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Input from '/components/atomic/Input'
import Button from '/components/atomic/Button'
import gql from 'graphql-tag'

export default new Molecular({
  name: 'EmailSignup',
  apollo: {
    $client: 'mail',
  },
  components: {
    Input,
    Button,
  },
  data: {
    email: '',
  },
  methods: {
    submit: function() {
      this.$apollo.mutate({
        mutation: gql`
          mutation newsletter($email: String!) {
            subscribeNews(email: $email)
          }
        `,
        variables: {
          email: this.email,
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';
@import '/components/sharedStyles/shadows';

.email-signup {
  display: block;
  width: 25rem;
  height: 2.8rem;
  text-align: left;
  border-radius: 0.4rem;
  box-shadow: $shadow-default;

  * {
    margin: 0;
    border: none;
  }

  .input {
    width: 80%;
    height: 100%;
    width: 100%;
    padding-left: 1.5rem;
    font-size: 1rem;
    @include colorScheme('neutral');
    border-radius: 0.4rem;
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
