<template>
  <div :class='getClass'>
    <Header secondary>
      Login
    </Header>
    <Input look='blend' placeholder='email' data-lpignore='true' v-model='email'></Input>
    <Input
      look='blend'
      placeholder='password'
      type='password'
      data-lpignore='true'
      v-model='password'
    ></Input>
    <Button @click='login'>Submit</Button>
    <Paragraph v-if='error'>{{error}}</Paragraph>
  </div>
</template>

<script>
import Molecular from '/components/sharedScripts/molecular'
import Popup from './Popup.vue'
import Header from '../atomic/Header.vue'
import Paragraph from '../atomic/Paragraph.vue'
import Input from '../atomic/Input.vue'
import Button from '../atomic/Button.vue'
import gql from 'graphql-tag'

const status = {
  OK: 0,
  INCORRECT_EMAIL: 200,
  INCORRECT_PASSWORD: 3,
  ERROR: 4
}

export default new Molecular({
  name: 'LoginForm',
  components: {
    Popup,
    Header,
    Input,
    Button,
    Paragraph
  },
  data: {
    email: '',
    password: '',
    error: ''
  },
  methods: {
    login: function() {
      this.$apollo.mutate({
        mutation: gql`mutation {
          loginUser(email: "${this.email}", password: "${this.password}") {
            exitcode
            token
            msg
          }
        }`
      })
      .then(res => {
        res = res.data.loginUser
        switch (res.exitcode) {
          case status.OK:
            localStorage.setItem('sessionToken', res.token)
            break
          case status.INCORRECT_EMAIL:
            this.error ='incorrect email'
            break
          case status.INCORRECT_PASSWORD:
            this.error = 'incorret password'
            break
          default:
            this.error = 'unknown error'
        }
      })
      .catch(() => this.error = 'unknown error')
    }
  }
})
</script>

<style lang='scss' scoped>
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
}
</style>
