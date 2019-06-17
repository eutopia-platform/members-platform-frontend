<template>
  <ActionInput
    :class="getClass"
    label="email"
    button="subscribe"
    :input-clear="true"
    @submit="submit"
  ></ActionInput>
</template>

<script>
import Molecular from '~/scripts/molecular'
import ActionInput from '~/components/molecular/ActionInput'
import gql from 'graphql-tag'
import { displayError } from '~/error'

export default new Molecular({
  name: 'EmailSignup',
  apollo: {
    $client: 'mail',
  },
  data() {
    return {
      email: '',
    }
  },
  components: {
    ActionInput,
  },
  methods: {
    submit(e) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation newsletter($email: String!) {
              subscribeNews(email: $email)
            }
          `,
          variables: {
            email: e,
          },
        })
        .catch(err => {
          switch (err.message.replace('GraphQL error:', '').trim()) {
            case 'ALREADY_SUBSCRIBED':
              displayError('already subscribed')
              break
            case 'INVALID_EMAIL':
              displayError('invalid email')
              break
            default:
              throw err
          }
        })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/colors';
@import '/styles/shadows';

.email-signup {
  display: block;
  width: 20rem;
  text-align: left;
}
</style>
