<template>
  <form :class="getClass" @submit="login">
    <Header s2>Login</Header>
    <LabeledInput
      v-model="email"
      type="email"
      label="email"
      autocomplete="email"
    ></LabeledInput>
    <LabeledInput
      v-model="password"
      label="password"
      type="password"
      autocomplete="current-password"
    ></LabeledInput>
    <Break />
    <Button :disabled="!emailValid || !passwordValid" @click="login">
      Submit
    </Button>
    <Paragraph v-if="error">{{ error }}</Paragraph>
  </form>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import logout from '/components/sharedScripts/logout'
import LabeledInput from '/components/molecular/LabeledInput'
import { isEmail } from '/components/sharedScripts/validate'
import gql from 'graphql-tag'

export default new Molecular({
  name: 'LoginForm',
  apollo: {
    $client: 'auth',
  },
  components: {
    LabeledInput,
  },
  created() {
    logout(this.$apollo.provider)
  },
  props: {
    redirect: {
      type: String,
      default: '/space/',
    },
  },
  data: {
    email: '',
    password: '',
    error: '',
  },
  computed: {
    emailValid() {
      return isEmail(this.email)
    },
    passwordValid: function() {
      return this.password.length >= 8
    },
  },
  methods: {
    login(e) {
      if (e) e.preventDefault()
      this.$apollo
        .mutate({
          mutation: gql`mutation {
          login(email: "${this.email}", password: "${this.password}")
        }`,
        })
        .then(res => {
          localStorage.setItem('sessionToken', res.data.login)
          this.$router.push(this.redirect)
        })
        .catch(() => (this.error = 'incorrect'))
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../sharedStyles/shadows.scss';

.login-form {
  width: 30rem;
  height: 40rem;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 100vw;
  max-height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: shadow(2);

  .input {
    width: 100%;
  }
}
</style>
