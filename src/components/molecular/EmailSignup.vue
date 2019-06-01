<template>
  <form :class="getClass" @submit="submit">
    <Input ref="input" v-model="email" placeholder="email" />
    <Button @click="submit">Subscribe</Button>
  </form>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import gql from 'graphql-tag'

export default new Molecular({
  name: 'EmailSignup',
  apollo: {
    $client: 'mail',
  },
  data: {
    email: '',
  },
  methods: {
    submit(e) {
      if (e) e.preventDefault()
      this.$refs.input.value = ''
      // gtag('event', 'submit', {
      //   event_category: 'EmailSignup',
      //   event_label: `uid: ${this._uid}`,
      // })
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
  box-shadow: shadow(2);

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
