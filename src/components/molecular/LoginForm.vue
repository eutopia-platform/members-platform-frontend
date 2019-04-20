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

export default new Molecular({
  name: 'LoginForm',
  apollo: {
    $client: 'auth'
  },
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
          login(email: "${this.email}", password: "${this.password}")
        }`
      })
      .then(res => {
        localStorage.removeItem('sessionToken')
        localStorage.setItem('sessionToken', res.data.login)
        this.$router.push('/workspace')
      })
      .catch(() => this.error = 'incorrect')
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
