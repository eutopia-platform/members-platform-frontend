<template>
  <ActionInput :class="getClass" label="email" button="subscribe"></ActionInput>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import gql from 'graphql-tag'
import ActionInput from '/components/molecular/ActionInput'

export default new Molecular({
  name: 'EmailSignup',
  apollo: {
    $client: 'mail',
  },
  data: {
    email: '',
  },
  components: {
    ActionInput,
  },
  methods: {
    submit(e) {
      if (e) e.preventDefault()
      this.$refs.input.value = ''
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
  width: 20rem;
  text-align: left;
}
</style>
