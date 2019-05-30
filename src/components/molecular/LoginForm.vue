<template>
  <form :class="getClass" @submit="login">
    <Header s2>Login</Header>
    <Input v-model="email" blend placeholder="email" data-lpignore="true" />
    <Input
      v-model="password"
      blend
      placeholder="password"
      type="password"
      data-lpignore="true"
    />
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
import Popup from './Popup.vue'
import gql from 'graphql-tag'

export default new Molecular({
  name: 'LoginForm',
  apollo: {
    $client: 'auth',
  },
  components: {
    Popup,
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
    emailValid: function() {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(this.email).toLowerCase()
      )
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
  box-shadow: $shadow-default;

  .input {
    width: 100%;
  }
}
</style>
