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
      this.submitEmail().then(msg => {
        if (msg) alert(msg)
        this.$emit('queryCode', this.text.value)
      }).catch(msg => alert(msg))
    },
    onQueryFinal: function() {
      this.$emit('next', this.$data)
    },
    submitEmail: function(self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo.mutate({
          mutation: gql`mutation {
            registerEmail(email: "${self.text.value}") {
              msg
              exitcode
            }}`
        }).then(data => {
          const code = data.data.registerEmail.exitcode
          if (code === 0 || code === 4)
            resolve()
          else if (code === 500) // needs new code
            ;
          else
            reject(data.data.registerEmail.msg)
       }).catch(data => {
          console.error(data)
          reject(data)
        })
      })
    }
  }
}
</script>
