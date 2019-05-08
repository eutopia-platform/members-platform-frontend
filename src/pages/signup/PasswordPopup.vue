<template>
  <div class="password-popup">
    <Popup>
      <form class="create-password" @submit="onSubmit">
        <legend>
          <Header secondary>Set your password</Header>
        </legend>
        <Input
          v-model="pw1"
          :focus="true"
          look="blend"
          placeholder="set your password"
          type="password"
          data-lpignore="true"
        />
        <Input
          v-model="pw2"
          look="blend"
          placeholder="retype your password"
          type="password"
          data-lpignore="true"
        />
        <Paragraph v-if="errorMessage" class="error">
          {{ errorMessage }}
        </Paragraph>
        <Button big :disabled="!isFormValid" type="submit">Next</Button>
        <div class="icon-wrap" :src="img">
          <Icon :src="img" class="icon" alt=""></Icon>
        </div>
      </form>
    </Popup>
  </div>
</template>

<script>
import Popup from '../../components/molecular/Popup.vue'
import gql from 'graphql-tag'

export default {
  name: 'PasswordPopup',
  apollo: {
    $client: 'auth',
  },
  components: {
    Popup,
  },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    submit: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    pw1: '',
    pw2: '',
    errorMessage: '',
  }),
  computed: {
    img: () => require('../../../data/img/onboarding/shield.svg'),
    isFormValid: function() {
      return this.pw1 !== '' && this.pw1 === this.pw2
    },
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault()

      if (this.pw1 !== this.pw2) {
        this.errorMessage = 'The passwords do not match'
        return false
      } else if (this.pw1.length < 8) {
        this.errorMessage = 'The password has to be at least 8 characters long'
        return false
      }

      this.errorMessage = ''

      if (!this.submit) {
        this.$emit('next')
        return false
      }
      this.submitPassword(this.pw1)
        .then(() => {
          this.$emit('next')
        })
        .catch(msg => (this.errorMessage = msg))
      return false
    },
    submitPassword: function(password, self = this) {
      return new Promise(function(resolve) {
        self.$apollo
          .mutate({
            mutation: gql`
              mutation setPassword(
                $email: String!
                $code: String!
                $password: String!
              ) {
                setPassword(email: $email, code: $code, password: $password)
              }
            `,
            variables: {
              email: self.info.email,
              code: self.info.code,
              password,
            },
          })
          .then(() => {
            self.$apollo
              .mutate({
                mutation: gql`
                  mutation login($email: String!, $password: String!) {
                    login(email: "${self.info.email}", password: "${password}")
                  }
                `,
                variables: {
                  email: self.info.email,
                  password,
                },
              })
              .then(res => {
                localStorage.setItem('sessionToken', res.data.login)
                resolve()
              })
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.create-password {
  width: 40ch;
  padding-left: 3rem;
  padding-right: 3rem;

  & * {
    width: 100%;
    margin-bottom: 1rem;
  }

  .submit {
    margin-top: 2rem;
  }

  .icon-wrap {
    margin-top: 2rem;
    text-align: center;
  }

  .error {
    color: red;
  }
}

.icon {
  height: 5rem;
}
</style>
