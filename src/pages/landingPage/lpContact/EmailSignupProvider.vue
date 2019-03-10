<template>
  <EmailSignup @mySubmit="onSubmit"></EmailSignup>
</template>

<script>
import EmailSignup from "../../../components/molecular/EmailSignup.vue";

const EmailSignupProvider = {
  name: "EmailSignupProvider",
  components: {
    EmailSignup
  },
  data: () => ({
    email: String
  }),

  methods: {
    onSubmit (payload) {
      //do graphql stuff here
      console.log(payload);
    }
  }
}

export default EmailSignupProvider;
</script>