<template>
  <ViewBase v-bind:img="image">
    <div>
      <Header type="secondary">Let's create your workspace</Header>
      <div class="input-wrap">
        <Input
          look="blend"
          @valueChange="onInputValueChange"
          @submit="onSubmit"
          placeholder="you-are-awesome@example.com"
          :focus="true"
        ></Input>
        <Checkbox v-model="hasAgreed">
          I agree to the
          <router-link to="/privacy">Privacy Policy</router-link>
        </Checkbox>
        <Button @click="onSubmit" :disabled="!isFormValid">Next</Button>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from "../ViewBase.vue";
import gql from "graphql-tag";
import Checkbox from "~/components/atomic/Checkbox";

export default {
  name: "ViewEmail",
  extends: ViewBase,
  components: {
    ViewBase,
    Checkbox
  },
  data: function() {
    return {
      hasAgreed: false
    };
  },
  computed: {
    image: () => require("../../../../data/img/onboarding/view-email.png"),
    isFormValid: function() {
      return this.hasAgreed && this.inputValid;
    }
  },
  methods: {
    onSubmit: function() {
      if (!this.submit) {
        this.$emit('queryCode')
        return
      }
      if (!this.isFormValid) return;

      this.submitEmail()
        .then(msg => {
          if (msg) alert(msg);
          else this.$emit("queryCode", this.text.value);
        })
        .catch(msg => alert(msg));
    },
    onQueryFinal: function() {
      this.$emit("next", this.$data);
    },
    submitEmail: function(self = this) {
      return new Promise(function(resolve, reject) {
        self.$apollo
          .mutate({
            mutation: gql`mutation {
            registerEmail(email: "${self.text.value}") {
              msg
              exitcode
            }}`
          })
          .then(res => {
            const code = res.data.registerEmail.exitcode;
            if (code === 0 || code === 4) resolve();
            else if (
              code === 500 // needs new code
            );
            else reject(res.data.registerEmail.msg);
          })
          .catch(data => {
            console.error(data);
            reject(data);
          });
      });
    }
  }
};
</script>
