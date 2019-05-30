<template>
  <ViewBase :img="image">
    <div>
      <Header s2>Let's create your workspace</Header>
      <div class="input-wrap">
        <Input
          v-model="email"
          blend
          placeholder="you-are-awesome@example.com"
          :focus="true"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
        />
        <Checkbox v-model="hasAgreed">
          I agree to the
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
        </Checkbox>
        <Button big :disabled="!isFormValid" @click="onSubmit">Next</Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import gql from 'graphql-tag'
import ViewBase from '../ViewBase.vue'

export default {
  name: 'ViewEmail',
  components: {
    ViewBase,
  },
  extends: ViewBase,
  data: function() {
    return {
      hasAgreed: false,
      email: '',
    }
  },
  computed: {
    image: () => require('../../../../data/img/onboarding/view-email.png'),
    isEmailValid: function() {
      return this.email !== ''
    },
    isFormValid: function() {
      return this.hasAgreed && this.isEmailValid
    },
  },
  methods: {
    onSubmit: function() {
      if (!this.submit) {
        this.$emit('queryCode', this.email)
        return
      }
      if (!this.isFormValid) return

      this.submitEmail()
        .then(msg => {
          if (msg) alert(msg)
          else this.$emit('queryCode', this.email)
        })
        .catch(msg => alert(msg))
    },
    onQueryFinal: function() {
      this.$emit('next', this.$data)
    },
    submitEmail: function(self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo
          .mutate({
            mutation: gql`mutation {
              registerEmail(email: "${self.email}")
            }`,
          })
          .then(() => {
            resolve()
          })
          .catch(data => {
            reject(data)
          })
      })
    },
  },
}
</script>
