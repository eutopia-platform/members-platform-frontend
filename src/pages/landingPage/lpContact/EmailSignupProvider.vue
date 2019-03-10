<template>
  <div>
    <EmailSignup @mySubmit="onSubmit"></EmailSignup>
    <div
      class="graphql-response-div"
      v-html="graphqlResponse.message"
      v-bind:class="{
        success: this.graphqlResponse.successful,
        error: this.graphqlResponse.unsuccessful
      }"
    ></div>
  </div>
</template>

<script>
import EmailSignup from "../../../components/molecular/EmailSignup.vue";

const EmailSignupProvider = {
  name: "EmailSignupProvider",
  components: {
    EmailSignup
  },
  data: () => ({
    email: "",
    graphqlConnection: {
      url: "http://127.0.0.1:5000/api",
      mutationName: "registerUser",
      mutationQuery: "ok, msg"
    },
    graphqlResponse: {
      successful: false,
      unsuccessful: false,
      message: ""
    }
  }),

  methods: {
    handleResponce (payload) {
      this.graphqlResponse.successful = payload.ok;
      this.graphqlResponse.unsuccessful = !payload.ok;
      if (payload.ok) {
        this.graphqlResponse.message = "Success!"
      } else {
        this.graphqlResponse.message = "Error. " + payload.msg;
      }
    },
    onSubmit (payload) {
      const email = payload.email.value;

      //graphql ajax request

      //IMPORTANT: Quotes within the query must be double backslash escaped because neither JSON nor GraphQL allow single quotes.
      const graphqlQueryString = '{"query": "mutation { '
        + this.graphqlConnection.mutationName
        + '(email: \\"'
        + email
        + '\\", callName: \\"\\", fullName: \\"\\", password: \\"\\") { ' //delete this once the query doesn't need it any longer
        + this.graphqlConnection.mutationQuery
        + ' } }"}';

      this.ajaxRequest = true;
      this.$http.post(
        this.graphqlConnection.url,
        graphqlQueryString
      ).then(result => this.handleResponce(result.data.data.registerUser));
    }
  }
}

export default EmailSignupProvider;
</script>

<style lang="scss" scoped>
  @import "../../../components/sharedStyles/colors.scss";

.graphql-response-div {
  margin-top: 1rem;
}

.success {
  color: $c-success;
}

.error {
  color: $c-error;
}

</style>