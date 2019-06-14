<template>
  <Card :class="getClass">
    <Header s2>Signup</Header>
    <div class="reject-box">
      <Paragraph v-if="rejectMessage.length">{{ rejectMessage }}</Paragraph>
    </div>
    <LabeledInput v-model="email" label="email"></LabeledInput>
    <LabeledInput
      v-model="password"
      label="password"
      type="password"
      autocomplete="new-password"
    ></LabeledInput>
    <LabeledInput
      v-model="passwordConfirm"
      label="confirm password"
      type="password"
      autocomplete="new-password"
    ></LabeledInput>
    <div class="button-wrap">
      <Button @click="$router.push('/login')">sign in instead</Button>
      <Button secondary @click="submit">continue</Button>
    </div>
  </Card>
</template>

<script>
import Component from '/scripts/component'
import { isEmail } from '/scripts/validate'
import LabeledInput from '/components/molecular/LabeledInput'
import gql from 'graphql-tag'

export default new Component({
  name: 'Step1',
  components: {
    LabeledInput,
  },
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      rejectMessage: '',
    }
  },
  computed: {
    inputValid() {
      return isEmail(this.email)
    },
  },
  methods: {
    submit() {
      this.rejectMessage = ''
      if (
        !this.email.length ||
        !this.password.length ||
        !this.passwordConfirm.length
      )
        return
      if (!isEmail(this.email)) {
        this.rejectMessage = 'invalid email address'
        return
      }
      if (this.password.length < 8) {
        this.rejectMessage = 'password to short (min. 8 characters)'
        return
      }
      if (this.password !== this.passwordConfirm) {
        this.rejectMessage = 'passwords are not the same'
        return
      }
      this.signup()
    },
    signup() {
      this.$apollo
        .mutate({
          client: 'auth',
          mutation: gql`
            mutation createAccount($email: String!, $password: String!) {
              signup(email: $email, password: $password)
            }
          `,
          variables: {
            email: this.email,
            password: this.password,
          },
        })
        .then(({ data: { signup: token } }) => {
          localStorage.setItem('sessionToken', token)
          this.$emit('done')
        })
        .catch(err => {
          if (err.message.includes('ALREADY_EXIST'))
            this.rejectMessage = 'email already used'
          else this.rejectMessage = 'something went wrong'
        })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '/components/sharedStyles/colors';

.step1 {
  width: 20rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  .labeled-input {
    width: 100%;
  }

  .button-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    .button {
      width: 45%;
    }
  }

  .reject-box {
    height: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    * {
      margin: 0;
      color: color('error');
    }
  }
}
</style>
