<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">
        Let's create your workspace
      </Header>
      <div class="input-wrap">
        <Input look="blend" @valueChange="onInputValueChange" @submit="onSubmit"
          placeholder="you-are-awesome@example.com" :focus="true"></Input>
        <Button @click="onSubmit" :disabled="!inputValid">
          Next
        </Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from '../ViewBase.vue'
import gql from 'graphql-tag'

export default {
  name: "ViewEmail",
  extends: ViewBase,
  components: {
    ViewBase
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-email.png"),
  },
  methods: {
    onSubmit: function() {
      this.addEmail().then(() =>
        this.$emit('queryCode', this.text.value)
      ).catch(data => alert(data.msg))
    },
    onQueryFinal: function() {
      this.$emit('next', this.$data)
    },

    addEmail: function(self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo.mutate({
        mutation: gql`
          mutation {
            registerEmail(email: "${self.text.value}") {
              msg
              exitcode
            }
          }
        `
      }).then(data => {
        const exitcode = data.data.registerEmail.exitcode
        const msg = data.data.registerEmail.msg
        if (exitcode == 0)
          resolve()
        else
          reject(data.data.registerEmail)
      }).catch(data => {
        console.error(data)
        reject(data)
      })
    })
  }}
}
</script>
