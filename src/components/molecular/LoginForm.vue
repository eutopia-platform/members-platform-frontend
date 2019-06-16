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
    <Button outlined :disabled="!emailValid || !passwordValid" @click="submit">
      Submit
    </Button>
    <Button text link="/signup">Create account</Button>
    <Paragraph v-if="error">{{ error }}</Paragraph>
  </form>
</template>

<script>
import Molecular from '~/scripts/molecular'
import LabeledInput from '~/components/molecular/LabeledInput'
import { isEmail } from '~/scripts/validate'
import { mapActions } from 'vuex'

export default new Molecular({
  name: 'LoginForm',
  apollo: {
    $client: 'auth',
  },
  components: {
    LabeledInput,
  },
  props: {
    redirect: {
      type: String,
      default: '/space/',
    },
  },
  data: () => ({
    email: '',
    password: '',
    error: '',
  }),
  computed: {
    emailValid() {
      return isEmail(this.email)
    },
    passwordValid: function() {
      return this.password.length >= 8
    },
  },
  methods: {
    ...mapActions('user', ['login']),
    async submit(e) {
      if (e) e.preventDefault()
      await this.login({ email: this.email, password: this.password })
      this.$router.push(this.redirect)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/styles/shadows.scss';

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
